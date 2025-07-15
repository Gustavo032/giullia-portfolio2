import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "Giullia demonstra uma dedicação excepcional aos estudos e uma paixão genuína pela educação. Sua capacidade de trabalhar em equipe e sua proatividade são admiráveis.",
      author: "Prof. Maria Silva",
      position: "Coordenadora Pedagógica",
      color: "primary"
    },
    {
      text: "Uma estudante exemplar com excelente comunicação e grande potencial para se tornar uma pedagoga transformadora. Sua dedicação aos estudos é inspiradora.",
      author: "Dr. João Santos",
      position: "Professor de Psicologia",
      color: "secondary"
    },
    {
      text: "Giullia tem uma capacidade única de escutar e compreender diferentes perspectivas. Sua responsabilidade e vontade de aprender são qualidades raras.",
      author: "Ana Costa",
      position: "Colega de Curso",
      color: "accent"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const getGradientClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5';
      case 'secondary':
        return 'from-secondary/10 to-accent/10 dark:from-secondary/5 dark:to-accent/5';
      case 'accent':
        return 'from-accent/10 to-primary/10 dark:from-accent/5 dark:to-primary/5';
      default:
        return 'from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5';
    }
  };

  const getIconGradient = (color: string) => {
    switch (color) {
      case 'primary':
        return 'from-primary to-secondary';
      case 'secondary':
        return 'from-secondary to-accent';
      case 'accent':
        return 'from-accent to-primary';
      default:
        return 'from-primary to-secondary';
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">Depoimentos</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          </div>
          
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className={`bg-gradient-to-br ${getGradientClasses(testimonial.color)} p-8 rounded-2xl text-center`}>
                      <div className={`text-${testimonial.color} text-5xl mb-4`}>
                        <i className="fas fa-quote-left"></i>
                      </div>
                      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 italic">
                        "{testimonial.text}"
                      </p>
                      <div className="flex items-center justify-center">
                        <div className={`w-16 h-16 bg-gradient-to-br ${getIconGradient(testimonial.color)} rounded-full flex items-center justify-center mr-4`}>
                          <i className="fas fa-user text-white text-xl"></i>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 dark:text-gray-200">{testimonial.author}</h4>
                          <p className="text-gray-600 dark:text-gray-400">{testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="bg-primary hover:bg-primary/90 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button
                onClick={nextTestimonial}
                className="bg-primary hover:bg-primary/90 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
            
            <div className="flex justify-center mt-4 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
