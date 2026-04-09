import { useState } from "react";
import { useNavigate, useLocation} from "react-router-dom";

import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import { Menu, X } from "lucide-react";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (id: string) => {
  if (location.pathname === "/") {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  } else {
    navigate(`/#${id}`);
  }

  setMenuOpen(false);
};

  return (
    <nav className="bg-white text-black w-full absolute top-0 left-0 z-50 shadow-sm">
      
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-3">
        
        <Logo />

        <ul className="hidden lg:flex gap-8">
          <li>
            <button
              onClick={() => handleNavigation("sobre")}
              className="hover:text-red-600 font-semibold"
            >
              Sobre
            </button>
          </li>

          <li>
            <button
              onClick={() => navigate("/catalogo")}
              className="hover:text-red-600 font-semibold"
            >
              Catálogo
            </button>
          </li>

          <li>
            <button
              onClick={() => handleNavigation("servicos")}
              className="hover:text-red-600 font-semibold"
            >
              Serviços
            </button>
          </li>

          <li>
            <button
              onClick={() => handleNavigation("projetos")}
              className="hover:text-red-600 font-semibold"
            >
              Projetos
            </button>
          </li>

          <li>
            <button
              onClick={() => handleNavigation("contato")}
              className="hover:text-red-600 font-semibold"
            >
              Contato
            </button>
          </li>
        </ul>
        <div className="hidden lg:block">
          <Button
            as="a"
            href="https://wa.me/5535998522695?text=Olá, gostaria de um orçamento!"
            target="_blank"
            rel="noopener noreferrer"
          >
            Solicitar Orçamento
          </Button>
        </div>

  
        <button
          className="lg:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <div
        className={`
          lg:hidden
          overflow-hidden
          transition-all
          duration-300
          ease-in-out
          ${menuOpen ? "max-h-[500px] opacity-100 py-6" : "max-h-0 opacity-0"}
        `}
      >
        <ul className="flex flex-col items-center gap-6 font-semibold bg-white shadow-md">
          
          <li>
            <button onClick={() => handleNavigation("sobre")}>
              Sobre
            </button>
          </li>

          <li>
            <button
              onClick={() => {
                navigate("/catalogo");
                setMenuOpen(false);
              }}
            >
              Catálogo
            </button>
          </li>

          <li>
            <button onClick={() => handleNavigation("servicos")}>
              Serviços
            </button>
          </li>

          <li>
            <button onClick={() => handleNavigation("projetos")}>
              Projetos
            </button>
          </li>

          <li>
            <button onClick={() => handleNavigation("contato")}>
              Contato
            </button>
          </li>

          <Button
            as="a"
            href="https://wa.me/5535998522695?text=Olá, gostaria de um orçamento!"
            target="_blank"
            rel="noopener noreferrer"
          >
            Solicitar Orçamento
          </Button>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;