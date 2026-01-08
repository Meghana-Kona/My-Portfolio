import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50 bg-gradient-to-b from-background to-secondary/40 relative overflow-hidden">
      {/* Subtle animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Name (Left) */}
          <div className="text-center md:text-left">
            <p className="text-2xl font-display font-bold text-gradient inline-block">Meghana Kona</p>
            <p className="text-muted-foreground text-sm mt-1">Aspiring Software Engineer</p>
          </div>

          {/* Navigation (Center) */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#home" className="hover:text-primary transition-colors">Home</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>

          {/* Social Icons (Right) */}
          <div className="flex items-center gap-4">
            <a href="https://github.com/Meghana-Kona" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 text-foreground hover:text-primary transition-all hover:scale-110">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/meghana-kona-83a3b629a/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 text-foreground hover:text-primary transition-all hover:scale-110">
              <Linkedin size={20} />
            </a>
            <a href="mailto:konameghana0517@gmail.com" className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 text-foreground hover:text-primary transition-all hover:scale-110">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-muted-foreground text-xs text-center border-t border-white/5 mt-12 pt-8">
          © {new Date().getFullYear()} Meghana Kona. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;