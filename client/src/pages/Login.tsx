import { useNavigate } from "react-router-dom";
import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import { Input } from "@/components/ui/input";

/**
 * The Login page.
 * Provides a form for users to authenticate into the application.
 */
export default function Login() {
  const navigate = useNavigate();

  return (
    <PageLayout mainClassName="flex items-center justify-center">
      <div className="min-h-[60vh] flex items-center justify-center animate-in zoom-in-95 duration-500 w-full">
        <div className="bg-zinc-900 border border-zinc-800 p-12 rounded-[40px] w-full max-w-md relative shadow-2xl shadow-black">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-red-600 shadow-[0_0_25px_rgba(220,38,38,0.8)]" />

          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-8 border-2 border-zinc-700">
              <User size={48} className="text-zinc-600" />
            </div>
            <h2 className="text-4xl font-black uppercase tracking-tighter italic">
              Protocolo de Acesso
            </h2>
          </div>

          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              navigate("/");
            }}
          >
            <Input
              label="Identificação do Atleta"
              type="email"
              placeholder="nome@exemplo.com"
              required
            />
            <Input
              label="Código Secreto"
              type="password"
              placeholder="••••••••"
              required
            />
            <Button
              type="submit"
              className="w-full py-4 mt-4"
              onClick={() => {}}
            >
              Iniciar Sessão
            </Button>
          </form>

          <div className="mt-10 text-center text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600">
            Ainda não faz parte da Crew?{" "}
            <span className="text-red-500 cursor-pointer hover:underline">
              Registrar
            </span>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
