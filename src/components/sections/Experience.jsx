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

                {/* Main Timeline Rail */}
                {/* We use a very faint border for the main rail, so the active branch stands out */}
                <div className="relative border-l-2 border-border/30 ml-3 md:ml-6 space-y-16">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Parent Dot */}
                            <span className="absolute -left-[9px] top-2 h-4 w-4 rounded-full border-2 border-background bg-foreground z-20 shadow-sm" />

                            {/* === THE CONNECTOR STEM === */}
                            {/* This draws a solid line from the Top Dot down to the Intern Section */}
                            {exp.intern && (
                                <div
                                    className="absolute -left-[1px] top-6 bottom-0 w-[2px] bg-foreground/80 z-10"
                                    style={{
                                        // Calculates height to stop exactly where the curve starts
                                        // 'bottom-8' aligns roughly with the top of the intern block
                                        bottom: "2.5rem"
                                    }}
                                />
                            )}

                            {/* Main Role Content */}
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
                                        <span className="text-foreground/80">{exp.company}</span>
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
                                            className="text-xs font-medium text-primary/80 bg-primary/10 px-2 py-1 rounded"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Nested Intern Block */}
                            {exp.intern && (
                                <div className="relative mt-10">

                                    {/* === THE CURVE (Git Elbow) === */}
                                    {/* Anchored to the left rail. Matches the color of the Stem. */}
                                    <svg
                                        className="absolute -left-[32px] md:-left-[48px] -top-[24px] text-foreground/80 z-10"
                                        width="60"
                                        height="60"
                                        viewBox="0 0 60 60"
                                        fill="none"
                                        style={{ pointerEvents: 'none' }}
                                    >
                                        {/* M 1 0: Starts at x=1 (center of 2px border)
                       v 10: Goes down 10px to ensure overlap with the stem
                       c 0 25 20 25 50 25: Smooth curve to the right
                    */}
                                        <path
                                            d="M 1 0 v 10 c 0 25 20 25 50 25"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            fill="none"
                                        />
                                    </svg>

                                    {/* Intern Content */}
                                    <div className="relative pl-6 md:pl-8 pt-2">
                                        {/* Intern Dot */}
                                        <span className="absolute -left-[3px] top-[10px] h-3 w-3 rounded-full border-2 border-background bg-muted-foreground z-20" />

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
                                                {/* ... rest of content ... */}
                                                <p className="text-muted-foreground/70 text-sm max-w-xl">
                                                    {exp.intern.description}
                                                </p>
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