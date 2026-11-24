"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { weddingData } from "@/lib/data";
import GoldFrame from "./GoldFrame";

export default function CoupleSection() {
  const profiles = [
    {
      role: "MEMPELAI PRIA",
      ...weddingData.groomProfile,
    },
    {
      role: "MEMPELAI WANITA",
      ...weddingData.brideProfile,
    },
  ];

  return (
    <GoldFrame inset={18} variant="classic">
    <section className="couple-section">
    
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
      <div className="couple-container">

        <motion.div
          className="couple-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="countdown-divider">✦</div>

        {/* KUTIPAN */}
        <div className="hero-quote">
          "{weddingData.quote}"
        </div>

        <p className="hero-bible">{weddingData.bible}</p>

        </motion.div>

      <div className="couple-grid">
        {profiles.map((person, index) => (
          <React.Fragment key={person.role}>
            <motion.div
              className="couple-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: index * 0.2,
              }}
            >
              <div className="couple-photo-frame">
                <div className="couple-photo-inner">
                  <img
                    src={person.photo}
                    alt={person.fullName}
                    className="couple-photo"
                  />
                </div>

                <span className="couple-photo-ornament top-left">❧</span>
                <span className="couple-photo-ornament top-right">❧</span>
                <span className="couple-photo-ornament bottom-left">❧</span>
                <span className="couple-photo-ornament bottom-right">❧</span>
              </div>

              <p className="couple-role">{person.role}</p>
              <h4 className="couple-name">{person.fullName}</h4>
              <p className="couple-nickname">{person.nickname}</p>

              <div className="couple-divider">✦</div>

              <p className="couple-parents">{person.parents}</p>
              
            </motion.div>

            {/* RING SETELAH MEMPELAI PRIA */}
            {index === 0 && (
              <motion.div
                className="couple-ring"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
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
            )}
          </React.Fragment>
        ))}
      </div>

        <motion.div
          className="couple-symbol"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* <span>WITH LOVE</span>
          <div>&</div>
          <span>FOREVER</span> */}
        </motion.div>

      </div>
    </section>
    </GoldFrame>
  );
}