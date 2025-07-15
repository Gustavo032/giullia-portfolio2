import { useState } from 'react';

interface GalleryItem {
  id: number;
  title: string;
  category: 'academic' | 'projects' | 'achievements';
  image: string;
  description: string;
}

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'academic' | 'projects' | 'achievements'>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Ambiente de Estudo',
      category: 'academic',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Meu espaço de estudo organizado para máxima produtividade e concentração.'
    },
    {
      id: 2,
      title: 'Materiais Pedagógicos',
      category: 'academic',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Coleção de livros e materiais utilizados nos estudos de Pedagogia.'
    },
    {
      id: 3,
      title: 'Projeto de Pesquisa',
      category: 'projects',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Desenvolvimento de projeto de pesquisa sobre métodos pedagógicos inovadores.'
    },
    {
      id: 4,
      title: 'Tecnologia na Educação',
      category: 'projects',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Projeto focado na integração de tecnologia em práticas educacionais.'
    },
    {
      id: 5,
      title: 'Certificados de Cursos',
      category: 'achievements',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Conquistas acadêmicas e certificações em cursos complementares.'
    },
    {
      id: 6,
      title: 'Apresentação Acadêmica',
      category: 'achievements',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Momentos de apresentações e participações em eventos acadêmicos.'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const categories = [
    { id: 'all', label: 'Todos', icon: 'fas fa-th-large' },
    { id: 'academic', label: 'Acadêmico', icon: 'fas fa-graduation-cap' },
    { id: 'projects', label: 'Projetos', icon: 'fas fa-project-diagram' },
    { id: 'achievements', label: 'Conquistas', icon: 'fas fa-trophy' }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'academic': return 'primary';
      case 'projects': return 'secondary';
      case 'achievements': return 'accent';
      default: return 'primary';
    }
  };

  return (
    <section 
      id="gallery" 
      className="py-20 bg-gray-50 dark:bg-background" // ALTERADO AQUI: usando dark:bg-background
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">Galeria</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400">Momentos e conquistas da minha jornada educacional</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id as any)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary --foreground shadow-lg scale-105'
                    : 'bg-card dark:bg-card text-gray-700 dark:text-gray-300 hover:bg-muted dark:hover:bg-muted' // ALTERADO AQUI
                }`}
              >
                <i className={`${category.icon} mr-2`}></i>
                {category.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-card dark:bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer" // ALTERADO AQUI
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className={`absolute top-4 right-4 bg-${getCategoryColor(item.category)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                    {item.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          {selectedImage && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
              <div className="bg-card dark:bg-card rounded-2xl max-w-4xl max-h-[90vh] overflow-auto"> {/* ALTERADO AQUI */}
                <div className="relative">
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-4 right-4 z-10 bg-card dark:bg-card text-gray-800 dark:text-gray-200 rounded-full p-2 hover:bg-muted dark:hover:bg-muted" // ALTERADO AQUI
                  >
                    <i className="fas fa-times"></i>
                  </button>
                  <img 
                    src={selectedImage.image} 
                    alt={selectedImage.title}
                    className="w-full h-96 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">{selectedImage.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{selectedImage.description}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
