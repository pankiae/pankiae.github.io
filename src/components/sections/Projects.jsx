"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Package, Globe, Cpu, Eye, FileCode, Folder, Terminal, ArrowRight, X, Copy, Check } from "lucide-react";
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

const projectCode = {
    pgtenants: `# Category: Open Source Contributions
# Type: Open-Source PyPI Package

class DjangoRestPgTenants:
    def __init__(self):
        self.name = "django-rest-pgtenants"
        self.description = "A lightweight, zero-monkeypatching multi-tenancy package implementing PostgreSQL schema isolation."
        self.tags = ["Python", "Django", "PostgreSQL", "PyPI", "Multi-Tenancy"]
        
        # Package Registry and Repository links:
        self.pypi_package = "https://pypi.org/project/django-rest-pgtenants/"
        self.source_code = "https://github.com/pankiae/django-rest-pgtenants"

    def get_highlights(self):
        return [
            "Zero monkeypatching: relies strictly on Django's routing.",
            "Thread & async-safe: uses contextvars to eliminate data-leak risks.",
            "Pluggable routing: supports subdomains, JWT claims, and custom headers.",
            "PgBouncer safe: auto-resets PostgreSQL search_path to prevent leaks."
        ]`,
    curico: `# Category: Professional Applications
# Type: Forward Deployed AI Platform

class CuricoTutor:
    def __init__(self):
        self.name = "Curico"
        self.description = "Multi-Model Agentic workflow generating steps for activity, Q&A, and images. Features voice tutor."
        self.tags = ["Python", "Celery", "Redis", "Whisper", "TTS"]
        
        # Deploy link:
        self.live_demo = "https://play.curico.ai"

    def get_highlights(self):
        return [
            "Agentic Workflows: orchestrates multi-step pipelines for activity generation and Q&A.",
            "Voice Tutor Integration: incorporates Whisper speech-to-text and TTS for natural tutoring.",
            "Backend Pipeline: off-loads tasks using Celery and Redis broker architecture."
        ]`,
    invisioned: `// Category: Professional Applications
// Type: Forward Deployed SaaS Web App

export const Invisioned = {
    name: "Invisioned",
    description: "Integrated multiple LLMs (OpenAI, Stability AI, Claude) and CV models (GroundingDINO, SAM2). Cost-effective solution serving 6,000+ users.",
    tags: ["LLMs", "Computer Vision", "SAM2", "GroundingDINO"],
    
    // Deployment links:
    liveDemo: "https://invisioned.io/",

    highlights: [
        "Multimodal integration: combines OpenAI, Claude, and Stability AI with SAM2.",
        "Production scale: cost-effective serverless backend serving 6,000+ users.",
        "Optimized inference: custom model pipelines reducing Latency."
    ]
};`,
    segmenter: `# Category: Open Source Contributions
# Type: Forward Deployed Computer Vision Suite

class InteractiveObjectSegmenter:
    def __init__(self):
        self.name = "Prompt & Click Object Segmenter"
        self.description = "A suite of custom computer vision tools designed to detect, extract, and mark objects in images using text prompts or interactive point-clicks."
        self.tags = ["Python", "FastAPI", "SAM2", "PyTorch", "Computer Vision", "Object Detection"]
        
        # Repository links:
        self.prompt_detection_repo = "https://github.com/pankiae/ObjectDetectionOnPromptInImage"
        self.sam2_segmentation_repo = "https://github.com/pankiae/ImageSegmentSAM2_FastAPI_BoundingBoxes"

    def get_highlights(self):
        return [
            "FastAPI SAM2 integration: serves Meta's Segment Anything 2 model to extract objects.",
            "Text-Prompt Detection: built real-time object detection models to locate and crop objects."
        ]`
};

const iconMap = {
    Package: Package,
    Globe: Globe,
    Cpu: Cpu,
    Eye: Eye,
};

