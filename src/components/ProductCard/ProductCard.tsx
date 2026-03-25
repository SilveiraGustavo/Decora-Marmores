type ProductProps = {
  nome: string;
  tipo: string;
  imagem: string;
};

export default function ProductCard({ nome, tipo, imagem }: ProductProps) {
  const mensagem = `Olá, gostaria de um orçamento para: ${nome}`;

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden group hover:shadow-xl transition duration-300">
      
      {/* Imagem */}
      <div className="overflow-hidden">
        <img
          src={imagem}
          alt={nome}
          loading="lazy"
          className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* Conteúdo */}
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-lg font-bold text-gray-900">
          {nome}
        </h2>

        <span className="text-sm text-gray-500 capitalize">
          {tipo}
        </span>

        {/* Botão */}
        <a
          href={`https://wa.me/5535998522695?text=${encodeURIComponent(mensagem)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 bg-[#b81716] text-white text-sm px-4 py-2 rounded-lg text-center hover:bg-[#9a1514] transition font-semibold"
        >
          Solicitar orçamento
        </a>
      </div>
    </div>
  );
}