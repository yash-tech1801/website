import React, { useEffect, useRef } from 'react';

/**
 * ConsultancyHeroBg
 * Generated via Stitch - Executive Strategy Terminal
 * Custom WebGL Fragment Shader visualizing M&A decision vector lines,
 * boardroom strategy coordinate grid, and live corporate telemetry.
 */
export default function ConsultancyHeroBg() {
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
      console.warn('WebGL not supported for ConsultancyHeroBg', e);
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
      const vec3 deepSlate = vec3(0.05, 0.08, 0.15);

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
      }

      void main() {
        vec2 uv = v_texCoord;
        vec2 mouse = u_mouse / u_resolution;
        
        // Base color is black so screen blend only shows the gold grid & vectors over the photo
        vec3 color = vec3(0.0);
        
        // 2. Executive Boardroom Grid (Architectural precision)
        vec2 gridCount = vec2(20.0, 20.0 * (u_resolution.y / max(u_resolution.x, 1.0)));
        vec2 st = uv * gridCount;
        vec2 grid = abs(fract(st - 0.5) - 0.5) / max(fwidth(st), vec2(0.001));
        float line = min(grid.x, grid.y);
        float gridMask = 1.0 - smoothstep(0.0, 0.7, line);
        color += gold * gridMask * 0.08;
        
        // 3. M&A Decision Vector Lines (Flowing strategy pathways)
        float vectors = 0.0;
        for(float i = 0.0; i < 5.0; i++) {
          float t = u_time * (0.05 + i * 0.02);
          float yPos = hash(vec2(i, 7.0));
          float slope = (hash(vec2(i, 3.0)) - 0.5) * 0.4;
          float distToLine = abs(uv.y - (yPos + (uv.x - 0.5) * slope));
          float pulse = 0.5 + 0.5 * sin(u_time * 0.8 + i * 1.5);
          vectors += smoothstep(0.003, 0.0, distToLine) * pulse * 0.35;
        }
        color += gold * vectors;
        
        // 4. Architectural Crosshairs (+) at grid intersections
        vec2 tickSt = fract(st);
        float crosshair = (smoothstep(0.08, 0.0, abs(tickSt.x - 0.5)) * smoothstep(0.012, 0.0, abs(tickSt.y - 0.5))) +
                         (smoothstep(0.012, 0.0, abs(tickSt.x - 0.5)) * smoothstep(0.08, 0.0, abs(tickSt.y - 0.5)));
        color += gold * crosshair * 0.25 * step(0.88, hash(floor(st)));
        
        // 5. Live Telemetry Data Blips
        float blips = 0.0;
        for(float j = 0.0; j < 8.0; j++) {
          vec2 p = vec2(hash(vec2(j, 1.0)), hash(vec2(j, 2.0)));
          float d = length(uv - p);
          float active = step(0.97, fract(u_time * 0.2 + hash(vec2(j, 3.0))));
          blips += smoothstep(0.005, 0.0, d) * active;
        }
        color += gold * blips * 1.2;
        
        // 6. Radiant Center Glow (Strategic Focus)
        float center = 1.0 - length(uv - 0.5);
        color += gold * pow(max(center, 0.0), 3.0) * 0.12;

        // Interactive mouse bloom
        float mDist = length(uv - mouse);
        color += gold * (1.0 - smoothstep(0.0, 0.25, mDist)) * 0.18;

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

    // Intersection observer to freeze WebGL when scrolled out of view
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
      {/* 1. Stunning High-Res Luxury Executive Penthouse Boardroom Visual */}
      <img
        src="/images/corporate_boardroom_hero.webp"
        alt="Corporate Strategy Boardroom"
        width={1920}
        height={1080}
        loading="eager"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-70 filter contrast-125 saturate-[1.1]"
      />

      {/* 2. Stitch Interactive WebGL Shader Canvas Overlay */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover mix-blend-screen z-[2]"
      />

      {/* 3. Balanced Obsidian Scrims: Text side is protected while boardroom city view shines on right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#060A17] via-[#060A17]/75 to-transparent w-full lg:w-3/5 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#060A17] via-transparent to-[#060A17]/50 z-[1]" />

      {/* 4. Executive Telemetry Micro-HUD Markers (Stitch Design System) */}
      <div className="hidden lg:flex absolute top-6 right-8 z-[3] items-center gap-4 font-mono text-[10px] text-[#D4AF37]">
        <span className="px-2.5 py-1 rounded bg-[#060A17]/85 border border-[#D4AF37]/40 shadow-lg backdrop-blur-md">
          AX-992 // BOARDROOM_PROTOCOL
        </span>
        <span className="flex items-center gap-1.5 text-emerald-400 bg-[#060A17]/85 px-2.5 py-1 rounded border border-emerald-500/30 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          M&A_ALPHA: ACTIVE
        </span>
      </div>

      <div className="hidden lg:flex absolute bottom-4 right-8 z-[3] items-center gap-3 font-mono text-[10px] text-[#D4AF37]/70 bg-[#060A17]/80 px-3 py-1 rounded border border-[#D4AF37]/20 backdrop-blur-md">
        <span>SOVEREIGN_GOVERNANCE: AES-256</span>
        <span>•</span>
        <span>APAC_EXPANSION_VECTOR: 14M</span>
      </div>
    </div>
  );
}

