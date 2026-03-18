import { ShieldCheck } from "lucide-react";

export default function WhyChoose() {
  const items = [
    "Atendimento Personalizado",
    "Cumprimento de Prazos",
    "Garantia no Serviço",
    "Materiais de Alta Qualidade",
    "Acabamento Preciso",
    "Projetos Sob Medida",
  ];

  return (
    <section className="py-16 md:py-24">

      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">

        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            <span className="text-black">Por que </span>
            <span className="text-[#b81716]">escolher nossa marmoraria?</span>
          </h2>

          <div className="w-20 h-[3px] bg-[#b81716] mx-auto mt-3"></div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">

          {items.map((item, index) => (
            <div
              key={index}
              className="
                flex items-center gap-4
                p-4
                rounded-lg
                bg-gray-50
                transition-all duration-300
                hover:bg-white
                hover:shadow-md
              "
            >
              <div className="bg-red-100 p-2 rounded-full">
                <ShieldCheck size={20} className="text-[#b81716]" />
              </div>

              <p className="text-gray-800 font-medium">
                {item}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}