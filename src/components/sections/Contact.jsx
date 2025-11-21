"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="container mx-auto px-6 py-6 md:py-10 bg-purple-50/60">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center text-center mb-6 md:mb-10"
            >
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Get in Touch</h2>
                <p className="text-muted-foreground max-w-2xl">
                    Have a project in mind or just want to say hi? I&apos;d love to hear from you.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-8"
                >
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-secondary rounded-lg">
                            <Mail className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-semibold mb-1">Email</h3>
                            <p className="text-muted-foreground">pankajjarial.job@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-secondary rounded-lg">
                            <Phone className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-semibold mb-1">Phone</h3>
                            <p className="text-muted-foreground">+91-8626977490</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-secondary rounded-lg">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-semibold mb-1">Location</h3>
                            <p className="text-muted-foreground">Chandigarh, India</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8"
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
                            <Textarea id="message" placeholder="Tell me about your project..." className="min-h-[150px]" />
                        </div>
                        <Button type="submit" className="w-full">Send Message</Button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
