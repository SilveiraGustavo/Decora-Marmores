import Fundo from '../../assets/Pedra-vermelha.jpg';
import Logo from '../Logo/Logo';

export default function Footer() {
  return (
    <footer
      className="relative text-white py-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${Fundo})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Conteúdo */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 lg:px-16">

        <div className="grid md:grid-cols-3 gap-8">

          <Logo />
          <div>
            <p className="text-gray-300 text-sm">
              Especialistas em mármores e granitos com qualidade,
              precisão e acabamento impecável.
            </p>
          </div>

          {/* LINKS */}
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

          {/* CONTATO */}
          <div>
            <h4 className="font-semibold mb-3">Contato</h4>
            <p className="text-gray-300 text-sm">(37) 99999-9999</p>
            <p className="text-gray-300 text-sm">contato@decoramarmores.com</p>
            <p className="text-gray-300 text-sm">Alpinópolis - MG</p>
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