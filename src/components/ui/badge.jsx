import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
    "inline-flex items-center rounded-sm border border-border px-2 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring",
    {
        variants: {
            variant: {
                default:
                    "bg-primary/10 text-primary border-primary/20 hover:bg-primary/20",
                secondary:
                    "bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20",
                destructive:
                    "bg-destructive/10 text-destructive border-destructive/20 hover:bg-destructive/20",
                outline: "text-foreground bg-transparent border-neutral-300",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

function Badge({ className, variant, ...props }) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props} />
    )
}

export { Badge, badgeVariants }
