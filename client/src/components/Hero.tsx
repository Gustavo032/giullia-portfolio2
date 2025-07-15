export default function Hero() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            {/* Profile photo */}
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary p-1 mb-8 hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-white dark:bg-dark rounded-full flex items-center justify-center overflow-hidden">
                <img 
                  src="/giullia.jpg" 
                  alt="Giullia dos Santos Gomes - Foto de perfil" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
              Giullia dos Santos Gomes
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-2">
              Futura Pedagoga • 19 anos • Itapevi/SP
            </p>
            
            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-500 mb-8">
              Licenciatura em Pedagogia • Anhembi Morumbi • 4º Semestre
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => handleNavClick('#about')}
                className="btn-primary"
              >
                Conhecer Mais
              </button>
              <button
                onClick={() => handleNavClick('#contact')}
                className="btn-secondary"
              >
                Entrar em Contato
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
