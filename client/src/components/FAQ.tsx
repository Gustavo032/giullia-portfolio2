import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const faqData: FAQItem[] = [
    {
      question: 'Qual é a sua área de especialização em Pedagogia?',
      answer: 'Estou me especializando em Educação Inclusiva e Psicopedagogia. Tenho particular interesse em como diferentes metodologias de ensino podem ser adaptadas para atender às necessidades individuais de cada estudante.',
      category: 'formacao'
    },
    {
      question: 'Você já tem experiência prática em sala de aula?',
      answer: 'Sim! Estou realizando estágios obrigatórios do curso e também participei de projetos voluntários de alfabetização. Cada experiência tem sido fundamental para conectar a teoria aprendida na universidade com a prática educacional.',
      category: 'experiencia'
    },
    {
      question: 'Como você vê o futuro da educação?',
      answer: 'Acredito que o futuro da educação será cada vez mais personalizado e inclusivo. A tecnologia será uma grande aliada, mas nunca substituirá a importância do relacionamento humano no processo de ensino-aprendizagem.',
      category: 'visao'
    },
    {
      question: 'Quais são seus planos após a graduação?',
      answer: 'Pretendo iniciar uma pós-graduação em Psicopedagogia e buscar oportunidades de trabalho em escolas que valorizam a educação inclusiva. Também tenho interesse em pesquisa acadêmica na área.',
      category: 'futuro'
    },
    {
      question: 'Por que escolheu a Pedagogia?',
      answer: 'Sempre tive paixão por ensinar e contribuir para o desenvolvimento das pessoas. A Pedagogia me permite impactar positivamente a vida de crianças e jovens, ajudando-os a descobrir seu potencial e construir um futuro melhor.',
      category: 'formacao'
    },
    {
      question: 'Como você se mantém atualizada na área educacional?',
      answer: 'Leio constantemente livros e artigos sobre educação, participo de webinars e congressos, e mantenho contato com outros profissionais da área. Também faço cursos complementares para ampliar meus conhecimentos.',
      category: 'formacao'
    },
    {
      question: 'Qual é sua metodologia de ensino preferida?',
      answer: 'Acredito na abordagem sociointeracionista, onde o aprendizado acontece através da interação social. Combino diferentes metodologias ativas para tornar o ensino mais dinâmico e significativo para os estudantes.',
      category: 'visao'
    },
    {
      question: 'Você trabalha com tecnologia na educação?',
      answer: 'Sim! Estudei ferramentas digitais educacionais e tenho experiência com plataformas de ensino online. Acredito que a tecnologia, quando bem utilizada, pode potencializar o aprendizado e engajar mais os estudantes.',
      category: 'experiencia'
    }
  ];

  const categories = [
    { id: 'todos', name: 'Todas as Perguntas', icon: 'fas fa-list' },
    { id: 'formacao', name: 'Formação', icon: 'fas fa-graduation-cap' },
    { id: 'experiencia', name: 'Experiência', icon: 'fas fa-briefcase' },
    { id: 'visao', name: 'Visão Educacional', icon: 'fas fa-eye' },
    { id: 'futuro', name: 'Planos Futuros', icon: 'fas fa-road' }
  ];

  const filteredFAQ = selectedCategory === 'todos' 
    ? faqData 
    : faqData.filter(item => item.category === selectedCategory);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      className="py-20 bg-background dark:bg-background" // ALTERADO AQUI: bg-background
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">Perguntas Frequentes</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400">Conheça mais sobre minha jornada e visão educacional</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-105'
                    : 'bg-card dark:bg-card hover:bg-muted dark:hover:bg-muted text-muted-foreground dark:text-muted-foreground' // ALTERADO AQUI: bg e text
                }`}
              >
                <i className={`${category.icon} mr-2`}></i>
                {category.name}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFAQ.map((item, index) => (
              <div
                key={index}
                className="bg-card dark:bg-card rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl" // ALTERADO AQUI: bg
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-muted dark:hover:bg-muted transition-colors duration-300" // ALTERADO AQUI: hover bg
                >
                  <h3 className="text-lg font-semibold text-foreground dark:text-foreground pr-4"> {/* ALTERADO AQUI: text */}
                    {item.question}
                  </h3>
                  <div className={`transform transition-transform duration-300 ${
                    openItem === index ? 'rotate-45' : 'rotate-0'
                  }`}>
                    <i className="fas fa-plus text-primary text-xl"></i>
                  </div>
                </button>
                
                <div className={`transition-all duration-300 overflow-hidden ${
                  openItem === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-8 pb-6">
                    <div className="w-full h-px bg-gradient-to-r from-primary to-secondary mb-4"></div>
                    <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed"> {/* ALTERADO AQUI: text */}
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Não encontrou sua pergunta? Entre em contato comigo!
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105"
            >
              <i className="fas fa-envelope mr-2"></i>
              Fazer uma Pergunta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
