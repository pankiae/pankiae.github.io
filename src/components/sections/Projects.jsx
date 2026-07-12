"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Package, Globe, Cpu, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const projects = [
    {
        title: "django-rest-pgtenants",
        category: "Open Source",
        type: "Open-Source Package",
        iconName: "Package",
        description: "A lightweight, zero-monkeypatching multi-tenancy package published on PyPI for Django REST Framework (DRF) implementing database-level PostgreSQL schema isolation.",
        highlights: [
            "Zero monkeypatching: relies strictly on Django's official database routing and middleware APIs.",
            "Thread & async-safe: uses Python contextvars to eliminate data-leak risks across concurrent async tasks and Celery workers.",
            "Pluggable routing: supports JWT/OIDC token claims, subdomains, and custom HTTP header matching.",
            "Connection pool safety: auto-resets the PostgreSQL search_path to prevent leaks when reusing connections in PgBouncer."
        ],
        tags: ["Python", "Django", "DRF", "PostgreSQL", "PyPI", "Middleware"],
        links: { demo: "https://pypi.org/project/django-rest-pgtenants/", repo: "https://github.com/pankiae/django-rest-pgtenants" }
    },
    {
        title: "Curico",
        category: "Professional Work",
        type: "AI Platform & Web App",
        iconName: "Globe",
        description: "Multi-Model Agentic workflow generating steps for activity, Q&A, and images. Features Whisper + TTS voice tutor and Celery+Redis pipeline for off-loading tasks.",
        highlights: [
            "Agentic Workflows: orchestrates multi-step pipelines for activity generation, Q&A, and asset creation.",
            "Voice Tutor Integration: incorporates Whisper speech-to-text and Text-to-Speech (TTS) for natural voice interactions.",
            "Backend Pipeline: handles heavy task off-loading using a robust Celery and Redis message broker architecture."
        ],
        tags: ["Python", "Celery", "Redis", "Whisper", "TTS"],
        links: { demo: "https://play.curico.ai", repo: "#" }
    },
    {
        title: "Invisioned",
        category: "Professional Work",
        type: "SaaS Web Application",
        iconName: "Cpu",
        description: "Integrated multiple LLMs (OpenAI, Stability AI, Claude) and CV models (GroundingDINO, SAM2). Cost-effective solution serving 6,000+ users.",
        highlights: [
            "Multimodal integration: combines OpenAI, Claude, and Stability AI with Segment Anything 2 and GroundingDINO.",
            "Production scale: cost-effective serverless backend architecture serving 6,000+ active users.",
            "Optimized inference: custom model pipelines reducing latency and GPU consumption."
        ],
        tags: ["LLMs", "Computer Vision", "SAM2", "GroundingDINO"],
        links: { demo: "https://invisioned.io/", repo: "#" }
    },
    {
        title: "Prompt & Click Object Segmenter",
        category: "Open Source",
        type: "Forward Deployed Engineering Work",
        iconName: "Eye",
        description: "A suite of custom computer vision tools designed to detect, extract, and mark objects in images using either text prompts or interactive user point-clicks.",
        highlights: [
            "FastAPI SAM2 integration: serves Meta's Segment Anything 2 model to extract objects dynamically from clicked coordinates or bounding boxes.",
            "Text-Prompt Detection: built real-time object detection models to locate and crop objects based on descriptive text queries."
        ],
        tags: ["Python", "FastAPI", "SAM2", "PyTorch", "Computer Vision", "Object Detection"],
        links: {
            promptRepo: "https://github.com/pankiae/ObjectDetectionOnPromptInImage",
            sam2Repo: "https://github.com/pankiae/ImageSegmentSAM2_FastAPI_BoundingBoxes"
        }
    },
];

const categories = [
    {
        id: "open-source",
        name: "Open Source Contributions",
        description: "Production-grade libraries and packages built for the developer community and published on PyPI."
    },
    {
        id: "professional",
        name: "Professional Applications",
        description: "Production systems, SaaS platforms, and AI architectures engineered for companies and organizations."
    },
    {
        id: "personal",
        name: "Independent Labs & Research",
        description: "Personal tools, machine learning experiments, and computer vision systems exploring new models."
    }
];

const iconMap = {
    Package: Package,
    Globe: Globe,
    Cpu: Cpu,
    Eye: Eye,
};

