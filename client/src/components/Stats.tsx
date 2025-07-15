import { useState, useEffect, useRef } from 'react';

interface StatItem {
  label: string;
  value: number;
  suffix: string;
  icon: string;
  color: string;
}

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const stats: StatItem[] = [
    {
      label: 'Semestre Atual',
      value: 4,
      suffix: 'º',
      icon: 'fas fa-graduation-cap',
      color: 'primary'
    },
    {
      label: 'Cursos Complementares',
      value: 8,
      suffix: '+',
      icon: 'fas fa-certificate',
      color: 'secondary'
    },
    {
      label: 'Anos de Dedicação',
      value: 6,
      suffix: '+',
      icon: 'fas fa-clock',
      color: 'accent'
    },
    {
      label: 'Média de Aproveitamento',
      value: 95,
      suffix: '%',
      icon: 'fas fa-trophy',
      color: 'primary'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateNumbers();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateNumbers = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      let currentValue = 0;
      const increment = stat.value / steps;
      
      const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= stat.value) {
          currentValue = stat.value;
          clearInterval(timer);
        }
        
        setAnimatedValues(prev => {
          const newValues = [...prev];
          newValues[index] = Math.floor(currentValue);
          return newValues;
        });
      }, stepDuration);
    });
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          gradient: 'from-primary to-secondary',
          bg: 'bg-primary',
          text: 'text-primary'
        };
      case 'secondary':
        return {
          gradient: 'from-secondary to-accent',
          bg: 'bg-secondary',
          text: 'text-secondary'
        };
      case 'accent':
        return {
          gradient: 'from-accent to-primary',
          bg: 'bg-accent',
          text: 'text-accent'
        };
      default:
        return {
          gradient: 'from-primary to-secondary',
          bg: 'bg-primary',
          text: 'text-primary'
        };
    }
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/2 dark:to-secondary/2">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">Números da Minha Jornada</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400">Conquistas e marcos importantes</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const colors = getColorClasses(stat.color);
              return (
                <div 
                  key={index}
                  className={`bg-white dark:bg-dark p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                    isVisible ? 'animate-fade-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${colors.gradient} rounded-full flex items-center justify-center mb-6 mx-auto`}>
                    <i className={`${stat.icon} text-white text-2xl`}></i>
                  </div>
                  <div className="text-center">
                    <div className={`text-4xl font-bold ${colors.text} mb-2`}>
                      {animatedValues[index] || 0}{stat.suffix}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}