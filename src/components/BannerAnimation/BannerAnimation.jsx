"use client";

import { useEffect, useRef } from "react";
import Styles from "./BannerAnimation.module.scss";
import {
  WIRE_COLOR,
  BULB_COLOR,
  FILAMENT,
  CONN_COLOR,
  BASE_Y,
  NODE_COUNT,
  FIREFLY_COUNT,
} from "@/constants";
import { makeFirefly, makeNode } from "./utils";

export const BannerAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;

    const cx = cv.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    let animId;
    let running = true;

    const fireflies = Array.from({ length: FIREFLY_COUNT }, makeFirefly);
    const nodes = Array.from({ length: NODE_COUNT }, (_, i) => makeNode(i));
    let t = 0;

    const resize = () => {
      const w = cv.offsetWidth;
      const h = cv.offsetHeight;
      cv.width = w * dpr;
      cv.height = h * dpr;
      cx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const W = () => cv.offsetWidth;
    const H = () => cv.offsetHeight;

    const wireY = (xRatio, h) =>
      h * BASE_Y +
      Math.sin(xRatio * Math.PI * 3 + t * 0.5) * h * 0.07 +
      Math.sin(xRatio * Math.PI * 5 - t * 0.3) * h * 0.03;

    function drawWires() {
      const w = W(),
        h = H();

      const drawLine = (getFn, color, lw, alpha) => {
        cx.beginPath();
        cx.moveTo(0, getFn(0));
        for (let x = 0; x <= w; x += 2) cx.lineTo(x, getFn(x / w));
        cx.strokeStyle = color;
        cx.lineWidth = lw;
        cx.globalAlpha = alpha;
        cx.stroke();
        cx.globalAlpha = 1;
      };

      drawLine((p) => wireY(p, h), WIRE_COLOR.main, 1, 0.35);
      drawLine(
        (p) =>
          h * 0.38 +
          Math.sin(p * Math.PI * 2 + t * 0.35) * h * 0.05 +
          Math.sin(p * Math.PI * 3.5 - t * 0.25) * h * 0.02,
        WIRE_COLOR.low,
        0.8,
        0.18
      );
      drawLine(
        (p) =>
          h * 0.72 +
          Math.sin(p * Math.PI * 1.5 + t * 0.65) * h * 0.04 +
          Math.sin(p * Math.PI * 2.5 - t * 0.4) * h * 0.02,
        WIRE_COLOR.dim,
        0.7,
        0.22
      );
    }

    function drawBulb(x, y, r, alpha) {
      cx.save();
      cx.globalAlpha = alpha;
      cx.strokeStyle = BULB_COLOR;
      cx.lineWidth = 0.9;
      cx.lineCap = "round";
      cx.lineJoin = "round";

      cx.beginPath();
      cx.arc(x, y - r, r, 0, Math.PI * 2);
      cx.stroke();

      const neckTop = y - r * 0.25;
      const neckBot = y + r * 0.1;
      const nw = r * 0.38;

      cx.beginPath();
      cx.moveTo(x - r * 0.7, neckTop);
      cx.bezierCurveTo(x - r * 0.55, neckTop + r * 0.1, x - nw, neckTop + r * 0.2, x - nw, neckBot);
      cx.stroke();
      cx.beginPath();
      cx.moveTo(x + r * 0.7, neckTop);
      cx.bezierCurveTo(x + r * 0.55, neckTop + r * 0.1, x + nw, neckTop + r * 0.2, x + nw, neckBot);
      cx.stroke();

      cx.beginPath();
      cx.moveTo(x - nw * 0.95, neckBot + r * 0.09);
      cx.lineTo(x + nw * 0.95, neckBot + r * 0.09);
      cx.moveTo(x - nw * 0.88, neckBot + r * 0.18);
      cx.lineTo(x + nw * 0.88, neckBot + r * 0.18);
      cx.stroke();

      cx.strokeStyle = FILAMENT;
      cx.lineWidth = 0.65;
      cx.beginPath();
      cx.moveTo(x - nw * 0.4, neckBot);
      cx.quadraticCurveTo(x - r * 0.3, y - r * 0.9, x, y - r * 0.65);
      cx.stroke();
      cx.beginPath();
      cx.moveTo(x + nw * 0.4, neckBot);
      cx.quadraticCurveTo(x + r * 0.3, y - r * 0.9, x, y - r * 0.65);
      cx.stroke();

      cx.restore();
    }

    function drawGlow(x, y, r, intensity) {
      const g = cx.createRadialGradient(x, y - r, 0, x, y - r, r * 3.5);
      g.addColorStop(0, `rgba(143,191,106,${intensity * 0.2})`);
      g.addColorStop(1, "transparent");
      cx.fillStyle = g;
      cx.beginPath();
      cx.arc(x, y - r, r * 3.5, 0, Math.PI * 2);
      cx.fill();
    }

    function drawNodes() {
      const w = W(),
        h = H();
      nodes.forEach((n) => {
        n.pulse += n.pulseSpeed;
        const glow = (Math.sin(n.pulse) + 1) / 2;
        const bx = n.xRatio * w;
        const wy = wireY(n.xRatio, h);
        const by = wy + n.r * 0.25;

        cx.beginPath();
        cx.moveTo(bx, wy);
        cx.lineTo(bx, by - n.r * 1.8);
        cx.strokeStyle = CONN_COLOR;
        cx.lineWidth = 0.6;
        cx.globalAlpha = 0.4;
        cx.stroke();
        cx.globalAlpha = 1;

        drawGlow(bx, by, n.r, glow);
        drawBulb(bx, by, n.r, 0.3 + glow * 0.55);
      });
    }

    function drawFireflies() {
      const w = W(),
        h = H();
      fireflies.forEach((f) => {
        f.timer++;
        if (f.timer >= f.next) {
          f.target = Math.random() * f.maxOpacity;
          f.next = Math.random() * 160 + 20;
          f.timer = 0;
          f.lerp = Math.random() * 0.032 + 0.007;
        }
        f.current += (f.target - f.current) * f.lerp;
        const alpha = Math.max(0, Math.min(0.8, f.current));
        if (alpha < 0.01) return;

        const px = f.x * w;
        const py = f.y * h;

        if (f.sz > 0.75) {
          const g = cx.createRadialGradient(px, py, 0, px, py, f.sz * 3.2);
          g.addColorStop(0, `rgba(${f.rgb},${alpha * 0.45})`);
          g.addColorStop(1, "transparent");
          cx.fillStyle = g;
          cx.beginPath();
          cx.arc(px, py, f.sz * 3.2, 0, Math.PI * 2);
          cx.fill();
        }

        cx.beginPath();
        cx.arc(px, py, f.sz, 0, Math.PI * 2);
        cx.fillStyle = `rgba(${f.rgb},${alpha})`;
        cx.fill();
      });
    }

    function loop() {
      if (!running) return;
      cx.clearRect(0, 0, W(), H());
      t += 0.016;
      drawFireflies();
      drawWires();
      drawNodes();
      animId = requestAnimationFrame(loop);
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        running = true;
        loop();
      } else {
        running = false;
        cancelAnimationFrame(animId);
      }
    });
    observer.observe(cv);

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(animId);
      } else {
        running = true;
        loop();
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
      observer.disconnect();
    };
  }, []);

  return (
    <div className={Styles.bannerAnimation}>
      <canvas ref={canvasRef} className={Styles.bannerAnimation__canvas} />
    </div>
  );
};
