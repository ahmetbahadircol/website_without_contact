import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-dark-bg relative">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold text-dark-text mb-8 border-l-4 border-blue-500 pl-4">
                        About Me
                    </h2>
                    <div className="text-gray-300 space-y-6 leading-relaxed text-lg">
                        <p>
                            My relationship with Information Technology goes back to before my undergraduate education.
                            Even when I was not familiar with software yet, I spent my summer months working in Technical
                            Service departments of various institutions for short periods. In this process, I saw that my
                            social and technical skills were prone to the field of engineering and I chose Industrial
                            Engineering, which is a field where I can integrate my skills in these fields in my education life.
                        </p>
                        <p>
                            I have built my professional career on these skills. In addition to my business life,
                            I continue to work as a hobby and include software-based works such as RPA projects and
                            Web site development projects.
                        </p>
                        <p>
                            Besides, dealing with Opera and Musical, watching movies and improving myself about
                            Turkish and Italian cuisine are among my hobbies.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
