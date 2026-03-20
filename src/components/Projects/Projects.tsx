import Escadas from "../../assets/Escada.jpg";
import Cozinha from "../../assets/Cozinha2.jpg";
import Banheiro from "../../assets/Cuba.jpg";
import Marrom from "../../assets/Cozinha_tabaco.jpg";



export default function Stones() {
  const stones = [
    { name: "Escada", image: Escadas },
    { name: "Cozinha", image: Cozinha },
    { name: "Cozinha Marrrom Tabaco", image: Marrom },
    { name: "Cuba esculpida", image: Banheiro },
  ];

  return (
    <section className="py-16 md:py-24 " id="projetos">
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#b81716]" data-aos="fade-up">
           <span className="text-black">Alguns </span>
             de Nossos Projetos
          </h2> 
          <div className="w-20 h-[3px] bg-[#b81716] mx-auto mt-3"></div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" data-aos="fade-up-right">

          {stones.map((stone, index) => (
            <div
              key={index}
              className="
                relative
                group
                overflow-hidden
                rounded-xl
                cursor-pointer
              "
            >
             <div className="w-full aspect-[4/3] overflow-hidden">
              <img
                src={stone.image}
                alt={stone.name}
                className="
                  w-full
                  h-full
                  object-cover
                  object-center
                  transition-transform duration-500
                  group-hover:scale-110
                "
              />
            </div>

              
              <div className="
                absolute inset-0
                bg-black/40
                opacity-0
                group-hover:opacity-100
                transition duration-300
              "></div>

              
              <div className="
                absolute inset-0
                flex items-center justify-center
                opacity-0
                group-hover:opacity-100
                transition duration-300
              ">
                <h3 className="text-white text-lg font-semibold">
                  {stone.name}
                </h3>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}