import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Mail, Github, Linkedin, MessageCircle } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contato" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-[#121217]" />
      
      <motion.div
        ref={ref}
        className="max-w-4xl mx-auto relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight bg-gradient-to-r from-[#E8E8EE] via-[#A8A8B8] to-[#8BAEC8] bg-clip-text text-transparent">
            Vamos Conversar
          </h2>
          <motion.div
            className="w-16 h-px bg-[#3D3D50] mx-auto"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
          <p className="text-[#7A7A8E] mt-4">
            Tem um projeto em mente? Entre em contato!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                placeholder="Seu nome"
                className="w-full px-6 py-4 bg-[#0A0A0C] rounded-lg border border-[#2E2E3A] focus:border-[#4A7A9B] focus:outline-none text-[#E8E8EE] placeholder-[#5A5A72] transition-colors"
                required
              />
              <input
                type="email"
                placeholder="Seu email"
                className="w-full px-6 py-4 bg-[#0A0A0C] rounded-lg border border-[#2E2E3A] focus:border-[#4A7A9B] focus:outline-none text-[#E8E8EE] placeholder-[#5A5A72] transition-colors"
                required
              />
              <textarea
                placeholder="Sua mensagem"
                rows={5}
                className="w-full px-6 py-4 bg-[#0A0A0C] rounded-lg border border-[#2E2E3A] focus:border-[#4A7A9B] focus:outline-none text-[#E8E8EE] placeholder-[#5A5A72] transition-colors resize-none"
                required
              />
              
              <motion.button
                type="submit"
                className="w-full py-4 bg-[#1A2A3A] rounded-lg font-medium text-[#8BAEC8] border border-[#2A4A6A] hover:bg-[#1E2F45] hover:border-[#4A7A9B] transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {submitted ? "Mensagem enviada!" : (
                  <>
                    <Send className="w-4 h-4" />
                    Enviar Mensagem
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-medium text-[#E8E8EE] mb-6">Conecte-se</h3>
            
            {[
              { icon: Mail, label: 'rafaeldemello2023@gmail.com', href: 'mailto:rafaeldemello2023@gmail.com' },
              { icon: Github, label: 'github.com/RafaelDeMello', href: 'https://github.com/RafaelDeMello' },
              { icon: Linkedin, label: 'linkedin.com/in/rafaeldemellodev', href: 'https://www.linkedin.com/in/rafaeldemellodev' },
              { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/559996471085' }
            ].map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#0A0A0C] rounded-lg border border-[#2E2E3A] hover:border-[#4A7A9B] transition-colors group"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <div className="p-2 bg-[#1C1C24] rounded text-[#5A5A72] group-hover:text-[#8BAEC8] transition-colors">
                  <item.icon className="w-5 h-5" />
                </div>
                <span className="text-[#7A7A8E] text-sm group-hover:text-[#A8A8B8] transition-colors">{item.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
