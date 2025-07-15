import { useState, useEffect, useRef } from 'react';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  type: 'education' | 'course' | 'achievement';
  icon: string;
}

export default function Timeline() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const timelineData: TimelineItem[] = [
    {
      year: '2018',
      title: 'Início do Ensino Médio',
      description: 'Ingressei na PEI Mary Mallet Cyrino, onde desenvolvi bases sólidas para minha formação.',
      type: 'education',
      icon: 'fas fa-school'
    },
    {
      year: '2023',
      title: 'Conclusão do Ensino Médio',
      description: 'Finalizei minha educação básica com excelentes resultados e preparação para o ensino superior.',
      type: 'achievement',
      icon: 'fas fa-graduation-cap'
    },
    {
      year: '2024',
      title: 'Início da Pedagogia',
      description: 'Ingressei na Anhembi Morumbi para cursar Licenciatura em Pedagogia, realizando meu sonho.',
      type: 'education',
      icon: 'fas fa-university'
    },
    {
      year: '2024',
      title: 'Cursos Complementares',
      description: 'Completei 8 cursos complementares em Psicologia, Desenvolvimento Profissional e Excel.',
      type: 'course',
      icon: 'fas fa-certificate'
    },
    {
      year: '2024',
      title: '4º Semestre Atual',
      description: 'Cursando o 4º semestre de Pedagogia com foco em práticas educacionais inovadoras.',
      type: 'education',
      icon: 'fas fa-book-reader'
    }
  ];

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, index]));
          }
        },
        { threshold: 0.3 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  const getTypeColor = (type: TimelineItem['type']) => {
    switch (type) {
      case 'education':
        return 'from-primary to-secondary';
      case 'course':
        return 'from-secondary to-accent';
      case 'achievement':
        return 'from-accent to-primary';
      default:
        return 'from-primary to-secondary';
    }
  };

  return (
    <section id="timeline" className="py-20 bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950 dark:via-purple-950 dark:to-pink-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        {/* Floating academic elements */}
        <div className="absolute top-20 right-20 text-primary/20 text-6xl animate-float">
          <i className="fas fa-graduation-cap"></i>
        </div>
        <div className="absolute bottom-20 left-20 text-secondary/20 text-5xl animate-float delay-500">
          <i className="fas fa-book"></i>
        </div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">Minha Jornada</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400">Uma linha do tempo da minha trajetória educacional</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent rounded-full"></div>
            
            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <div
                  key={index}
                  ref={el => itemRefs.current[index] = el}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} transition-all duration-700 ${
                    visibleItems.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white dark:bg-dark p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-2xl font-bold text-primary">{item.year}</span>
                        <div className={`w-12 h-12 bg-gradient-to-br ${getTypeColor(item.type)} rounded-full flex items-center justify-center`}>
                          <i className={`${item.icon} text-white text-lg`}></i>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="w-2/12 flex justify-center">
                    <div className={`w-6 h-6 bg-gradient-to-br ${getTypeColor(item.type)} rounded-full border-4 border-white dark:border-dark shadow-lg transition-transform duration-300 ${
                      visibleItems.has(index) ? 'scale-110' : 'scale-100'
                    }`}></div>
                  </div>
                  
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}