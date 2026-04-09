import { 
  FaUserCheck, 
  FaClock, 
  FaShieldAlt, 
  FaGem, 
  FaDraftingCompass, 
  FaRulerCombined 
} from "react-icons/fa";

export default function WhyChoose() {
  const items = [
    {
      text: "Atendimento Personalizado",
      icon: FaUserCheck,
    },
    {
      text: "Cumprimento de Prazos",
      icon: FaClock,
    },
    {
      text: "Garantia no Serviço",
      icon: FaShieldAlt,
    },
    {
      text: "Materiais de Alta Qualidade",
      icon: FaGem,
    },
    {
      text: "Acabamento Preciso",
      icon: FaDraftingCompass,
    },
    {
      text: "Projetos Sob Medida",
      icon: FaRulerCombined,
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">

        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" data-aos="fade-up">
            <span className="text-black">Por que </span>
            <span className="text-[#b81716]">escolher nossa marmoraria?</span>
          </h2>

          <div className="w-20 h-[3px] bg-[#b81716] mx-auto mt-3"></div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6" data-aos="fade-up-left">

          {items.map((item, index) => {
            const Icon = item.icon; // ✅ CORRETO

            return (
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
                  <Icon className="text-xl text-[#b81716]" />
                </div>

                <p className="text-gray-800 font-medium">
                  {item.text}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}