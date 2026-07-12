import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-transparent duration-200 cursor-pointer",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90 border-primary",
                destructive:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/90 border-destructive",
                outline:
                    "border-border bg-transparent hover:bg-neutral-100 hover:text-foreground",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/90 border-secondary",
                ghost: "border-transparent hover:bg-neutral-100 hover:text-foreground",
                link: "text-primary underline-offset-4 hover:underline border-none",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-sm px-3",
                lg: "h-11 rounded-sm px-8 text-base",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
        <Comp
            className={cn(buttonVariants({ variant, size, className }))}
            ref={ref}
            {...props}
        />
    )
})
Button.displayName = "Button"

export { Button, buttonVariants }
