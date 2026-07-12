import Link from "next/link";

export function Footer() {
    return (
        <footer className="py-0 border-t border-border bg-background">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex justify-center items-center font-sans text-xs text-muted-foreground text-center">
                    <p>
                        © {new Date().getFullYear()} Pankaj Jarial. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
