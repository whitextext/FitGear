import Link from "@/components/common/Link";

/**
 * Renders the primary navigation links within the header.
 */
export default function NavList() {
  return (
    <ul className="flex flex-row gap-8 text-[10px] font-black uppercase tracking-widest text-zinc-400">
      <li>
        <Link href="/">Início</Link>
      </li>
      <li>
        <Link href="/products">Loja</Link>
      </li>
      <li>
        <Link href="/about">Sobre Nós</Link>
      </li>
    </ul>
  );
}
