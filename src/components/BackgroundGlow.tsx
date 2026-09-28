"use client";

import React from "react";

export default function BackgroundGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden no-print">
      {/* Top-Right Soft Lavender / Purple Organic Blob */}
      <div
        className="absolute -top-24 -right-24 w-[420px] h-[420px] sm:w-[540px] sm:h-[540px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(196, 181, 253, 0.45) 0%, rgba(224, 215, 255, 0.25) 50%, transparent 75%)",
          filter: "blur(50px)",
        }}
      />

      {/* Top-Right Extra Soft Organic Accent */}
      <div
        className="absolute top-10 right-0 w-[300px] h-[300px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(167, 139, 250, 0.3) 0%, rgba(237, 233, 254, 0.15) 60%, transparent 75%)",
          filter: "blur(40px)",
        }}
      />

      {/* Bottom-Left Soft Lavender Organic Blob */}
      <div
        className="absolute -bottom-20 -left-20 w-[380px] h-[380px] sm:w-[480px] sm:h-[480px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(196, 181, 253, 0.35) 0%, rgba(224, 215, 255, 0.2) 50%, transparent 75%)",
          filter: "blur(50px)",
        }}
      />

      {/* Bottom-Left Extra Soft Glow */}
      <div
        className="absolute bottom-10 -left-10 w-[260px] h-[260px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(167, 139, 250, 0.25) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
    </div>
  );
}

