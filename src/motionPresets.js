export const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 }
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
};

export const viewportOnce = { once: true, amount: 0.25 };
