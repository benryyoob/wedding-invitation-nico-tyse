"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { weddingData } from "@/lib/data";
import VintageFrame from "./VintageFrame";
import GoldFrame from "./GoldFrame";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const initialTime: TimeLeft = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

function calculateTime(): TimeLeft {
  const difference =
    new Date(weddingData.dateISO).getTime() - Date.now();

  if (difference <= 0) {
    return initialTime;
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(initialTime);

  useEffect(() => {
    // Hitung waktu pertama kali komponen dimuat
    setTimeLeft(calculateTime());

    // Perbarui countdown setiap detik
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

        {/* =================================
            DEKORASI BUNGA
        ================================= */}

        {/* Bunga kiri atas */}
        <Image
          src="/images/flower-top-left.png"
          alt=""
          width={500}
          height={600}
          priority
          aria-hidden="true"
          className="hero-flower hero-flower-top-left"
        />

        {/* Bunga kanan bawah */}
        <Image
          src="/images/flower-bottom-right.png"
          alt=""
          width={500}
          height={600}
          loading="lazy"
          aria-hidden="true"
          className="hero-flower hero-flower-bottom-right"
        />

        {/* =================================
            KONTEN UTAMA
        ================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="hero-content relative z-10"
        >

          {/* TANGGAL PERNIKAHAN */}
          <p className="hero-subtitle">
            {weddingData.date}
          </p>

          {/* FOTO PASANGAN */}
          <div className="hero-couple-photo">
            <VintageFrame image="/images/couple.jpeg" />
          </div>

          {/* COUNTDOWN */}
          <div className="hero-countdown">

            <div className="countdown-grid">
              {items.map((item) => (
                <div
                  className="countdown-item"
                  key={item.label}
                >
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

            {/* CINCIN PERNIKAHAN */}
            <motion.div
              className="countdown-ring"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.3,
              }}
            >
              <Image
                src="/images/ring.webp"
                alt="Wedding Ring"
                width={80}
                height={80}
                className="countdown-ring-image"
              />
            </motion.div>

          </div>
        </motion.div>
      </section>
    </GoldFrame>
  );
}