import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Calendar, Briefcase, GraduationCap } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const experiences = [
    {
        company: "TMX Group",
        role: "Full Stack Engineer",
        period: "April 2026 - Present",
        description: "Contributing to full stack development projects.",
        icon: Briefcase
    },
    {
        company: "Mamamest",
        role: "Full Stack Engineer - Part Time",
        period: "May 2025 - April 2026",
        description: "Contributing to full stack development projects.",
        icon: Briefcase
    },
    {
        company: "Plentific",
        role: "Backend Software Engineer",
        period: "March 2022 - Feb 2024",
        description: "Developed and maintained backend services.",
        icon: Briefcase
    },
    {
        company: "Atiker Software",
        role: "ERP Project Specialist",
        period: "March 2020 - March 2022",
        description: "Specialized in ERP project implementation and database management.",
        icon: Briefcase
    },
    {
        company: "TUSAS",
        role: "Engineering Intern",
        period: "Nov 2018 - May 2019",
        description: "Managed digital transformation, implemented machine learning with Elasticsearch/Kibana, and worked with IoT data.",
        icon: Briefcase
    },
    {
        company: "MAN",
        role: "Graduation Project Student",
        period: "Aug 2018 - May 2019",
        description: "Created database and interface for CFT Team assignment using MS Access.",
        icon: Briefcase
    },
    {
        company: "Hacettepe University",
        role: "Bachelor's in Industrial Engineering",
        period: "Sep 2014 - Jun 2019",
        description: "Final Grade: 3.12. Thesis on Cross Functional Team Allocation.",
        icon: GraduationCap
    }
];

const Experience = () => {
    return (
        <section id="work" className="py-20 bg-dark-bg">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-dark-text mb-12 border-l-4 border-blue-500 pl-4"
                >
                    Work Experience & Education
                </motion.h2>

                <div className="space-y-12 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-gray-800 md:left-1/2 md:-ml-0.5" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-8 -ml-3 md:left-1/2 md:-ml-3 w-6 h-6 bg-blue-500 rounded-full border-4 border-dark-bg z-10" />

                            {/* Content */}
                            <div className="ml-20 md:ml-0 md:w-1/2 pr-0 md:px-8">
                                <SpotlightCard className={`p-6 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                    <h3 className="text-xl font-bold text-white mb-1">{exp.company}</h3>
                                    <h4 className="text-blue-400 font-medium mb-3 flex items-center md:inline-flex gap-2">
                                        {exp.logo ? (
                                            <img
                                                src={exp.logo}
                                                alt={`${exp.company} logo`}
                                                className={`w-6 h-6 object-contain hidden md:inline ${index % 2 !== 0 ? 'order-last' : ''}`}
                                            />
                                        ) : (
                                            <exp.icon size={16} className={`hidden md:inline ${index % 2 !== 0 ? 'order-last' : ''}`} />
                                        )}
                                        {exp.role}
                                    </h4>
                                    <div className={`flex items-center text-gray-500 text-sm mb-4 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                                        }`}>
                                        <Calendar size={14} className="mr-2" />
                                        {exp.period}
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {exp.description}
                                    </p>
                                </SpotlightCard>
                            </div>

                            {/* Empty Space for alternate side */}
                            <div className="hidden md:block md:w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
