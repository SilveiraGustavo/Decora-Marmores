import {
  CookingPot,
  Bath,
  Layers,
  DoorOpen,
  Flame,
  Monitor
} from "lucide-react";

export default function Services() {
  const services = [
    { icon: CookingPot, title: "Bancadas de Cozinha" },
    { icon: Bath, title: "Banheiros" },
    { icon: Layers, title: "Escadas" },
    { icon: DoorOpen, title: "Soleiras e Peitoris" },
    { icon: Flame, title: "Lareiras" },
    { icon: Monitor, title: "Projetos Sob Medida" },
  ];

  return (
    <section className="py-16 md:py-24 ">
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">

        
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#b81716]">
            <span className="text-black">Nossos </span>
            Serviços
          </h2>

          <div className="w-20 h-[3px] bg-[#b81716] mx-auto mt-3"></div>
        </div>

        
        <div className="
          grid
          grid-cols-2
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-3
          gap-6
        ">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="
                  bg-white
                  p-6
                  rounded-xl
                  shadow-sm
                  flex flex-col items-center text-center
                  gap-4
                  transition-all duration-300
                  hover:shadow-lg
                  hover:-translate-y-2
                "
              >
                <Icon size={36} className="text-[#b81716]" />

                <p className="text-sm md:text-base font-semibold text-gray-800">
                  {service.title}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}