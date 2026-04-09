import Fundo from '../../assets/Pedra-vermelha.jpg';
import Button from '../Button/Button';

export default function BtnContact() {
  return (
    <section
      className="relative py-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${Fundo})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">

        <h2 className="
          text-2xl
          sm:text-3xl
          md:text-4xl
          font-bold
          mb-4
        ">
          Solicite seu orçamento agora
        </h2>

        <p className="
          text-sm
          sm:text-base
          md:text-lg
          mb-8
          text-gray-200
        ">
          Fale com um especialista e transforme seu projeto em realidade
          com qualidade e acabamento impecável.
        </p>

        <div className="flex justify-center">
          <Button
            as="a"
            href="https://wa.me/5535998522695?text=Olá, gostaria de um orçamento!"
            target="_blank"
            rel="noopener noreferrer"
            variant='secondary'>
               Fale com um especialista
          </Button>
        </div>

      </div>
    </section>
  );
}