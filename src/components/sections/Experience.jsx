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
        <section id="experience" className="container mx-auto px-6 py-6 md:py-10 bg-yellow-50/60">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-6 md:gap-10"
            >
                <div className="flex flex-col gap-4 items-center text-center">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Experience</h2>
                    <p className="text-muted-foreground max-w-2xl">
                        My professional journey in the tech industry.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto w-full space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                                <CardHeader>
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                                        <div>
                                            <CardTitle className="text-xl">{exp.role}</CardTitle>
                                            <CardDescription className="text-base font-medium mt-1">{exp.company}</CardDescription>
                                        </div>
                                        <div className="text-sm text-muted-foreground text-right">
                                            <div>{exp.period}</div>
                                            <div>{exp.location}</div>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-muted-foreground">{exp.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.skills.map((skill) => (
                                            <Badge key={skill} variant="outline" className="text-xs">
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
