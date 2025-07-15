export default function Hero() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-purple-900 dark:to-indigo-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-accent/10 to-primary/10 blur-3xl"></div>
        {/* Floating elements */}
        <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-primary/30 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute bottom-1/3 left-1/4 w-16 h-16 bg-secondary/30 rounded-full blur-xl animate-bounce delay-500"></div>
      </div>
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