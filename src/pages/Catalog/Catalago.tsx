import { useState } from "react";

// Componentes 
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import MaterialCard from "../../components/MaterialCard/MaterialCard";
import ProductCard from "../../components/ProductCard/ProductCard";
import Button from "../../components/Button/Button";

// Imagens 
import Fundos from "../../assets/Calacata-fundo.jpg";
import Cinza_Corumba from "../../assets/Stones/Cinza-Corumba.jpg";
import Branco_Siena from "../../assets/Stones/Branco_Siena.jpg";
import Branco_Itaunas from "../../assets/Stones/Branco-Itaunas.jpg";
import Branco_Dallas from "../../assets/Stones/Branco-Dallas.jpg";
import Verde_Ubatuba from "../../assets/Stones/Verde-Ubatuba.jpg";
import Verde_Perola from "../../assets/Stones/Granito-Verde-Perola.jpg";
import Ocre_Itabira from "../../assets/Stones/ocre-itabira.jpg";
import Marmore_Branco from "../../assets/Stones/marmore-branco-comum.jpg";
import Sao_Gabriel from "../../assets/Stones/Sao_Gabriel.jpg";
import Travertino from "../../assets/Stones/Travertino.jpg";
import Ornamental from "../../assets/Stones/Ornamental.jpg";
import Marmore_Crema_Marfil from "../../assets/Stones/Crema-Marfil.jpg";
import Marmore_Pinta_Verde from "../../assets/Stones/Pinta-Verde.jpg";
// Icones 
import { FaWhatsapp } from 'react-icons/fa';

type Categoria = "Granito" | "Mármore" | "Quartzo" | "Lâminas";

export default function Catalogo() {
  const [categoria, setCategoria] = useState<Categoria>("Granito");

  const catalogo: Record<Categoria, { nome: string; imagem: string }[]> = {
  Granito: [{ nome: "Preto São Gabriel", imagem: Sao_Gabriel },{nome: "Branco Itaúnas", imagem: Branco_Itaunas},{nome: "Branco Dallas", imagem: Branco_Dallas},{ nome: "Amarelo Ornamental", imagem: Ornamental },{ nome: "Verde Pérola", imagem: Verde_Perola },{ nome: "Cinza Corumbá", imagem: Cinza_Corumba }, { nome: "Branco Siena", imagem: Branco_Siena }, { nome: "Verde Ubatuba", imagem: Verde_Ubatuba }, { nome: "Ocre Itabira", imagem: Ocre_Itabira }],
    Mármore: [{ nome: "Travertino", imagem: Travertino },{ nome: "Mármore Pinta Verde", imagem: Marmore_Pinta_Verde }, { nome: "Mármore Branco", imagem: Marmore_Branco }, { nome: "Crema Marfil", imagem: Marmore_Crema_Marfil }],
    Quartzo: [{ nome: "Branco Prime", imagem: Sao_Gabriel }],
    Lâminas: [{ nome: "Dekton Kelya", imagem: Sao_Gabriel }],
  };

  return (
    <div
      className="bg-cover bg-center min-h-screen flex flex-col"
      style={{ backgroundImage: `url(${Fundos})` }}
    >
      <Button variant="link" as="a" href="https://wa.me/5535998522695?text=Olá, gostaria de um orçamento!" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="text-2xl" />
      </Button>
      <Navbar />

      <main
        className="flex-1 py-16 md:py-24 flex flex-col gap-8"
        data-aos="fade-right"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 text-center">
          <h1 className="text-4xl font-bold mt-10 text-black">
            Catálogo 
            <span className="text-[#b81716]"> Completo </span>
          </h1>
          <p className="mt-4 text-lg text-gray-800">
            Aqui você pode explorar todos os nossos materiais disponíveis.
          </p>
        </div>

        <div className="w-full max-w-5xl mx-auto px-6">
          <MaterialCard
            titulo="Granito"
            descricao="O granito é uma pedra natural extremamente resistente..."
            vantagens={[
              "Alta resistência a riscos",
              "Suporta altas temperaturas",
              "Fácil manutenção",
              "Ótimo custo-benefício",
            ]}
            indicacoes={[
              "Bancadas de cozinha",
              "Áreas externas",
              "Escadas e pisos",
            ]}
          />

          <MaterialCard
            titulo="Quartzo"
            descricao="Material moderno e sofisticado..."
            vantagens={[
              "Não absorve líquidos",
              "Alta resistência a manchas",
              "Visual moderno",
              "Fácil limpeza",
            ]}
            indicacoes={[
              "Cozinhas planejadas",
              "Banheiros",
              "Ambientes internos",
            ]}
          />

          <MaterialCard
            titulo="Mármore"
            descricao="Elegância e sofisticação..."
            vantagens={[
              "Beleza natural",
              "Acabamento sofisticado",
              "Valorização do ambiente",
              "Exclusividade",
            ]}
            indicacoes={[
              "Lavabos",
              "Banheiros",
              "Ambientes internos",
            ]}
          />

          <MaterialCard
            titulo="Lâminas"
            descricao="Materiais ultracompactos..."
            vantagens={[
              "Alta resistência",
              "Grandes formatos",
              "Design moderno",
              "Versatilidade",
            ]}
            indicacoes={[
              "Revestimentos",
              "Fachadas",
              "Bancadas modernas",
            ]}
          />
        </div>

        <div className="w-full max-w-6xl mx-auto px-6 mt-10">
          <h2 className="text-3xl font-bold text-center mb-6">
            Nossos 
            <span className="text-[#b81716]"> Materiais </span>
            
          </h2>

          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            {(["Granito", "Mármore", "Quartzo", "Lâminas"] as Categoria[]).map(
              (item) => (
                <button
                  key={item}
                  onClick={() => setCategoria(item)}
                  className={`px-4 py-2 rounded-full border transition ${
                    categoria === item
                      ? "bg-[#b81716] text-white font-semibold"
                      : "bg-white text-gray-800 hover:bg-gray-100"
                  }`}
                >
                  {item}
                </button>
              )
            )}
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {catalogo[categoria].map((produto, index) => (
              <ProductCard
                key={index}
                nome={produto.nome}
                tipo={categoria}
                imagem={produto.imagem}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}