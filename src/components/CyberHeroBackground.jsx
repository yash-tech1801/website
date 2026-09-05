import React, { useEffect, useRef, useState, useCallback } from 'react';

export default function CyberHeroBackground() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const playPromiseRef = useRef(null);
  const animIdRef = useRef(null);
  const isRunningRef = useRef(true);
  const inViewRef = useRef(true);
  const mouseRef = useRef({ x: 0.5, y: 0.5, px: 0, py: 0, targetX: 0.5, targetY: 0.5 });

  const [videoLoaded, setVideoLoaded] = useState(false);

  // Synchronous + Promise-Guarded Safe Play
  const safePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video || !inViewRef.current || document.hidden) return;

    if (video.paused) {
      try {
        const promise = video.play();
        if (promise !== undefined) {
          playPromiseRef.current = promise;
          promise
            .then(() => {
              playPromiseRef.current = null;
            })
            .catch(() => {
              playPromiseRef.current = null;
            });
        }
      } catch (err) {
        // Handled silently
      }
    }
  }, []);

  // Immediate Safe Pause (Synchronous call + Promise chaining)
  const safePause = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    try {
      video.pause();
    } catch (e) {
      // Ignored
    }

    if (playPromiseRef.current) {
      playPromiseRef.current
        .then(() => {
          try {
            video.pause();
          } catch (e) {}
        })
        .catch(() => {});
    }
  }, []);

  // 1. Dual Scroll Guard: IntersectionObserver + Native/Lenis Scroll Listener
  // Guarantees the video stops playing the exact millisecond the user scrolls away
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const targetSection = container.closest('section') || container;

    // Direct Bounding Box Scroll Evaluation
    const evaluateVisibility = () => {
      if (!targetSection) return;
      const rect = targetSection.getBoundingClientRect();
      
      // Hero section is visible if its bottom edge is above 60px and its top edge is inside viewport
      const isVisible = rect.bottom > 60 && rect.top < window.innerHeight - 60;

      if (isVisible !== inViewRef.current) {
        inViewRef.current = isVisible;

        if (isVisible) {
          // Scrolled into view: play video & resume animation
          safePlay();
          if (!isRunningRef.current) {
            isRunningRef.current = true;
          }
        } else {
          // Scrolled off hero section: immediately stop video & freeze WebGL loop
          safePause();
          isRunningRef.current = false;
          if (animIdRef.current) {
            cancelAnimationFrame(animIdRef.current);
            animIdRef.current = null;
          }
        }
      }
    };

    // IntersectionObserver for native browser-level boundary updates
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const isVisible = entry.isIntersecting && entry.intersectionRatio > 0.02;

        if (isVisible !== inViewRef.current) {
          inViewRef.current = isVisible;
          if (isVisible) {
            safePlay();
            if (!isRunningRef.current) {
              isRunningRef.current = true;
            }
          } else {
            safePause();
            isRunningRef.current = false;
            if (animIdRef.current) {
              cancelAnimationFrame(animIdRef.current);
              animIdRef.current = null;
            }
          }
        }
      },
      {
        root: null,
        threshold: [0, 0.05, 0.1, 0.25, 0.5, 0.75, 1.0]
      }
    );

    observer.observe(targetSection);
    window.addEventListener('scroll', evaluateVisibility, { passive: true });

    // Initial check
    evaluateVisibility();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', evaluateVisibility);
    };
  }, [safePlay, safePause]);

  // 2. Page Visibility API: Stop video & WebGL if user switches tabs or minimizes browser
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        safePause();
        isRunningRef.current = false;
        if (animIdRef.current) {
          cancelAnimationFrame(animIdRef.current);
          animIdRef.current = null;
        }
      } else if (inViewRef.current) {
        safePlay();
        isRunningRef.current = true;
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, [safePlay, safePause]);

  // 3. Lightweight WebGL Precision Architectural Data Flow Overlay
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', { antialias: true, alpha: true, powerPreference: 'low-power' }) ||
               canvas.getContext('experimental-webgl');
    if (!gl) return;

    const vs = `
      attribute vec2 a_pos;
      varying vec2 v_uv;
      void main() {
        v_uv = a_pos * 0.5 + 0.5;
        gl_Position = vec4(a_pos, 0.0, 1.0);
      }
    `;

    const fs = `
      precision highp float;
      varying vec2 v_uv;
      uniform float u_time;
      uniform vec2 u_res;
      uniform vec2 u_mouse;

      const vec3 gold = vec3(0.831, 0.686, 0.216); // #D4AF37 Strategic Gold
      const vec3 goldLight = vec3(0.980, 0.850, 0.450);

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
      }

      void main() {
        vec2 uv = v_uv;
        vec2 mouse = u_mouse / u_res;
        vec4 color = vec4(0.0);

        // Modular Blueprint Grid
        vec2 gridCount = vec2(28.0, 28.0 * (u_res.y / u_res.x));
        vec2 st = uv * gridCount;
        vec2 grid = abs(fract(st - 0.5) - 0.5) / fwidth(st);
        float line = min(grid.x, grid.y);
        float gridMask = 1.0 - smoothstep(0.0, 0.85, line);
        color.rgb += gold * gridMask * 0.05;
        color.a += gridMask * 0.05;

        // Enterprise Strategy Data Flow Lines
        float flow = 0.0;
        for (float i = 0.0; i < 5.0; i++) {
          float speed = 0.08 + i * 0.035;
          float yPos = fract(hash(vec2(i, 1.45)) * 0.75 + 0.12);
          float thickness = 0.0014 + hash(vec2(i, 2.3)) * 0.0012;
          float dash = step(0.45, fract(uv.x * 6.0 - u_time * speed + i * 1.5));
          float lineVal = smoothstep(thickness, 0.0, abs(uv.y - yPos)) * dash;
          flow += lineVal * (0.2 + 0.3 * sin(u_time * 1.6 + i));
        }
        color.rgb += gold * flow * 0.45;
        color.a += flow * 0.35;

        // Interactive Cursor Illumination
        float dist = length(uv - mouse);
        float glow = smoothstep(0.35, 0.0, dist);
        color.rgb += goldLight * glow * 0.10;
        color.a += glow * 0.08;

        gl_FragColor = color;
      }
    `;

    function compile(type, src) {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    }

    const vShader = compile(gl.VERTEX_SHADER, vs);
    const fShader = compile(gl.FRAGMENT_SHADER, fs);
    const prog = gl.createProgram();
    gl.attachShader(prog, vShader);
    gl.attachShader(prog, fShader);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

    const pos = gl.getAttribLocation(prog, 'a_pos');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uRes = gl.getUniformLocation(prog, 'u_res');
    const uMouse = gl.getUniformLocation(prog, 'u_mouse');

    function sync() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.floor(window.innerWidth * dpr);
      const h = Math.floor((canvas.parentElement?.clientHeight || window.innerHeight) * dpr);
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    }
    sync();
    window.addEventListener('resize', sync);

    function loop(t) {
      if (!isRunningRef.current) return;

      gl.viewport(0, 0, canvas.width, canvas.height);

      mouseRef.current.px += (mouseRef.current.targetX * canvas.width - mouseRef.current.px) * 0.08;
      mouseRef.current.py += ((1.0 - mouseRef.current.targetY) * canvas.height - mouseRef.current.py) * 0.08;

      if (uTime) gl.uniform1f(uTime, t * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouseRef.current.px, mouseRef.current.py);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animIdRef.current = requestAnimationFrame(loop);
    }

    animIdRef.current = requestAnimationFrame(loop);

    return () => {
      if (animIdRef.current) cancelAnimationFrame(animIdRef.current);
      window.removeEventListener('resize', sync);
      gl.deleteProgram(prog);
      gl.deleteShader(vShader);
      gl.deleteShader(fShader);
      gl.deleteBuffer(buf);
    };
  }, []);

  // Global mouse tracking for subtle interactive parallax
  useEffect(() => {
    const onMove = (e) => {
      mouseRef.current.targetX = e.clientX / window.innerWidth;
      mouseRef.current.targetY = e.clientY / window.innerHeight;
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 z-0 overflow-hidden select-none bg-[#060A17] pointer-events-none"
    >
      {/* 1. Primary Corporate Hero Video (/video/hero-video-optimized.mp4) */}
      <video
        ref={videoRef}
        src="/video/hero-video-optimized.mp4"
        poster="/video/hero-video-poster.jpg"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onLoadedData={() => {
          setVideoLoaded(true);
          safePlay();
        }}
        onCanPlay={() => safePlay()}
        className={`absolute inset-0 w-full h-full object-cover object-center scale-105 transition-opacity duration-1000 ${
          videoLoaded ? 'opacity-75' : 'opacity-40'
        }`}
        style={{ 
          filter: 'brightness(0.85) contrast(1.15) saturate(1.1)' 
        }}
      >
        <source src="/video/hero-video-optimized.mp4" type="video/mp4" />
        <source src="/video/hero-video.mp4" type="video/mp4" />
      </video>

      {/* 2. Balanced Deep Obsidian Gradient Scrims for Text Readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#060A17]/85 via-[#060A17]/35 to-[#060A17]" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#060A17] via-transparent to-transparent" />

      {/* 3. Lightweight WebGL Blueprint Grid & Enterprise Data Flow Vectors */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover z-[2] mix-blend-screen"
      />

      {/* 4. Horizon Telemetry Laser */}
      <div 
        className="absolute left-0 right-0 h-[1px] z-[3] opacity-20"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(212, 175, 55, 0.8) 50%, transparent 100%)',
          animation: 'cyberSweep 10s cubic-bezier(0.4, 0, 0.2, 1) infinite',
          boxShadow: '0 0 10px rgba(212, 175, 55, 0.3)'
        }}
      />

      {/* 5. Minimalist Corporate Registration Marks */}
      <div className="absolute top-8 left-8 w-4 h-4 border-t border-l border-[#D4AF37]/40 z-[4]" />
      <div className="absolute top-8 right-8 w-4 h-4 border-t border-r border-[#D4AF37]/40 z-[4]" />
      <div className="absolute bottom-8 left-8 w-4 h-4 border-b border-l border-[#D4AF37]/40 z-[4]" />
      <div className="absolute bottom-8 right-8 w-4 h-4 border-b border-r border-[#D4AF37]/40 z-[4]" />

      {/* 6. Corporate Technical Status Telemetry */}
      <div className="hidden lg:block absolute top-[16%] left-[8%] z-[4] font-mono text-[10px] text-[#D4AF37]/50 tracking-wider">
        <div className="flex items-center gap-2">
          <span className="w-2 h-[1px] bg-[#D4AF37]/60" />
          <span>STRATEGY_STREAM // MUMBAI_HQ</span>
        </div>
      </div>

      <div className="hidden lg:block absolute top-[22%] right-[10%] z-[4] font-mono text-[10px] text-[#D4AF37]/50 tracking-wider">
        <div className="flex items-center gap-2">
          <span>CAPITAL_INFRASTRUCTURE // LIVE</span>
          <span className="w-2 h-[1px] bg-[#D4AF37]/60" />
        </div>
      </div>
    </div>
  );
}
