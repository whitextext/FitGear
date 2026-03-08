import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * A utility function to conditionally join Tailwind CSS classes.
 * It uses `clsx` to conditionally construct className strings and `twMerge`
 * to smartly merge conflicting Tailwind classes (e.g., resolving padding/margin overrides).
 *
 * @param inputs - An array of class names, objects, or conditionally applied classes
 * @returns A single string with correctly merged Tailwind classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
