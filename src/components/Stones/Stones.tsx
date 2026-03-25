import Preto from "../../assets/Stones/São_Gabriel.jpg";
import Travertino from "../../assets/Stones/Travertino.jpg";
import Siena from "../../assets/Stones/Branco_Siena.jpg";
import Negroni from "../../assets/Stones/Negroni.jpg";

import Button from "../Button/Button";
import ProductCard from "../ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";

export default function Stones() {
  const stones = [
    { nome: "Branco Siena", tipo: "granito", imagem: Siena },
    { nome: "Preto São Gabriel", tipo: "granito", imagem: Preto },
    { nome: "Negroni", tipo: "quartzo", imagem: Negroni },
    { nome: "Travertino", tipo: "mármore", imagem: Travertino },
  ];

  const navigate = useNavigate();

  return (
    <section
      className="py-16 md:py-24 flex items-center flex-col gap-4"
      data-aos="fade-right"
    >
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
            <ProductCard
              key={index}
              nome={stone.nome}
              tipo={stone.tipo}
              imagem={stone.imagem}
            />
          ))}
        </div>
      </div>

      <Button variant="primary" onClick={() => navigate("/catalogo")}>
        Ver catálogo completo
      </Button>
    </section>
  );
}