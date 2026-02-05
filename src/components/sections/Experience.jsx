"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        role: "Associate AI Engineer",
        company: "smartData Enterprises Inc.",
        location: "Mohali, Punjab",
        period: "Sept 2025 - Present",
        description: "Working on traditional ML and AI Regulation projects. Building Computer Vision tools for object detection based on text prompts.",
        skills: ["Computer Vision", "ML", "AI Regulation"],
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
            skills: ["RAG", "Vector DB", "Gen AI"],
        },
    },
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
                    <h2 className="text-3xl font-bold tracking-tight text-foreground">
                        Professional Journey
                    </h2>
                    <p className="text-muted-foreground">
                        A timeline of my contributions to the industry.
                    </p>
                </div>

                {/* Main Timeline Container */}
                <div className="relative border-l-2 border-border ml-3 md:ml-6 space-y-16">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Main Role Dot (Centered on the border) */}
                            <span className="absolute -left-[9px] top-2 h-4 w-4 rounded-full border-2 border-background bg-primary z-10" />

                            {/* MAIN ROLE CONTENT */}
                            <div className="flex flex-col gap-4">
                                <div>
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                                        <h3 className="text-xl font-bold leading-none text-foreground">
                                            {exp.role}
                                        </h3>
                                        <span className="text-sm font-medium text-muted-foreground font-mono bg-muted px-2 py-0.5 rounded w-fit">
                                            {exp.period}
                                        </span>
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
                                        <span
                                            key={skill}
                                            className="text-xs font-medium text-primary/70 bg-primary/5 px-2 py-1 rounded"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* NESTED INTERN BRANCH (Git Graph Style) */}
                            {exp.intern && (
                                <div className="relative mt-8">
                                    {/* The Git Curve SVG */}
                                    {/* Positioning: Anchored exactly to the left edge of the content area, extending back to the timeline */}
                                    <svg
                                        className="absolute -left-[32px] md:-left-[48px] -top-6 text-border"
                                        width="60"
                                        height="120" // Height needs to be enough to reach the intern dot
                                        viewBox="0 0 60 120"
                                        fill="none"
                                        style={{ pointerEvents: 'none' }}
                                    >
                                        {/* Path Logic: 
                        M 1 0: Start at x=1 (inside the main border), y=0 (top)
                        V 20: Go straight down a bit
                        C 1 45 1 45 35 45: Cubic Bezier curve. 
                             Control points allow it to curve smoothly rightward.
                        H 60: Continue horizontal to the dot
                     */}
                                        <path
                                            d="M 1 0 V 20 C 1 45 25 45 45 45 H 60"
                                            stroke="currentColor" // Inherits text-border
                                            strokeWidth="2"
                                            fill="none"
                                        />
                                    </svg>

                                    {/* Intern Content Container */}
                                    {/* Indented further to show hierarchy */}
                                    <div className="relative pl-6 md:pl-8 pt-4">

                                        {/* Intern Dot (Git Commit Node) */}
                                        <span className="absolute -left-[3px] top-[26px] h-3 w-3 rounded-full border-2 border-background bg-muted-foreground z-10" />

                                        <div className="flex flex-col gap-3">
                                            <div>
                                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                                                    <h4 className="text-base font-semibold text-foreground/80">
                                                        {exp.intern.role}
                                                    </h4>
                                                    <span className="text-xs font-medium text-muted-foreground font-mono bg-muted px-2 py-0.5 rounded w-fit">
                                                        {exp.intern.period}
                                                    </span>
                                                </div>

                                                <div className="flex items-center text-muted-foreground text-xs">
                                                    <span>{exp.intern.company}</span>
                                                    <span className="mx-2">•</span>
                                                    <span>{exp.intern.location}</span>
                                                </div>
                                            </div>

                                            <p className="text-muted-foreground/70 text-sm max-w-xl">
                                                {exp.intern.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2">
                                                {exp.intern.skills.map((skill) => (
                                                    <span
                                                        key={skill}
                                                        className="text-[10px] font-medium text-muted-foreground/70 bg-muted/70 px-2 py-0.5 rounded"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}