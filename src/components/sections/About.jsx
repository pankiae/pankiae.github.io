"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skills = [
    "Python", "FastAPI", "Django", "PyTorch", "PostgreSQL",
    "MongoDB", "Redis", "Docker", "AWS", "LLMs",
    "RAG", "LangChain", "Multi-Model Agents", "Git"
];

export function About() {
    return (
        <section id="about" className="container mx-auto px-6 py-24 bg-muted/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold tracking-tight mb-8 text-foreground">About Me.</h2>
                    <div className="space-y-6 text-muted-foreground text-lg leading-relaxed font-light">
                        <p>
                            I&apos;m a <span className="font-medium text-foreground">Applied AI Engineer</span> dedicated to building scalable, production-grade AI systems.
                            My expertise lies in architecting LLM-driven applications, RAG pipelines, and autonomous multi-model agents.
                        </p>
                        <p>
                            With a strong foundation in Python, FastAPI, and PyTorch, I craft intelligent solutions that solve complex real-world problems.
                            I am constantly exploring the bleeding edge of AI to deliver impactful innovative software.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8"
                >
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-foreground border-l-2 border-primary pl-4">Technical Proficiency</h3>
                        <p className="text-sm text-muted-foreground">Core technologies and frameworks I use to build systems.</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill, index) => (
                            <Badge key={index} variant="secondary" className="text-sm py-1.5 px-3.5 bg-background border border-border text-foreground/80 rounded-full font-normal shadow-sm">
                                {skill}
                            </Badge>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
