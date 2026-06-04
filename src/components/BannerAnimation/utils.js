import { BANNER_PALETTE, NODE_COUNT } from "@/constants/banner";

export function makeFirefly() {
  const maxOp = Math.random() * 0.7 + 0.1;
  return {
    x: Math.random() * 0.95,
    y: Math.random(),
    sz: Math.random() * 1.1 + 0.25,
    maxOpacity: maxOp,
    current: Math.random() * maxOp,
    target: Math.random() * maxOp,
    timer: 0,
    next: Math.random() * 160 + 20,
    lerp: Math.random() * 0.032 + 0.007,
    rgb: BANNER_PALETTE[Math.floor(Math.random() * BANNER_PALETTE.length)],
  };
}

export function makeNode(i) {
  return {
    xRatio: (i / (NODE_COUNT - 1)) * 0.88 + 0.06,
    r: Math.random() * 2.5 + 5.5,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: Math.random() * 0.014 + 0.007,
  };
}
