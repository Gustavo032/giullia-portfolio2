export default function Courses() {
  const courses = [
    { name: 'Psicologia Experimental', date: 'Fevereiro 2024', icon: 'fas fa-brain', color: 'primary' },
    { name: 'Psicologia Social', date: 'Fevereiro 2024', icon: 'fas fa-users', color: 'secondary' },
    { name: 'Psicologia Educacional', date: 'Fevereiro 2024', icon: 'fas fa-chalkboard-teacher', color: 'accent' },
    { name: 'Desenvolvimento Profissional', date: 'Janeiro 2024', icon: 'fas fa-chart-line', color: 'primary' },
    { name: 'Psicopedagogia', date: 'Março 2024', icon: 'fas fa-puzzle-piece', color: 'secondary' },
    { name: 'Excel Básico', date: 'Março 2024', icon: 'fas fa-file-excel', color: 'accent' },
    { name: 'Conhecimentos Pedagógicos', date: 'Março 2024', icon: 'fas fa-book-open', color: 'primary' },
    { name: 'Inglês', date: 'Janeiro 2024', icon: 'fas fa-globe', color: 'secondary' },
  ];

  const getGradientClasses = (index: number) => {
    const gradients = [
      'from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5',
      'from-secondary/10 to-accent/10 dark:from-secondary/5 dark:to-accent/5',
      'from-accent/10 to-primary/10 dark:from-accent/5 dark:to-primary/5',
    ];
    return gradients[index % 3];
  };

  return (
    <section id="courses" className="py-20 bg-white dark:bg-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">Cursos Complementares</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br ${getGradientClasses(index)} p-6 rounded-2xl hover:scale-105 transition-transform duration-300`}
              >
                <div className="mb-4">
                  <i className={`${course.icon} text-${course.color} text-3xl mb-2`}></i>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{course.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{course.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
