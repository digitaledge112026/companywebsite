"use client";

import { useEffect, useRef, useState } from "react";

interface Point3D {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  radius: number;
  color: string;
  isContour: boolean;
  pulsePhase: number;
}

interface WaveStream {
  startY: number;
  speed: number;
  amplitude1: number;
  amplitude2: number;
  freq1: number;
  freq2: number;
  phase: number;
  length: number;
  color: string;
  particles: { progress: number; speed: number; size: number }[];
}

export default function AINeuralMeshCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; targetX: number; targetY: number }>({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
  });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;
    let dpr = 1;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = container.clientWidth || 550;
      height = container.clientHeight || 550;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    // Profile contour points (human profile facing right)
    // Coords relative to head center (0, 0)
    const profileSpline = [
      { x: -50, y: -160 }, // crown back
      { x: 0, y: -175 },   // crown top
      { x: 50, y: -160 },  // crown front
      { x: 80, y: -130 },  // forehead top
      { x: 95, y: -90 },   // forehead
      { x: 98, y: -65 },   // brow ridge
      { x: 85, y: -45 },   // eye socket / bridge
      { x: 95, y: -25 },   // nose upper
      { x: 125, y: 0 },    // nose tip
      { x: 105, y: 15 },   // nose under
      { x: 92, y: 22 },    // philtrum
      { x: 102, y: 32 },   // upper lip
      { x: 92, y: 42 },    // mouth indent
      { x: 100, y: 52 },   // lower lip
      { x: 88, y: 68 },    // chin indent
      { x: 98, y: 88 },    // chin tip
      { x: 85, y: 110 },   // chin bottom
      { x: 60, y: 135 },   // jawline
      { x: 30, y: 155 },   // jaw back
      { x: 45, y: 185 },   // neck front
      { x: 50, y: 220 },   // neck lower front
      { x: -30, y: 220 },  // neck lower back
      { x: -45, y: 175 },  // neck back
      { x: -95, y: 120 },  // base of skull
      { x: -125, y: 50 },  // back of head lower
      { x: -135, y: -20 }, // back of head middle
      { x: -120, y: -90 }, // back of head upper
      { x: -90, y: -135 }, // back crown
    ];

    // Helper: Interpolate along spline
    const sampleContourPoints = (count: number): { x: number; y: number }[] => {
      const sampled: { x: number; y: number }[] = [];
      const segCount = profileSpline.length;
      for (let i = 0; i < count; i++) {
        const t = (i / count) * segCount;
        const segIdx = Math.floor(t) % segCount;
        const nextIdx = (segIdx + 1) % segCount;
        const frac = t - Math.floor(t);
        const p1 = profileSpline[segIdx];
        const p2 = profileSpline[nextIdx];
        sampled.push({
          x: p1.x + (p2.x - p1.x) * frac,
          y: p1.y + (p2.y - p1.y) * frac,
        });
      }
      return sampled;
    };

    // Generate 3D point cloud
    const points: Point3D[] = [];
    const colors = [
      "#5BE18E", // mint
      "#38BDF8", // electric cyan
      "#A7F3D0", // soft mint
      "#BAE6FD", // pale sky
      "#FFFFFF", // starlight white
    ];

    // 1. Contour points with varying depth
    const contourPoints = sampleContourPoints(160);
    contourPoints.forEach((p) => {
      // z distributes around 0 for the profile edge, with small 3D thickness
      const z = (Math.random() - 0.5) * 40;
      points.push({
        x: p.x,
        y: p.y,
        z: z,
        baseX: p.x,
        baseY: p.y,
        baseZ: z,
        radius: Math.random() < 0.25 ? 2.2 : 1.3,
        color: colors[Math.floor(Math.random() * colors.length)],
        isContour: true,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    });

    // 2. Interior volumetric points (cranial and facial lattice)
    const interiorCount = 380;
    let added = 0;
    while (added < interiorCount) {
      // Cranial sphere + facial ellipsoid bounds
      const rx = (Math.random() - 0.5) * 230;
      const ry = (Math.random() - 0.5) * 360;
      const rz = (Math.random() - 0.5) * 130;

      // Check if inside rough head envelope:
      // Cranial core
      const inCranium =
        (Math.pow(rx + 25, 2) / Math.pow(110, 2)) +
        (Math.pow(ry + 40, 2) / Math.pow(130, 2)) +
        (Math.pow(rz, 2) / Math.pow(65, 2)) < 1;

      // Facial wedge
      const inFace =
        rx > -20 && rx < 100 &&
        ry > -60 && ry < 120 &&
        Math.abs(rz) < (60 * (1 - (rx / 130)));

      if (inCranium || inFace) {
        points.push({
          x: rx,
          y: ry,
          z: rz,
          baseX: rx,
          baseY: ry,
          baseZ: rz,
          radius: Math.random() < 0.15 ? 1.8 : 0.9,
          color: colors[Math.floor(Math.random() * colors.length)],
          isContour: false,
          pulsePhase: Math.random() * Math.PI * 2,
        });
        added++;
      }
    }

    // 3. Flowing Synaptic Wave Ribbons trailing from the back of the head
    const waveStreams: WaveStream[] = [];
    const waveCount = 28;
    for (let i = 0; i < waveCount; i++) {
      const frac = i / (waveCount - 1);
      const startY = -140 + frac * 260; // emits from crown down to neck
      const particles = [];
      const particleCount = 4 + Math.floor(Math.random() * 5);
      for (let p = 0; p < particleCount; p++) {
        particles.push({
          progress: Math.random(),
          speed: 0.002 + Math.random() * 0.004,
          size: 1 + Math.random() * 2,
        });
      }

      waveStreams.push({
        startY,
        speed: 0.8 + Math.random() * 0.8,
        amplitude1: 10 + Math.random() * 18,
        amplitude2: 6 + Math.random() * 12,
        freq1: 0.012 + Math.random() * 0.008,
        freq2: 0.025 + Math.random() * 0.015,
        phase: Math.random() * Math.PI * 2,
        length: 220 + Math.random() * 160,
        color: i % 2 === 0 ? "rgba(91, 225, 142," : "rgba(56, 189, 248,",
        particles,
      });
    }

    // Ambient floating light embers / data particles
    const embers: { x: number; y: number; vx: number; vy: number; alpha: number; size: number }[] = [];
    for (let i = 0; i < 45; i++) {
      embers.push({
        x: (Math.random() - 0.5) * 450,
        y: (Math.random() - 0.5) * 450,
        vx: -0.2 - Math.random() * 0.5,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: 0.2 + Math.random() * 0.7,
        size: 0.8 + Math.random() * 1.8,
      });
    }

    // Track mouse on canvas/container
    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      mouseRef.current.targetX = nx * 0.45; // max tilt radians
      mouseRef.current.targetY = ny * 0.35;
    };

    const onMouseLeave = () => {
      mouseRef.current.targetX = 0;
      mouseRef.current.targetY = 0;
      setIsHovered(false);
    };

    const onMouseEnter = () => {
      setIsHovered(true);
    };

    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseLeave);
    container.addEventListener("mouseenter", onMouseEnter);

    let time = 0;
    const fov = 420;

    const render = () => {
      time += 0.018;

      // Smooth mouse lerp
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.06;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.06;

      const rotY = mouseRef.current.x + Math.sin(time * 0.4) * 0.06;
      const rotX = -mouseRef.current.y + Math.cos(time * 0.3) * 0.04;

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      const centerX = width * 0.55; // Slightly to the right to make room for flowing waves on the left
      const centerY = height * 0.48;

      ctx.clearRect(0, 0, width, height);

      // Check dark mode
      const isDark = document.documentElement.classList.contains("dark");

      // 1. Ambient Background Glow Aura behind the AI silhouette
      const auraGrad = ctx.createRadialGradient(
        centerX + 20,
        centerY,
        30,
        centerX + 20,
        centerY,
        Math.min(width, height) * 0.65
      );
      if (isDark) {
        auraGrad.addColorStop(0, "rgba(56, 189, 248, 0.16)");
        auraGrad.addColorStop(0.35, "rgba(91, 225, 142, 0.10)");
        auraGrad.addColorStop(0.7, "rgba(139, 92, 246, 0.04)");
        auraGrad.addColorStop(1, "rgba(10, 12, 16, 0)");
      } else {
        auraGrad.addColorStop(0, "rgba(5, 150, 105, 0.12)");
        auraGrad.addColorStop(0.4, "rgba(2, 132, 199, 0.08)");
        auraGrad.addColorStop(1, "rgba(250, 250, 250, 0)");
      }
      ctx.fillStyle = auraGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Render Trailing Synaptic Wave Ribbons
      waveStreams.forEach((stream) => {
        const streamOriginX = -70; // starts from back of head
        const streamOriginY = stream.startY;

        // Rotate start point with 3D model
        const x1 = streamOriginX * cosY;
        const z1 = streamOriginX * sinY;
        const y1 = streamOriginY * cosX - z1 * sinX;
        const z2 = streamOriginY * sinX + z1 * cosX;
        const scale = fov / (fov + z2);

        const startScreenX = centerX + x1 * scale;
        const startScreenY = centerY + y1 * scale;

        ctx.beginPath();
        const steps = 45;
        const totalLen = stream.length * (width / 500);

        for (let s = 0; s <= steps; s++) {
          const progress = s / steps;
          const waveDist = progress * totalLen;
          const currX = startScreenX - waveDist; // flowing leftward

          // Undulating dual-frequency sine wave
          const waveOffset =
            Math.sin(waveDist * stream.freq1 + time * stream.speed + stream.phase) * stream.amplitude1 +
            Math.cos(waveDist * stream.freq2 - time * 0.8 + stream.phase) * stream.amplitude2;

          const currY = startScreenY + waveOffset * (1 - progress * 0.3);

          if (s === 0) {
            ctx.moveTo(currX, currY);
          } else {
            ctx.lineTo(currX, currY);
          }
        }

        // Wave line gradient
        const lineAlpha = (isDark ? 0.42 : 0.28) * (1 - Math.abs(stream.startY) / 180);
        ctx.strokeStyle = `${stream.color} ${Math.max(0.08, lineAlpha)})`;
        ctx.lineWidth = 0.85;
        ctx.stroke();

        // Render traveling data particles along this wave
        stream.particles.forEach((part) => {
          part.progress += part.speed;
          if (part.progress > 1) part.progress -= 1;

          const waveDist = part.progress * totalLen;
          const px = startScreenX - waveDist;
          const waveOffset =
            Math.sin(waveDist * stream.freq1 + time * stream.speed + stream.phase) * stream.amplitude1 +
            Math.cos(waveDist * stream.freq2 - time * 0.8 + stream.phase) * stream.amplitude2;
          const py = startScreenY + waveOffset * (1 - part.progress * 0.3);

          const fade = Math.sin(part.progress * Math.PI);
          ctx.beginPath();
          ctx.arc(px, py, part.size * scale, 0, Math.PI * 2);
          ctx.fillStyle = isDark
            ? `rgba(255, 255, 255, ${fade * 0.9})`
            : `rgba(5, 150, 105, ${fade * 0.8})`;
          ctx.fill();
        });
      });

      // 3. Project 3D points
      interface ProjectedPoint {
        x2d: number;
        y2d: number;
        z2d: number;
        scale: number;
        orig: Point3D;
      }
      const projected: ProjectedPoint[] = [];

      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        // Organic micro-breathing motion
        const breath = Math.sin(time * 1.5 + p.pulsePhase) * 1.5;
        const curX = p.baseX + (p.isContour ? 0 : breath);
        const curY = p.baseY + breath * 0.5;
        const curZ = p.baseZ + breath;

        // 3D Rotation matrix
        const x1 = curX * cosY - curZ * sinY;
        const z1 = curX * sinY + curZ * cosY;
        const y1 = curY * cosX - z1 * sinX;
        const z2 = curY * sinX + z1 * cosX;

        const scale = fov / (fov + z2);
        const x2d = centerX + x1 * scale;
        const y2d = centerY + y1 * scale;

        projected.push({ x2d, y2d, z2d: z2, scale, orig: p });
      }

      // Sort points from back to front for proper depth rendering
      projected.sort((a, b) => b.z2d - a.z2d);

      // 4. Render Synaptic Filament Connections
      // Connect nearby points to form the neural network lattice
      const connectionDist = 32;
      const maxLinesPerNode = 4;

      for (let i = 0; i < projected.length; i += 2) {
        let connectedCount = 0;
        const p1 = projected[i];

        for (let j = i + 1; j < projected.length; j++) {
          const p2 = projected[j];
          const dx = p1.x2d - p2.x2d;
          const dy = p1.y2d - p2.y2d;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist * p1.scale) {
            const alpha = (1 - dist / (connectionDist * p1.scale)) * (isDark ? 0.32 : 0.22);
            // Dynamic pulse traveling along synapse
            const pulse = (Math.sin(time * 3 + p1.orig.pulsePhase) + 1) * 0.5;

            ctx.strokeStyle = isDark
              ? `rgba(91, 225, 142, ${alpha * (0.6 + pulse * 0.6)})`
              : `rgba(5, 150, 105, ${alpha * (0.6 + pulse * 0.5)})`;
            ctx.lineWidth = 0.65 * p1.scale;

            ctx.beginPath();
            ctx.moveTo(p1.x2d, p1.y2d);
            ctx.lineTo(p2.x2d, p2.y2d);
            ctx.stroke();

            connectedCount++;
            if (connectedCount >= maxLinesPerNode) break;
          }
        }
      }

      // 5. Render Glowing Point Cloud Nodes
      projected.forEach((p) => {
        const depthFactor = (p.z2d + 140) / 280; // 0 (back) to 1 (front)
        const pulse = (Math.sin(time * 2.5 + p.orig.pulsePhase) + 1) * 0.5;
        const radius = Math.max(0.7, p.orig.radius * p.scale * (0.8 + pulse * 0.4));

        ctx.beginPath();
        ctx.arc(p.x2d, p.y2d, radius, 0, Math.PI * 2);

        if (p.orig.isContour) {
          // Sharp boundary nodes
          ctx.fillStyle = isDark
            ? `rgba(255, 255, 255, ${0.7 + pulse * 0.3})`
            : `rgba(2, 132, 199, ${0.8 + pulse * 0.2})`;
          ctx.shadowColor = isDark ? "#38BDF8" : "#059669";
          ctx.shadowBlur = isDark ? 8 : 4;
        } else {
          // Soft volume nodes
          const alpha = 0.25 + depthFactor * 0.65;
          ctx.fillStyle = isDark ? p.orig.color : "#059669";
          ctx.globalAlpha = Math.min(1, Math.max(0.15, alpha));
          ctx.shadowBlur = 0;
        }

        ctx.fill();
        ctx.globalAlpha = 1.0;
        ctx.shadowBlur = 0;
      });

      // 6. Ambient Floating Telemetry Embers
      embers.forEach((ember) => {
        ember.x += ember.vx;
        ember.y += ember.vy;
        if (ember.x < -width * 0.5) ember.x = width * 0.5;
        if (ember.y < -height * 0.5) ember.y = height * 0.5;
        if (ember.y > height * 0.5) ember.y = -height * 0.5;

        const ex = centerX + ember.x;
        const ey = centerY + ember.y;

        ctx.beginPath();
        ctx.arc(ex, ey, ember.size, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? `rgba(91, 225, 142, ${ember.alpha * 0.6})`
          : `rgba(5, 150, 105, ${ember.alpha * 0.5})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseLeave);
      container.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[420px] sm:h-[480px] md:h-[560px] lg:h-[620px] select-none flex items-center justify-center overflow-hidden"
    >
      {/* Decorative Interactive Frame HUD Elements */}
      <div className="absolute top-4 right-4 z-20 hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 dark:bg-[#0D1117]/80 backdrop-blur-md border border-black/10 dark:border-white/10 text-[10px] font-mono text-neutral-500 dark:text-[#8F9CAE]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#059669] dark:bg-[#5BE18E] animate-ping" />
        <span>NEURAL ENGINE v4.8</span>
        <span className="text-neutral-300 dark:text-white/20">•</span>
        <span className="text-emerald-600 dark:text-[#5BE18E]">INTERACTIVE 3D MESH</span>
      </div>

      <div className="absolute bottom-4 left-4 z-20 hidden sm:flex items-center gap-3 font-mono text-[10px] text-neutral-500 dark:text-[#8F9CAE]">
        <div className="flex items-center gap-1.5">
          <span className="w-1 h-3 bg-[#5BE18E] rounded-xs animate-pulse" />
          <span className="w-1 h-2 bg-[#38BDF8] rounded-xs animate-pulse" />
          <span className="w-1 h-4 bg-[#5BE18E] rounded-xs animate-pulse" />
        </div>
        <span>PARALLAX: {isHovered ? "ACTIVE TRACKING" : "IDLE ORBIT"}</span>
      </div>

      {/* Canvas */}
      <canvas ref={canvasRef} className="w-full h-full block cursor-grab active:cursor-grabbing" />
    </div>
  );
}
