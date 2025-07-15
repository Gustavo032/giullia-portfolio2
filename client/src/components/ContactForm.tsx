
import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Since this is a static site, we'll create a mailto link
    const mailtoLink = `mailto:giulliagomes2000@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;
    
    setSubmitMessage('Redirecionando para seu cliente de email...');
    setIsSubmitting(false);
    
    // Reset form
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitMessage('');
    }, 3000);
  };

  const subjectOptions = [
    { value: '', label: 'Selecione um assunto' },
    { value: 'oportunidade', label: 'Oportunidade de Trabalho' },
    { value: 'colaboracao', label: 'Colaboração' },
    { value: 'networking', label: 'Networking' },
    { value: 'informacoes', label: 'Solicitar Informações' },
    { value: 'outro', label: 'Outro' }
  ];

  return (
    <section id="contact-form" className="py-20 bg-white dark:bg-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">Envie uma Mensagem</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400">Entre em contato diretamente através do formulário</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-card dark:bg-card p-6 rounded-2xl"> {/* ALTERADO AQUI: de gradient para bg-card */}
                <h3 className="text-2xl font-semibold text-foreground dark:text-foreground mb-4">Informações de Contato</h3> {/* ALTERADO AQUI: text */}
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-envelope text-white"></i>
                    </div>
                    <div>
                      <p className="font-medium text-foreground dark:text-foreground">Email</p> {/* ALTERADO AQUI: text */}
                      <p className="text-muted-foreground dark:text-muted-foreground">giulliagomes2000@gmail.com</p> {/* ALTERADO AQUI: text */}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center mr-4">
                      <i className="fab fa-whatsapp text-white"></i>
                    </div>
                    <div>
                      <p className="font-medium text-foreground dark:text-foreground">WhatsApp</p> {/* ALTERADO AQUI: text */}
                      <p className="text-muted-foreground dark:text-muted-foreground">(11) 94152-5603</p> {/* ALTERADO AQUI: text */}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-map-marker-alt text-white"></i>
                    </div>
                    <div>
                      <p className="font-medium text-foreground dark:text-foreground">Localização</p> {/* ALTERADO AQUI: text */}
                      <p className="text-muted-foreground dark:text-muted-foreground">Itapevi, São Paulo</p> {/* ALTERADO AQUI: text */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card dark:bg-card p-6 rounded-2xl"> {/* ALTERADO AQUI: de gradient para bg-card */}
                <h3 className="text-2xl font-semibold text-foreground dark:text-foreground mb-4">Horário de Resposta</h3> {/* ALTERADO AQUI: text */}
                <p className="text-muted-foreground dark:text-muted-foreground mb-2"> {/* ALTERADO AQUI: text */}
                  Normalmente respondo em até 24 horas durante dias úteis.
                </p>
                <p className="text-muted-foreground dark:text-muted-foreground text-sm"> {/* ALTERADO AQUI: text */}
                  Segunda a Sexta: 9h às 18h<br />
                  Sábado: 9h às 14h
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card dark:bg-card p-8 rounded-2xl"> {/* ALTERADO AQUI: bg */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground dark:text-foreground mb-2"> {/* ALTERADO AQUI: text */}
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border dark:border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-input dark:bg-input text-foreground dark:text-foreground transition-colors" // ALTERADO AQUI: border, bg, text
                    placeholder="Digite seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground dark:text-foreground mb-2"> {/* ALTERADO AQUI: text */}
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border dark:border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-input dark:bg-input text-foreground dark:text-foreground transition-colors" // ALTERADO AQUI: border, bg, text
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground dark:text-foreground mb-2"> {/* ALTERADO AQUI: text */}
                    Assunto *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border dark:border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-input dark:bg-input text-foreground dark:text-foreground transition-colors" // ALTERADO AQUI: border, bg, text
                  >
                    {subjectOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground dark:text-foreground mb-2"> {/* ALTERADO AQUI: text */}
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-border dark:border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-input dark:bg-input text-foreground dark:text-foreground transition-colors resize-none" // ALTERADO AQUI: border, bg, text
                    placeholder="Digite sua mensagem aqui..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <i className="fas fa-paper-plane mr-2"></i>
                      Enviar Mensagem
                    </span>
                  )}
                </button>

                {submitMessage && (
                  <div className="text-center p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg"> {/* ALTERADO AQUI: dark:bg-green-900 */}
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
