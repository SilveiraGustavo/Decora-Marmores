import { useState } from "react";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import { Menu, X} from "lucide-react";


function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-black w-full absolute top-0 left-0 z-50 shadow-sm">

      <div className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-3">

        <Logo />

        
        <ul className="hidden lg:flex gap-8">
          <li>
            <a href="#sobre" className="hover:text-red-600 font-semibold">Sobre</a>
          </li>
          <li>
            <a href="#materiais" className="hover:text-red-600 font-semibold">Materiais</a>
          </li>
          <li>
            <a href="#servicos" className="hover:text-red-600 font-semibold">Serviços</a>
          </li>
          <li>
            <a href="#projetos" className="hover:text-red-600 font-semibold">Projetos</a>
          </li>
          <li>
            <a href="#contato" className="hover:text-red-600 font-semibold">Contato</a>
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
              <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a>
            </li>
            <li>
              <a href="#materiais" onClick={() => setMenuOpen(false)}>Materiais</a>
            </li>
            <li>
              <a href="#servicos" onClick={() => setMenuOpen(false)}>Serviços</a>
            </li>
            <li>
              <a href="#projetos" onClick={() => setMenuOpen(false)}>Projetos</a>
            </li>
            <li>
              <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
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