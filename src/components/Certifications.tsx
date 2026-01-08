import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X, Eye } from 'lucide-react';

const certifications = [
    {
        title: 'SAP Certified Associate - Back-End Developer - ABAP Cloud',
        issuer: 'SAP',
        image: 'https://placehold.co/600x400/1e293b/white?text=SAP+ABAP+Cloud', // Thumbnail placeholder
        link: '/certificates/sap-certification.jpg', // Actual Image
        date: '2024'
    },
    {
        title: 'Python (Basic)',
        issuer: 'HackerRank',
        image: 'https://placehold.co/600x400/1e293b/white?text=HackerRank+Python', // Thumbnail placeholder
        link: '/certificates/python-basic-certificate.jpg', // Actual Image
        date: '2024'
    }
];

const Certifications = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [selectedCert, setSelectedCert] = useState<string | null>(null);

    return (
        <section id="certifications" className="section-padding relative bg-section-certifications" ref={ref}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

            <div className="max-w-6xl mx-auto relative px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">
                        Credentials
                    </p>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient">
                        Certifications
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="glass-card overflow-hidden group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300"
                        >
                            <div className="relative aspect-video overflow-hidden cursor-pointer" onClick={() => setSelectedCert(cert.link)}>
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedCert(cert.link);
                                        }}
                                        className="btn-outline-cinematic text-sm bg-background/80 backdrop-blur-md border-border text-foreground hover:bg-background/90 flex items-center gap-2"
                                    >
                                        <Eye size={16} /> View Certificate
                                    </button>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
                                <p className="text-muted-foreground text-sm">{cert.issuer} • {cert.date}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal for Certificate Preview */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
                        onClick={() => setSelectedCert(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-4xl max-h-[90vh] w-full bg-background rounded-lg overflow-hidden shadow-2xl border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedCert(null)}
                                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors z-10"
                            >
                                <X size={24} />
                            </button>
                            <div className="w-full h-full overflow-auto flex items-center justify-center bg-black">
                                {/* Check if it's a PDF (though user said JPG now, handle generic image) */}
                                <img src={selectedCert} alt="Certificate Preview" className="max-w-full max-h-[85vh] object-contain" />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Certifications;
