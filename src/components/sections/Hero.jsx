"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
    return (
        <section id="home" className="min-h-[calc(100vh-5rem)] flex items-center justify-center relative overflow-hidden bg-background">
            {/* Subtle Gradient Background Mesh */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50/50 via-background to-background -z-10" />

            <div className="container mx-auto px-6 py-12 md:py-24 flex flex-col items-center text-center gap-8 md:gap-12 max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center gap-6"
                >
                    <span className="inline-flex items-center rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur-sm">
                        <span className="relative flex h-2 w-2 mr-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Available for new collaborations
                    </span>

                    <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-foreground leading-[1.1] selection:bg-primary/10">
                        Applied AI <br className="hidden md:block" />
                        <span className="text-gradient">Engineer.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
                        I architect intelligent systems using <span className="text-foreground font-medium">Python</span>, <span className="text-foreground font-medium">FastAPI</span>, and <span className="text-foreground font-medium">PyTorch</span>.
                        Transforming complex data into actionable insights.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4 w-full justify-center"
                >
                    <Link href="#projects">
                        <Button size="lg" className="h-12 px-8 text-base font-semibold rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                            View Work <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                    <Link href="/resume.pdf" target="_blank">
                        <Button size="lg" variant="outline" className="h-12 px-8 text-base font-medium rounded-full border-border bg-background hover:bg-muted transition-all">
                            Download Resume <Download className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                </motion.div>
            </div>

            {/* Minimal Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </section >
    );
}
