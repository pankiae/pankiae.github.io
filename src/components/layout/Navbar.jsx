"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Github, Linkedin, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300",
                (scrolled || isOpen) ? "bg-background/98 border-b border-border py-3 md:py-4" : "bg-background/90 backdrop-blur-md border-b border-transparent py-4 md:py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="text-2xl font-serif font-black tracking-tight hover:opacity-85 transition-opacity">
                    Pankaj Jarial<span className="text-primary font-sans">.</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item, idx) => {
                        // Google color sequence for items on hover
                        const hoverColors = [
                            "hover:text-primary",   // Blue
                            "hover:text-secondary", // Red
                            "hover:text-tertiary",  // Yellow
                            "hover:text-accent",    // Green
                        ];
                        const hoverClass = hoverColors[idx % hoverColors.length];
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn("text-sm font-medium text-muted-foreground transition-colors", hoverClass)}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <Link href="https://github.com/pankiae" target="_blank" className="hover:text-primary transition-colors text-muted-foreground">
                        <Github className="w-4 h-4" />
                    </Link>
                    <Link href="https://linkedin.com/in/pankiae" target="_blank" className="hover:text-accent transition-colors text-muted-foreground">
                        <Linkedin className="w-4 h-4" />
                    </Link>
                </div>

            </div>
        </nav>
    );
}
