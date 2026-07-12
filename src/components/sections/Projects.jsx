"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Package, Globe, Cpu, Eye, FileCode, Folder, Terminal, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const projects = [
    {
        id: "pgtenants",
        fileName: "django-rest-pgtenants.py",
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
        tags: ["Python", "Django", "PostgreSQL", "PyPI", "Multi-Tenancy"],
        links: { demo: "https://pypi.org/project/django-rest-pgtenants/", repo: "#" }
    },
    {
        id: "curico",
        fileName: "curico-tutor.py",
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
        id: "invisioned",
        fileName: "invisioned-cv.js",
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
        id: "segmenter",
        fileName: "sam2-segmenter.py",
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

const iconMap = {
    Package: Package,
    Globe: Globe,
    Cpu: Cpu,
    Eye: Eye,
};

export function Projects() {
    const [selectedProject, setSelectedProject] = useState(projects[0]);

    return (
        <section id="projects" className="py-20 bg-background border-t border-neutral-200 dark:border-neutral-800">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold tracking-tight text-foreground">
                        Featured Projects
                    </h2>
                    <div className="w-12 h-0.5 bg-primary mx-auto my-3" />
                    <p className="text-lg md:text-xl text-muted-foreground font-sans">
                        An interactive workspace exploring system design, computer vision pipelines, and developer packages.
                    </p>
                </motion.div>

                {/* IDE Interface Wrapper */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8 }}
                    className="w-full bg-white text-neutral-800 border border-neutral-200 rounded-lg overflow-hidden shadow-xl flex flex-col md:flex-row h-[680px] md:h-[620px]"
                >
                    {/* Sidebar / File Explorer */}
                    <div className="w-full md:w-64 bg-neutral-50/90 border-b md:border-b-0 md:border-r border-neutral-200 flex flex-col shrink-0">
                        {/* Tab header */}
                        <div className="px-4 py-3 border-b border-neutral-200 flex items-center gap-2">
                            <div className="flex gap-1.5">
                                <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                                <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                            </div>
                            <span className="text-xs font-mono text-neutral-400 ml-4 font-bold select-none">WORKSPACE_EXPLORER</span>
                        </div>

                        {/* File Tree */}
                        <div className="flex-1 overflow-y-auto p-3 space-y-4">
                            {/* Categories */}
                            <div>
                                <div className="flex items-center gap-1 px-2 py-1 text-xs font-bold font-mono text-neutral-400 select-none uppercase tracking-wider">
                                    <Folder className="w-3.5 h-3.5 text-secondary" />
                                    Projects Index
                                </div>
                                <div className="mt-1 space-y-0.5">
                                    {projects.map((p) => {
                                        const isSelected = selectedProject.id === p.id;
                                        return (
                                            <button
                                                key={p.id}
                                                onClick={() => setSelectedProject(p)}
                                                className={`w-full flex items-center justify-between px-3 py-2 rounded font-mono text-xs text-left transition-colors ${
                                                    isSelected
                                                        ? "bg-neutral-200/60 text-secondary font-black border-l-2 border-primary"
                                                        : "hover:bg-neutral-200/30 text-neutral-600"
                                                }`}
                                            >
                                                <div className="flex items-center gap-2 overflow-hidden truncate">
                                                    <FileCode className={`w-4 h-4 shrink-0 ${isSelected ? "text-primary" : "text-neutral-400"}`} />
                                                    <span className="truncate">{p.fileName}</span>
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Editor Panel */}
                    <div className="flex-1 flex flex-col bg-white overflow-hidden">
                        {/* Editor Tab Headers */}
                        <div className="bg-neutral-50/90 px-4 py-2 border-b border-neutral-200 flex items-center overflow-x-auto select-none shrink-0 scrollbar-none">
                            <div className="flex items-center gap-2 px-3 py-1 bg-white border-t-2 border-primary rounded-t border-r border-l border-neutral-200 text-xs font-mono font-bold text-foreground">
                                <FileCode className="w-3.5 h-3.5 text-primary" />
                                {selectedProject.fileName}
                            </div>
                        </div>

                        {/* Code Workspace */}
                        <div className="flex-1 overflow-y-auto p-6 md:p-8 font-mono text-sm leading-relaxed scrollbar-thin">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={selectedProject.id}
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-6"
                                >
                                    {/* Console Header */}
                                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-200 pb-4">
                                        <div className="space-y-1">
                                            <div className="text-xs text-neutral-400">// {selectedProject.category}</div>
                                            <h3 className="text-2xl md:text-3xl font-serif font-black text-foreground">
                                                {selectedProject.title}
                                            </h3>
                                        </div>
                                        <span className="text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded bg-neutral-100 text-secondary border border-neutral-200">
                                            {selectedProject.type}
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <div className="space-y-2">
                                        <div className="text-xs text-neutral-400">// Project Overview</div>
                                        <p className="text-neutral-600 font-sans leading-relaxed text-sm md:text-base">
                                            {selectedProject.description}
                                        </p>
                                    </div>

                                    {/* Technical Specs */}
                                    <div className="space-y-3">
                                        <div className="text-xs text-neutral-400">// Technical Highlights & Implementations</div>
                                        <div className="bg-neutral-50/60 border border-neutral-200/80 rounded-md p-4 space-y-3 font-sans text-xs md:text-sm text-neutral-600">
                                            {selectedProject.highlights.map((highlight, idx) => {
                                                const [label, desc] = highlight.split(": ");
                                                return (
                                                    <div key={idx} className="flex gap-2">
                                                        <span className="text-primary font-mono shrink-0 font-bold">▶</span>
                                                        <div>
                                                            <strong className="text-neutral-800 font-semibold">{label}:</strong> {desc}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="space-y-2">
                                        <div className="text-xs text-neutral-400">// Technologies Used</div>
                                        <div className="flex flex-wrap gap-1.5">
                                            {selectedProject.tags.map((tag) => (
                                                <span key={tag} className="text-[10px] font-mono px-2 py-0.5 border border-neutral-200 bg-neutral-50 text-neutral-500 rounded-sm">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Links */}
                                    <div className="pt-4 border-t border-neutral-200 flex flex-wrap gap-3">
                                        {selectedProject.links.demo && selectedProject.links.demo !== "#" && (
                                            <a
                                                href={selectedProject.links.demo}
                                                target="_blank"
                                                className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-200 hover:border-primary text-xs font-bold text-neutral-700 hover:text-primary bg-white hover:bg-neutral-50 transition-all rounded shadow-sm"
                                            >
                                                <Globe className="w-3.5 h-3.5" />
                                                {selectedProject.links.demo.includes("pypi.org") ? "PyPI Package" : "Live Demo"}
                                            </a>
                                        )}
                                        {selectedProject.links.repo && selectedProject.links.repo !== "#" && (
                                            <a
                                                href={selectedProject.links.repo}
                                                target="_blank"
                                                className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-200 hover:border-primary text-xs font-bold text-neutral-700 hover:text-primary bg-white hover:bg-neutral-50 transition-all rounded shadow-sm"
                                            >
                                                <Github className="w-3.5 h-3.5" />
                                                Source Code
                                            </a>
                                        )}
                                        {selectedProject.links.promptRepo && (
                                            <a
                                                href={selectedProject.links.promptRepo}
                                                target="_blank"
                                                className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-200 hover:border-primary text-xs font-bold text-neutral-700 hover:text-primary bg-white hover:bg-neutral-50 transition-all rounded shadow-sm"
                                            >
                                                <Github className="w-3.5 h-3.5" />
                                                Prompt Detect Repo
                                            </a>
                                        )}
                                        {selectedProject.links.sam2Repo && (
                                            <a
                                                href={selectedProject.links.sam2Repo}
                                                target="_blank"
                                                className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-200 hover:border-primary text-xs font-bold text-neutral-700 hover:text-primary bg-white hover:bg-neutral-50 transition-all rounded shadow-sm"
                                            >
                                                <Github className="w-3.5 h-3.5" />
                                                SAM2 Segment Repo
                                            </a>
                                        )}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
