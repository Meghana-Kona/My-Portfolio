import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Database, Code2, Layout, Smartphone } from 'lucide-react';

const skillCategories = [
    {
        title: "Programming Languages",
        icon: Smartphone,
        skills: [
            { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        ]
    },
    {
        title: "Frontend",
        icon: Layout,
        skills: [
            { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
            { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        ]
    },
    {
        title: "Database",
        icon: Database,
        skills: [
            { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        ]
    },
    {
        title: "Data & Analytics Tools",
        icon: Code2,
        skills: [
            { name: 'Microsoft Excel', icon: 'https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_excel.svg' },
            { name: 'Power BI', icon: 'https://cdn.worldvectorlogo.com/logos/power-bi.svg' },
        ]
    }
];

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="skills" className="section-padding relative" ref={ref}>
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient flex items-center gap-3">
                        <Layout className="text-primary" size={40} /> Skills
                    </h2>
                </motion.div>

                <div className="space-y-24">
                    {skillCategories.map((category, categoryIndex) => (
                        <div key={category.title} className="flex flex-col items-center">
                            {/* Category Header */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.2 + (categoryIndex * 0.1) }}
                                className="flex items-center gap-3 mb-10"
                            >
                                <h3 className="text-2xl font-bold text-foreground flex items-center gap-3">
                                    {indexToIcon(categoryIndex)} {category.title}
                                </h3>
                            </motion.div>

                            {/* Skills Grid - Rectangular Cards */}
                            <motion.div
                                className="flex flex-wrap justify-center gap-8"
                                initial="hidden"
                                animate={isInView ? "show" : "hidden"}
                                variants={{
                                    show: { transition: { staggerChildren: 0.1 } }
                                }}
                            >
                                {category.skills.map((skill) => (
                                    <motion.div
                                        key={skill.name}
                                        variants={{
                                            hidden: { opacity: 0, scale: 0.8 },
                                            show: { opacity: 1, scale: 1 }
                                        }}
                                        className="bg-card/50 border border-border rounded-2xl p-6 flex flex-col items-center gap-4 w-64 hover:bg-card/80 transition-colors duration-300 group shadow-md"
                                        whileHover={{ y: -5, scale: 1.02 }}
                                    >
                                        <div className="w-16 h-16 relative flex items-center justify-center">
                                            <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain filter drop-shadow-md" />
                                        </div>
                                        <span className="text-sm font-bold text-foreground text-center uppercase tracking-wide">{skill.name}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Helper to pick an icon based on index
const indexToIcon = (index: number) => {
    if (index === 0) return <Smartphone size={28} className="text-blue-400" />;
    if (index === 1) return <Layout size={28} className="text-cyan-400" />;
    if (index === 2) return <Database size={28} className="text-purple-400" />;
    return <Code2 size={28} className="text-green-400" />;
}

export default Skills;
