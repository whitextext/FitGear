import type { ReactNode } from "react";
import Header from "./Header/Index";
import Footer from "./Footer/Index";

interface PageLayoutProps {
  children: ReactNode;
  mainClassName?: string;
}

/**
 * Standard layout wrapper for application pages.
 * Integrates the common Header, Footer, and a main content area.
 *
 * @param children - The inner content of the page
 * @param mainClassName - Optional additional CSS classes for the main content container
 */
export default function PageLayout({
  children,
  mainClassName = "",
}: PageLayoutProps) {
  return (
    <div className="bg-black min-h-screen text-white flex flex-col">
      <Header />
      <main className={`flex-1 container mx-auto px-4 py-12 ${mainClassName}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
