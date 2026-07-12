"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const skills = [
    "Python", "FastAPI", "Django", "PyTorch", "PostgreSQL",
    "MongoDB", "Redis", "Docker", "AWS", "LLMs",
    "RAG", "LangChain", "Multi-Model Agents", "Git"
];

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
        period: "May 2023 - Sept 2025",
        description: "Deployed AI-agent workflows from scratch using Python function-calling patterns, focused on lightweight dependencies and simplified debugging. Built robust RAG pipelines, integrated vector databases, and contributed to modular backend architecture improvements.",
        skills: ["Python", "AI Agents", "Function Calling", "RAG", "Vector DB", "Gen AI"]
    }
];

export function Hero() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isResumeOpen, setIsResumeOpen] = useState(false);
    return (
        <section id="home" className="min-h-screen min-h-dvh flex items-center pt-8 pb-12 md:py-16 relative overflow-hidden bg-background">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flow-root md:grid md:grid-cols-12 gap-8 lg:gap-12 items-start"
                >
                    {/* Left Column Wrapper - contents style for mobile wrapper removal */}
                    <div className="contents md:block md:col-span-4 md:space-y-6">
                        {/* Name and Job Title Block */}
                        <div className="space-y-2 mb-4 md:mb-0">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-black tracking-tight leading-none text-foreground">
                                Pankaj Jarial
                            </h1>
                            <span className="text-muted-foreground font-sans font-light text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-normal block italic">
                                AI Software Engineer
                            </span>
                        </div>

                        {/* Profile Picture (Floated left on mobile, block grid element on desktop) */}
                        <div className="float-left w-[42%] max-w-[180px] mr-4 mb-3 aspect-[3/4] overflow-hidden border border-border bg-neutral-100 rounded-sm shadow-sm md:float-none md:w-full md:max-w-none md:mr-0 md:mb-0">
                            <img
                                src="/images/profile/IMG_8013~2.JPG"
                                alt="Pankaj Jarial Profile"
                                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                    </div>

                    {/* Right Column Wrapper - contents style for mobile wrapper removal */}
                    <div className="contents md:block md:col-span-8 md:space-y-6 md:border-l border-neutral-800/10 md:pl-8 md:pt-2">
                        {/* Section Header with Experience Badge */}
                        <div className="flex justify-between items-start gap-4 mb-4 md:mb-0">
                            <div className="pt-2">
                                <span className="text-xs md:text-sm font-mono tracking-wider text-secondary font-bold block">// Professional Journey</span>
                            </div>
                            
                            {/* Highlighted Experience Badge (Clickable to open Sidebar) */}
                            <button
                                onClick={() => setIsSidebarOpen(true)}
                                className="bg-[#FACC15] text-black border border-black px-3 py-1 font-mono text-[10px] sm:text-xs text-right rounded-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-[#FCD34D] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] cursor-pointer transition-all shrink-0"
                                title="Click to view work history"
                            >
                                <span className="block text-[8px] uppercase tracking-widest opacity-60 font-bold mb-0.5 animate-pulse">Click to View</span>
                                <div className="font-bold uppercase tracking-tight">3+ Years Exp</div>
                                <div className="opacity-80">Remote | India</div>
                            </button>
                        </div>

                        {/* Summary / Biography */}
                        <div className="space-y-4 text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed font-sans mb-6 md:mb-0">
                            <p className="dropcap text-foreground font-medium">
                                I&apos;m an AI Software Engineer with 3+ years of experience specializing in building production-grade AI systems, multi-model autonomous agents, and RAG architectures.
                            </p>
                            <p>
                                Leveraging Python, FastAPI, and PyTorch, I design, optimize, and deploy scalable LLM-driven applications that solve complex real-world challenges. My approach focuses on combining robust software engineering with the latest research in cognitive architectures and autonomous pipelines.
                            </p>
                        </div>

                        {/* Social & Contact Links */}
                        <div className="flex flex-wrap gap-x-6 gap-y-2.5 border-t border-b border-dashed border-neutral-300 py-3 font-sans text-xs sm:text-sm md:text-base clear-both md:clear-none mb-6 md:mb-0">
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

                        {/* Core Skills */}
                        <div className="space-y-3 mb-6 md:mb-0">
                            <span className="text-xs md:text-sm font-mono tracking-wider text-accent font-bold block">// Core Skills</span>
                            <div className="flex flex-wrap gap-1.5">
                                {skills.map((skill) => (
                                    <span key={skill} className="text-sm md:text-base px-2.5 py-1 border border-neutral-300 text-foreground font-semibold tracking-tight font-mono">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 max-w-md">
                            <Button size="default" variant="default" className="w-full sm:w-auto flex-1 text-sm md:text-base font-semibold cursor-pointer h-12" asChild>
                                <Link href="#projects">
                                    View Projects <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </Button>
                            
                            {/* Highlighted Resume Badge (Clickable to open Sidebar) */}
                            <button
                                onClick={() => setIsResumeOpen(true)}
                                className="bg-[#FCA5A5] text-black border border-black px-4 py-2 font-mono text-xs text-right rounded-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-[#F87171] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] cursor-pointer transition-all flex-1 w-full sm:w-auto h-12 flex flex-col justify-center items-center sm:items-end shrink-0"
                                title="Click to view resume"
                            >
                                <span className="block text-[8px] uppercase tracking-widest opacity-60 font-bold mb-0.5 animate-pulse">Click to View</span>
                                <div className="font-bold uppercase tracking-tight flex items-center gap-1 leading-none">
                                    Resume PDF <Download className="w-3.5 h-3.5" />
                                </div>
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Sidebar Drawer for Work History */}
            <AnimatePresence>
                {isSidebarOpen && (
                    <>
                        {/* Overlay backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsSidebarOpen(false)}
                            className="fixed inset-0 bg-black z-50 cursor-pointer"
                        />
                        {/* Sidebar Panel */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-full max-w-md bg-background border-l border-border z-50 shadow-2xl flex flex-col font-sans"
                        >
                            {/* Header */}
                            <div className="flex justify-between items-center px-6 py-5 border-b border-border">
                                <span className="font-mono text-sm tracking-wider text-secondary font-bold">// Experience & Work History</span>
                                <button
                                    onClick={() => setIsSidebarOpen(false)}
                                    className="p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors text-muted-foreground hover:text-foreground"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8">
                                {experiences.map((exp, index) => (
                                    <div key={index} className="space-y-3 pb-8 border-b border-neutral-800/10 last:border-0 last:pb-0">
                                        <div className="font-mono text-xs text-primary font-bold uppercase tracking-wider">
                                            {exp.period}
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="text-xl font-serif font-black text-foreground leading-tight">
                                                {exp.role}
                                            </h4>
                                            <div className="flex justify-between items-center text-xs font-mono text-muted-foreground pt-1">
                                                <span className="text-secondary font-bold uppercase tracking-wide">{exp.company}</span>
                                                <span>{exp.location}</span>
                                            </div>
                                        </div>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {exp.description}
                                        </p>
                                        <div className="flex flex-wrap gap-1 pt-1">
                                            {exp.skills.map((skill) => (
                                                <span key={skill} className="text-[10px] px-2 py-0.5 border border-neutral-300 text-muted-foreground uppercase tracking-tight font-mono">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Sidebar Drawer for Resume Viewer */}
            <AnimatePresence>
                {isResumeOpen && (
                    <>
                        {/* Overlay backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsResumeOpen(false)}
                            className="fixed inset-0 bg-black z-50 cursor-pointer"
                        />
                        {/* Sidebar Panel */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-full max-w-2xl bg-background border-l border-border z-50 shadow-2xl flex flex-col font-sans"
                        >
                            {/* Header */}
                            <div className="flex justify-between items-center px-6 py-5 border-b border-border">
                                <span className="font-mono text-sm tracking-wider text-secondary font-bold">// Curriculum Vitae</span>
                                <button
                                    onClick={() => setIsResumeOpen(false)}
                                    className="p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors text-muted-foreground hover:text-foreground"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Content (PDF Iframe) */}
                            <div className="flex-1 p-6 bg-neutral-50 dark:bg-neutral-950 flex flex-col">
                                <iframe
                                    src="/resume.pdf"
                                    title="Pankaj Jarial Resume"
                                    className="w-full flex-1 border border-border rounded-sm shadow-inner bg-white"
                                />
                            </div>

                            {/* Footer (Download Button) */}
                            <div className="p-6 border-t border-border bg-background">
                                <Button size="default" variant="default" className="w-full font-semibold uppercase tracking-wider text-sm cursor-pointer" asChild>
                                    <a href="/resume.pdf" download="Pankaj_Jarial_Resume.pdf">
                                        Download PDF <Download className="ml-2 w-4 h-4" />
                                    </a>
                                </Button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}
