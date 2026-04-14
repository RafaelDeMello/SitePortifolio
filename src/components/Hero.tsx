import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useMemo } from 'react';

export function Hero() {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const particles = useMemo(() => 
    [...Array(30)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 60,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.2 + 0.1,
      duration: Math.random() * 6 + 6,
      delay: Math.random() * 4
    })), 
  []);

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[#0A0A0C]" />
      
      <div
        className="absolute rounded-full blur-[150px]"
        style={{
          background: '#1A2A4A',
          opacity: 0.08,
          width: '600px',
          height: '600px',
          left: '50%',
          top: '35%',
          transform: 'translate(-50%, -50%)'
        }}
      />

      <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-[#0A0A0C] via-transparent to-transparent" />
      
      <motion.div 
        className="absolute inset-0"
        style={{ y }}
      >
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: '#A8A8B8',
              opacity: particle.opacity
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [particle.opacity, particle.opacity * 0.3, particle.opacity]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      <motion.div 
        className="relative z-10 text-center px-6"
        style={{ opacity }}
      >
        <motion.p
          className="text-[#5A5A72] text-sm mb-8 tracking-[0.3em] capitalize"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Olá, eu sou
        </motion.p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 overflow-hidden tracking-tight text-white">
          Rafael De Mello
        </h1>

        <motion.div
          className="h-px bg-[#2A4A6A] mx-auto mb-8"
          initial={{ width: 0 }}
          animate={{ width: '120px' }}
          transition={{ delay: 0.8, duration: 1 }}
        />

        <motion.p
          className="text-[#7A7A8E] text-lg md:text-xl max-w-2xl mx-auto font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          Desenvolvedor Full Stack com foco em React e Node.js
        </motion.p>
        
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-[#3D3D50] to-transparent my-10 mx-auto"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 1.2, duration: 0.8 }}
        />

        <motion.div
          className="flex gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <motion.a
            href="#projetos"
            className="px-8 py-4 bg-[#1C1C24] rounded-full font-medium text-[#C8C8D5] border border-[#3D3D50] hover:border-[#4A7A9B] hover:bg-[#1A2A3A] transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Projetos
          </motion.a>
          
          <motion.a
            href="#contato"
            className="px-8 py-4 text-[#7A7A8E] bg-transparent border border-[#2E2E3A] rounded-full hover:text-[#A8A8B8] hover:border-[#4A7A9B] hover:bg-[#1A2A3A] transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contato
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.div
          className="w-px bg-[#3D3D50]"
          initial={{ height: 0 }}
          animate={{ height: '48px' }}
          transition={{ delay: 1.5, duration: 1 }}
        />
        <span className="text-[10px] tracking-[0.2em] text-[#5A5A72] uppercase">scroll</span>
      </motion.div>
    </section>
  );
}
