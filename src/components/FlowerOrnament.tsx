"use client";

import { motion } from "framer-motion";
import { useId } from "react";

interface Props {
  className?: string;
  delay?: number;
}

export default function FlowerOrnament({
  className = "",
  delay = 0,
}: Props) {
  const id = useId().replace(/:/g, "");

  const red = `peony-red-${id}`;
  const dark = `peony-dark-${id}`;
  const inner = `peony-inner-${id}`;
  const gold = `peony-gold-${id}`;
  const leaf = `peony-leaf-${id}`;
  const bloom = `peony-bloom-${id}`;

  return (
    <motion.div
      className={`flower-ornament ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: [0, 1.5, -1.5, 0],
      }}
      transition={{
        opacity: { duration: 1.5, delay },
        scale: { duration: 1.5, delay },
        rotate: {
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      <svg
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* DEEP RED */}
          <linearGradient
            id={red}
            x1="70"
            y1="40"
            x2="230"
            y2="260"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#B43B4C" />
            <stop offset="35%" stopColor="#801426" />
            <stop offset="70%" stopColor="#3B0915" />
            <stop offset="100%" stopColor="#100509" />
          </linearGradient>

          {/* BLACK SHADOW */}
          <linearGradient
            id={dark}
            x1="100"
            y1="50"
            x2="210"
            y2="240"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#78192A" />
            <stop offset="45%" stopColor="#350912" />
            <stop offset="100%" stopColor="#050505" />
          </linearGradient>

          {/* INNER PETALS */}
          <linearGradient
            id={inner}
            x1="110"
            y1="90"
            x2="190"
            y2="210"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#D05A68" />
            <stop offset="35%" stopColor="#85172B" />
            <stop offset="75%" stopColor="#3A0813" />
            <stop offset="100%" stopColor="#100509" />
          </linearGradient>

          {/* GOLD */}
          <linearGradient
            id={gold}
            x1="100"
            y1="50"
            x2="200"
            y2="250"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#FFE7A3" />
            <stop offset="35%" stopColor="#D6AD52" />
            <stop offset="70%" stopColor="#A87529" />
            <stop offset="100%" stopColor="#684014" />
          </linearGradient>

          {/* LEAVES */}
          <linearGradient
            id={leaf}
            x1="40"
            y1="170"
            x2="260"
            y2="270"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#54131F" />
            <stop offset="50%" stopColor="#160A0D" />
            <stop offset="100%" stopColor="#030303" />
          </linearGradient>

          {/* SATU BUNGA PEONY */}
          <g id={bloom}>
            {/* KELOPAK LUAR */}
            <g
              fill={`url(#${dark})`}
              stroke={`url(#${gold})`}
              strokeWidth="1.5"
              strokeLinejoin="round"
            >
              {Array.from({ length: 9 }).map((_, i) => (
                <path
                  key={`outer-${i}`}
                  d="
                    M150 151
                    C118 129 103 91 121 54
                    C134 28 164 28 179 54
                    C197 91 182 129 150 151Z
                  "
                  transform={`rotate(${i * 40} 150 150)`}
                />
              ))}
            </g>

            {/* DETAIL KELOPAK LUAR */}
            <g
              stroke="#D5A94F"
              strokeWidth="0.9"
              opacity="0.7"
              fill="none"
            >
              {Array.from({ length: 9 }).map((_, i) => (
                <path
                  key={`detail-${i}`}
                  d="M150 137 C137 112 131 87 142 57"
                  transform={`rotate(${i * 40} 150 150)`}
                />
              ))}
            </g>

            {/* KELOPAK TENGAH */}
            <g
              fill={`url(#${red})`}
              stroke={`url(#${gold})`}
              strokeWidth="1.3"
              strokeLinejoin="round"
            >
              {Array.from({ length: 7 }).map((_, i) => (
                <path
                  key={`middle-${i}`}
                  d="
                    M150 153
                    C126 137 116 109 130 83
                    C140 65 161 65 172 83
                    C186 109 174 137 150 153Z
                  "
                  transform={`rotate(${i * (360 / 7) + 25} 150 150)`}
                />
              ))}
            </g>

            {/* KELOPAK DALAM */}
            <g
              fill={`url(#${inner})`}
              stroke="#D6AD52"
              strokeWidth="1.1"
              strokeLinejoin="round"
            >
              {Array.from({ length: 6 }).map((_, i) => (
                <path
                  key={`inner-${i}`}
                  d="
                    M150 153
                    C133 140 132 119 143 103
                    C151 92 165 101 167 115
                    C172 132 162 145 150 153Z
                  "
                  transform={`rotate(${i * 60} 150 150)`}
                />
              ))}
            </g>

            {/* PUSAT BUNGA */}
            <circle
              cx="150"
              cy="150"
              r="15"
              fill={`url(#${gold})`}
              stroke="#FFE6A0"
              strokeWidth="1.5"
            />

            {/* PUTIK */}
            <g fill="#FFE8A7">
              {Array.from({ length: 16 }).map((_, i) => {
                const angle = (i * Math.PI * 2) / 16;

                return (
                  <circle
                    key={`pollen-${i}`}
                    cx={150 + Math.cos(angle) * 10}
                    cy={150 + Math.sin(angle) * 10}
                    r="1.8"
                  />
                );
              })}
            </g>

            <circle cx="150" cy="150" r="4" fill="#FFF0C4" />
          </g>
        </defs>

        {/* =================================
            BATANG DAN DAUN PENGHUBUNG
        ================================= */}

        <g
          stroke={`url(#${gold})`}
          strokeWidth="1.5"
          fill="none"
        >
          <path d="M150 110 C135 160 111 194 83 245" />
          <path d="M150 110 C167 158 193 192 220 245" />
          <path d="M83 245 Q115 255 145 278" />
          <path d="M220 245 Q183 255 145 278" />
        </g>

        {/* DAUN */}
        <g
          fill={`url(#${leaf})`}
          stroke={`url(#${gold})`}
          strokeWidth="1.3"
          strokeLinejoin="round"
        >
          <path d="M125 180 C82 151 43 165 24 207 C67 222 104 210 125 180Z" />

          <path d="M178 177 C215 146 258 155 280 195 C240 222 202 209 178 177Z" />

          <path d="M146 204 C111 224 109 263 132 282 C157 259 165 229 146 204Z" />

          <path d="M112 145 C77 119 68 87 81 60 C111 87 122 117 112 145Z" />

          <path d="M190 143 C222 113 231 82 216 57 C188 86 179 115 190 143Z" />
        </g>

        {/* URAT DAUN */}
        <g
          stroke="#D6AD52"
          strokeWidth="1"
          opacity="0.85"
        >
          <path d="M28 205 Q77 186 120 181" />
          <path d="M275 193 Q220 182 181 178" />
          <path d="M133 276 Q146 235 146 205" />
          <path d="M82 65 Q101 107 112 140" />
          <path d="M216 62 Q198 105 190 139" />
        </g>

        {/* =================================
            TIGA BUNGA YANG MENYATU
        ================================= */}

        {/* BUNGA KIRI */}
        <use
          href={`#${bloom}`}
          transform="translate(17 90) scale(0.42)"
        />

        {/* BUNGA KANAN */}
        <use
          href={`#${bloom}`}
          transform="translate(157 90) scale(0.42)"
        />

        {/* BUNGA UTAMA */}
        <use
          href={`#${bloom}`}
          transform="translate(42 -5) scale(0.72)"
        />
      </svg>
    </motion.div>
  );
}