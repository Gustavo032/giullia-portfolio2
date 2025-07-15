
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  if (isSubscribed) {
    return (
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center border border-gray-200 dark:border-gray-700">
            <div className="bg-white dark:bg-dark p-8 rounded-2xl shadow-lg">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-check text-white text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                Obrigada por se inscrever!
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Você receberá minhas reflexões sobre educação e pedagogia diretamente em seu email.
              </p>
              <button
                onClick={() => setIsSubscribed(false)}
                className="text-primary hover:text-secondary transition-colors duration-300"
              >
                Inscrever outro email
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center border border-gray-200 dark:border-gray-700">
          <div className="bg-white dark:bg-dark p-8 rounded-2xl shadow-lg">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-envelope text-white text-3xl"></i>
            </div>
            
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              Newsletter Educacional
            </h2>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Receba minhas reflexões sobre educação, pedagogia e desenvolvimento pessoal 
              diretamente em seu email. Conteúdo exclusivo e insights do mundo acadêmico.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu melhor email"
                  className="flex-1 px-6 py-4 border border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-dark text-gray-800 dark:text-gray-200"
                  required
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Inscrevendo...
                    </div>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane mr-2"></i>
                      Inscrever-se
                    </>
                  )}
                </button>
              </div>
            </form>

            <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center">
                <i className="fas fa-shield-alt mr-2"></i>
                Sem spam
              </div>
              <div className="flex items-center">
                <i className="fas fa-times-circle mr-2"></i>
                Cancele a qualquer momento
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
