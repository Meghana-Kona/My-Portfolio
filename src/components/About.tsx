import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative bg-section-about" ref={ref}>
      <div className="max-w-4xl mx-auto relative px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">
            Get to Know Me
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient">
            About Me
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-lg dark:prose-invert mx-auto text-center"
        >
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I am a motivated Computer Science Engineering (Data Science) student
            passionate about building data-driven and user-focused web applications.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            My objective is to leverage my skills in data science and web development to create meaningful digital experiences.
            I strongly believe in the power of continuous learning and am always eager to explore new technologies to solve real-world problems.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            As a fresher, I bring a fresh perspective, strong foundational knowledge, and a dedication to quality code.
            I have completed various certifications and projects that demonstrate my commitment to this field.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;