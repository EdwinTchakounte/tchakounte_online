import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Send, MapPin, Phone, Clock, CheckCircle } from 'lucide-react';
import { supabase } from '../supabaseClient';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    budget: '',
    timeline: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', company: '', subject: '', message: '', budget: '', timeline: '' });

     const { error } = await supabase.from('tchakounte_contact').insert([formData]);

    if (error) {
      alert("Erreur : " + error.message);
    } 
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Professionnel',
      value: 'contact@tchakounte.online',
      description: 'Réponse sous 24h',
      link: 'mailto:contact@tchakounte.online',
      color: 'blue'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Business',
      value: '+237 673398046',
      description: 'Disponible 9h-18h',
      link: 'https://wa.me/237673398046',
      color: 'green'
    },
    {
      icon: MapPin,
      title: 'Site Web',
      value: 'tchakounte.online',
      description: 'Portfolio complet',
      link: 'https://tchakounte.online',
      color: 'purple'
    },
    {
      icon: Clock,
      title: 'Horaires',
      value: 'Lun - Ven: 9h - 18h',
      description: 'Fuseau GMT+1',
      link: '#',
      color: 'orange'
    }
  ];

  const services = [
    'Consultation IT',
    'Développement Web',
    'Application Mobile',
    'Système d\'Information',
    'Identité Graphique',
    'Formation',
    'Autre'
  ];

  const budgets = [
    'Moins de 1000€',
    '1000€ - 5000€',
    '5000€ - 10000€',
    '10000€ - 25000€',
    'Plus de 25000€',
    'À discuter'
  ];

  const timelines = [
    'Urgent (< 1 mois)',
    'Court terme (1-3 mois)',
    'Moyen terme (3-6 mois)',
    'Long terme (6+ mois)',
    'Flexible'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-32 px-8 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-16 h-px bg-blue-500"></div>
              <span className="text-sm font-light tracking-widest text-gray-500 uppercase">
                Contactez-moi
              </span>
              <div className="w-16 h-px bg-blue-500"></div>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-extralight text-gray-900 leading-tight">
              Démarrons votre
              <br />
              <span className="text-blue-500">projet ensemble</span>
            </h1>
            
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Prêt à transformer vos idées en réalité digitale ? Discutons de votre projet 
              et explorons ensemble les possibilités infinies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Informations de contact */}
      <section className="py-32 px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-extralight text-gray-900 leading-tight mb-6">
              Plusieurs façons
              <br />
              <span className="text-blue-500">de me joindre</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : '_self'}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group block"
                whileHover={{ y: -5 }}
              >
                <div className="bg-white p-8 h-full transition-all duration-500 hover:shadow-xl border border-gray-100 hover:border-gray-200 rounded-lg text-center">
                  <div className={`w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-${info.color}-50 rounded-full group-hover:bg-${info.color}-100 transition-colors`}>
                    <info.icon className={`h-8 w-8 text-${info.color}-500`} />
                  </div>
                  
                  <h3 className="text-lg font-light text-gray-900 mb-3 group-hover:text-blue-500 transition-colors">
                    {info.title}
                  </h3>
                  
                  <p className="text-gray-900 font-medium mb-2">
                    {info.value}
                  </p>
                  
                  <p className="text-sm text-gray-500 font-light">
                    {info.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire de contact */}
      <section className="py-32 px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-extralight text-gray-900 leading-tight mb-6">
              Parlez-moi de
              <br />
              <span className="text-blue-500">votre projet</span>
            </h2>
            <p className="text-lg text-gray-600 font-light">
              Plus vous me donnez de détails, mieux je peux vous conseiller
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-green-50 rounded-full">
                  <CheckCircle className="h-10 w-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-light text-gray-900 mb-4">Message envoyé avec succès !</h3>
                <p className="text-gray-600 font-light">
                  Je vous recontacterai dans les plus brefs délais pour discuter de votre projet.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Informations personnelles */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-3 uppercase tracking-wide">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-0 py-4 border-0 border-b-2 border-gray-200 focus:border-blue-500 focus:outline-none bg-transparent font-light transition-colors text-lg"
                      placeholder="Votre nom et prénom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-3 uppercase tracking-wide">
                      Email professionnel *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-0 py-4 border-0 border-b-2 border-gray-200 focus:border-blue-500 focus:outline-none bg-transparent font-light transition-colors text-lg"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-3 uppercase tracking-wide">
                      Entreprise / Organisation
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-0 py-4 border-0 border-b-2 border-gray-200 focus:border-blue-500 focus:outline-none bg-transparent font-light transition-colors text-lg"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-3 uppercase tracking-wide">
                      Type de service *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-0 py-4 border-0 border-b-2 border-gray-200 focus:border-blue-500 focus:outline-none bg-transparent font-light transition-colors text-lg"
                    >
                      <option value="">Sélectionnez un service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-3 uppercase tracking-wide">
                      Budget estimé
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-0 py-4 border-0 border-b-2 border-gray-200 focus:border-blue-500 focus:outline-none bg-transparent font-light transition-colors text-lg"
                    >
                      <option value="">Sélectionnez votre budget</option>
                      {budgets.map((budget) => (
                        <option key={budget} value={budget}>{budget}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-3 uppercase tracking-wide">
                      Délai souhaité
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-0 py-4 border-0 border-b-2 border-gray-200 focus:border-blue-500 focus:outline-none bg-transparent font-light transition-colors text-lg"
                    >
                      <option value="">Sélectionnez un délai</option>
                      {timelines.map((timeline) => (
                        <option key={timeline} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-3 uppercase tracking-wide">
                    Description du projet *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-0 py-4 border-0 border-b-2 border-gray-200 focus:border-blue-500 focus:outline-none bg-transparent font-light resize-none transition-colors text-lg"
                    placeholder="Décrivez votre projet, vos objectifs, vos contraintes techniques, votre audience cible..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="group w-full py-6 bg-blue-500 text-white font-light tracking-wide uppercase text-sm hover:bg-blue-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center justify-center">
                    <Send className="h-5 w-5 mr-3 group-hover:translate-x-1 transition-transform" />
                    Envoyer ma demande
                  </span>
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-8 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-extralight text-gray-900 leading-tight mb-6">
              Questions
              <br />
              <span className="text-blue-500">fréquentes</span>
            </h2>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                question: "Quel est votre processus de travail ?",
                answer: "Je commence toujours par une phase de découverte pour comprendre vos besoins, puis je propose une solution technique adaptée. Le développement se fait de manière itérative avec des points réguliers pour valider l'avancement."
              },
              {
                question: "Combien de temps prend un projet typique ?",
                answer: "Cela dépend de la complexité : un site vitrine prend 2-4 semaines, une application web 6-12 semaines, et un système complexe peut prendre plusieurs mois. Je fournis toujours une estimation détaillée après analyse."
              },
              {
                question: "Proposez-vous de la maintenance après livraison ?",
                answer: "Absolument ! Je propose des contrats de maintenance pour assurer la sécurité, les mises à jour et le support technique de vos solutions. C'est essentiel pour la pérennité de votre investissement."
              },
              {
                question: "Travaillez-vous avec des clients internationaux ?",
                answer: "Oui, je travaille avec des clients partout dans le monde. La communication se fait principalement en français et anglais, avec des outils collaboratifs modernes pour un suivi optimal."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg border border-gray-100"
              >
                <h3 className="text-xl font-light text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;