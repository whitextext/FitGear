import { Rocket, Flame, Users } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";

/**
 * The "About Us" page detailing the brand's identity, ethos, and core values.
 */
export default function About() {
  return (
    <PageLayout>
      <div className="max-w-5xl mx-auto animate-in fade-in duration-700">
        <div className="bg-zinc-900 border border-zinc-800 p-16 rounded-[50px] text-center relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-red-600/10 rounded-full blur-[120px]" />
          <h2 className="text-6xl font-black uppercase italic mb-10 tracking-tighter leading-none">
            <span className="text-red-600">#</span> O Nosso ADN
          </h2>
          <p className="text-zinc-400 text-xl leading-relaxed mb-16 max-w-3xl mx-auto font-medium">
            A FitGear não é comércio; é engenharia de força. Fundada por
            veteranos do ferro, cada produto é um manifesto contra a
            fragilidade. Não vendemos acessórios, vendemos as ferramentas para a
            tua evolução biológica.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                icon: Rocket,
                title: "Fronteira Tecnológica",
                desc: "Materiais testados em stress extremo.",
              },
              {
                icon: Flame,
                title: "Raw Power",
                desc: "Foco absoluto em performance bruta.",
              },
              {
                icon: Users,
                title: "The Crew",
                desc: "Uma legião de atletas de elite.",
              },
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="w-20 h-20 bg-zinc-800 rounded-3xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-all duration-500 rotate-3 group-hover:rotate-12 group-hover:scale-110">
                  <feature.icon className="text-white" size={40} />
                </div>
                <h3 className="font-black uppercase text-sm mb-3 tracking-widest text-white">
                  {feature.title}
                </h3>
                <p className="text-xs text-zinc-500 font-bold uppercase tracking-tight leading-relaxed px-4">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
