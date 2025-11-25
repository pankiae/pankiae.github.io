"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
    return (
        <section id="home" className="min-h-[calc(100vh-5rem)] flex items-center justify-center relative overflow-hidden bg-background">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] md:w-[1000px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 right-0 w-[150%] md:w-[800px] h-[600px] bg-secondary/10 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-6 py-8 md:py-12 flex flex-col items-center text-center gap-6 md:gap-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
                        Available for new projects
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50 px-4">
                        Generative AI Engineer <br className="hidden md:block" />
                        building intelligent systems.
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                        I&apos;m Pankaj Jarial, a Generative AI Engineer with 2.5+ years of experience building LLM-driven and multimodal AI systems using Python, FastAPI, and PyTorch.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Button size="lg" asChild>
                        <Link href="#projects">
                            View Projects <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                        <Link href="/resume.pdf" target="_blank">
                            Download Resume <Download className="ml-2 w-4 h-4" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section >
    );
}
