"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Package, Globe, Cpu, Eye, FileCode, Folder, Terminal, ArrowRight, X, Copy, Check, AlertCircle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const projects = [
    {
        id: "pgtenants",
        fileName: "django-rest-pgtenants.txt",
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
        fileName: "curico-tutor.txt",
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
        fileName: "invisioned-cv.txt",
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
        fileName: "sam2-segmenter.txt",
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
    pgtenants: `====================================================================================================
PROJECT     : django-rest-pgtenants
====================================================================================================
Category    : Open Source Contributions
Type        : PyPI Package

OVERVIEW:
A lightweight, zero-monkeypatching multi-tenancy package published on PyPI for Django REST Framework (DRF) implementing database-level PostgreSQL schema isolation.

KEY IMPLEMENTATIONS:
- Zero Monkeypatching: relies strictly on Django's official database routing and middleware APIs.
- Thread & Async-Safe: uses Python contextvars to eliminate data-leak risks across concurrent async tasks and Celery workers.
- Pluggable Routing: supports JWT/OIDC token claims, subdomains, and custom HTTP header matching.
- PgBouncer Safety: auto-resets PostgreSQL search_path to prevent connection leaks.

TECH STACK:
Python, Django, PostgreSQL, PyPI, Multi-Tenancy

LINKS:
- PyPI Registry : "https://pypi.org/project/django-rest-pgtenants/"
- Source Code   : "https://github.com/pankiae/django-rest-pgtenants"`,
    curico: `====================================================================================================
PROJECT     : Curico
====================================================================================================
Category    : Professional Work
Type        : AI Platform & Web App

OVERVIEW:
Multi-Model Agentic workflow generating steps for activity, Q&A, and images. Features Whisper + TTS voice tutor and Celery+Redis pipeline for off-loading tasks.

KEY IMPLEMENTATIONS:
- Agentic Workflows: orchestrates multi-step pipelines for activity generation, Q&A, and asset creation.
- Voice Tutor: incorporates Whisper speech-to-text and Text-to-Speech (TTS) for natural voice interactions.
- Backend Pipeline: handles heavy task off-loading using a robust Celery and Redis message broker architecture.

TECH STACK:
Python, Celery, Redis, Whisper, TTS

LINKS:
- Live Platform : "https://play.curico.ai"`,
    invisioned: `====================================================================================================
PROJECT     : Invisioned
====================================================================================================
Category    : Professional Work
Type        : SaaS Web Application

OVERVIEW:
Integrated multiple LLMs (OpenAI, Stability AI, Claude) and computer vision models (GroundingDINO, SAM2). Cost-effective solution serving 6,000+ users.

KEY IMPLEMENTATIONS:
- Multimodal Integration: combines OpenAI, Claude, and Stability AI with Segment Anything 2 and GroundingDINO.
- Production Scale: cost-effective serverless backend architecture serving 6,000+ active users.
- Optimized Inference: custom model pipelines reducing latency and GPU consumption.

TECH STACK:
LLMs, Computer Vision, SAM2, GroundingDINO

LINKS:
- Live Platform : "https://invisioned.io/"`,
    segmenter: `====================================================================================================
PROJECT     : Prompt & Click Object Segmenter
====================================================================================================
Category    : Open Source Contributions
Type        : Forward Deployed Computer Vision Suite

OVERVIEW:
A suite of custom computer vision tools designed to detect, extract, and mark objects in images using either text prompts or interactive user point-clicks.

KEY IMPLEMENTATIONS:
- FastAPI SAM2: serves Meta's Segment Anything 2 model to extract objects dynamically from clicked coordinates or bounding boxes.
- Text-Prompt Detection: built real-time object detection models to locate and crop objects based on descriptive text queries.

TECH STACK:
Python, FastAPI, SAM2, PyTorch, Computer Vision, Object Detection

LINKS:
- Prompt Detect : "https://github.com/pankiae/ObjectDetectionOnPromptInImage"
- SAM2 Segment  : "https://github.com/pankiae/ImageSegmentSAM2_FastAPI_BoundingBoxes"`
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

    // Editable text contents state
    const [fileContents, setFileContents] = useState({
        pgtenants: projectCode.pgtenants,
        curico: projectCode.curico,
        invisioned: projectCode.invisioned,
        segmenter: projectCode.segmenter
    });

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

    const getLinkIcon = (url) => {
        if (url.includes("github.com")) {
            return <Github className="w-3.5 h-3.5 text-[#0ea5e9] dark:text-[#38bdf8] inline-block ml-1 shrink-0 align-middle" />;
        }
        if (url.includes("pypi.org")) {
            return <Package className="w-3.5 h-3.5 text-[#0ea5e9] dark:text-[#38bdf8] inline-block ml-1 shrink-0 align-middle" />;
        }
        return <Globe className="w-3.5 h-3.5 text-[#0ea5e9] dark:text-[#38bdf8] inline-block ml-1 shrink-0 align-middle" />;
    };

    const renderStyledLine = (line) => {
        if (line.startsWith("===")) {
            return <span className="text-neutral-300 dark:text-neutral-600 select-none">{line}</span>;
        }

        if (line.endsWith(":") && (line === "OVERVIEW:" || line === "KEY IMPLEMENTATIONS:" || line === "TECH STACK:" || line === "LINKS:")) {
            return <span className="text-secondary font-bold dark:text-secondary tracking-wider">{line}</span>;
        }

        if (line.includes("    : ")) {
            const parts = line.split("    : ");
            const label = parts[0];
            const val = parts.slice(1).join("    : ");
            return (
                <span>
                    <span className="text-blue-600 font-bold dark:text-blue-400">{label}</span>
                    <span className="text-neutral-400">    : </span>
                    <span className="text-neutral-800 dark:text-neutral-200">{val}</span>
                </span>
            );
        }

        if (line.includes("     : ")) {
            const parts = line.split("     : ");
            const label = parts[0];
            const val = parts.slice(1).join("     : ");
            return (
                <span>
                    <span className="text-blue-600 font-bold dark:text-blue-400">{label}</span>
                    <span className="text-neutral-400">     : </span>
                    <span className="text-neutral-800 dark:text-neutral-200 font-bold">{val}</span>
                </span>
            );
        }

        if (line.includes(" : ") && line.includes('"')) {
            const parts = line.split(" : ");
            const label = parts[0];
            const val = parts.slice(1).join(" : ");
            const urlMatch = val.match(/"([^"]+)"/);

            if (urlMatch) {
                const url = urlMatch[1];
                return (
                    <span>
                        <span className="text-neutral-600 dark:text-neutral-400">{label}</span>
                        <span className="text-neutral-400"> : </span>
                        <span className="text-neutral-400">"</span>
                        <a
                            href={url}
                            target="_blank"
                            className="text-[#0ea5e9] dark:text-[#38bdf8] underline decoration-1 cursor-pointer font-bold pointer-events-auto relative z-30 inline-flex items-center"
                        >
                            {url}
                            {getLinkIcon(url)}
                        </a>
                        <span className="text-neutral-400">"</span>
                    </span>
                );
            }
        }

        if (line.trim().startsWith("- ")) {
            const rest = line.trim().substring(2);
            if (rest.includes(": ")) {
                const parts = rest.split(": ");
                const boldPart = parts[0];
                const textPart = parts.slice(1).join(": ");
                return (
                    <span>
                        <span className="text-primary font-bold mr-2 select-none">-</span>
                        <span className="text-neutral-900 font-bold dark:text-neutral-100">{boldPart}:</span>
                        <span className="text-neutral-600 dark:text-neutral-400"> {textPart}</span>
                    </span>
                );
            }
            return (
                <span>
                    <span className="text-primary font-bold mr-2 select-none">-</span>
                    <span className="text-neutral-600 dark:text-neutral-400">{rest}</span>
                </span>
            );
        }

        return <span className="text-neutral-600 dark:text-neutral-400">{line}</span>;
    };

    const selectedProject = projects.find((p) => p.id === activeTabId);
    const activeText = selectedProject ? fileContents[selectedProject.id] : "";

    // Check if the user has modified any file content
    const isModified = Object.keys(fileContents).some(
        (key) => fileContents[key] !== projectCode[key]
    );

    return (
        <section id="projects" className="min-h-screen min-h-dvh flex items-center pt-0 pb-0 bg-background border-t border-neutral-200 dark:border-neutral-800 relative overflow-hidden">
            <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col justify-center">
                {/* IDE Interface Wrapper */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8 }}
                    className="w-full bg-white text-neutral-800 border border-neutral-200 rounded-lg shadow-xl flex flex-col md:flex-row h-[600px] md:h-[550px] lg:h-[600px] overflow-hidden"
                >
                    {/* Sidebar / File Explorer */}
                    <div className="w-full md:w-64 bg-neutral-50/90 border-b md:border-b-0 md:border-r border-neutral-200 flex flex-col shrink-0">
                        {/* Tab header */}
                        <div className="px-4 py-3 border-b border-neutral-200 flex items-center justify-center">
                            <span className="text-sm md:text-base font-sans font-black uppercase tracking-wider bg-[#007aff] text-white border-2 border-black px-3.5 py-1 shadow-[3px_3px_0px_rgba(0,0,0,1)] select-none shrink-0">
                                PROJECTS_EXPLORER
                            </span>
                        </div>

                        {/* File Tree */}
                        <div className="flex-1 p-3 space-y-4 overflow-y-auto scrollbar-none">
                            {/* Categories */}
                            <div>
                                <div className="flex items-center gap-1 px-2 py-1 text-xs md:text-sm font-bold font-mono text-neutral-400 select-none uppercase tracking-wider">
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
                                                className={`w-full flex items-center justify-between px-3 py-2 rounded font-mono text-xs md:text-sm text-left transition-colors ${
                                                    isSelected
                                                        ? "bg-neutral-200/60 text-secondary font-black border-l-2 border-primary"
                                                        : "hover:bg-neutral-200/30 text-neutral-700 font-bold"
                                                }`}
                                            >
                                                <div className="flex items-center gap-2 overflow-hidden truncate">
                                                    <FileCode className={`w-4 h-4 shrink-0 ${isSelected ? "text-primary" : "text-neutral-500"}`} />
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
                    <div className="flex-1 flex flex-col bg-white relative overflow-hidden">
                        {/* Editor Tab Headers */}
                        <div className="bg-neutral-50/90 px-2 py-1.5 border-b border-neutral-200 flex items-center overflow-x-auto select-none shrink-0 scrollbar-none gap-1">
                            {openTabs.map((tab) => {
                                const isActive = activeTabId === tab.id;
                                return (
                                    <div
                                        key={tab.id}
                                        onClick={() => setActiveTabId(tab.id)}
                                        className={`flex items-center gap-2 px-3 py-1 cursor-pointer rounded-t border-t-2 text-xs font-mono transition-all shrink-0 ${
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
                        <div className="flex-1 p-4 md:p-6 font-mono bg-white overflow-x-hidden overflow-y-auto scrollbar-thin">
                            <AnimatePresence mode="wait">
                                {selectedProject && openTabs.length > 0 ? (
                                    <motion.div
                                        key={selectedProject.id}
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex font-mono text-[11px] sm:text-xs md:text-sm lg:text-[15px] leading-5 md:leading-6 lg:leading-7 min-h-[440px]"
                                    >
                                        {/* Gutter Line Numbers */}
                                        <div className="w-10 md:w-14 text-right pr-3 md:pr-4 text-neutral-400 select-none border-r border-neutral-200 mr-3 md:mr-4 shrink-0 flex flex-col font-medium">
                                            {activeText.split("\n").map((_, idx) => (
                                                <span key={idx} className="h-5 md:h-6 lg:h-7 leading-5 md:leading-6 lg:leading-7">{idx + 1}</span>
                                            ))}
                                        </div>

                                        {/* Layered Editor Panel */}
                                        <div className="flex-1 relative min-h-[440px]">
                                            {/* Bottom Layer: Highlighted Syntax Code */}
                                            <div className="absolute inset-0 select-none whitespace-pre-wrap break-words text-neutral-800 pr-4 z-20 pointer-events-none font-normal">
                                                {activeText.split("\n").map((line, idx) => (
                                                    <div key={idx} className="min-h-[20px] md:min-h-[24px] lg:min-h-[28px] leading-5 md:leading-6 lg:leading-7">
                                                        {renderStyledLine(line)}
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Top Layer: Transparent Editable Textarea overlay */}
                                            <textarea
                                                value={activeText}
                                                onChange={(e) => {
                                                    setFileContents({
                                                        ...fileContents,
                                                        [selectedProject.id]: e.target.value
                                                    });
                                                }}
                                                className="absolute inset-0 w-full h-full bg-transparent border-0 outline-none resize-none p-0 text-transparent caret-neutral-800 leading-5 md:leading-6 lg:leading-7 whitespace-pre-wrap break-words focus:ring-0 focus:outline-none font-mono font-normal overflow-y-hidden z-10"
                                                spellCheck="false"
                                            />
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
                                                Select a project file from the sidebar explorer index to view details.
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* IDE Status Bar */}
                        <div className="bg-neutral-100 border-t border-neutral-200 px-4 py-1.5 flex items-center justify-between text-[11px] text-neutral-500 select-none shrink-0 font-sans">
                            {isModified ? (
                                <div className="flex items-center gap-2">
                                    <AlertCircle className="w-3.5 h-3.5 text-amber-500 animate-pulse shrink-0" />
                                    <span className="font-medium text-neutral-700">Warning: File content modified. Refresh the site to undo changes.</span>
                                </div>
                            ) : (
                                <div className="flex items-center gap-2">
                                    <Info className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                                    <span>Editable editor console workspace. Try typing anything inside the file.</span>
                                </div>
                            )}
                            <div className="hidden sm:flex items-center gap-4 text-neutral-400">
                                <span>Ln {activeText.split("\n").length}, Col {activeText.length}</span>
                                <span>UTF-8</span>
                                <span>Plain Text</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
