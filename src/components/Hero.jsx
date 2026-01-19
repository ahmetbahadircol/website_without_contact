import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/10 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                        className="mb-4 flex items-center justify-center gap-2"
                    >
                        <h2 className="text-blue-500 font-medium tracking-wide text-lg">Hi, I'm</h2>
                        <motion.span
                            animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut",
                                repeatDelay: 2
                            }}
                            style={{ display: 'inline-block', originX: 0.7, originY: 0.7 }}
                            className="text-2xl"
                        >
                            👋
                        </motion.span>
                    </motion.div>
                    <h1 className="text-5xl md:text-7xl font-bold text-dark-text mb-6 tracking-tight">
                        Ahmet Col
                    </h1>
                    <h3 className="text-2xl md:text-4xl text-gray-400 mb-8 font-light">
                        Software Engineer
                    </h3>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex justify-center gap-4"
                    >
                        <Magnetic>
                            <a
                                href="#contact"
                                className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                            >
                                Contact Me
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                className="inline-block px-8 py-3 bg-dark-card border border-gray-700 hover:border-blue-500 text-gray-300 hover:text-white rounded-full font-medium transition-all duration-300"
                            >
                                Resume
                            </a>
                        </Magnetic>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
