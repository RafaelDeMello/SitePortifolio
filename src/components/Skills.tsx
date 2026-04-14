import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { TechGrid } from './TechGrid';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-[#0A0A0C]" />
      
      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 pb-2 tracking-wide px-4 bg-gradient-to-r from-[#E8E8EE] via-[#A8A8B8] to-[#8BAEC8] bg-clip-text text-transparent">
            Tecnologias
          </h2>
          <motion.div
            className="w-16 h-px bg-[#3D3D50] mx-auto"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </motion.div>

        <TechGrid />
      </motion.div>
    </section>
  );
}
