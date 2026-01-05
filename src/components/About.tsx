import React, { useEffect, useMemo, useRef } from "react";
import "../assets/styles/About.scss";

type P = {
  x: number;
  y: number;
  vx: number; // px per second (time-based)
  vy: number; // px per second (time-based)
  r: number;
};

const About = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const text = useMemo(
    () =>
      `
Bhanu Prakash Bathini is a software engineer concentrating on Generative AI, with particular emphasis on designing and operationalizing agentic systems that translate advanced LLM capabilities into dependable, user-facing products. He has built, tested, and deployed scalable AI agents in Python, leveraging modern agent frameworks, Retrieval-Augmented Generation (RAG) patterns, vector databases, and structured evaluation pipelines to ensure quality, safety, and consistency in real-world usage. Alongside this, he actively develops and refines a public portfolio, including the “Data Copilot” project, with the goal of presenting work that is not only technically rigorous but also product-minded and polished. His broader trajectory reflects a deliberate commitment to deepening expertise in LLMs, RAG architectures, and multi-agent systems, while maintaining strong software-engineering fundamentals and an execution-first approach to shipping complete solutions.
`.trim(),
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;

    const mouse = { x: 0, y: 0, active: false };

    const resize = () => {
      const parent = canvas.parentElement as HTMLElement;
      const rect = parent.getBoundingClientRect();
      w = Math.floor(rect.width);
      h = Math.floor(rect.height);
      canvas.width = w;
      canvas.height = h;
    };

    resize();

    const density = 0.000075; // slightly fewer particles since they are bigger
    const targetCount = () => Math.max(45, Math.min(120, Math.floor(w * h * density)));
    const rand = (a: number, b: number) => a + Math.random() * (b - a);

    let particles: P[] = [];

    // medium speed in px/sec (time-based)
    const SPEED = 38; // increase to 48 for faster, reduce to 28 for slower

    const init = () => {
      particles = Array.from({ length: targetCount() }).map(() => {
        const angle = rand(0, Math.PI * 2);
        const mag = rand(SPEED * 0.55, SPEED * 1.05);
        return {
          x: rand(0, w),
          y: rand(0, h),
          vx: Math.cos(angle) * mag,
          vy: Math.sin(angle) * mag,
          r: rand(1.8, 3.4), // bigger particles
        };
      });
    };

    init();

    const onResize = () => {
      resize();
      init();
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const onLeave = () => {
      mouse.active = false;
    };

    window.addEventListener("resize", onResize);
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);

    let lastT = performance.now();

    const step = (t: number) => {
      // delta seconds (clamp for tab-switch spikes)
      const dt = Math.min(0.033, Math.max(0.001, (t - lastT) / 1000));
      lastT = t;

      ctx.clearRect(0, 0, w, h);

      // subtle background glow
      const grd = ctx.createRadialGradient(
        w * 0.7,
        h * 0.2,
        40,
        w * 0.7,
        h * 0.2,
        Math.max(w, h)
      );
      grd.addColorStop(0, "rgba(0, 180, 255, 0.10)");
      grd.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, w, h);

      // update particles (time-based)
      for (const p of particles) {
        // mouse attraction (gentle)
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const d2 = dx * dx + dy * dy;
          const attractR = 160;

          if (d2 < attractR * attractR) {
            const d = Math.sqrt(d2) + 0.0001;
            const pull = (1 - d / attractR) * 65; // px/sec^2
            p.vx += (dx / d) * pull * dt;
            p.vy += (dy / d) * pull * dt;
          }
        }

        // gentle damping (stable across dt)
        const damp = Math.pow(0.985, dt * 60);
        p.vx *= damp;
        p.vy *= damp;

        // cap velocity
        const maxV = 85;
        p.vx = Math.max(-maxV, Math.min(maxV, p.vx));
        p.vy = Math.max(-maxV, Math.min(maxV, p.vy));

        // move
        p.x += p.vx * dt;
        p.y += p.vy * dt;

        // wrap edges
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;
      }

      // draw connections
      const linkDist = 150;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;

          if (d2 < linkDist * linkDist) {
            const d = Math.sqrt(d2);
            const alpha = (1 - d / linkDist) * 0.24;

            ctx.strokeStyle = `rgba(180, 220, 255, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // draw particles (slightly stronger)
      for (const p of particles) {
        ctx.fillStyle = "rgba(255,255,255,0.92)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      window.removeEventListener("resize", onResize);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section id="about" className="aboutFx">
      <div className="items-container">
        <div className="aboutFx__wrap">
          <canvas ref={canvasRef} className="aboutFx__canvas" />

          {/* Text is INSIDE the animation card */}
          <div className="aboutFx__content">
            <h1>About</h1>
            <p className="aboutFx__line">{text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
