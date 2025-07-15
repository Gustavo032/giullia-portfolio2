export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-dark/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">Contato</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400">Entre em contato para oportunidades de colaboração ou networking</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card dark:bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-envelope text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400">Envie uma mensagem</p>
                </div>
              </div>
              <a 
                href="mailto:giulliagomes2000@gmail.com" 
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center"
              >
                <i className="fas fa-envelope mr-2"></i>
                giulliagomes2000@gmail.com
              </a>
            </div>

            <div className="bg-card dark:bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center mr-4">
                  <i className="fab fa-whatsapp text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">WhatsApp</h3>
                  <p className="text-gray-600 dark:text-gray-400">Conversas rápidas</p>
                </div>
              </div>
              <a 
                href="https://wa.me/5511941525603" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center"
              >
                <i className="fab fa-whatsapp mr-2"></i>
                (11) 94152-5603
              </a>
            </div>
          </div>

          <div className="text-center mt-12">
            <a 
              href="#" 
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center"
            >
              <i className="fas fa-download mr-2"></i>
              Download Currículo (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}