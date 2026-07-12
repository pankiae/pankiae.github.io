"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="container mx-auto px-6 py-16 md:py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center text-center mb-6 md:mb-12"
            >
                <h2 className="text-4xl md:text-5xl font-serif font-extrabold tracking-tight mb-4">Get in Touch</h2>
                <div className="w-12 h-0.5 bg-primary my-2" />
                <p className="text-muted-foreground max-w-2xl font-sans text-base">
                    Have a project in mind or just want to say hi? I&apos;d love to hear from you.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-8"
                >
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 text-primary border border-primary/20 rounded-sm">
                            <Mail className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-serif font-semibold mb-1 text-lg">Email</h3>
                            <p className="text-muted-foreground font-sans">pankajjarial.job@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-secondary/10 text-secondary border border-secondary/20 rounded-sm">
                            <Phone className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-serif font-semibold mb-1 text-lg">Phone</h3>
                            <p className="text-muted-foreground font-sans">+91-8626977490</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-accent/10 text-accent border border-accent/20 rounded-sm">
                            <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-serif font-semibold mb-1 text-lg">Location</h3>
                            <p className="text-muted-foreground font-sans">Chandigarh, India</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-card border border-border rounded-sm p-8"
                >
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium">Name</label>
                                <Input id="name" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                <Input id="email" type="email" placeholder="john@example.com" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                            <Input id="subject" placeholder="Project Inquiry" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium">Message</label>
                            <Textarea id="message" placeholder="Tell me about your project..." className="min-h-[120px]" />
                        </div>
                        <Button type="submit" variant="default" className="w-full">Send Message</Button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
