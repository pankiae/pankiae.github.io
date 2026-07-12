"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
    {
        role: "AI/ML Engineer Associate - level 3",
        company: "smartData Enterprises Inc.",
        location: "Mohali, Punjab",
        period: "Sept 2025 - Present",
        description: "Working on traditional ML and AI Regulation projects. Building Computer Vision tools for object detection based on text prompts.",
        skills: ["Computer Vision", "ML", "AI Regulation"]
    },
    {
        role: "Gen AI Python Engineer",
        company: "Tricky WebSolutions Pvt. Ltd.",
        location: "Mohali, Punjab",
        period: "Aug 2024 - Sept 2025",
        description: "Deployed AI-agent workflows from scratch using Python function-calling patterns. Focused on lightweight dependencies and simplified debugging.",
        skills: ["Python", "AI Agents", "Function Calling"]
    },
    {
        role: "Research Intern",
        company: "Tricky WebSolutions Pvt. Ltd.",
        location: "Mohali, Punjab",
        period: "May 2023 - July 2024",
        description: "Gained exposure to Gen AI tools, RAG, and vector databases. Contributed to legacy projects and modular architecture improvements.",
        skills: ["RAG", "Vector DB", "Gen AI"]
    }
];

export function Experience() {
    return (
        <section id="experience" className="container mx-auto px-6 py-12 md:py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-4 md:gap-6"
            >
                <div className="flex flex-col gap-4 items-center text-center">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold tracking-tight text-foreground">Experience</h2>
                    <div className="w-12 h-0.5 bg-primary my-1" />
                    <p className="text-muted-foreground max-w-2xl font-sans text-base md:text-lg">
                        My professional journey in the tech industry.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto w-full space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 pt-8 border-t border-neutral-800/10"
                        >
                            {/* Time & Location sidebar column */}
                            <div className="md:col-span-3 font-mono text-xs md:text-sm text-muted-foreground uppercase space-y-1">
                                <div className="text-primary font-bold">{exp.period}</div>
                                <div>{exp.location}</div>
                            </div>

                            {/* Job details column */}
                            <div className="md:col-span-9 space-y-4">
                                <div className="space-y-1">
                                    <h3 className="text-2xl lg:text-3xl font-serif font-black tracking-tight text-foreground">{exp.role}</h3>
                                    <h4 className="text-sm md:text-base font-mono tracking-wider text-secondary font-bold">{exp.company}</h4>
                                </div>
                                <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-sans">{exp.description}</p>
                                <div className="flex flex-wrap gap-1.5 pt-2">
                                    {exp.skills.map((skill) => (
                                        <span key={skill} className="text-xs md:text-sm px-2 py-0.5 border border-neutral-300 text-muted-foreground uppercase tracking-tight font-mono">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
