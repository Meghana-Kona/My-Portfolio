import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Github, Linkedin, FileText, X, Download } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isResumeOpen, setResumeOpen] = useState(false);
  const fullText = "Hi, I'm Meghana ";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-section-hero">
      {/* Animated Background */}
      <div className="absolute inset-0" />

      {/* Removed floating orbs for plain background */}

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.p
            className="text-primary tracking-[0.3em] uppercase text-sm mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Welcome to my portfolio
          </motion.p>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight min-h-[1.2em]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="text-gradient">{text}</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 font-light tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Aspiring Software Engineer
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            onClick={() => setResumeOpen(true)}
            className="btn-gradient flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <FileText size={20} />
            Resume
          </motion.button>

          <div className="flex gap-4">
            <motion.a
              href="https://github.com/Meghana-Kona"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:border-primary/50 text-foreground transition-all shadow-sm hover:bg-primary/10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/meghana-kona-83a3b629a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:border-primary/50 text-foreground transition-all shadow-sm hover:bg-primary/10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={24} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      >
        <ChevronDown className="text-muted-foreground w-8 h-8" />
      </motion.div>

      {/* Resume Modal */}
      <AnimatePresence>
        {isResumeOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setResumeOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full h-[85vh] bg-background rounded-lg overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setResumeOpen(false)}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors z-10"
              >
                <X size={24} />
              </button>
              <a
                href="/Meghana_Resume (2)_page-0001.jpg"
                download="Meghana_Resume.jpg"
                className="absolute top-4 right-16 p-2 bg-primary hover:bg-primary/80 text-white rounded-full transition-colors z-10 flex items-center gap-2"
                title="Download Resume"
              >
                <Download size={20} />
              </a>
              <div className="w-full h-full overflow-auto bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
                <img
                  src="/Meghana_Resume (2)_page-0001.jpg"
                  alt="Meghana Resume"
                  className="max-w-full h-auto shadow-2xl"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;