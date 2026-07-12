"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const projects = [
    {
        title: "django-rest-pgtenants",
        description: "A Python/Django package published on PyPI providing schema-based multi-tenancy for Django REST Framework. Utilizes PostgreSQL schemas for complete tenant isolation with middleware-driven request routing and dynamic tenant migration support.",
        tags: ["Python", "Django", "DRF", "PostgreSQL", "PyPI", "Middleware"],
        links: { demo: "https://pypi.org/project/django-rest-pgtenants/", repo: "https://github.com/pankiae/django-rest-pgtenants" }
    },
    {
        title: "Curico",
        description: "Multi-Model Agentic workflow generating steps for activity, Q&A, and images. Features Whisper + TTS voice tutor and Celery+Redis pipeline for off-loading tasks.",
        tags: ["Python", "Celery", "Redis", "Whisper", "TTS"],
        links: { demo: "https://play.curico.ai", repo: "#" }
    },
    {
        title: "Invisioned",
        description: "Integrated multiple LLMs (OpenAI, Stability AI, Claude) and CV models (GroundingDINO, SAM2). Cost-effective solution serving 6,000+ users.",
        tags: ["LLMs", "Computer Vision", "SAM2", "GroundingDINO"],
        links: { demo: "https://invisioned.io/", repo: "#" }
    },
    {
        title: "Image Seg AI",
        description: "Leveraging Meta's SAM2 for zero-shot object segmentation. Integrated OpenAI GPT-image-1 for AI-powered inpainting.",
        tags: ["Python", "PyTorch", "FastAPI", "SAM2"],
        links: { demo: "#", repo: "#" }
    },
];

export function Projects() {
    return (
        <section id="projects" className="container mx-auto px-6 py-12 md:py-16 space-y-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-3xl mx-auto space-y-4"
            >
                <h2 className="text-4xl md:text-5xl font-serif font-extrabold tracking-tight text-foreground">
                    Featured Projects
                </h2>
                <div className="w-12 h-0.5 bg-primary mx-auto my-3" />
                <p className="text-lg text-muted-foreground font-sans">
                    A selection of technical projects illustrating system design, AI implementation, and core engineering practices.
                </p>
            </motion.div>

            <div className="space-y-12 md:space-y-16">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
                    >
                        {/* Left Column: Metadata & Links */}
                        <div className="lg:col-span-4 space-y-4 font-mono">
                            <div className="text-sm text-primary font-bold">
                                Project 0{index + 1}
                            </div>
                            <div className="border-t border-neutral-800/10 pt-4 space-y-2">
                                <span className="text-[10px] text-muted-foreground uppercase tracking-widest block font-bold">Technologies</span>
                                <div className="flex flex-wrap gap-1.5">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-sm px-2.5 py-1 border border-neutral-300 text-foreground font-semibold tracking-tight">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            {((project.links.demo && project.links.demo !== "#") || (project.links.repo && project.links.repo !== "#")) && (
                                <div className="border-t border-neutral-800/10 pt-4 space-y-3">
                                    <span className="text-[10px] text-muted-foreground uppercase tracking-widest block font-bold">Links</span>
                                    <div className="flex flex-col sm:flex-row lg:flex-col gap-2">
                                        {project.links.demo && project.links.demo !== "#" && (
                                            <Button size="sm" variant="default" className="justify-start text-xs font-semibold" asChild>
                                                <Link href={project.links.demo} target="_blank">
                                                    {project.links.demo.includes("pypi.org") ? "PyPI Package" : "Live Demo"}
                                                </Link>
                                            </Button>
                                        )}
                                        {project.links.repo && project.links.repo !== "#" && (
                                            <Button size="sm" variant="outline" className="justify-start text-xs font-semibold" asChild>
                                                <Link href={project.links.repo} target="_blank">
                                                    Source Code
                                                </Link>
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Right Column: Title & Text Description */}
                        <div className="lg:col-span-8 space-y-4">
                            <h3 className="text-3xl font-serif font-black uppercase tracking-tight text-foreground">
                                {project.title}
                            </h3>
                            <div className="h-0.5 bg-neutral-800/20" />
                            <p className="text-base text-muted-foreground leading-relaxed font-sans">
                                {project.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
