import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-dark-surface">
            <div className="container mx-auto px-6 max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold text-dark-text mb-8">Get In Touch</h2>
                    <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
                        I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
                        <a
                            href="mailto:ahmetbahadircol@gmail.com"
                            className="flex items-center justify-center gap-3 px-6 py-4 bg-dark-card border border-gray-800 rounded-lg hover:border-blue-500 hover:text-blue-400 transition-all group"
                        >
                            <Mail size={20} className="text-gray-500 group-hover:text-blue-500 transition-colors" />
                            <span className="text-gray-300 group-hover:text-white">ahmetbahadircol@gmail.com</span>
                        </a>

                        {/* Placeholder for location if desired */}
                        <div className="flex items-center justify-center gap-3 px-6 py-4 bg-dark-card border border-gray-800 rounded-lg">
                            <MapPin size={20} className="text-gray-500" />
                            <span className="text-gray-300">Canada, ON</span>
                        </div>

                        <a
                            href="tel:+14374630322"
                            className="flex items-center justify-center gap-3 px-6 py-4 bg-dark-card border border-gray-800 rounded-lg hover:border-blue-500 hover:text-blue-400 transition-all group"
                        >
                            <Phone size={20} className="text-gray-500 group-hover:text-blue-500 transition-colors" />
                            <span className="text-gray-300 group-hover:text-white">+1 437 463 0322</span>
                        </a>
                    </div>

                    <div className="flex justify-center gap-8">
                        <a href="https://github.com/ahmetbahadircol" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Github size={28} />
                        </a>
                        <a href="https://linkedin.com/in/ahmetbahadircol" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
                            <Linkedin size={28} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
