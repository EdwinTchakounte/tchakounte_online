import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, Calendar, Users } from 'lucide-react';

const Portfolio = () => {
  const projects = [
      {
    id: 3,
    title: 'Système de Gestion des Prédications',
    category: 'Application Mobile',
    description: 'Application mobile pour la gestion et l’archivage des prédications d’église.',
    longDescription: 'Développement d’une application Flutter connectée à Supabase pour gérer, consulter et archiver les prédications. Intégration d’authentification, gestion des utilisateurs et consultation hors-ligne.',
    image: 'https://images.pexels.com/photos/164216/pexels-photo-164216.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Flutter', 'Supabase'],
    features: [
      'Ajout et archivage des prédications',
      'Recherche et consultation rapide',
      'Gestion des comptes utilisateurs',
      'Mode hors-ligne disponible'
    ],
    metrics: {
      duration: '6 mois',
      team: '1 développeur',
      performance: 'Facilité d’accès aux prédications',
      users: '300+ membres'
    },
    year: '2024',
    client: 'Communauté religieuse locale',
    status: 'En production',
    github: '#',
    live: '#'
  },
    {
    id: 4,
    title: 'Site Vitrine 2MeTech',
    category: 'Développement Web Front-End',
    description: 'Site vitrine professionnel pour l’entreprise 2MeTech.',
    longDescription: 'Conception d’un site vitrine moderne et responsive pour présenter les services et solutions de l’entreprise 2MeTech. Optimisation SEO et design épuré.',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'TailwindCSS'],
    features: [
      'Design moderne et responsive',
      'Optimisation SEO',
      'Présentation claire des services',
      'Formulaire de contact intégré'
    ],
    metrics: {
      duration: '1 mois',
      team: '1 développeur',
      performance: 'Visibilité accrue en ligne',
      users: '500+ visiteurs/mois'
    },
    year: '2025',
    client: '2MeTech',
    status: 'En ligne',
    github: '#',
    live: 'https://www.2metechsarl.org/'
  },
  {
    id: 5,
    title: 'Site Vitrine KSIES Scholarship',
    category: 'Développement Web Front-End',
    description: 'Site vitrine pour la plateforme KSIES Scholarship.',
    longDescription: 'Développement d’un site vitrine dynamique en React afin de présenter les opportunités de bourses et les actualités liées au programme KSIES Scholarship.',
    image: 'https://images.pexels.com/photos/256502/pexels-photo-256502.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'TailwindCSS'],
    features: [
      'Interface moderne et intuitive',
      'Optimisation SEO pour la visibilité',
      'Mise en avant des opportunités de bourses',
      'Système de mise à jour simplifié'
    ],
    metrics: {
      duration: '1 mois',
      team: '1 développeur',
      performance: 'Augmentation des candidatures en ligne',
      users: '1K+ visiteurs/mois'
    },
    year: '2025',
    client: 'KSIES Scholarship',
    status: 'En ligne',
    github: '#',
    live: 'https://ksies-scholarships.net'
  },
  {
    id: 1,
    title: 'Système IoT de Contrôle d’Accès Automobile',
    category: 'IoT & Développement Full-Stack',
    description: 'Système intelligent de contrôle d’accès à un portique automobile intégrant React, Django et Arduino.',
    longDescription: 'Conception et développement d’un système IoT complet permettant de gérer l’accès à un portique automobile. Le projet inclut une interface web en React pour le suivi, une API backend en Django, et un module Arduino pour le contrôle physique du portique.',
    image: 'https://drive.google.com/file/d/1-A6RzsNJjuzHtUjYgkFrFLYSe6vT6Q4x/view?usp=sharing',
    technologies: ['React', 'Django', 'Arduino', 'IoT'],
    features: [
      'Authentification et contrôle d’accès sécurisé',
      'Tableau de bord web pour suivi en temps réel',
      'Communication Arduino ↔ Serveur',
      'Journalisation des accès et notifications'
    ],
    metrics: {
      duration: '6 mois',
      team: '2 développeurs',
      performance: 'Fiabilité 70%',
      users: '2+ utilisateurs test'
    },
    year: '2024',
    client: 'Projet académique',
    status: 'Terminé',
    github: '#',
    live: '#'
  },
  {
    id: 2,
    title: 'Système de Gestion d’Hôtel - Bandjoun',
    category: 'Développement Web Full-Stack',
    description: 'Plateforme de gestion d’hôtel avec réservation, facturation et suivi client.',
    longDescription: 'Développement d’un système de gestion centralisée d’hôtel permettant la gestion des chambres, des réservations, de la facturation et du reporting. Interface moderne en React connectée à un backend Django robuste.',
    image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Django', 'PostgreSQL'],
    features: [
      'Gestion des chambres et disponibilités',
      'Réservations en ligne et sur place',
      'Facturation automatisée',
      'Tableau de bord administratif'
    ],
    metrics: {
      duration: '4 mois',
      team: '1 développeurs',
      performance: '30% gain productivité',
      users: '1 client'
    },
    year: '2024',
    client: 'Hôtel privé à Bandjoun',
    status: 'Déployé',
    github: '#',
    live: '#'
  },

  
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
                Mes Projets
              </span>
              <div className="w-16 h-px bg-blue-500"></div>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-extralight text-gray-900 leading-tight">
              Réalisations
              <br />
              <span className="text-blue-500">remarquables</span>
            </h1>
            
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Découvrez mes projets les plus significatifs, témoins de mon expertise 
              technique et de ma capacité à livrer des solutions innovantes.
            </p>

            <div className="grid md:grid-cols-3 gap-8 pt-12">
              <div className="text-center">
                <div className="text-4xl font-light text-blue-500 mb-2">10+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Projets Livrés</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-blue-500 mb-2">15+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Clients Satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-blue-500 mb-2">2</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Années d'Expérience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projets détaillés */}
      <section className="py-32 px-8 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="space-y-32">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <div className={`grid lg:grid-cols-2 gap-20 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  {/* Image et informations */}
                  <div className={`space-y-8 ${
                    index % 2 === 1 ? 'lg:col-start-2' : ''
                  }`}>
                    <div className="relative overflow-hidden rounded-lg">
                      <div className="aspect-[4/3] bg-gray-200 overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      
                      {/* Status badge */}
                      <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
                        <span className="text-sm font-light text-green-600">{project.status}</span>
                      </div>
                    </div>

                    {/* Métriques */}
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <Calendar className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-600">Durée: {project.metrics.duration}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Users className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-600">Équipe: {project.metrics.team}</span>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="text-sm text-gray-600">
                          <span className="font-medium text-blue-500">{project.metrics.performance}</span>
                        </div>
                        <div className="text-sm text-gray-600">
                          <span className="font-medium text-green-500">{project.metrics.users}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className={`space-y-8 ${
                    index % 2 === 1 ? 'lg:col-start-1' : ''
                  }`}>
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-light tracking-widest text-gray-500 uppercase">
                          {project.category}
                        </span>
                        <span className="text-sm text-gray-500 font-light">{project.year}</span>
                      </div>
                      
                      <h2 className="text-4xl font-light text-gray-900 mb-6 group-hover:text-blue-500 transition-colors">
                        {project.title}
                      </h2>
                      
                      <p className="text-gray-600 font-light leading-relaxed text-lg mb-6">
                        {project.longDescription}
                      </p>

                      <div className="text-sm text-gray-500 mb-6">
                        <span className="font-medium">Client:</span> {project.client}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wide mb-4">
                        Technologies utilisées
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 text-sm font-light text-gray-600 border border-gray-200 hover:border-blue-200 hover:text-blue-500 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Fonctionnalités clés */}
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wide mb-4">
                        Fonctionnalités clés
                      </h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {project.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <div className="w-1 h-1 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                            <span className="text-sm text-gray-600 font-light">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-4 pt-4">
                      <motion.a
                        href={project.live}
                        className="group/btn inline-flex items-center px-6 py-3 bg-blue-500 text-white font-light tracking-wide uppercase text-sm hover:bg-blue-600 transition-all duration-300"
                        whileHover={{ x: 5 }}
                      >
                        Voir le projet
                        <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </motion.a>
                      

                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-32 px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-extralight text-gray-900 leading-tight mb-6">
              Ce que disent
              <br />
              <span className="text-blue-500">mes clients</span>
            </h2>
          </motion.div>

          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <blockquote className="text-2xl font-light text-gray-600 leading-relaxed mb-8 italic">
                "Edwin a transformé notre vision en une solution technique exceptionnelle. 
                Son expertise et son professionnalisme ont dépassé nos attentes."
              </blockquote>
              <div className="text-gray-900 font-medium">Christian BAONGLA</div>
              <div className="text-gray-500 text-sm">CEO, KSIES Scholarship</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <blockquote className="text-2xl font-light text-gray-600 leading-relaxed mb-8 italic">
                "Un développeur d'exception qui allie compétences techniques et créativité. 
                Notre application mobile a été livrée dans les délais avec une qualité remarquable."
              </blockquote>
              <div className="text-gray-900 font-medium">Silas</div>
              <div className="text-gray-500 text-sm">Phophete ,TDC </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-8 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-5xl lg:text-6xl font-extralight text-gray-900 leading-tight">
              Votre projet sera
              <br />
              <span className="text-blue-500">le prochain</span>
            </h2>
            
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              Transformons ensemble votre idée en une réalisation exceptionnelle 
              qui marquera votre secteur d'activité.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <motion.a
                href="/contact"
                className="group px-12 py-6 bg-blue-500 text-white font-light tracking-wide uppercase text-sm transition-all duration-300 hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-500/25"
                whileHover={{ y: -2 }}
              >
                <span className="flex items-center justify-center">
                  Démarrer mon projet
                  <ArrowUpRight className="ml-3 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;