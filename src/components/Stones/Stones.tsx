import Preto from "../../assets/São_Gabriel.jpg";
import Travertino from "../../assets/Travertino.jpg";
import Siena from "../../assets/Branco_Siena.jpg";
import Negroni from "../../assets/Negroni.jpg";
export default function Stones() {
  const stones = [
    { name: "Granito Branco Siena", image: Siena },
    { name: "Granito Preto São Gabriel", image: Preto },
    { name: "Quartzo Negroni", image: Negroni },
    { name: "Mármore Travertino", image: Travertino },
  ];

  return (
    <section className="py-16 md:py-24 " id="materiais">
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#b81716]">
            <span className="text-black">Alguns </span>
            Materiais
          </h2>
          <div className="w-20 h-[3px] bg-[#b81716] mx-auto mt-3"></div>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

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
              {/* IMAGEM */}
              <img
                src={stone.image}
                alt={stone.name}
                className="
                  w-full
                  h-64
                  object-cover
                  transition-transform duration-500
                  group-hover:scale-110
                "
              />

              {/* OVERLAY */}
              <div className="
                absolute inset-0
                bg-black/40
                opacity-0
                group-hover:opacity-100
                transition duration-300
              "></div>

              {/* TEXTO */}
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