export function Projects() {
    const [openTabs, setOpenTabs] = useState([projects[0]]);
    const [activeTabId, setActiveTabId] = useState(projects[0].id);
    const [copiedUrl, setCopiedUrl] = useState("");

    const handleFileSelect = (project) => {
        if (!openTabs.find((tab) => tab.id === project.id)) {
            setOpenTabs([...openTabs, project]);
        }
        setActiveTabId(project.id);
    };

    const handleCloseTab = (tabId, e) => {
        e.stopPropagation();
        const updatedTabs = openTabs.filter((tab) => tab.id !== tabId);
        setOpenTabs(updatedTabs);

        if (activeTabId === tabId && updatedTabs.length > 0) {
            setActiveTabId(updatedTabs[updatedTabs.length - 1].id);
        }
    };

    const handleCopy = (url) => {
        navigator.clipboard.writeText(url);
        setCopiedUrl(url);
        setTimeout(() => setCopiedUrl(""), 1500);
    };

    const selectedProject = projects.find((p) => p.id === activeTabId);

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
                    className="w-full bg-white text-neutral-800 border border-neutral-200 rounded-lg shadow-xl flex flex-col md:flex-row h-[680px] md:h-[620px]"
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
                                        const isSelected = selectedProject && selectedProject.id === p.id;
                                        return (
                                            <button
                                                key={p.id}
                                                onClick={() => handleFileSelect(p)}
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
                        <div className="bg-neutral-50/90 px-2 py-1.5 border-b border-neutral-200 flex items-center overflow-x-auto select-none shrink-0 scrollbar-none gap-1">
                            {openTabs.map((tab) => {
                                const isActive = activeTabId === tab.id;
                                return (
                                    <div
                                        key={tab.id}
                                        onClick={() => setActiveTabId(tab.id)}
                                        className={`flex items-center gap-2 px-3 py-1 cursor-pointer rounded-t border-t-2 text-xs font-mono transition-all ${
                                            isActive
                                                ? "bg-white border-primary border-r border-l border-neutral-200 text-foreground font-bold"
                                                : "bg-neutral-100 border-transparent text-neutral-500 hover:bg-neutral-200/50"
                                        }`}
                                    >
                                        <FileCode className={`w-3.5 h-3.5 ${isActive ? "text-primary" : "text-neutral-400"}`} />
                                        <span>{tab.fileName}</span>
                                        <X
                                            className="w-3 h-3 hover:bg-neutral-300 rounded-full p-0.5 transition-colors"
                                            onClick={(e) => handleCloseTab(tab.id, e)}
                                        />
                                    </div>
                                );
                            })}
                        </div>

                        {/* Code Workspace */}
                        <div className="flex-1 overflow-y-auto p-4 md:p-6 font-mono text-sm leading-relaxed scrollbar-thin bg-neutral-50/30">
                            <AnimatePresence mode="wait">
                                {selectedProject && openTabs.length > 0 ? (
                                    <motion.div
                                        key={selectedProject.id}
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="space-y-4"
                                    >
                                        {/* Styled Code Block lines */}
                                        <div className="border border-neutral-200 rounded-md bg-white p-4 shadow-sm overflow-x-auto min-w-full">
                                            {projectCode[selectedProject.id].split("\n").map((line, idx) => {
                                                const urlMatch = line.match(/"(https?:\/\/[^\s"]+)"/);
                                                const url = urlMatch ? urlMatch[1] : null;
                                                const isComment = line.trim().startsWith("#") || line.trim().startsWith("//");

                                                return (
                                                    <div key={idx} className="flex hover:bg-neutral-50 py-0.5 group/line font-mono text-[11px] sm:text-xs leading-5">
                                                        {/* Line Number */}
                                                        <span className="w-10 text-right pr-3 text-neutral-400 select-none border-r border-neutral-200 mr-3 shrink-0">
                                                            {idx + 1}
                                                        </span>

                                                        {/* Code line content */}
                                                        <span className={`flex-1 whitespace-pre pr-4 ${isComment ? "text-neutral-400 italic" : "text-[#24292e]"}`}>
                                                            {line}
                                                        </span>

                                                        {/* Interactive Overlay actions for Link lines */}
                                                        {url && (
                                                            <div className="flex items-center gap-1.5 pl-2 shrink-0 opacity-0 group-hover/line:opacity-100 transition-opacity">
                                                                <button
                                                                    onClick={() => handleCopy(url)}
                                                                    className="px-2 py-0.5 border border-neutral-200 hover:border-neutral-300 rounded bg-white text-[10px] text-neutral-500 hover:text-foreground flex items-center gap-1 transition-all shadow-sm select-none"
                                                                    title="Copy URL"
                                                                >
                                                                    {copiedUrl === url ? (
                                                                        <>
                                                                            <Check className="w-3 h-3 text-green-600" />
                                                                            <span className="text-green-600 font-sans">Copied!</span>
                                                                        </>
                                                                    ) : (
                                                                        <>
                                                                            <Copy className="w-3 h-3" />
                                                                            <span className="font-sans">Copy</span>
                                                                        </>
                                                                    )}
                                                                </button>
                                                                <a
                                                                    href={url}
                                                                    target="_blank"
                                                                    className="px-2 py-0.5 border border-neutral-200 hover:border-neutral-300 rounded bg-white text-[10px] text-neutral-500 hover:text-foreground flex items-center gap-1 transition-all shadow-sm select-none"
                                                                >
                                                                    <ExternalLink className="w-3 h-3" />
                                                                    <span className="font-sans">Open</span>
                                                                </a>
                                                            </div>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="empty"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="h-full flex flex-col items-center justify-center text-center space-y-4 pt-12 select-none"
                                    >
                                        <Terminal className="w-16 h-16 text-neutral-300 dark:text-neutral-700 animate-pulse" />
                                        <div className="space-y-1">
                                            <h4 className="text-neutral-400 font-sans font-bold">No Files Open</h4>
                                            <p className="text-xs text-neutral-400 font-sans max-w-xs">
                                                Select a project file from the sidebar explorer index to view code details.
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
