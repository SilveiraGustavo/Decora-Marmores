import { Phone, Mail, MapPin } from "lucide-react";
import Button from "../Button/Button";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

import { FaWhatsapp } from 'react-icons/fa'; 

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Mensagem enviada com sucesso!");
          form.current?.reset();
          setLoading(false);
        },
        (error) => {
          console.error(error);
          alert("Erro ao enviar mensagem.");
          setLoading(false);
        }
      );
  };

  return (
    <section className="py-16 md:py-24" id="contato">
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
        
        {/* TÍTULO */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#b81716]" data-aos="fade-up">
            <span className="text-black">Entre </span>
            em Contato
          </h2>
          <div className="w-20 h-[3px] bg-[#b81716] mx-auto mt-3"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* FORMULÁRIO */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white p-6 rounded-xl shadow-sm space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Seu nome"
              required
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-[#b81716]"
            />

            <input
              type="email"
              name="email"
              placeholder="Seu email"
              required
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-[#b81716]"
            />

            <input
              type="text"
              name="subject"
              placeholder="Assunto"
              required
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-[#b81716]"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Seu telefone"
              required
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-[#b81716]"
            />

            <textarea
              name="message"
              placeholder="Descreva seu projeto"
              rows={4}
              required
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-[#b81716]"
            />

            <Button variant="primary" type="submit">
              {loading ? "Enviando..." : "Enviar mensagem"}
            </Button>
          </form>
          <div className="flex flex-col justify-center gap-6">

            <div className="flex items-center gap-4">
              <Phone className="text-[#b81716]" />
              <span>(35) 99852-2695</span>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-[#b81716]" />
              <span>contato@decoramarmores.com</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-[#b81716]" />
              <span>Rua Santa Edvirgens, nº 25 – Vila Betânia, Alpinópolis – MG</span>
            </div>

            {/* WHATSAPP */}
            <div className="mt-4">
              <Button
                as="a"
                  href="https://wa.me/5535998522695?text=Olá, gostaria de um orçamento!"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="ghost">
                  <FaWhatsapp className="text-2xl" />
                  Falar no WhatsApp
              </Button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}