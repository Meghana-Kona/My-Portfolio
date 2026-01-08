import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const educationData = [
  {
    icon: GraduationCap,
    degree: 'B.Tech – CSE (Data Science)',
    institution: 'Srinivasa Ramanujan Institute of Technology',
    period: '2022 – 2026',
    grade: 'CGPA: 8.89',
  },
  {
    icon: BookOpen,
    degree: 'Intermediate (MPC)',
    institution: 'Higher Secondary Education',
    period: 'Completed',
    grade: '90%',
  },
  {
    icon: Award,
    degree: 'SSC',
    institution: 'Secondary School Education',
    period: 'Completed',
    grade: '91%',
  },
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">
            My Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient flex items-center gap-3">
            <BookOpen className="text-primary" size={40} /> SCHOOL EDUCATION
          </h2>
        </motion.div>

        {/* Horizontal Timeline Container */}
        <div className="relative mt-20">
          {/* Horizontal Line */}
          <div className="hidden md:block absolute top-[40px] left-0 right-0 h-0.5 bg-border/50" />

          <div className="flex flex-col md:flex-row justify-between relative">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex flex-col md:w-1/3 group"
              >
                {/* Icon/Node on the line */}
                <div className="hidden md:flex flex-col items-center mb-8 relative z-10">
                  <div className="w-20 h-20 bg-background border border-border rounded-full flex items-center justify-center mb-4 relative z-10 shadow-lg group-hover:border-primary transition-colors duration-300">
                    {/* Building Icons - Using generic building-like visual or placeholder */}
                    <div className="p-4 bg-primary/10 rounded-full">
                      <item.icon className="text-primary w-8 h-8" />
                    </div>
                  </div>
                  {/* Connection to line */}
                  {/* We don't strictly need a vertical connector if the dot sits on the line, but let's adjust styling to match the reference where icons float above */}
                </div>

                {/* Content */}
                <div className="md:px-4 md:text-left pl-8 border-l-2 border-border/50 md:border-l-0 ml-4 md:ml-0 pb-12 md:pb-0">
                  {/* Mobile Node */}
                  <div className="absolute left-[-21px] top-0 w-10 h-10 bg-background border border-border rounded-full flex md:hidden items-center justify-center">
                    <item.icon size={20} className="text-foreground" />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-2">{item.institution}</h3>
                  <p className="text-foreground/80 mb-1">{item.degree}</p>
                  <p className="text-muted-foreground mb-4">{item.period}</p>

                  <div className="text-foreground/80">
                    {item.grade}
                    {/* Detailed subjects could act as the list in reference */}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;