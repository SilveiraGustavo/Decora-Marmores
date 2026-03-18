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
          <li className="hover:text-red-600 cursor-pointer font-semibold">Início</li>
          <li className="hover:text-red-600 cursor-pointer font-semibold">Sobre</li>
          <li className="hover:text-red-600 cursor-pointer font-semibold">Materiais</li>
          <li className="hover:text-red-600 cursor-pointer font-semibold">Serviços</li>
          <li className="hover:text-red-600 cursor-pointer font-semibold">Projetos</li>
          <li className="hover:text-red-600 cursor-pointer font-semibold">Contato</li>
        </ul>

        
        <div className="hidden lg:block">
          <Button>Solicitar Orçamento</Button>
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
                <li className="hover:text-red-600 cursor-pointer">Início</li>
                <li className="hover:text-red-600 cursor-pointer">Sobre</li>
                <li className="hover:text-red-600 cursor-pointer">Materiais</li>
                <li className="hover:text-red-600 cursor-pointer">Serviços</li>
                <li className="hover:text-red-600 cursor-pointer">Projetos</li>
                <li className="hover:text-red-600 cursor-pointer">Contato</li>

                <Button>Solicitar Orçamento</Button>
            </ul>
        </div>

    </nav>
  );
}

export default Navbar;