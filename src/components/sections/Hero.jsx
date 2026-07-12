"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const skills = [
    "Python", "FastAPI", "Django", "PyTorch", "PostgreSQL",
    "MongoDB", "Redis", "Docker", "AWS", "LLMs",
    "RAG", "LangChain", "Multi-Model Agents", "Git"
];

export function Hero() {
    return (
        <section id="home" className="pt-8 pb-12 md:pt-12 md:pb-16 relative overflow-hidden bg-background">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-12 gap-4 sm:gap-8 lg:gap-12 items-start"
                >
                    {/* Left Column (5 cols on mobile, 4 on desktop): Name, Title, and Profile Pic */}
                    <div className="col-span-5 md:col-span-4 space-y-4 md:space-y-6">
                        <div className="space-y-2">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight leading-none text-foreground uppercase">
                                Pankaj Jarial
                            </h1>
                            <span className="text-muted-foreground font-sans font-light text-xl sm:text-2xl md:text-3xl tracking-normal block lowercase italic">
                                AI Software Engineer
                            </span>
                        </div>

                        {/* Profile Picture directly below Name & Title */}
                        <div className="relative aspect-[3/4] w-full overflow-hidden border border-border bg-neutral-100 rounded-sm shadow-sm">
                            <img
                                src="/images/profile/IMG_8013~2.JPG"
                                alt="Pankaj Jarial Profile"
                                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                    </div>

                    {/* Right Column (7 cols on mobile, 8 on desktop): Biography Summary, Experience Stats, and Core Skills */}
                    <div className="col-span-7 md:col-span-8 space-y-4 md:space-y-6 md:border-l border-neutral-800/10 pl-2 md:pl-8 pt-1 md:pt-2">
                        {/* Summary */}
                        <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed font-sans">
                            <p className="dropcap text-foreground font-medium">
                                I&apos;m an AI Software Engineer with 3+ years of experience specializing in building production-grade AI systems, multi-model autonomous agents, and RAG architectures.
                            </p>
                            <p>
                                Leveraging Python, FastAPI, and PyTorch, I design, optimize, and deploy scalable LLM-driven applications that solve complex real-world challenges. My approach focuses on combining robust software engineering with the latest research in cognitive architectures and autonomous pipelines.
                            </p>
                        </div>

                        {/* Social & Contact Links moved here under the Summary */}
                        <div className="flex flex-wrap gap-x-6 gap-y-2.5 border-t border-b border-dashed border-neutral-300 py-3 font-sans text-xs sm:text-sm">
                            <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                                <Github className="w-4 h-4 shrink-0 text-[#24292e]" />
                                <Link href="https://github.com/pankiae" target="_blank" className="hover:underline truncate text-foreground font-medium">
                                    github.com/pankiae
                                </Link>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                                <Linkedin className="w-4 h-4 shrink-0 text-[#0A66C2]" />
                                <Link href="https://linkedin.com/in/pankiae" target="_blank" className="hover:underline truncate text-foreground font-medium">
                                    linkedin.com/in/pankiae
                                </Link>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors">
                                <Mail className="w-4 h-4 shrink-0 text-[#EA4335]" />
                                <a href="mailto:pankajjarial.job@gmail.com" className="hover:underline truncate text-foreground font-medium">
                                    pankajjarial.job@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Experience Specifications */}
                        <div className="space-y-2">
                            <span className="text-xs font-mono uppercase tracking-wider text-secondary font-bold block">// Experience & Details</span>
                            <div className="space-y-2 font-mono text-xs sm:text-sm max-w-md">
                                <div className="flex justify-between border-b border-dashed border-neutral-300 pb-1">
                                    <span className="text-muted-foreground">Experience:</span>
                                    <span className="font-bold text-foreground">3+ Years</span>
                                </div>
                                <div className="flex justify-between border-b border-dashed border-neutral-300 pb-1">
                                    <span className="text-muted-foreground">Location:</span>
                                    <span className="font-bold text-foreground">Remote | India</span>
                                </div>
                            </div>
                        </div>

                        <div className="h-px bg-neutral-800/10" />

                        {/* Core Skills */}
                        <div className="space-y-3">
                            <span className="text-xs font-mono uppercase tracking-wider text-accent font-bold block">// Core Skills</span>
                            <div className="flex flex-wrap gap-1.5">
                                {skills.map((skill) => (
                                    <span key={skill} className="text-xs px-2 py-0.5 border border-neutral-300 text-muted-foreground uppercase tracking-tight font-mono">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-4 max-w-md">
                            <Button size="default" variant="default" className="flex-1" asChild>
                                <Link href="#projects">
                                    View Projects <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </Button>
                            <Button size="default" variant="outline" className="flex-1" asChild>
                                <Link href="/resume.pdf" target="_blank">
                                    Resume <Download className="ml-2 w-4 h-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
