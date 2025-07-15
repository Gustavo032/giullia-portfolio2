export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-dark/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">Formação Acadêmica</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          </div>

          <div className="space-y-8">
            <div className="bg-card dark:bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-graduation-cap text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Licenciatura em Pedagogia</h3>
                  <p className="text-primary font-medium">Anhembi Morumbi</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <p className="text-gray-600 dark:text-gray-400">Março 2024 - Cursando (4º Semestre)</p>
                <div className="mt-2 sm:mt-0 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium">
                  Em Andamento
                </div>
              </div>
            </div>

            <div className="bg-card dark:bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-school text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Ensino Médio</h3>
                  <p className="text-secondary font-medium">PEI Mary Mallet Cyrino</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <p className="text-gray-600 dark:text-gray-400">Fevereiro 2018 - Dezembro 2023</p>
                <div className="mt-2 sm:mt-0 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  Concluído
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}