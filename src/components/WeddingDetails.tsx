"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, CalendarDays } from "lucide-react";
import { weddingData } from "@/lib/data";
import GoldFrame from "./GoldFrame";
import Image from "next/image";

export default function WeddingDetails() {
  return (
      <GoldFrame inset={18} variant="classic">
    <section className="details-section">
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

      <div className="details-container">

        <motion.div
          className="details-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >

          <h3 className="section-title">
            Pemberkatan
            <br /> 
            & 
            <br />
            Resepsi
          </h3>

          <div className="countdown-divider">
            ✦
          </div>

          <p className="details-description">
            Dengan penuh sukacita, kami mengundang
            Bapak/Ibu/Sdr/i untuk hadir dan menjadi bagian di
            hari bahagia kami.
          </p>
        </motion.div>

        <div className="events-grid">

          {weddingData.events.map((event, index) => (

            <motion.div
              key={event.title}
              className="event-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
            >

              <div className="event-icon">
                {event.icon === "church" ? "♔" : "✦"}
              </div>

              <h3>{event.title}</h3>

              <div className="event-divider">
                ❧
              </div>

              <div className="event-info">
                <CalendarDays size={17} />
                <span>{event.date}</span>
              </div>

              <div className="event-info">
                <Clock size={17} />
                <span>{event.time}</span>
              </div>

              <div className="event-info">
                <MapPin size={17} />
                <span>{event.venue}</span>
              </div>

              <p className="event-address">
                {event.address}
              </p>

              <a
                href={event.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="maps-button"
              >
                <MapPin size={15} />
                LIHAT LOKASI
              </a>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
    </GoldFrame>
  );
}