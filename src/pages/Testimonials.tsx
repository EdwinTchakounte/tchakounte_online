import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, User, Building, Calendar } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Marie Dubois',
      role: 'Directrice Technique',
      company: 'TechCommerce Solutions',
      content: 'Edwin a transformé notre vision en une solution technique exceptionnelle. Son expertise et son professionnalisme ont dépassé nos attentes. La plateforme e-commerce qu\'il a développée a augmenté nos conversions de 150%.',
      rating: 5,
      date: 'Novembre 2024',
      project: 'Plateforme E-commerce',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 2,
      name: 'Jean-Paul Kamga',
      role: 'CEO',
      company: 'FinanceApp Pro',
      content: 'Un développeur d\'exception qui allie compétences techniques et créativité. Notre application mobile a été livrée dans les délais avec une qualité remarquable. L\'interface utilisateur est intuitive et les performances excellentes.',
      rating: 5,
      date: 'Octobre 2024',
      project: 'Application Bancaire Mobile',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 3,
      name: 'Sarah Martin',
      role: 'Chef de Projet Digital',
      company: 'DigitalFlow Agency',
      content: 'Collaboration fluide et résultats remarquables. Edwin comprend parfaitement les enjeux business et propose des solutions techniques adaptées. Je recommande vivement ses services pour tout projet digital ambitieux.',
      rating: 5,
      date: 'Septembre 2024',
      project: 'Site Corporate & Dashboard',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 4,
      name: 'Dr. Michel Fotso',
      role: 'Directeur Médical',
      company: 'Centre Hospitalier Régional',
      content: 'Le système de gestion hospitalière développé par Edwin a révolutionné notre organisation. Interface intuitive, fonctionnalités complètes et sécurité optimale. Un gain d\'efficacité de 40% dans nos processus.',
      rating: 5,
      date: 'Août 2024',
      project: 'Système de Gestion Hospitalière',
      avatar: 'https://images.pexels.com/photos/612608/pexels-photo-612608.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 5,
      name: 'Amélie Rousseau',
      role: 'Responsable Marketing',
      company: 'InnovStart',
      content: 'Edwin a créé notre identité visuelle complète avec un professionnalisme exemplaire. Logo, charte graphique, supports marketing - tout est cohérent et impactant. Notre image de marque a gagné en crédibilité.',
      rating: 5,
      date: 'Juillet 2024',
      project: 'Identité Graphique & Branding',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 6,
      name: 'Thomas Nguyen',
      role: 'Fondateur',
      company: 'EduTech Platform',
      content: 'La plateforme e-learning développée par Edwin dépasse toutes nos attentes. Interface moderne, fonctionnalités avancées et expérience utilisateur exceptionnelle. Nos étudiants adorent la nouvelle plateforme.',
      rating: 5,
      date: 'Juin 2024',
      project: 'Plateforme E-learning',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 7,
      name: 'Fatima Al-Zahra',
      role: 'Directrice Innovation',
      company: 'Smart Solutions',
      content: 'Consultation IT de très haut niveau. Edwin a audité notre infrastructure et proposé des améliorations qui ont optimisé nos performances de 60%. Expertise technique remarquable et conseils stratégiques pertinents.',
      rating: 5,
      date: 'Mai 2024',
      project: 'Consultation IT & Audit',
      avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 8,
      name: 'Pierre Dubois',
      role: 'Gérant',
      company: 'Restaurant Saveurs d\'Afrique',
      content: 'Application de commande en ligne parfaite ! Edwin a compris nos besoins spécifiques et créé une solution sur mesure. Interface élégante, fonctionnalités pratiques et intégration parfaite avec nos systèmes.',
      rating: 5,
      date: 'Avril 2024',
      project: 'App Restaurant & Livraison',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const stats = [
    { label: 'Clients satisfaits', value: '15+' },
    { label: 'Projets réussis', value: '20+' },
    { label: 'Note moyenne', value: '5.0/5' },
    { label: 'Taux de recommandation', value: '100%' }
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
                Témoignages Clients
              </span>
              <div className="w-16 h-px bg-blue-500"></div>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-extralight text-gray-900 leading-tight">
              Ils me font
              <br />
              <span className="text-blue-500">confiance</span>
            </h1>
            
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Découvrez les retours de mes clients sur nos collaborations. 
              Leur satisfaction est ma plus belle récompense.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-32 px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                  <div className="text-4xl font-light text-blue-500 mb-3">{stat.value}</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide font-light">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-32 px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-extralight text-gray-900 leading-tight mb-6">
              Retours <span className="text-blue-500">clients</span>
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Chaque projet est une nouvelle histoire de succès
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all duration-300 hover:bg-white border border-gray-100 hover:border-blue-200 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <Quote className="h-6 w-6 text-blue-500/30" />
                  </div>

                  {/* Contenu */}
                  <div className="flex-1 mb-6">
                    <p className="text-gray-600 font-light leading-relaxed italic">
                      "{testimonial.content}"
                    </p>
                  </div>

                  {/* Projet */}
                  <div className="mb-6">
                    <div className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium tracking-wide uppercase rounded-full inline-block">
                      {testimonial.project}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-medium text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">{testimonial.role}</div>
                        <div className="text-xs text-gray-400">{testimonial.company}</div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-400 flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {testimonial.date}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-5xl lg:text-6xl font-extralight text-gray-900 leading-tight">
              Rejoignez mes
              <br />
              <span className="text-blue-500">clients satisfaits</span>
            </h2>
            
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              Votre projet mérite la même attention et le même niveau d'excellence. 
              Discutons de vos besoins.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <motion.a
                href="/contact"
                className="group px-12 py-6 bg-blue-500 text-white font-light tracking-wide uppercase text-sm transition-all duration-300 hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-500/25"
                whileHover={{ y: -2 }}
              >
                <span className="flex items-center justify-center">
                  Démarrer mon projet
                  <User className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;