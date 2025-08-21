import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, ArrowRight } from 'lucide-react';

const ServiceDetail = () => {
  const { serviceId } = useParams();

  const serviceDetails = {
    'it-consultation': {
      title: 'Consultation IT',
      subtitle: 'Optimisation et stratégie digitale',
      description: 'Accompagnement personnalisé pour transformer votre infrastructure IT et optimiser vos processus métier.',
      longDescription: `En tant que consultant IT expérimenté, je vous aide à naviguer dans le paysage technologique complexe d'aujourd'hui. Mon approche se base sur une analyse approfondie de vos besoins métier pour proposer des solutions adaptées et évolutives.

      Avec 2 années d'expérience et plus de 10 projets réalisés, j'apporte une expertise technique solide combinée à une vision stratégique pour vous accompagner dans votre transformation digitale.`,
      services: [
        'Audit technique complet de votre infrastructure',
        'Définition de stratégie digitale sur mesure',
        'Optimisation des processus métier existants',
        'Accompagnement dans la transformation digitale',
        'Formation des équipes aux nouvelles technologies',
        'Veille technologique et recommandations'
      ],
      process: [
        { step: '01', title: 'Analyse', description: 'Audit complet de l\'existant et identification des besoins' },
        { step: '02', title: 'Stratégie', description: 'Définition d\'une roadmap personnalisée' },
        { step: '03', title: 'Mise en œuvre', description: 'Accompagnement dans l\'implémentation' },
        { step: '04', title: 'Suivi', description: 'Support continu et optimisations' }
      ],
      technologies: ['Python', 'JavaScript', 'Cloud Computing', 'DevOps', 'Agile'],
      duration: '2-8 semaines',
      price: 'Sur devis'
    },
    'system-design': {
      title: 'Conception de Systèmes',
      subtitle: 'Architecture et bases de données',
      description: 'Conception d\'architectures robustes et évolutives pour vos systèmes d\'information.',
      longDescription: `La conception de systèmes d'information est au cœur de toute transformation digitale réussie. Fort de mon expérience en tant que formateur chez BroadRange Consulting et de ma certification Python, je conçois des architectures techniques qui répondent parfaitement à vos besoins métier.

      Mon approche méthodique garantit des systèmes performants, sécurisés et facilement maintenables, adaptés à la croissance de votre entreprise.`,
      services: [
        'Architecture de bases de données relationnelles et NoSQL',
        'Modélisation des données et processus métier',
        'Conception de systèmes distribués et microservices',
        'Optimisation des performances et scalabilité',
        'Sécurisation des données et conformité RGPD',
        'Documentation technique complète'
      ],
      process: [
        { step: '01', title: 'Analyse', description: 'Étude des besoins fonctionnels et techniques' },
        { step: '02', title: 'Modélisation', description: 'Conception des modèles de données' },
        { step: '03', title: 'Architecture', description: 'Définition de l\'architecture système' },
        { step: '04', title: 'Validation', description: 'Tests et validation de la solution' }
      ],
      technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Kubernetes'],
      duration: '3-12 semaines',
      price: 'À partir de 2500€'
    },
    'web-development': {
      title: 'Développement Web',
      subtitle: 'Sites modernes et performants',
      description: 'Création de sites web sur mesure, responsifs et optimisés pour tous les appareils.',
      longDescription: `Spécialisé dans le développement web moderne, je crée des sites qui allient esthétique, performance et fonctionnalité. Chaque projet bénéficie de mon expertise technique et de ma vision créative pour offrir une expérience utilisateur exceptionnelle.

      Élu meilleur projet de fin d'étude 2024, je maîtrise les dernières technologies web pour créer des solutions qui dépassent vos attentes.`,
      services: [
        'Sites vitrine professionnels et élégants',
        'Plateformes e-commerce complètes',
        'Applications web sur mesure',
        'Design responsive et mobile-first',
        'Optimisation SEO et performances',
        'Maintenance et support technique'
      ],
      process: [
        { step: '01', title: 'Conception', description: 'Wireframes et maquettes interactives' },
        { step: '02', title: 'Développement', description: 'Codage avec les meilleures pratiques' },
        { step: '03', title: 'Tests', description: 'Tests multi-navigateurs et appareils' },
        { step: '04', title: 'Déploiement', description: 'Mise en ligne et formation' }
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      duration: '4-16 semaines',
      price: 'À partir de 1500€'
    }
  };

  const service = serviceDetails[serviceId as keyof typeof serviceDetails];

  if (!service) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light text-gray-900 mb-4">Service non trouvé</h1>
          <Link to="/services" className="text-blue-500 hover:text-blue-600">
            Retour aux services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-32 px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <Link
              to="/services"
              className="inline-flex items-center text-gray-500 hover:text-blue-500 transition-colors font-light"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour aux services
            </Link>

            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-extralight text-gray-900 leading-tight">
                {service.title}
              </h1>
              <p className="text-2xl text-blue-500 font-light">
                {service.subtitle}
              </p>
              <p className="text-xl text-gray-600 font-light leading-relaxed">
                {service.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-6 pt-8">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500 uppercase tracking-wide">Durée:</span>
                <span className="text-gray-900 font-light">{service.duration}</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500 uppercase tracking-wide">Tarif:</span>
                <span className="text-gray-900 font-light">{service.price}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Description détaillée */}
      <section className="py-32 px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-extralight text-gray-900 leading-tight">
                Une approche
                <br />
                <span className="text-blue-500">personnalisée</span>
              </h2>
              
              <div className="space-y-6 text-gray-600 font-light leading-relaxed">
                {service.longDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph.trim()}</p>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-light text-gray-900">
                Ce qui est inclus
              </h3>
              
              <div className="space-y-4">
                {service.services.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-6 h-6 flex items-center justify-center bg-blue-50 rounded-full mt-1">
                      <Check className="h-3 w-3 text-blue-500" />
                    </div>
                    <span className="text-gray-600 font-light">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-32 px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-extralight text-gray-900 leading-tight mb-6">
              Mon processus
              <br />
              <span className="text-blue-500">de travail</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-8">
                  <div className="w-20 h-20 mx-auto bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <span className="text-2xl font-light text-blue-500">{step.step}</span>
                  </div>
                  {index < service.process.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gray-200 transform -translate-y-1/2"></div>
                  )}
                </div>
                
                <h3 className="text-xl font-light text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 font-light text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-32 px-8 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <h2 className="text-4xl font-extralight text-gray-900 leading-tight">
              Technologies
              <br />
              <span className="text-blue-500">utilisées</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4">
              {service.technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="px-6 py-3 bg-white text-gray-700 font-light tracking-wide uppercase text-sm border border-gray-200 hover:border-blue-200 hover:text-blue-500 transition-all duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-8 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-5xl lg:text-6xl font-extralight text-gray-900 leading-tight">
              Prêt à commencer ?
            </h2>
            
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              Discutons de votre projet et voyons comment je peux vous aider 
              à atteindre vos objectifs.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Link
                to="/contact"
                className="group px-12 py-6 bg-blue-500 text-white font-light tracking-wide uppercase text-sm transition-all duration-300 hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-500/25"
              >
                <span className="flex items-center justify-center">
                  Demander un devis
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <a
                href="https://wa.me/237673398046"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-12 py-6 border-2 border-gray-200 text-gray-700 font-light tracking-wide uppercase text-sm hover:border-green-500 hover:text-green-500 transition-all duration-300"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;