"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="container mx-auto px-6 py-24 mb-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 max-w-6xl mx-auto"
            >
                <div className="space-y-8">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground">Get in Touch</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Have a project in mind or interested in collaboration? <br />
                            I&apos;m always open to discussing new opportunities.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors">
                            <div className="p-3 bg-secondary rounded-lg text-foreground">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1">Email</h3>
                                <p className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">pankajjarial.job@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors">
                            <div className="p-3 bg-secondary rounded-lg text-foreground">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1">Phone</h3>
                                <p className="text-muted-foreground">+91-8626977490</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors">
                            <div className="p-3 bg-secondary rounded-lg text-foreground">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1">Location</h3>
                                <p className="text-muted-foreground">Chandigarh, India</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                                <Input id="name" placeholder="John Doe" className="bg-muted/30 border-border focus:ring-1 focus:ring-primary/20 h-11" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                                <Input id="email" type="email" placeholder="john@example.com" className="bg-muted/30 border-border focus:ring-1 focus:ring-primary/20 h-11" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
                            <Input id="subject" placeholder="Project Inquiry" className="bg-muted/30 border-border focus:ring-1 focus:ring-primary/20 h-11" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                            <Textarea id="message" placeholder="Tell me about your project..." className="bg-muted/30 border-border focus:ring-1 focus:ring-primary/20 min-h-[150px] resize-none" />
                        </div>
                        <Button type="submit" className="w-full h-12 text-base font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-sm">
                            Send Message
                        </Button>
                    </form>
                </div>
            </motion.div>
        </section>
    );
}
