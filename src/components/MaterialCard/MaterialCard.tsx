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
    <div className="bg-white/90 rounded-2xl shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-3">
        {titulo}
      </h2>

      <p className="text-gray-800 mb-4">{descricao}</p>

      <div className="mb-4">
        <h3 className="font-semibold text-[#b81716]">Vantagens:</h3>
        <ul className="list-disc ml-5 text-gray-800">
          {vantagens.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-[#b81716]">Indicado para:</h3>
        <ul className="list-disc ml-5 text-gray-800">
          {indicacoes.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}