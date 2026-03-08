import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * Shadcn UI Badge component.
 * Customized with FitGear aesthetics: uppercase text, font-black, and tracking-tighter.
 */
const badgeVariants = cva(
  "group/badge inline-flex w-fit shrink-0 items-center justify-center gap-1 text-[10px] font-black uppercase px-2 py-0.5 rounded tracking-tighter transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "text-red-500 border border-red-500/30",
        primary: "text-red-500 border border-red-500/30",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-transparent",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/80 border border-transparent",
        outline: "text-foreground border border-border",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  })
}

/* eslint-disable react-refresh/only-export-components */
export { Badge, badgeVariants }
