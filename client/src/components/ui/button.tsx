import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * Shadcn UI Button component.
 * Customized with FitGear aesthetics: skew-x-12 transformations, border-transparent, and custom hover states.
 */
const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center border border-transparent whitespace-nowrap outline-none select-none disabled:pointer-events-none disabled:opacity-50 font-semibold transition-transform duration-300 transform active:scale-95 skew-x-12",
  {
    variants: {
      variant: {
        default: "bg-red-500 text-white hover:bg-red-600",
        primary: "bg-red-500 text-white hover:bg-red-600",
        outline: "border-2 border-red-500 text-red-500 hover:bg-red-50 bg-transparent",
        ghost: "text-red-500 hover:bg-red-50 bg-transparent",
        danger: "bg-red-600 text-white hover:bg-red-700",
        destructive: "bg-red-600 text-white hover:bg-red-700",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "primary",
  size = "default",
  children,
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      <div className="-skew-x-12 inline-flex items-center justify-center gap-2">
        {children}
      </div>
    </ButtonPrimitive>
  )
}

/* eslint-disable react-refresh/only-export-components */
export { Button, buttonVariants }
