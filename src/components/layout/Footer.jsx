import Link from "next/link";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="py-12 border-t border-border bg-background">
            <div className="container mx-auto px-6 max-w-6xl space-y-8">
                {/* Contact grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-primary" />
                        <a href="mailto:pankajjarial.job@gmail.com" className="hover:text-foreground transition-colors">
                            pankajjarial.job@gmail.com
                        </a>
                    </div>
                    <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-secondary" />
                        <a href="tel:+918626977490" className="hover:text-foreground transition-colors">
                            +91-8626977490
                        </a>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-accent" />
                        <span>Remote | India</span>
                    </div>
                </div>

                {/* Bottom line */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-neutral-800/10">
                    <p className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} Pankaj Jarial. All rights reserved.
                    </p>
                    <div className="flex gap-6 items-center">
                        <Link href="https://github.com/pankiae" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                            <Github className="w-4 h-4" />
                        </Link>
                        <Link href="https://linkedin.com/in/pankiae" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                            <Linkedin className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
