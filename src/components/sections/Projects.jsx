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
        title: "Image Seg AI",
        category: "Independent Labs",
        type: "Computer Vision Tool",
        iconName: "Eye",
        description: "Leveraging Meta's SAM2 for zero-shot object segmentation. Integrated OpenAI GPT-image-1 for AI-powered inpainting.",
        highlights: [
            "SAM2 Segmenting: zero-shot object detection and segmentation on high-resolution images.",
            "AI Inpainting: integrates OpenAI models for realistic image reconstruction and context-aware styling."
        ],
        tags: ["Python", "PyTorch", "FastAPI", "SAM2"],
        links: { demo: "#", repo: "#" }
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

                            <div className="space-y-12 md:space-y-16">
                                {catProjects.map((project, index) => {
                                    const ProjectIcon = iconMap[project.iconName] || Globe;
                                    return (
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
                                                <div className="flex items-center">
                                                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-semibold bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 px-2 py-0.5 rounded-sm">
                                                        <ProjectIcon className="w-3.5 h-3.5 text-secondary" />
                                                        <span>{project.type}</span>
                                                    </div>
                                                </div>
                                                <div className="border-t border-neutral-800/10 pt-4 space-y-2">
                                                    <span className="text-[10px] md:text-xs text-muted-foreground tracking-wider block font-bold">Technologies</span>
                                                    <div className="flex flex-wrap gap-1.5">
                                                        {project.tags.map((tag) => (
                                                            <span key={tag} className="text-sm md:text-base px-2.5 py-1 border border-neutral-300 text-foreground font-semibold tracking-tight">
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                                {((project.links.demo && project.links.demo !== "#") || (project.links.repo && project.links.repo !== "#")) && (
                                                    <div className="border-t border-neutral-800/10 pt-4 space-y-3">
                                                        <span className="text-[10px] md:text-xs text-muted-foreground tracking-wider block font-bold">Links</span>
                                                        <div className="flex flex-col sm:flex-row lg:flex-col gap-2">
                                                            {project.links.demo && project.links.demo !== "#" && (
                                                                <Button size="sm" variant="default" className="justify-start text-xs md:text-sm font-semibold" asChild>
                                                                    <Link href={project.links.demo} target="_blank">
                                                                        {project.links.demo.includes("pypi.org") ? "PyPI Package" : "Live Demo"}
                                                                    </Link>
                                                                </Button>
                                                            )}
                                                            {project.links.repo && project.links.repo !== "#" && (
                                                                <Button size="sm" variant="outline" className="justify-start text-xs md:text-sm font-semibold" asChild>
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
                                                <h3 className="text-3xl lg:text-4xl font-serif font-black tracking-tight text-foreground">
                                                    {project.title}
                                                </h3>
                                                <div className="h-0.5 bg-neutral-800/20" />
                                                <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-sans">
                                                    {project.description}
                                                </p>
                                                {project.highlights && (
                                                    <ul className="list-disc pl-5 space-y-1.5 text-sm md:text-base text-muted-foreground font-sans">
                                                        {project.highlights.map((highlight, idx) => (
                                                            <li key={idx} className="leading-relaxed">
                                                                {highlight}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
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
