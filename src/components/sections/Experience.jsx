"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
    {
        role: "Associate AI Engineer",
        company: "smartData Enterprises Inc.",
        location: "Mohali, Punjab",
        period: "Sept 2025 - Present",
        description: "Working on traditional ML and AI Regulation projects. Building Computer Vision tools for object detection based on text prompts.",
        skills: ["Computer Vision", "ML", "AI Regulation"]
    },
    {
        role: "Jr. Python Engineer",
        company: "Tricky WebSolutions Pvt. Ltd.",
        location: "Mohali, Punjab",
        period: "Aug 2024 - Sept 2025",
        description: "Deployed AI-agent workflows from scratch using Python function-calling patterns. Focused on lightweight dependencies and simplified debugging.",
        skills: ["Python", "AI Agents", "Function Calling"],
        intern: {
            role: "Research Intern",
            company: "Tricky WebSolutions Pvt. Ltd.",
            location: "Mohali, Punjab",
            period: "May 2023 - July 2024",
            description: "Gained exposure to Gen AI tools, RAG, and vector databases. Contributed to legacy projects and modular architecture improvements.",
            skills: ["RAG", "Vector DB", "Gen AI"]
        }
    }
];

export function Experience() {
    return (
        <section id="experience" className="container mx-auto px-6 py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto space-y-12"
            >
                <div className="flex flex-col gap-4">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground">Professional Journey</h2>
                    <p className="text-muted-foreground">
                        A timeline of my contributions to the industry.
                    </p>
                </div>

                <div className="relative border-l border-border ml-3 md:ml-6 space-y-12 pl-8 md:pl-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative"
                        >
                            {/* Timeline Dot */}
                            <span className="absolute -left-[41px] md:-left-[57.5px] top-1 h-5 w-5 rounded-full border-4 border-background bg-primary" />

                            <div className="flex flex-col gap-4">
                                <div>
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                                        <h3 className="text-xl font-bold leading-none text-foreground">{exp.role}</h3>
                                        <span className="text-sm font-medium text-muted-foreground font-mono bg-muted px-2 py-0.5 rounded">{exp.period}</span>
                                    </div>
                                    <div className="flex items-center text-muted-foreground text-sm font-medium">
                                        <span className="text-primary/80">{exp.company}</span>
                                        <span className="mx-2">•</span>
                                        <span>{exp.location}</span>
                                    </div>
                                </div>

                                <p className="text-muted-foreground leading-relaxed text-base max-w-2xl">
                                    {exp.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {exp.skills.map((skill) => (
                                        <span key={skill} className="text-xs font-medium text-primary/70 bg-primary/5 px-2 py-1 rounded">
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