export function Projects() {
    return (
        <section id="projects" className="container mx-auto px-6 py-12 md:py-16 space-y-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-3xl mx-auto space-y-4"
            >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold tracking-tight text-foreground">
                    Featured Projects
                </h2>
                <div className="w-12 h-0.5 bg-primary mx-auto my-3" />
                <p className="text-lg md:text-xl text-muted-foreground font-sans">
                    A selection of technical projects illustrating system design, AI implementation, and core engineering practices.
                </p>
            </motion.div>

            <div className="space-y-16">
                {categories.map((cat) => {
                    const catProjects = projects.filter(p => p.category === (cat.id === "open-source" ? "Open Source" : cat.id === "professional" ? "Professional Work" : "Independent Labs"));
                    if (catProjects.length === 0) return null;

                    return (
                        <div key={cat.id} className="space-y-8 pt-10 first:pt-0 border-t first:border-t-0 border-neutral-800/10">
                            <div className="space-y-1.5 max-w-3xl">
                                <h3 className="text-xl md:text-2xl font-mono tracking-wider text-secondary font-bold">
                                    // {cat.name}
                                </h3>
                                <p className="text-sm md:text-base text-muted-foreground font-sans">
                                    {cat.description}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {catProjects.map((project, index) => {
                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                            transition={{ duration: 0.6, ease: "easeOut" }}
                                            className="bg-card text-card-foreground border border-black p-6 rounded-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 flex flex-col justify-between h-full group"
                                        >
                                            <div>
                                                {/* Dossier Header */}
                                                <div className="flex justify-between items-center border-b border-dashed border-neutral-300 dark:border-neutral-800 pb-3 mb-4 font-mono text-[10px] sm:text-xs">
                                                    <span className="text-secondary font-bold uppercase tracking-wider">// DOSSIER NO. 0{index + 1}</span>
                                                    <span className="text-muted-foreground uppercase tracking-tight">{project.type}</span>
                                                </div>

                                                {/* Title */}
                                                <h4 className="text-2xl sm:text-3xl font-serif font-black tracking-tight mb-2 group-hover:text-primary transition-colors leading-none text-foreground">
                                                    {project.title}
                                                </h4>

                                                {/* Description */}
                                                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-sans mb-4">
                                                    {project.description}
                                                </p>

                                                {/* Highlights */}
                                                {project.highlights && (
                                                    <ul className="space-y-1.5 mb-6 text-xs sm:text-sm text-muted-foreground font-sans list-none border-l-2 border-neutral-300 dark:border-neutral-700 pl-3">
                                                        {project.highlights.slice(0, 2).map((highlight, idx) => (
                                                            <li key={idx} className="relative leading-relaxed">
                                                                • {highlight}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>

                                            {/* Footer: Tags and Action Links */}
                                            <div className="space-y-4 pt-4 border-t border-dashed border-neutral-300 dark:border-neutral-800 mt-auto">
                                                <div className="flex flex-wrap gap-1.5">
                                                    {project.tags.map((tag) => (
                                                        <span key={tag} className="text-[10px] font-mono px-2 py-0.5 border border-neutral-300 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-foreground font-semibold">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>

                                                <div className="flex gap-3 pt-2">
                                                    {project.links.demo && project.links.demo !== "#" && (
                                                        <a
                                                            href={project.links.demo}
                                                            target="_blank"
                                                            className="flex-1 text-center py-2 border border-black font-mono text-xs font-bold uppercase tracking-wider bg-[#FEF08A] hover:bg-[#FACC15] active:bg-[#CA8A04] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer text-black"
                                                        >
                                                            {project.links.demo.includes("pypi.org") ? "PyPI Package" : "Live Demo"}
                                                        </a>
                                                    )}
                                                    {project.links.repo && project.links.repo !== "#" && (
                                                        <a
                                                            href={project.links.repo}
                                                            target="_blank"
                                                            className="flex-1 text-center py-2 border border-black font-mono text-xs font-bold uppercase tracking-wider bg-[#FCA5A5] hover:bg-[#F87171] active:bg-[#CA8A04] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer text-black"
                                                        >
                                                            Source Code
                                                        </a>
                                                    )}
                                                    {project.links.promptRepo && (
                                                        <a
                                                            href={project.links.promptRepo}
                                                            target="_blank"
                                                            className="flex-1 text-center py-2 border border-black font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-[#FCA5A5] hover:bg-[#F87171] active:bg-[#CA8A04] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer text-black"
                                                            title="Object Detection on Prompt Repo"
                                                        >
                                                            Prompt Detect
                                                        </a>
                                                    )}
                                                    {project.links.sam2Repo && (
                                                        <a
                                                            href={project.links.sam2Repo}
                                                            target="_blank"
                                                            className="flex-1 text-center py-2 border border-black font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-[#FCA5A5] hover:bg-[#F87171] active:bg-[#CA8A04] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer text-black"
                                                            title="SAM2 FastAPI Segmentation Repo"
                                                        >
                                                            SAM2 Segment
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
