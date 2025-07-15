export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-dark dark:to-slate-900 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-1/3 w-40 h-40 bg-secondary/10 rounded-full blur-2xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">Sobre Mim</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5 p-6 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Minha Jornada</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Sou uma estudante de Pedagogia apaixonada por educação e desenvolvimento humano. 
                  Com 19 anos e cursando o 4º semestre na Anhembi Morumbi, busco constantemente 
                  aperfeiçoar meus conhecimentos na área educacional.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-accent/10 to-primary/10 dark:from-accent/5 dark:to-primary/5 p-6 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-4 text-accent">Minha Missão</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Acredito no poder transformador da educação e busco contribuir para a formação 
                  de indivíduos críticos, criativos e preparados para os desafios do futuro.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-secondary/10 to-accent/10 dark:from-secondary/5 dark:to-accent/5 p-8 rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Ambiente de estudo moderno" 
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
