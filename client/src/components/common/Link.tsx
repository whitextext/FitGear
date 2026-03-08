import type { LinkProps } from "@/types/link";

/**
 * A styled anchor link component.
 *
 * @param href - The destination URL
 * @param children - The label or elements to display inside the link
 */
export default function Link({ href, children }: LinkProps) {
  return (
    <nav>
      <a
        href={href}
        className="text-sky-100 text-xl  font-semibold transition-colors hover:text-red-500 font-sans"
      >
        {children}
      </a>
    </nav>
  );
}
