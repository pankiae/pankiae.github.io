"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Play } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const projects = [
    {
        title: "Curico",
        slug: "curico",
        description: "Multi-Model Agentic workflow generating steps for activity, Q&A, and images. Features Whisper + TTS voice tutor and Celery+Redis pipeline for off-loading tasks.",
        tags: ["Python", "Celery", "Redis", "Whisper", "TTS"],
        links: { demo: "https://play.curico.ai", repo: "#" },
        videoUrl: "/videos/curico.mp4",
        imageCount: 6
    },
    {
        title: "Invisioned",
        slug: "invisioned",
        description: "Integrated multiple LLMs (OpenAI, Stability AI, Claude) and CV models (GroundingDINO, SAM2). Cost-effective solution serving 6,000+ users.",
        tags: ["LLMs", "Computer Vision", "SAM2", "GroundingDINO"],
        links: { demo: "https://invisioned.io/", repo: "#" },
        videoUrl: "/videos/invisioned.mp4",
        imageCount: 7
    },
    {
        title: "Image Seg AI",
        slug: "image-seg-ai",
        description: "Leveraging Meta's SAM2 for zero-shot object segmentation. Integrated OpenAI GPT-image-1 for AI-powered inpainting.",
        tags: ["Python", "PyTorch", "FastAPI", "SAM2"],
        links: { demo: "#", repo: "#" },
        videoUrl: "/videos/imageseg.mp4",
        imageCount: 0
    },
];

const SlidingImages = ({ projectSlug, imageCount }) => {
    const containerRef = useRef(null);
    const [containerHeight, setContainerHeight] = useState(0);
    const [imageDimensions, setImageDimensions] = useState([]);

    useEffect(() => {
        if (!containerRef.current) return;
        const observer = new ResizeObserver((entries) => {
            if (entries[0]) {
                setContainerHeight(entries[0].contentRect.height);
            }
        });
        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!imageCount || imageCount === 0) return;

        const images = Array.from({ length: imageCount }, (_, i) => `/${projectSlug}/images/img-${i}.png`);

        Promise.all(
            images.map((src) => {
                return new Promise((resolve) => {
                    const img = new Image();
                    img.onload = () => {
                        resolve({ width: img.width, height: img.height });
                    };
                    img.onerror = () => {
                        resolve({ width: 16, height: 9 }); // fallback aspect ratio
                    };
                    img.src = src;
                });
            })
        ).then(setImageDimensions);
    }, [projectSlug, imageCount]);

    if (!imageCount || imageCount === 0) return null;

    const images = Array.from({ length: imageCount }, (_, i) => `/${projectSlug}/images/img-${i}.png`);

    return (
        <div ref={containerRef} className="absolute inset-0 overflow-hidden bg-muted/20">
            {containerHeight > 0 && imageDimensions.length === imageCount && (
                <motion.div
                    className="flex h-full w-fit"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20,
                    }}
                >
                    {[...images, ...images].map((src, index) => {
                        const actualIndex = index % imageCount;
                        const { width: imgWidth, height: imgHeight } = imageDimensions[actualIndex];
                        const aspectRatio = imgWidth / imgHeight;
                        const slideWidth = containerHeight * aspectRatio;

                        return (
                            <div
                                key={index}
                                style={{ width: slideWidth }}
                                className="h-full relative flex-shrink-0 border-r border-white/10"
                            >
                                <img src={src} alt={`${projectSlug}-slide-${index}`} className="h-full w-full object-contain" />
                            </div>
                        );
                    })}
                </motion.div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
        </div>
    );
};

export function Projects() {
    const [activeVideo, setActiveVideo] = useState(null);


    return (
        <section id="projects" className="container mx-auto px-6 py-24 space-y-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row justify-between items-end gap-6 max-w-6xl mx-auto border-b border-border pb-8"
            >
                <div className="space-y-4 max-w-2xl">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                        Selected Works
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        A curated collection of technical solutions. Focusing on scalability, performance, and intelligent automation.
                    </p>
                </div>
                <div className="hidden md:block">
                    <span className="text-sm font-medium text-muted-foreground">03 — Projects</span>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`group flex flex-col bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 ${index === 0 || index === 3 ? 'md:col-span-2' : ''}`}
                    >
                        {/* Visual Side */}
                        <div className="relative aspect-video w-full bg-muted/30 overflow-hidden">
                            {project.imageCount > 0 ? (
                                <SlidingImages projectSlug={project.slug} imageCount={project.imageCount} />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500 bg-secondary/50 cursor-pointer" onClick={() => setActiveVideo(project.videoUrl)}>
                                    <div className="w-16 h-16 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-all">
                                        <Play className="w-6 h-6 text-foreground fill-current ml-1" />
                                    </div>
                                </div>
                            )}

                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6">
                                <Button size="sm" variant="secondary" className="backdrop-blur-md bg-white/90 text-black border-none" onClick={() => setActiveVideo(project.videoUrl)}>
                                    <Play className="w-4 h-4 mr-2" /> Play Demo
                                </Button>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="flex flex-col flex-grow p-6 md:p-8 space-y-6">
                            <div className="space-y-3">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                                    <div className="flex gap-2">
                                        <Link href={project.links.demo} target="_blank" className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
                                            <ExternalLink className="w-5 h-5" />
                                        </Link>
                                        <Link href={project.links.repo} target="_blank" className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
                                            <Github className="w-5 h-5" />
                                        </Link>
                                    </div>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-auto pt-4">
                                {project.tags.map((tag) => (
                                    <Badge key={tag} variant="secondary" className="px-2.5 py-0.5 text-xs font-medium bg-secondary text-secondary-foreground border border-border/50 rounded-md">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <Modal isOpen={!!activeVideo} onClose={() => setActiveVideo(null)}>
                <div className="aspect-video w-full bg-black rounded-lg overflow-hidden shadow-2xl">
                    {activeVideo && (
                        <video
                            src={activeVideo}
                            controls
                            autoPlay
                            className="w-full h-full"
                        >
                            Your browser does not support the video tag.
                        </video>
                    )}
                </div>
            </Modal>
        </section>
    );
}
