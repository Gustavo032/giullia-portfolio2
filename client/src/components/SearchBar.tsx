
import { useState, useEffect } from 'react';

interface SearchResult {
  type: 'skill' | 'course' | 'blog' | 'quality';
  title: string;
  description: string;
  section: string;
  url: string;
}

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // Sample searchable content
  const searchableContent: SearchResult[] = [
    {
      type: 'skill',
      title: 'Planejamento de Aulas',
      description: 'Competência pedagógica para criar aulas estruturadas e efetivas',
      section: 'Competências',
      url: '#skills'
    },
    {
      type: 'skill',
      title: 'Psicologia Educacional',
      description: 'Conhecimento em psicologia aplicada à educação',
      section: 'Competências',
      url: '#skills'
    },
    {
      type: 'course',
      title: 'Curso de Excel',
      description: 'Curso completo de Microsoft Excel para análise de dados',
      section: 'Cursos',
      url: '#courses'
    },
    {
      type: 'blog',
      title: 'Educação Inclusiva',
      description: 'Reflexões sobre a importância da inclusão na educação',
      section: 'Blog',
      url: '#blog'
    },
    {
      type: 'quality',
      title: 'Comunicação',
      description: 'Habilidade de comunicação clara e efetiva',
      section: 'Qualidades',
      url: '#qualities'
    }
  ];

  useEffect(() => {
    if (query.length > 2) {
      const filtered = searchableContent.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  const handleResultClick = (url: string) => {
    setQuery('');
    setIsOpen(false);
    document.querySelector(url)?.scrollIntoView({ behavior: 'smooth' });
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'skill':
        return 'fas fa-star';
      case 'course':
        return 'fas fa-certificate';
      case 'blog':
        return 'fas fa-blog';
      case 'quality':
        return 'fas fa-heart';
      default:
        return 'fas fa-search';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'skill':
        return 'text-primary';
      case 'course':
        return 'text-secondary';
      case 'blog':
        return 'text-accent';
      case 'quality':
        return 'text-pink-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="relative">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar no site..."
          className="w-64 px-4 py-2 pl-10 bg-white dark:bg-dark border border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-primary text-gray-800 dark:text-gray-200 text-sm"
        />
        <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
      </div>

      {/* Search Results */}
      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-dark border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg z-50 max-h-96 overflow-y-auto">
          {results.map((result, index) => (
            <button
              key={index}
              onClick={() => handleResultClick(result.url)}
              className="w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-dark/50 transition-colors duration-200 border-b border-gray-100 dark:border-gray-700 last:border-b-0"
            >
              <div className="flex items-start space-x-3">
                <i className={`${getTypeIcon(result.type)} ${getTypeColor(result.type)} mt-1`}></i>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-800 dark:text-gray-200 text-sm">
                    {result.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-xs mt-1">
                    {result.description}
                  </p>
                  <span className="text-primary text-xs font-medium">
                    {result.section}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* No Results */}
      {isOpen && query.length > 2 && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-dark border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg z-50 p-4">
          <div className="text-center text-gray-500 dark:text-gray-400">
            <i className="fas fa-search text-2xl mb-2"></i>
            <p className="text-sm">Nenhum resultado encontrado para "{query}"</p>
          </div>
        </div>
      )}
    </div>
  );
}
