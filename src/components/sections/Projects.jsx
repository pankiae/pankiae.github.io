"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const projects = [
    {
        title: "Curico",
        description: "Multi-Model Agentic workflow generating steps for activity, Q&A, and images. Features Whisper + TTS voice tutor and Celery+Redis pipeline for off-loading tasks.",
        tags: ["Python", "Celery", "Redis", "Whisper", "TTS"],
        links: { demo: "https://play.curico.ai", repo: "#" },
    },
    {
        title: "Invisioned",
        description: "Integrated multiple LLMs (OpenAI, Stability AI, Claude) and CV models (GroundingDINO, SAM2). Cost-effective solution serving 6,000+ users.",
        tags: ["LLMs", "Computer Vision", "SAM2", "GroundingDINO"],
        links: { demo: "https://invisioned.io/", repo: "#" },
    },
    {
        title: "Image Seg AI",
        description: "Leveraging Meta's SAM2 for zero-shot object segmentation. Integrated OpenAI GPT-image-1 for AI-powered inpainting.",
        tags: ["Python", "PyTorch", "FastAPI", "SAM2"],
        links: { demo: "#", repo: "#" },
    },
];

export function Projects() {
    return (
        <section id="projects" className="container mx-auto px-6 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-12"
            >
                <div className="flex flex-col gap-4">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Projects</h2>
                    <p className="text-muted-foreground max-w-2xl">
                        Here are some of the projects I&apos;ve worked on. Each one was an opportunity to learn and solve unique challenges.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full flex flex-col bg-card/50 backdrop-blur-sm border-border/50 hover:border-border transition-colors">
                                <CardHeader>
                                    <CardTitle className="text-xl">{project.title}</CardTitle>
                                    <CardDescription className="mt-2">{project.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <Badge key={tag} variant="secondary" className="bg-secondary/50">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="flex gap-4">
                                    <Button variant="outline" size="sm" asChild>
                                        <Link href={project.links.demo} target="_blank">
                                            <ExternalLink className="w-4 h-4 mr-2" /> Demo
                                        </Link>
                                    </Button>
                                    <Button variant="ghost" size="sm" asChild>
                                        <Link href={project.links.repo} target="_blank">
                                            <Github className="w-4 h-4 mr-2" /> Code
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
