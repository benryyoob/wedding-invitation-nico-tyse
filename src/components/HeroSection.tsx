"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { weddingData } from "@/lib/data";
import FlowerOrnament from "./FlowerOrnament";
import VintageFrame from "./VintageFrame";
import GoldFrame from "./GoldFrame";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTime(): TimeLeft {
  const difference =
    new Date(weddingData.dateISO).getTime() - new Date().getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const items = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds },
  ];

  return (
    <GoldFrame inset={18} variant="classic">
    <section className="hero-section relative overflow-hidden">
      <FlowerOrnament className="flower-top" />
      <FlowerOrnament className="flower-bottom" delay={1} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="hero-content relative z-10"
      >
<br />

        {/* TANGGAL */}
        <p className="hero-subtitle">{weddingData.date}</p>
        <br />
        {/* FOTO PASANGAN */}
        <VintageFrame image="/images/couple.jpeg" />

        {/* COUNTDOWN */}
        <div className="hero-countdown">
<br />

          <div className="countdown-grid">
            {items.map((item) => (
              <div className="countdown-item" key={item.label}>
                <div className="countdown-number">
                  {item.value.toString().padStart(2, "0")}
                </div>

                <span>{item.label}</span>
              </div>
            ))}
          </div>

          {/* NAMA PASANGAN */}
          <h2 className="hero-title countdown-couple-name">
            Nico & Tyse
          </h2>

          {/* CINCIN */}
          <motion.div
            className="countdown-ring"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Image
              src="/images/ring.webp"
              alt="Wedding Ring"
              width={80}
              height={80}
              priority={false}
              className="countdown-ring-image"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
      </GoldFrame>
  );
}