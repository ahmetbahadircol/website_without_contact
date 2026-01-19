import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';

const skills = [
    "Software Engineering",
    "Python (Django, Pandas, NumPy)",
    "API Development & Integration (Restful)",
    "SQL (Postgres, MySQL, MS SQL)",
    "JavaScript (ES6+)",
    "React & React Native",
    "Version Control (Git & GitHub)",
    "CI/CD Pipelines",
    "Unit Testing & Test Automation",
    "Object Oriented Programming (OOP)",
    "Design Patterns (MVC, MVVM)",
    "Agile Methodologies",
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-dark-surface">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-dark-text mb-12 border-l-4 border-blue-500 pl-4"
                >
                    Skills & Qualifications
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <SpotlightCard className="p-6 h-full flex items-center group">
                                <h3 className="text-gray-300 font-medium group-hover:text-blue-400 transition-colors">
                                    {skill}
                                </h3>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
