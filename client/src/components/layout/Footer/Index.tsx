import CommonText from "@/components/common/CommonText";
import Link from "@/components/common/Link";

/**
 * The main application footer.
 * Displays branding, navigation links, legal information, and contact details.
 */
export default function Footer() {
  return (
    <footer className="bg-black flex flex-col gap-4 border-t border-zinc-800 pt-8 pb-4 mt-auto">
      <section className="flex justify-around gap-2 px-8">
        <div>
          <p className="font-semibold text-xl text-sky-100 mb-2 italic">
            FITGEAR
          </p>
          <CommonText text="Power & Performance." />
        </div>
        <div>
          <p className="font-semibold text-xl text-sky-100 mb-2 italic font-[oswald]">
            Navegação
          </p>
          <Link href="/">
            <CommonText text="Início" />
          </Link>
          <Link href="/about">
            <CommonText text="Sobre Nós" />
          </Link>
          <Link href="/products">
            <CommonText text="Loja" />
          </Link>
        </div>
        <div>
          <p className="font-semibold text-xl text-sky-100 mb-2 italic font-[oswald]">
            LEGAL
          </p>
          <Link href="/privacy">
            <CommonText text="Privacy" />
          </Link>
          <Link href="/terms">
            <CommonText text="Terms" />
          </Link>
        </div>
        <div>
          <p className="font-semibold text-xl text-sky-100 mb-2 italic font-[oswald]">
            CONTACT
          </p>
          <CommonText text="Contato@Fitgear.com.br" />
          <CommonText text="+55 (11) 99999-9999" />
          <CommonText text="Street of Training, 123 - New York, NY" />
        </div>
      </section>

      <hr className="w-full border-0 bg-gray-500 h-px my-4" />

      <section className="flex justify-center">
        <p className="text-sky-100 text-sm italic font-[oswald]">
          © 2026 Fitgear. All rights reserved{" "}
          <span className="text-red-500">By Diferente.</span>
        </p>
      </section>
    </footer>
  );
}
