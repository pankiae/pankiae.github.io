"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Play } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import Link from "next/link";
import { useState } from "react";

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

export function Projects() {
    const [activeVideo, setActiveVideo] = useState(null);

    const SlidingImages = ({ projectSlug, imageCount }) => {
        if (!imageCount || imageCount === 0) return null;

        const images = Array.from({ length: imageCount }, (_, i) => `/${projectSlug}/images/img-${i}.png`);

        return (
            <div className="absolute inset-0 overflow-hidden bg-muted/20">
                <motion.div
                    className="flex h-full w-fit"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30,
                    }}
                >
                    {[...images, ...images].map((src, index) => (
                        <div key={index} className="h-full w-auto aspect-[16/10] relative flex-shrink-0 border-r border-white/10">
                            <img src={src} alt={`${projectSlug}-slide-${index}`} className="h-full w-full object-cover" />
                        </div>
                    ))}
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
        );
    };

    return (
        <section id="projects" className="container mx-auto px-6 py-16 md:py-24 space-y-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-3xl mx-auto space-y-4"
            >
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                    Featured Projects
                </h2>
                <p className="text-lg text-muted-foreground">
                    A showcase of my technical journey. Each project represents a unique challenge solved with modern technology and creative engineering.
                </p>
            </motion.div>

            <div className="flex flex-col gap-24 md:gap-32">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
                    >
                        {/* Visual Side */}
                        <div className="w-full lg:w-3/5 relative group">
                            <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl bg-card/50 aspect-video lg:aspect-[16/9]">
                                {project.imageCount > 0 ? (
                                    <SlidingImages projectSlug={project.slug} imageCount={project.imageCount} />
                                ) : (
                                    <div className="w-full h-full bg-muted/30 flex items-center justify-center group-hover:bg-muted/40 transition-colors cursor-pointer" onClick={() => setActiveVideo(project.videoUrl)}>
                                        <Play className="w-20 h-20 text-primary/50 group-hover:scale-110 transition-transform duration-300" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
                                    </div>
                                )}

                                {/* Floating Action Button for Video */}
                                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                    <Button size="lg" className="rounded-full shadow-xl" onClick={() => setActiveVideo(project.videoUrl)}>
                                        <Play className="w-5 h-5 mr-2 fill-current" /> Watch Demo
                                    </Button>
                                </div>
                            </div>
                            {/* Decorative background element */}
                            <div className={`absolute -inset-4 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-[2rem] -z-10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                        </div>

                        {/* Content Side */}
                        <div className="w-full lg:w-2/5 space-y-6">
                            <div className="space-y-2">
                                <div className="flex items-center gap-3">
                                    <h3 className="text-3xl font-bold">{project.title}</h3>
                                    <div className="h-px flex-1 bg-border/60" />
                                </div>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <Badge key={tag} variant="secondary" className="px-3 py-1 text-sm bg-secondary/50 hover:bg-secondary/80 transition-colors">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20" asChild>
                                    <Link href={project.links.demo} target="_blank">
                                        <ExternalLink className="w-5 h-5 mr-2" /> Live Demo
                                    </Link>
                                </Button>
                                <Button variant="outline" size="lg" onClick={() => setActiveVideo(project.videoUrl)}>
                                    <Play className="w-5 h-5 mr-2" /> Watch Video
                                </Button>
                                <Button variant="outline" size="lg" asChild>
                                    <Link href={project.links.repo} target="_blank">
                                        <Github className="w-5 h-5 mr-2" /> Source Code
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <Modal isOpen={!!activeVideo} onClose={() => setActiveVideo(null)}>
                <div className="aspect-video w-full bg-black rounded-xl overflow-hidden shadow-2xl">
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
