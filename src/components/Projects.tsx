import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BarChart3, Wallet, Film, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    icon: BarChart3,
    title: 'Chronospeak',
    description: 'A time management or productivity application.',
    link: 'https://github.com/Meghana-Kona/Chronospeak',
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'hover:border-blue-500/50',
    glowColor: 'hover:shadow-blue-500/20',
  },
  {
    icon: Wallet,
    title: 'Student Budget Tracker',
    description: 'Full-stack application for expense tracking with budget limits and goals.',
    link: 'https://github.com/Meghana-Kona/Student-Budget-Tracker',
    color: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'hover:border-emerald-500/50',
    glowColor: 'hover:shadow-emerald-500/20',
  },
  {
    icon: BarChart3,
    title: 'Data Visualiser (DIV)',
    description: 'Web dashboard that converts datasets into interactive visualizations.',
    link: 'https://github.com/Meghana-Kona/DIV',
    color: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'hover:border-purple-500/50',
    glowColor: 'hover:shadow-purple-500/20',
  },
  {
    icon: Film,
    title: 'Mood-Based Movie Recommendation Chatbot',
    description: 'Recommends movies based on user mood and preferences.',
    link: 'https://github.com/Meghana-Kona',
    color: 'from-orange-500/20 to-red-500/20',
    borderColor: 'hover:border-orange-500/50',
    glowColor: 'hover:shadow-orange-500/20',
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-section-projects relative" ref={ref}>
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">
            My Work
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient flex items-center justify-center gap-3">
            <Film className="text-primary" size={40} /> Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            >
              <motion.div
                className={`glass-card-hover group relative overflow-hidden h-full border border-border/50 rounded-2xl bg-card/50 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10`}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Gradient Glow Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                {/* Cinema Overlay */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-10 dark:bg-black/60 dark:group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />


                <div className="relative p-8 flex flex-col h-full">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300 shadow-inner">
                    <project.icon className="text-primary" size={28} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    {project.title}
                    <ExternalLink
                      size={16}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-foreground/70"
                    />
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Github Button */}
                  <div className="mt-auto">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10 text-foreground transition-all duration-300 text-sm font-medium border border-border hover:border-primary/50"
                    >
                      <Github size={16} />
                      View on GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;