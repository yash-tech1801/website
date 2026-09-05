import React, { useEffect, useRef } from 'react';

/**
 * MarketingHeroBg
 * Generated via Stitch - Growth Intelligence & Algorithmic Media
 * Custom WebGL Fragment Shader visualizing exponential growth curves (y = e^x),
 * programmatic bidding pulses, conversion momentum particles, and attribution telemetry.
 */
export default function MarketingHeroBg() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animId = null;
    let gl = null;

    try {
      gl = canvas.getContext('webgl', { powerPreference: 'low-power', antialias: false }) ||
           canvas.getContext('experimental-webgl');
    } catch (e) {
      console.warn('WebGL not supported for MarketingHeroBg', e);
    }

    if (!gl) return;

    const vsSource = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fsSource = `
      precision highp float;
      varying vec2 v_texCoord;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;

      const vec3 obsidian = vec3(0.0235, 0.0392, 0.0902); // #060A17
      const vec3 gold = vec3(0.8314, 0.6863, 0.2157);     // #D4AF37
      const vec3 crimson = vec3(0.82, 0.12, 0.22);        // Growth Velocity Crimson
      const vec3 navy = vec3(0.043, 0.075, 0.169);        // #0B132B

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
      }

      void main() {
        vec2 uv = v_texCoord;
        vec2 mouse = u_mouse / u_resolution;
        
        // Base color is black so screen blend only shows glowing gold & crimson momentum curves over the photo
        vec3 color = vec3(0.0);
        
        // 2. Exponential Growth Waves (The "Momentum" curves)
        float waves = 0.0;
        for(float i = 0.0; i < 4.0; i++) {
          float t = u_time * (0.2 + i * 0.08);
          float freq = 2.5 + i;
          float amp = 0.08 + i * 0.03;
          float growthBase = exp(uv.x * 2.2 - 2.2) * 0.55;
          float wave = sin(uv.x * freq - t) * amp * uv.x;
          float curve = growthBase + wave + 0.15 + i * 0.08;
          
          float dist = abs(uv.y - curve);
          waves += smoothstep(0.012, 0.0, dist) * (0.5 + 0.5 * sin(t));
        }
        color += crimson * waves * 0.6;
        color += gold * waves * 0.4;

        // 3. Programmatic Media Bidding Curves (Fast, sharp pulses)
        float bids = 0.0;
        for(float j = 0.0; j < 3.0; j++) {
          float t = u_time * 1.4 + j * 1.5;
          float xPos = fract(t * 0.35);
          float yPos = exp(xPos * 2.5 - 2.5) * 0.6 + 0.2;
          float dist = length(uv - vec2(xPos, yPos));
          bids += smoothstep(0.045, 0.0, dist) * 0.9;
        }
        color += gold * bids * uv.x;

        // 4. Dynamic Conversion Momentum Particles
        float particles = 0.0;
        for(float k = 0.0; k < 18.0; k++) {
          float kHash = hash(vec2(k, 13.0));
          float t = u_time * (0.4 + kHash * 0.3);
          vec2 p = vec2(fract(kHash + t * 0.25), 0.0);
          p.y = exp(p.x * 2.2 - 2.2) * 0.55 + (hash(vec2(k, 17.0)) - 0.5) * 0.18 + 0.15;
          
          float d = length(uv - p);
          float size = 0.003 + 0.002 * sin(u_time * 4.0 + k);
          particles += smoothstep(size, 0.0, d) * (0.5 + 0.5 * sin(t));
        }
        color += mix(gold, crimson, 0.3) * particles * 1.8;

        // 5. Subtle Coordinate Grid Lines (Attribution Grid)
        vec2 gridSt = uv * vec2(16.0, 10.0);
        vec2 grid = abs(fract(gridSt - 0.5) - 0.5) / max(fwidth(gridSt), vec2(0.001));
        float line = min(grid.x, grid.y);
        float gridMask = 1.0 - smoothstep(0.0, 0.7, line);
        color += gold * gridMask * 0.05;

        // Mouse Bloom
        float mDist = length(uv - mouse);
        color += mix(gold, crimson, 0.4) * (1.0 - smoothstep(0.0, 0.22, mDist)) * 0.2;

        gl_FragColor = vec4(color, 1.0);
      }
    `;

    function createShader(type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vs = createShader(gl.VERTEX_SHADER, vsSource);
    const fs = createShader(gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      return;
    }

    const posBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const aPosLoc = gl.getAttribLocation(program, 'a_position');
    const uTimeLoc = gl.getUniformLocation(program, 'u_time');
    const uResLoc = gl.getUniformLocation(program, 'u_resolution');
    const uMouseLoc = gl.getUniformLocation(program, 'u_mouse');

    let mouseX = 0;
    let mouseY = 0;
    let isVisible = true;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = rect.height - (e.clientY - rect.top);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    function resize() {
      if (!canvas) return;
      const w = canvas.parentElement ? canvas.parentElement.clientWidth : window.innerWidth;
      const h = canvas.parentElement ? canvas.parentElement.clientHeight : window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
    }

    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);
    resize();

    const io = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    }, { threshold: 0.05 });
    io.observe(canvas);

    let startTime = performance.now();

    function render(now) {
      if (isVisible) {
        const time = (now - startTime) * 0.001;
        gl.useProgram(program);
        gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
        gl.enableVertexAttribArray(aPosLoc);
        gl.vertexAttribPointer(aPosLoc, 2, gl.FLOAT, false, 0, 0);

        gl.uniform1f(uTimeLoc, time);
        gl.uniform2f(uResLoc, canvas.width, canvas.height);
        gl.uniform2f(uMouseLoc, mouseX, mouseY);

        gl.drawArrays(gl.TRIANGLES, 0, 6);
      }
      animId = requestAnimationFrame(render);
    }

    animId = requestAnimationFrame(render);

    return () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {/* 1. Underlying Marketing Analytics & Viral Momentum Visual */}
      <img
        src="/images/marketing_momentum.webp"
        alt="Marketing Analytics & Growth Vectors"
        width={1920}
        height={1080}
        loading="eager"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-70 filter contrast-125 saturate-[1.1]"
      />

      {/* 2. Stitch Interactive WebGL Shader Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover mix-blend-screen z-[2]"
      />

      {/* 3. Balanced Obsidian Scrims: Text side is protected while planetary growth telemetry shines on right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#060A17] via-[#060A17]/75 to-transparent w-full lg:w-3/5 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#060A17] via-transparent to-[#060A17]/50 z-[1]" />

      {/* 4. High-Velocity Telemetry HUD Overlays (Stitch Design System) */}
      <div className="hidden lg:flex absolute top-6 right-8 z-[3] items-center gap-4 font-mono text-[10px] text-[#D4AF37]">
        <span className="px-2.5 py-1 rounded bg-[#060A17]/85 border border-red-500/40 text-red-400 shadow-lg backdrop-blur-md">
          ALGORITHMIC_BIDDING // ACTIVE
        </span>
        <span className="flex items-center gap-1.5 text-emerald-400 bg-[#060A17]/85 px-2.5 py-1 rounded border border-emerald-500/30 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          ROAS: 3.8X
        </span>
      </div>

      <div className="hidden lg:flex absolute bottom-4 right-8 z-[3] items-center gap-3 font-mono text-[10px] text-[#D4AF37]/80 bg-[#060A17]/80 px-3 py-1 rounded border border-[#D4AF37]/20 backdrop-blur-md">
        <span>CONVERSION_VELOCITY: +280%</span>
        <span>•</span>
        <span>DETERMINISTIC_ATTRIBUTION</span>
        <span>•</span>
        <span>GLOBAL_SCALE</span>
      </div>
    </div>
  );
}

