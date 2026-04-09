type MaterialProps = {
  titulo: string;
  descricao: string;
  vantagens: string[];
  indicacoes: string[];
};

export default function MaterialCard({
  titulo,
  descricao,
  vantagens,
  indicacoes,
}: MaterialProps) {
  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 mb-8 border border-gray-100">
      
      {/* Accent bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#b81716] to-[#e05c5b]" />

      <div className="p-8">
        
        {/* Título */}
        <h2 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">
          {titulo}
        </h2>

        {/* Separador */}
        <div className="w-10 h-0.5 bg-[#b81716] mb-4 rounded-full" />

        {/* Descrição */}
        <p className="text-gray-500 text-sm leading-relaxed mb-8">
          {descricao}
        </p>

        {/* Grid de listas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          {/* Vantagens */}
          <div className="bg-red-50 rounded-2xl p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#b81716] mb-3">
              Vantagens
            </p>
            <ul className="space-y-2">
              {vantagens.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#b81716] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Indicações */}
          <div className="bg-gray-50 rounded-2xl p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
              Indicado para
            </p>
            <ul className="space-y-2">
              {indicacoes.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}