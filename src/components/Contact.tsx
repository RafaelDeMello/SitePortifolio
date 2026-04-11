import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Mail, Linkedin, Github } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contato" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-violet-950/20 to-black" />
      
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Vamos Conversar
            </span>
          </h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
          <p className="text-gray-400 mt-4">
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
              <div>
                <motion.input
                  type="text"
                  placeholder="Seu nome"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-6 py-4 bg-white/5 rounded-xl border border-white/10 focus:border-violet-500 focus:outline-none text-white placeholder-gray-500 transition-colors"
                  whileFocus={{ scale: 1.02 }}
                  required
                />
              </div>
              <div>
                <motion.input
                  type="email"
                  placeholder="Seu email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-6 py-4 bg-white/5 rounded-xl border border-white/10 focus:border-violet-500 focus:outline-none text-white placeholder-gray-500 transition-colors"
                  whileFocus={{ scale: 1.02 }}
                  required
                />
              </div>
              <div>
                <motion.textarea
                  placeholder="Sua mensagem"
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-6 py-4 bg-white/5 rounded-xl border border-white/10 focus:border-violet-500 focus:outline-none text-white placeholder-gray-500 transition-colors resize-none"
                  whileFocus={{ scale: 1.02 }}
                  required
                />
              </div>
              
              <motion.button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-xl font-semibold text-white flex items-center justify-center gap-2 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {submitted ? (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-green-400"
                  >
                    Mensagem enviada!
                  </motion.span>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
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
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Conecte-se</h3>
            
            {[
              { icon: Mail, label: 'email@exemplo.com', href: 'mailto:email@exemplo.com' },
              { icon: Github, label: 'github.com/usuario', href: 'https://github.com' },
              { icon: Linkedin, label: 'linkedin.com/in/usuario', href: 'https://linkedin.com' }
            ].map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-violet-500/50 transition-colors group"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <div className="p-3 bg-gradient-to-br from-violet-500/20 to-cyan-500/20 rounded-lg text-violet-400 group-hover:text-violet-300">
                  <item.icon className="w-6 h-6" />
                </div>
                <span className="text-gray-300">{item.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
