import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportOnce } from '../motionPresets';
import { galleryImages } from '../content/siteContent';

const Gallery = () => {
  const [selected, setSelected] = useState(null);

  const closeLightbox = () => setSelected(null);
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('lightbox')) closeLightbox();
  };

  return (
    <motion.section
      id="gallery"
      className="section gallery"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <div className="container">
        <motion.h2 variants={fadeInUp}>Gallery</motion.h2>
        <motion.div className="gallery-grid" variants={staggerContainer}>
          {galleryImages.map((img, idx) => (
            <motion.figure
              className="gallery-card"
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <img
                src={img.src}
                alt={img.alt}
                onClick={() => setSelected(img)}
              />
              <figcaption>{img.caption}</figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
      <AnimatePresence>
        {selected && (
          <motion.div
            className="lightbox"
            onClick={handleOverlayClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.span
              className="close"
              onClick={closeLightbox}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              &times;
            </motion.span>
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <img src={selected.src} alt={selected.alt} />
              <p>{selected.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Gallery;
