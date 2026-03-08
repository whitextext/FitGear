import type { ButtonHTMLAttributes, ReactNode } from "react";

/**
 * Defines the available visual styles for the Button component.
 */
export type ButtonVariant = "primary" | "outline" | "ghost" | "danger";

/**
 * Props for the Button component.
 * Extends standard HTML button attributes.
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** The content to be rendered inside the button */
  children?: ReactNode;
  /** The visual style variant of the button */
  variant?: ButtonVariant;
}
