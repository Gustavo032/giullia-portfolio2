import { useState } from 'react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  readTime: string;
  author: string;
}

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'A Importância da Educação Inclusiva no Século XXI',
      excerpt: 'Reflexões sobre como a educação inclusiva transforma vidas e constrói uma sociedade mais justa.',
      content: `A educação inclusiva representa uma das maiores conquistas da pedagogia moderna. 

Quando falamos sobre inclusão, não estamos apenas nos referindo à presença física de estudantes com deficiência em salas de aula regulares, mas sim à criação de um ambiente onde todos os alunos, independentemente de suas diferenças, possam aprender e se desenvolver plenamente.

Durante meus estudos na Anhembi Morumbi, tenho me aprofundado nas teorias e práticas que fundamentam a educação inclusiva. Aprendi que a diversidade em sala de aula não é um obstáculo, mas uma oportunidade rica de aprendizado para todos.

A inclusão exige adaptações metodológicas, recursos adequados e, principalmente, uma mudança de mentalidade por parte de toda a comunidade escolar. É um processo que beneficia não apenas os estudantes com necessidades especiais, mas enriquece a experiência educativa de todos os envolvidos.`,
      date: '2024-03-15',
      category: 'educacao',
      readTime: '5 min',
      author: 'Giullia dos Santos Gomes'
    },
    {
      id: 2,
      title: 'Tecnologia na Educação: Aliada ou Substituta?',
      excerpt: 'Como integrar tecnologia na educação de forma equilibrada e efetiva.',
      content: `A tecnologia revolucionou praticamente todos os aspectos de nossas vidas, e a educação não poderia ficar de fora desta transformação.

Durante a pandemia, vimos como a tecnologia foi fundamental para manter a continuidade do processo educativo. Porém, também observamos que ela não pode simplesmente substituir a interação humana tão essencial no processo de ensino-aprendizagem.

Em meus estudos, tenho explorado como ferramentas digitais podem ser utilizadas para:
- Personalizar o aprendizado
- Engajar estudantes de diferentes perfis
- Facilitar a comunicação entre escola e família
- Proporcionar experiências imersivas de aprendizado

A chave está em encontrar o equilíbrio: usar a tecnologia como uma aliada que potencializa as capacidades humanas, não como uma substituta da figura do educador.`,
      date: '2024-03-10',
      category: 'tecnologia',
      readTime: '4 min',
      author: 'Giullia dos Santos Gomes'
    },
    {
      id: 3,
      title: 'Minha Jornada no 4º Semestre de Pedagogia',
      excerpt: 'Reflexões pessoais sobre os desafios e descobertas desta etapa da formação.',
      content: `Chegar ao 4º semestre de Pedagogia tem sido uma experiência transformadora. Cada disciplina cursada me aproxima mais do meu objetivo de me tornar uma educadora competente e comprometida.

Neste semestre, tenho me dedicado especialmente às disciplinas de:
- Psicologia da Educação
- Didática e Metodologia de Ensino
- Educação Especial e Inclusiva
- Gestão Educacional

O que mais me impressiona é como cada conhecimento adquirido se conecta com minha experiência prática. Os estágios obrigatórios têm sido fundamentais para consolidar o aprendizado teórico.

Vejo que escolhi a profissão certa. Cada dia confirma minha paixão pela educação e meu compromisso em contribuir para um futuro melhor através do ensino.`,
      date: '2024-03-05',
      category: 'pessoal',
      readTime: '3 min',
      author: 'Giullia dos Santos Gomes'
    }
  ];

  const categories = [
    { id: 'todos', name: 'Todos os Posts', count: blogPosts.length },
    { id: 'educacao', name: 'Educação', count: blogPosts.filter(p => p.category === 'educacao').length },
    { id: 'tecnologia', name: 'Tecnologia', count: blogPosts.filter(p => p.category === 'tecnologia').length },
    { id: 'pessoal', name: 'Reflexões Pessoais', count: blogPosts.filter(p => p.category === 'pessoal').length }
  ];

  const filteredPosts = selectedCategory === 'todos' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="py-20 bg-white dark:bg-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">Blog Educacional</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400">Reflexões e insights sobre educação e pedagogia</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-105'
                    : 'bg-card dark:bg-card hover:bg-muted dark:hover:bg-muted text-muted-foreground dark:text-muted-foreground' // ALTERADO AQUI: bg e text
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-card dark:bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer" // ALTERADO AQUI: bg
                onClick={() => setSelectedPost(post)}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-primary font-medium">
                      {formatDate(post.date)}
                    </span>
                    <span className="text-sm text-muted-foreground dark:text-muted-foreground"> {/* ALTERADO AQUI: text */}
                      <i className="fas fa-clock mr-1"></i>
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground dark:text-foreground mb-3 line-clamp-2"> {/* ALTERADO AQUI: text */}
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground dark:text-muted-foreground mb-4 line-clamp-3"> {/* ALTERADO AQUI: text */}
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground dark:text-muted-foreground"> {/* ALTERADO AQUI: text */}
                      Por {post.author}
                    </span>
                    <button className="text-primary hover:text-secondary transition-colors duration-300">
                      Ler mais <i className="fas fa-arrow-right ml-1"></i>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Blog Post Modal */}
          {selectedPost && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
              <div className="bg-card dark:bg-card rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto"> {/* ALTERADO AQUI: bg */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-primary font-medium">
                        {formatDate(selectedPost.date)}
                      </span>
                      <span className="text-sm text-muted-foreground dark:text-muted-foreground"> {/* ALTERADO AQUI: text */}
                        <i className="fas fa-clock mr-1"></i>
                        {selectedPost.readTime}
                      </span>
                    </div>
                    <button
                      onClick={() => setSelectedPost(null)}
                      className="text-foreground hover:text-muted-foreground dark:text-foreground dark:hover:text-muted-foreground text-2xl" // ALTERADO AQUI: text e hover
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                  
                  <h1 className="text-3xl font-bold text-foreground dark:text-foreground mb-4"> {/* ALTERADO AQUI: text */}
                    {selectedPost.title}
                  </h1>
                  
                  <div className="prose prose-lg max-w-none text-muted-foreground dark:text-muted-foreground"> {/* ALTERADO AQUI: text */}
                    {selectedPost.content.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-muted-foreground dark:text-muted-foreground"> {/* ALTERADO AQUI: text */}
                      Escrito por <span className="font-medium text-primary">{selectedPost.author}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
