import type { ReactNode } from "react";

/**
 * Props for a standard hyper-link component.
 */
export interface LinkProps {
  /** The destination URL or route path */
  href: string;
  /** The clickable text or elements inside the link */
  children: ReactNode;
}
