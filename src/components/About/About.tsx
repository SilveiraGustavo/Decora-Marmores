import Trabalhador from "../../assets/Trabalhador.jpg";
import { FaAward, FaUsers, FaCogs } from "react-icons/fa";

export default function About() {
  const aboutItems = [
    {
      text: "20 anos de experiência",
      icon: FaAward,
    },
    {
      text: "Equipe qualificada",
      icon: FaUsers,
    },
    {
      text: "Tecnologia moderna",
      icon: FaCogs,
    },
  ];

  return (
    <section className="py-16 md:py-24" id="sobre">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6 md:px-10 lg:px-16">

        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#b81716] mb-4" data-aos="fade-up">
            <span className="text-black">Sobre </span>
            Nós
          </h2>

          <div className="w-16 h-[3px] bg-[#b81716] mb-6"></div>

          <p className="text-gray-800 mb-6 font-medium leading-relaxed">
            Somos uma marmoraria especializada no beneficiamento e instalação
            de mármores, granitos naturais e superfícies especiais.
          </p>

          <ul className="space-y-4">
            {aboutItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <li key={index} className="flex items-center gap-3">
                  <Icon className="text-[#b81716]" />
                  <span>{item.text}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="w-full">
          <img
            src={Trabalhador}
            alt="Trabalhos da marmoraria"
            className="
              w-full
              h-[300px]
              sm:h-[400px]
              md:h-[450px]
              object-cover
              rounded-xl
              shadow-lg
            "
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
}