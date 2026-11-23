"use client";

import { ReactNode } from "react";

interface GoldFrameProps {
  children: ReactNode;
  className?: string;
  inset?: number;
  variant?: "classic" | "simple";
}

export default function GoldFrame({
  children,
  className = "",
  inset = 18,
  variant = "classic",
}: GoldFrameProps) {
  return (
    <div className={`gold-frame-wrapper ${className}`}>
      {/* GOLD FRAME */}
      <div
        className={`gold-frame gold-frame-${variant}`}
        style={{ "--frame-inset": `${inset}px` } as React.CSSProperties}
        aria-hidden="true"
      >
        <div className="gold-frame-inner" />

        {variant === "classic" && (
          <>
            <span className="gold-frame-center gold-center-top">✦</span>
            <span className="gold-frame-center gold-center-bottom">✦</span>
          </>
        )}
      </div>

      {/* CONTENT */}
      <div className="gold-frame-content">
        {children}
      </div>
    </div>
  );
}