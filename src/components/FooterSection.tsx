"use client";

import { motion } from "framer-motion";

export default function FooterSection() {
  return (
    <footer className="footer-section">
      <div className="footer-container">

        {/* Ornamen Pembatas */}
        <div className="footer-divider">
          <span></span>
          <span className="footer-divider-icon">✦</span>
          <span></span>
        </div>

        {/* Ucapan Penutup */}
        <motion.div
          className="footer-closing"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p>
            Merupakan suatu kebahagiaan bagi kami
            <br />
            apabila Bapak/Ibu/Saudara/i
            <br />
            berkenan hadir dan memberikan
            <br />
            doa restu kepada kami.
          </p>
        </motion.div>

        {/* Keluarga */}
        <motion.div
          className="footer-families"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="footer-happy">Kami yang Berbahagia</p>

          <div className="footer-family-grid">

            {/* Keluarga Pria */}
            <div className="footer-family">
              <h3>
                KELUARGA MEMPELAI
                <br />
                PRIA
              </h3>

              <div className="footer-family-line"></div>
              <p>Keluarga Besar Obe</p>
              <p>Keluarga Besar Lake</p>
              <p>Keluarga Besar Luly</p>
            </div>

            {/* Keluarga Wanita */}
            <div className="footer-family">
              <h3>
                KELUARGA MEMPELAI
                <br />
                WANITA
              </h3>

              <div className="footer-family-line"></div>

              <p>Keluarga Besar Wens. E. Tjanggul (Alm.)</p>
              <p>Keluarga Besar Valentina Tanone Tjung (Almh.)</p>
              <p>Keluarga Besar Ham</p>
              <p>Keluarga Besar Kwee</p>
            </div>

          </div>
        </motion.div>

        {/* Penutup Nama Mempelai */}
        <motion.div
          className="footer-couple"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="footer-with-love">DENGAN PENUH KASIH</p>

          <div className="footer-couple-divider">
            <span>✦</span>
          </div>

          <h2>Nico <span>&</span> Tyse</h2>
        </motion.div>

        {/* Ornamen Bawah */}
        <div className="footer-bottom">
          <span>✦</span>
        </div>

      </div>
    </footer>
  );
}