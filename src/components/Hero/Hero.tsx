import Button from '../Button/Button';

export default function Hero() {
  return (
    <section className="h-screen bg-cover bg-center flex items-center">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        <div className="max-w-xl">

          <h1 className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            font-bold
            text-gray-900
            mb-6
            leading-tight
            opacity-0
            translate-y-6
            animate-[fadeUp_0.6s_ease-out_forwards]
          ">
            <span className="text-[#b81716]">
              Tradição e excelência
            </span>
            <br />
            em mármores e granitos
          </h1>

          <p className="
            text-sm
            sm:text-base
            md:text-lg
            text-gray-800
            mb-8
            font-medium
            opacity-0
            translate-y-6
            animate-[fadeUp_0.6s_ease-out_0.2s_forwards]
          ">
            Há mais de 20 anos entregando qualidade, precisão
            e confiança em cada projeto.
          </p>

          <div className="
            flex flex-col sm:flex-row gap-4
            opacity-0
            translate-y-6
            animate-[fadeUp_0.6s_ease-out_0.4s_forwards]
          ">
            <Button variant='primary'>
              Solicitar Orçamento
            </Button>

            <Button variant="outline">
              Conheça nossos materiais
            </Button>
          </div>

        </div>

      </div>
    </section>
  )
}