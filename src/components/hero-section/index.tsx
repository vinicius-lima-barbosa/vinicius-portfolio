import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [text, setText] = useState('');
  const fullText =
    'O Lado Negro do Desenvolvimento de Software é o caminho para muitas habilidades que alguns consideram... não naturais.';
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>
      <div className="text-center z-10 px-6">
        <div className="mb-8 animate-fade-in-up">
          <h1 className="font-starwars text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#dc143c] to-[#8b0000] mb-4">
            DARTH VINÍCIUS BARBOSA
          </h1>
        </div>

        <div className="mb-8 h-24 animate-fade-in-up">
          <h2 className="text-xl md:text-2xl lg:text-3xl text-empire-silver">
            {text}
            {isTyping && <span className="animate-pulse">|</span>}
          </h2>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <p className="font-imperial text-lg md:text-xl text-empire-silver/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            "Sua falta de fé em suas habilidades de programação é...
            perturbadora. Mas juntos, dominaremos o lado negro do código."
          </p>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
          <button
            onClick={() =>
              document
                .getElementById('about')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="group relative px-8 py-4 font-imperial font-semibold text-lg bg-gradient-to-r from-[#dc143c] to-[#8b0000] text-white rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:cursor-pointer"
          >
            <span className="relative z-10">Junte-se ao Império</span>
            <div className="absolute inset-0 bg-gradient-to-r from-sith-darkred to-sith-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 animate-lightsaber-glow opacity-0 group-hover:opacity-100" />
          </button>
        </div>
      </div>

      <img
        width="50"
        height="50"
        src="https://img.icons8.com/ios/50/darth-vader.png"
        alt="darth-vader"
        className="absolute bottom-10 left-10 w-20 h-20 rotate-345 animate-float"
      />
      <img
        width="50"
        height="50"
        src="https://img.icons8.com/ios/50/darth-vader.png"
        alt="darth-vader"
        className="absolute top-20 right-20 w-20 h-20 rotate-45 animate-float"
      />
      <img
        width="50"
        height="50"
        src="https://img.icons8.com/ios/50/darth-vader.png"
        alt="darth-vader"
        className="absolute bottom-20 right-32 w-20 h-20 rotate-12 animate-float"
      />
    </section>
  );
};

export default HeroSection;
