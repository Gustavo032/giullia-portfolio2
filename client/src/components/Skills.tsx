import { useState, useEffect } from 'react';

interface Skill {
  category: string;
  items: string[];
  icon: string;
  color: string;
}

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [animationClass, setAnimationClass] = useState('');

  const skills: Skill[] = [
    {
      category: 'Competências Pedagógicas',
      items: [
        'Planejamento de Aulas',
        'Desenvolvimento Curricular',
        'Avaliação Educacional',
        'Didática e Metodologia',
        'Educação Inclusiva',
        'Gestão de Sala de Aula'
      ],
      icon: 'fas fa-chalkboard-teacher',
      color: 'primary'
    },
    {
      category: 'Competências Psicológicas',
      items: [
        'Psicologia Educacional',
        'Desenvolvimento Infantil',
        'Psicologia Social',
        'Psicopedagogia',
        'Comportamento Humano',
        'Motivação e Aprendizagem'
      ],
      icon: 'fas fa-brain',
      color: 'secondary'
    },
    {
      category: 'Competências Técnicas',
      items: [
        'Microsoft Excel',
        'Ferramentas Digitais',
        'Tecnologia Educacional',
        'Pesquisa Acadêmica',
        'Elaboração de Relatórios',
        'Inglês Básico'
      ],
      icon: 'fas fa-laptop-code',
      color: 'accent'
    },
    {
      category: 'Competências Sociais',
      items: [
        'Comunicação Efetiva',
        'Trabalho em Equipe',
        'Liderança',
        'Empatia',
        'Resolução de Conflitos',
        'Adaptabilidade'
      ],
      icon: 'fas fa-users',
      color: 'primary'
    }
  ];

  const handleCategoryChange = (index: number) => {
    setAnimationClass('animate-fade-out');
    setTimeout(() => {
      setSelectedCategory(index);
      setAnimationClass('animate-fade-in');
    }, 150);
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
    <section id="skills" className="py-20 bg-white dark:bg-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">Competências e Habilidades</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400">Minhas principais áreas de conhecimento e expertise</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Category Selector */}
            <div className="lg:col-span-1">
              <div className="space-y-4">
                {skills.map((skill, index) => {
                  const colors = getColorClasses(skill.color);
                  return (
                    <button
                      key={index}
                      onClick={() => handleCategoryChange(index)}
                      className={`w-full p-4 rounded-xl text-left transition-all duration-300 ${
                        selectedCategory === index
                          ? `bg-gradient-to-r ${colors.gradient} text-white shadow-lg scale-105`
                          : 'bg-card dark:bg-card hover:bg-muted dark:hover:bg-muted text-gray-700 dark:text-gray-300' // ALTERADO AQUI
                      }`}
                    >
                      <div className="flex items-center">
                        <i className={`${skill.icon} text-2xl mr-3`}></i>
                        <span className="font-semibold">{skill.category}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Skills Display */}
            <div className="lg:col-span-2">
              <div className={`transition-all duration-300 ${animationClass}`}>
                <div className="bg-card dark:bg-card p-8 rounded-2xl"> {/* ALTERADO AQUI */}
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${getColorClasses(skills[selectedCategory].color).gradient} rounded-full flex items-center justify-center mr-4`}>
                      <i className={`${skills[selectedCategory].icon} text-white text-2xl`}></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                      {skills[selectedCategory].category}
                    </h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {skills[selectedCategory].items.map((item, index) => (
                      <div 
                        key={index}
                        className="bg-card dark:bg-card p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105" // ALTERADO AQUI
                        style={{
                          animationDelay: `${index * 100}ms`,
                          animation: animationClass === 'animate-fade-in' ? 'fadeInUp 0.5s ease-out forwards' : ''
                        }}
                      >
                        <div className="flex items-center">
                          <div className={`w-3 h-3 ${getColorClasses(skills[selectedCategory].color).bg} rounded-full mr-3`}></div>
                          <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
