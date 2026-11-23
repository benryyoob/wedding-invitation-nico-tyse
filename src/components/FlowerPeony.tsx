"use client";

import React from "react";

interface FlowerPeonyProps {
  className?: string;
  size?: number;
  rotate?: number;
  opacity?: number;
}

export default function FlowerPeony({
  className = "",
  size = 240,
  rotate = 0,
  opacity = 1,
}: FlowerPeonyProps) {
  return (
    <svg
      className={`flower-peony ${className}`}
      width={size}
      height={size}
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: `rotate(${rotate}deg)`,
        opacity,
      }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="peonyPetal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8E3048" />
          <stop offset="55%" stopColor="#571426" />
          <stop offset="100%" stopColor="#300916" />
        </linearGradient>

        <linearGradient id="peonyLight" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#B65A70" />
          <stop offset="100%" stopColor="#591426" />
        </linearGradient>

        <linearGradient id="peonyLeaf" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4B202C" />
          <stop offset="100%" stopColor="#180B12" />
        </linearGradient>

        <radialGradient id="peonyCenter">
          <stop offset="0%" stopColor="#F3D99A" />
          <stop offset="55%" stopColor="#C69A4D" />
          <stop offset="100%" stopColor="#81551F" />
        </radialGradient>
      </defs>

      {/* DAUN */}
      <g stroke="#C9A45D" strokeWidth="1.3">
        <path
          d="M145 183 C103 158 65 165 35 207 C79 218 119 211 145 183Z"
          fill="url(#peonyLeaf)"
        />
        <path d="M43 205 Q91 190 140 185" />

        <path
          d="M163 184 C205 153 248 160 274 201 C231 220 189 211 163 184Z"
          fill="url(#peonyLeaf)"
        />
        <path d="M267 199 Q213 187 168 185" />

        <path
          d="M150 203 C120 220 111 253 130 278 C157 256 165 229 150 203Z"
          fill="url(#peonyLeaf)"
        />
        <path d="M132 269 Q145 231 150 205" />
      </g>

      {/* BATANG */}
      <path
        d="M150 180 Q151 220 145 269"
        stroke="#C9A45D"
        strokeWidth="2"
        fill="none"
      />

      {/* KELOPAK LUAR */}
      <g
        fill="url(#peonyPetal)"
        stroke="#D6B56E"
        strokeWidth="1.5"
      >
        <ellipse cx="150" cy="102" rx="39" ry="72" />
        <ellipse cx="150" cy="102" rx="39" ry="72" transform="rotate(45 150 150)" />
        <ellipse cx="150" cy="102" rx="39" ry="72" transform="rotate(90 150 150)" />
        <ellipse cx="150" cy="102" rx="39" ry="72" transform="rotate(135 150 150)" />
        <ellipse cx="150" cy="102" rx="39" ry="72" transform="rotate(180 150 150)" />
        <ellipse cx="150" cy="102" rx="39" ry="72" transform="rotate(225 150 150)" />
        <ellipse cx="150" cy="102" rx="39" ry="72" transform="rotate(270 150 150)" />
        <ellipse cx="150" cy="102" rx="39" ry="72" transform="rotate(315 150 150)" />
      </g>

      {/* KELOPAK TENGAH */}
      <g
        fill="url(#peonyLight)"
        stroke="#E1C17D"
        strokeWidth="1.2"
      >
        <ellipse cx="150" cy="115" rx="29" ry="53" />
        <ellipse cx="150" cy="115" rx="29" ry="53" transform="rotate(60 150 150)" />
        <ellipse cx="150" cy="115" rx="29" ry="53" transform="rotate(120 150 150)" />
        <ellipse cx="150" cy="115" rx="29" ry="53" transform="rotate(180 150 150)" />
        <ellipse cx="150" cy="115" rx="29" ry="53" transform="rotate(240 150 150)" />
        <ellipse cx="150" cy="115" rx="29" ry="53" transform="rotate(300 150 150)" />
      </g>

      {/* KELOPAK BAGIAN DALAM */}
      <g fill="#681A31" stroke="#E5C783" strokeWidth="1.1">
        <ellipse cx="150" cy="125" rx="20" ry="34" />
        <ellipse cx="150" cy="125" rx="20" ry="34" transform="rotate(72 150 150)" />
        <ellipse cx="150" cy="125" rx="20" ry="34" transform="rotate(144 150 150)" />
        <ellipse cx="150" cy="125" rx="20" ry="34" transform="rotate(216 150 150)" />
        <ellipse cx="150" cy="125" rx="20" ry="34" transform="rotate(288 150 150)" />
      </g>

      {/* PUSAT BUNGA */}
      <circle
        cx="150"
        cy="150"
        r="16"
        fill="url(#peonyCenter)"
        stroke="#F1D99B"
        strokeWidth="1.5"
      />

      {/* DETAIL PUTIK */}
      <g fill="#F5DEA6">
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * Math.PI * 2) / 12;
          const x = 150 + Math.cos(angle) * 9;
          const y = 150 + Math.sin(angle) * 9;

          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="2"
            />
          );
        })}
      </g>
    </svg>
  );
}