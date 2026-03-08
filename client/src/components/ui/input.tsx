import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"

import { cn } from "@/lib/utils"

export interface InputProps extends React.ComponentProps<"input"> {
  label?: string;
}

/**
 * Shadcn UI Input component.
 * Customized to include an optional label and FitGear aesthetics (zinc-800 background, rounded-xl borders).
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, ...props }, ref) => {
    return (
      <div className={cn("w-full")}>
        {label && (
          <label className="block text-[10px] font-black text-zinc-500 uppercase mb-2 tracking-widest">
            {label}
          </label>
        )}
        <InputPrimitive
          type={type}
          data-slot="input"
          ref={ref}
          className={cn(
            "w-full bg-zinc-800 border border-zinc-700 rounded-xl p-4 text-white focus:outline-none focus:border-red-600 transition-colors placeholder:text-zinc-600",
            className
          )}
          {...props}
        />
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
