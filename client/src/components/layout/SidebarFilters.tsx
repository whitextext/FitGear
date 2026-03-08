import { Filter } from "lucide-react";

/**
 * A sidebar containing product filtering options (category and maximum price).
 *
 * @param activeCategory - The currently selected category
 * @param onCategoryChange - Callback triggered when a category is selected
 * @param maxPrice - The current maximum price filter value
 * @param onPriceChange - Callback triggered when the price slider value changes
 */
const SidebarFilters = ({ activeCategory, onCategoryChange, maxPrice, onPriceChange }: { activeCategory: string, onCategoryChange: (c: string) => void, maxPrice: number, onPriceChange: (p: number) => void }) => (
  <aside className="w-full md:w-64 shrink-0">
    <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl sticky top-28">
      <div className="flex items-center gap-2 mb-6 text-red-500 font-bold uppercase tracking-widest text-xs">
        <Filter size={16} /> Painel de Filtros
      </div>
      
      <div className="mb-8">
        <label className="block text-[10px] font-black text-zinc-500 uppercase mb-3 tracking-widest">Filtrar Categoria</label>
        <div className="flex flex-col gap-2">
          {['all', 'equipamentos', 'suplementos', 'roupas', 'acessorios'].map(cat => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`text-left text-xs font-bold uppercase py-2 px-3 rounded-lg transition-all ${activeCategory === cat ? 'bg-red-600 text-white' : 'bg-zinc-800 text-zinc-500 hover:text-white'}`}
            >
              {cat === 'all' ? 'Ver Tudo' : cat}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-[10px] font-black text-zinc-500 uppercase mb-3 tracking-widest">
          Orçamento Máx: <span className="text-red-500">R$ {maxPrice}</span>
        </label>
        <input 
          type="range" min="0" max="2000" step="50"
          value={maxPrice}
          onChange={(e) => onPriceChange(Number(e.target.value))}
          className="w-full accent-red-600 bg-zinc-800 h-1.5 rounded-lg appearance-none cursor-pointer"
        />
      </div>
    </div>
  </aside>
);

export default SidebarFilters;