import { useEffect, useRef, useState } from 'react';

export default function Qualities() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const qualities = [
    { name: 'Responsabilidade', percentage: 95, color: 'primary' },
    { name: 'Comunicação', percentage: 90, color: 'secondary' },
    { name: 'Escuta Ativa', percentage: 88, color: 'accent' },
    { name: 'Trabalho em Equipe', percentage: 92, color: 'primary' },
    { name: 'Proatividade', percentage: 87, color: 'secondary' },
    { name: 'Vontade de Aprender', percentage: 98, color: 'accent' },
    { name: 'Mão na Massa', percentage: 94, color: 'primary' },
    { name: 'Dedicação', percentage: 96, color: 'secondary' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5, rootMargin: '0px 0px -100px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getGradientClasses = (color: string) => {
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
    <section ref={sectionRef} id="qualities" className="py-20 bg-gray-50 dark:bg-dark/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">Qualidades Pessoais</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[0, 1].map((columnIndex) => (
              <div key={columnIndex} className="space-y-6">
                {qualities.slice(columnIndex * 4, (columnIndex + 1) * 4).map((quality, index) => (
                  <div key={index} className="bg-white dark:bg-dark p-6 rounded-2xl shadow-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{quality.name}</h3>
                      <span className={`text-${quality.color} font-bold`}>{quality.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${getGradientClasses(quality.color)} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: isVisible ? `${quality.percentage}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
