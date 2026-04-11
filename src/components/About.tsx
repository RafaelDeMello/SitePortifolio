import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Laptop, Sparkles } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Clean Code",
      description: "Código limpo, manutenível e bem documentado"
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "Responsivo",
      description: "Interfaces que funcionam em qualquer dispositivo"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Performático",
      description: "Otimizado para velocidade e experiência"
    }
  ];

  return (
    <section id="sobre" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-violet-950/10 to-black" />
      
      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Sobre Mim
            </span>
          </h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 rounded-2xl blur-xl" />
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-white/10">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center">
                  <span className="text-6xl font-bold text-white">JS</span>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Sou um desenvolvedor apaixonado por criar soluções inovadoras. 
                  Com experiência em diversas tecnologias, transformo ideias em 
                  produtos digitais de alta qualidade.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="group"
              >
                <div className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/5 hover:border-violet-500/50 transition-colors">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-violet-500/20 to-cyan-500/20 text-violet-400 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
