import Fundo from '../../assets/Pedra-vermelha.jpg';
import Logo from '../Logo/Logo';
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="relative text-white py-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${Fundo})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid md:grid-cols-3 gap-8">
          <Logo />
          <div>
            <p className="text-gray-300 text-sm">
              Especialistas em mármores e granitos com qualidade,
              precisão e acabamento impecável.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Links</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="hover:text-white cursor-pointer">Início</li>
              <li className="hover:text-white cursor-pointer">Sobre</li>
              <li className="hover:text-white cursor-pointer">Materiais</li>
              <li className="hover:text-white cursor-pointer">Serviços</li>
              <li className="hover:text-white cursor-pointer">Projetos</li>
              <li className="hover:text-white cursor-pointer">Contatos</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contato</h4>

            <div className="space-y-3 text-gray-300 text-sm">

              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>(35) 99852-2695</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>contato@decoramarmores.com</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Alpinópolis - MG</span>
              </div>

              <a
                href="https://instagram.com/decoramarmo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <Instagram size={18} />
                <span>@decoramarmo</span>
              </a>

            </div>
          </div>

        </div>

        {/* LINHA FINAL */}
        <div className="border-t border-gray-300 mt-8 pt-6 text-center text-gray-300 text-sm">
          © {new Date().getFullYear()} Decora Mármores. Todos os direitos reservados.
        </div>

      </div>
    </footer>
  );
}