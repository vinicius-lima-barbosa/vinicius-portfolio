import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import React from 'react';
import toast from 'react-hot-toast';

const ContactSection: React.FC = () => {
  const formRef = React.useRef<HTMLFormElement | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current as HTMLFormElement,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        }
      )
      .then(
        (result) => {
          console.log('Email sent succesfully:', result.text);
          toast.success(
            'Mensagem enviada com sucesso! O Lord Sith entrará em contato em breve.',
            {
              duration: 7000
            }
          );
        },
        (error) => {
          console.error('Error while sending Email:', error.text);
          toast.error(
            'Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.',
            {
              duration: 7000
            }
          );
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-b"
      style={{
        backgroundImage: 'linear-gradient(to bottom right, #1a1a1a, #0a0a0a)'
      }}
    >
      <div className="container mx-auto max-w-4xl">
        {/* Div para Call to Action */}
        <div className="text-center mb-12">
          <h2 className="font-starwars text-3xl md:text-5xl font-bold text-sith-red mb-6">
            JUNTE-SE AO IMPÉRIO
          </h2>
          <p className="text-xl text-empire-silver max-w-2xl mx-auto mb-4">
            "Juntos podemos governar a galáxia digital. Entre em contato e
            aceite seu destino."
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from -transparent via-[#dc143c] to-transparent mx-auto" />
        </div>

        {/* Div para Formas de Contato e o Formulário */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Div Lado Esquerdo */}
          <div className="space-y-8 text-empire-silver">
            {/* Div para os canais de comunicação */}
            <div className="imperial-border rounded-lg p-8">
              <h3 className="font-starwars text-2xl font-bold mb-6">
                Canais de Comunicação
              </h3>

              <div className="space-y-6">
                <a
                  href="viniciusbarbosa0202@gmail.com"
                  target="blank"
                  className="flex items-center space-x-4 hover:text-sith-red-hover transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-sith-gray rounded-lg flex items-center justify-center group-hover:bg-sith-red-hover transition-colors duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h6 className="font-semibold">Email Imperial</h6>
                    <p>viniciusbarbosa0202@gmail.com</p>
                  </div>
                </a>
                <a
                  href="https://github.com/vinicius-lima-barbosa"
                  target="blank"
                  className="flex items-center space-x-4 hover:text-sith-red-hover transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-sith-gray rounded-lg flex items-center justify-center group-hover:bg-sith-red-hover transition-colors duration-300">
                    <Github className="w-6 h-6" />
                  </div>
                  <div>
                    <h6 className="font-semibold">Github Imperial</h6>
                    <p>@vinicius-lima-barbosa</p>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/vinicius-barbosa-7042b1297/"
                  target="blank"
                  className="flex items-center space-x-4 hover:text-sith-red-hover transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-sith-gray rounded-lg flex items-center justify-center group-hover:bg-sith-red-hover transition-colors duration-300">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <h6 className="font-semibold">Linkedin Imperial</h6>
                    <p>Vinícius Barbosa</p>
                  </div>
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=5583999640036"
                  target="blank"
                  className="flex items-center space-x-4 hover:text-sith-red-hover transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-sith-gray rounded-lg flex items-center justify-center group-hover:bg-sith-red-hover transition-colors duration-300">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h6 className="font-semibold">Whatsapp Imperial</h6>
                    <p>+55 (83) 99964-0036</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Div para Call to Action */}
            <div className="imperial-border rounded-lg p-8">
              <h4 className="font-starwars text-lg font-bold text-sith-red mb-4">
                "Sua Jornada Começa Aqui"
              </h4>
              <p className="text-empire-silver leading-relaxed text-justify">
                Pronto para transformar suas ideias em realidade? O lado negro
                do desenvolvimento oferece poder ilimitado para seus projetos.
                Entre em contato e descubra o que podemos conquistar juntos.
              </p>
            </div>
          </div>

          {/* Div Lado Direito */}
          <div className="imperial-border rounded-lg p-8">
            <h3 className="font-starwars text-2xl font-bold text-empire-silver mb-6">
              Envie uma mensagem para o Lord Sith
            </h3>

            <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-empire-silver mb-2">Nome</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full bg-sith-gray border border-sith-red-opacity rounded-lg px-4 py-3 text-empire-silver focus:border-sith-red focus:outline-none duration-200"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-empire-silver mb-2">Email</label>
                <input
                  id="reply_to"
                  name="reply_to"
                  type="text"
                  required
                  className="w-full bg-sith-gray border border-sith-red-opacity rounded-lg px-4 py-3 text-empire-silver focus:border-sith-red focus:outline-none duration-200"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-empire-silver mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full bg-sith-gray border border-sith-red-opacity rounded-lg px-4 py-3 text-empire-silver focus:border-sith-red focus:outline-none duration-200 resize-none"
                  placeholder="Conte-me sobre se projeto..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-sith-red to-sith-darkred text-white font-semibold py-3 px-6 rounded-lg hover:scale-105 transition-all duration-300 animate-lightsaber-glow"
              >
                Enviar ao Império
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
