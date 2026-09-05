import React, { useEffect, useRef } from 'react';

/**
 * ITHeroBg
 * Generated via Stitch - Cloud Technology Services & Sovereign Infrastructure
 * Custom WebGL Fragment Shader visualizing sovereign Kubernetes server matrix,
 * distributed computing nodes, cyber circuit data bus, and zero-trust security mesh.
 */
export default function ITHeroBg() {
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
      console.warn('WebGL not supported for ITHeroBg', e);
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
      const vec3 cyan = vec3(0.0, 0.85, 1.0);             // Electric Cyan Data
      const vec3 navy = vec3(0.043, 0.075, 0.169);        // #0B132B

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
      }

      void main() {
        vec2 uv = v_texCoord;
        vec2 mouse = u_mouse / u_resolution;
        
        // 1. Perspective Warp for "Server Floor & Cloud Ceiling" feel
        float perspective = 1.0 / (uv.y + 0.55);
        vec2 pUv = vec2((uv.x - 0.5) * perspective + 0.5, perspective + u_time * 0.04);
        
        // 2. Sovereign Kubernetes Matrix (The Grid)
        vec2 gridScale = vec2(14.0, 26.0);
        vec2 st = pUv * gridScale;
        vec2 ipos = floor(st);
        vec2 fpos = fract(st);
        
        // Grid Lines (Circuit Bus Pathways)
        vec2 grid = abs(fpos - 0.5) / max(fwidth(st), vec2(0.001));
        float line = min(grid.x, grid.y);
        float gridMask = 1.0 - smoothstep(0.0, 0.5, line);
        
        // Base color is black so screen blend only shows glowing cyan & gold cyber pulses over the photo
        vec3 color = vec3(0.0);
        
        // 2. Sovereign Kubernetes Matrix (The Grid)
        vec2 gridScale = vec2(14.0, 26.0);
        vec2 st = pUv * gridScale;
        vec2 ipos = floor(st);
        vec2 fpos = fract(st);
        
        // Grid Lines (Circuit Bus Pathways)
        vec2 grid = abs(fpos - 0.5) / max(fwidth(st), vec2(0.001));
        float line = min(grid.x, grid.y);
        float gridMask = 1.0 - smoothstep(0.0, 0.5, line);
        color += gold * 0.25 * gridMask * uv.y;
        
        // 3. Distributed Computing Nodes
        float nodeHash = hash(ipos);
        float nodeActive = step(0.85, nodeHash);
        float pulse = 0.5 + 0.5 * sin(u_time * 2.2 + nodeHash * 10.0);
        float nodeDist = length(fpos - 0.5);
        float nodeCircle = smoothstep(0.14, 0.04, nodeDist);
        color += gold * nodeCircle * nodeActive * pulse * 0.9 * uv.y;
        
        // 4. Data Packets (Gold and Cyan pulses traveling through cluster bus)
        float packetFlow = fract(pUv.y * 2.2 - u_time * 0.9);
        float packetMask = smoothstep(0.025, 0.0, abs(fpos.x - 0.5)) * smoothstep(0.12, 0.0, abs(fpos.y - packetFlow));
        vec3 packetColor = mix(gold, cyan, step(0.45, hash(ipos + 7.0)));
        color += packetColor * packetMask * step(0.65, hash(ipos)) * 2.2;
        
        // 5. Zero-Trust Security Mesh (Hexagonal/Diagonal Overlay)
        vec2 hexSt = uv * 28.0;
        float mesh = abs(sin(hexSt.x * 0.866 + hexSt.y * 0.5) * sin(hexSt.y));
        color += cyan * pow(max(mesh, 0.0), 8.0) * 0.08;
        
        // 6. Binary Telemetry Streams (Vertical Data Rain)
        float stream = step(0.985, fract(uv.x * 70.0 + u_time * 0.08));
        float streamChar = step(0.5, hash(floor(uv * vec2(70.0, 35.0)) + floor(u_time * 8.0)));
        color += cyan * stream * streamChar * 0.15 * (1.0 - uv.y);

        // Interactive mouse bloom
        float mDist = length(uv - mouse);
        color += cyan * (1.0 - smoothstep(0.0, 0.22, mDist)) * 0.2;

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
      {/* 1. Underlying Server Matrix & Hardware Racks Visual */}
      <img
        src="/images/server_matrix_tech.webp"
        alt="Sovereign Server Infrastructure"
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

      {/* 3. Balanced Obsidian Scrims: Text side is protected while illuminated server aisle shines on right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#060A17] via-[#060A17]/75 to-transparent w-full lg:w-3/5 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#060A17] via-transparent to-[#060A17]/50 z-[1]" />

      {/* 4. High-Tech Telemetry HUD Overlays (Stitch Design System) */}
      <div className="hidden lg:flex absolute top-6 right-8 z-[3] items-center gap-4 font-mono text-[10px] text-[#D4AF37]">
        <span className="px-2.5 py-1 rounded bg-[#060A17]/85 border border-cyan-500/40 text-cyan-400 shadow-lg backdrop-blur-md">
          K8S_SOVEREIGN // REGION_APAC_01
        </span>
        <span className="flex items-center gap-1.5 text-emerald-400 bg-[#060A17]/85 px-2.5 py-1 rounded border border-emerald-500/30 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          SLA: 99.999%
        </span>
      </div>

      <div className="hidden lg:flex absolute bottom-4 right-8 z-[3] items-center gap-3 font-mono text-[10px] text-cyan-400/80 bg-[#060A17]/80 px-3 py-1 rounded border border-cyan-500/30 backdrop-blur-md">
        <span>LATENCY: &lt;1.2MS</span>
        <span>•</span>
        <span>ZERO_TRUST: ACTIVE</span>
        <span>•</span>
        <span>POST_QUANTUM_HSM</span>
      </div>
    </div>
  );
}

