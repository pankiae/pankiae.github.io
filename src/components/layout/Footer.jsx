import Link from "next/link";

export function Footer() {
    return (
        <footer className="py-8 border-t border-border bg-background">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 font-sans text-xs text-muted-foreground">
                    <p>
                        © {new Date().getFullYear()} Pankaj Jarial. All rights reserved.
                    </p>
                    <p className="font-mono">
                        Remote | India
                    </p>
                </div>
            </div>
        </footer>
    );
}
