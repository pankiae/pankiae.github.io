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
        <section id="about" className="container mx-auto px-6 py-12 md:py-20 bg-blue-50/60">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">About Me</h2>
                    <div className="space-y-4 text-muted-foreground text-lg">
                        <p>
                            I&apos;m a Generative AI Engineer with a passion for building scalable, production-grade AI systems.
                            My expertise lies in developing LLM-driven applications, RAG architectures, and multi-model AI agents.
                        </p>
                        <p>
                            I have experience working with Python, FastAPI, and PyTorch to create intelligent solutions that solve real-world problems.
                            I enjoy exploring new technologies and contributing to the AI community.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8"
                >
                    <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill, index) => (
                            <Badge key={index} variant="secondary" className="text-base py-1 px-3">
                                {skill}
                            </Badge>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
