import { Phone, Mail, MapPin } from "lucide-react";
import Button from "../Button/Button";

export default function Contact() {
  return (
    <section className="py-16 md:py-24 ">
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">

        {/* TÍTULO */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#b81716]">
            <span className="text-black">Entre </span>
            em Contato
          </h2>
          <div className="w-20 h-[3px] bg-[#b81716] mx-auto mt-3"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* FORMULÁRIO */}
          <form className="bg-white p-6 rounded-xl shadow-sm space-y-4">
            
            <input
              type="text"
              placeholder="Seu nome"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-[#b81716]"
            />

            <input
              type="email"
              placeholder="Seu email"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-[#b81716]"
            />

            <input
              type="tel"
              placeholder="Seu telefone"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-[#b81716]"
            />

            <textarea
              placeholder="Descreva seu projeto"
              rows={4}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-[#b81716]"
            />

            <Button variant="primary">
              Enviar mensagem
            </Button>
          </form>

          {/* INFORMAÇÕES */}
          <div className="flex flex-col justify-center gap-6">

            <div className="flex items-center gap-4">
              <Phone className="text-[#b81716]" />
              <span>(37) 99999-9999</span>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-[#b81716]" />
              <span>contato@marmoraria.com</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-[#b81716]" />
              <span>Alpinópolis - MG</span>
            </div>

            <div className="mt-4">
              <a
                href="https://wa.me/5537999999999"
                target="_blank"
                className="inline-block bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition"
              >
                Falar no WhatsApp
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}