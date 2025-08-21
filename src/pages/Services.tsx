import React from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, 
  Database, 
  Palette, 
  FileImage, 
  Globe, 
  Code, 
  Smartphone,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 'it-consultation',
      icon: Settings,
      title: 'Consultation IT',
      description: 'Conseil stratégique pour optimiser votre infrastructure digitale et améliorer vos processus métier.',
      features: ['Audit technique', 'Stratégie digitale', 'Optimisation des processus', 'Accompagnement'],
      color: 'blue'
    },
    {
      id: 'system-design',
      icon: Database,
      title: 'Conception de Systèmes',
      description: 'Architecture de bases de données et systèmes d\'information sur mesure pour votre entreprise.',
      features: ['Architecture BDD', 'Modélisation', 'Systèmes distribués', 'Performance'],
      color: 'purple'
    },
    {
      id: 'graphic-identity',
      icon: Palette,
      title: 'Identité Graphique',
      description: 'Création d\'identités visuelles marquantes et cohérentes pour votre marque.',
      features: ['Logo design', 'Charte graphique', 'Brand identity', 'Guidelines'],
      color: 'pink'
    },
    {
      id: 'visual-design',
      icon: FileImage,
      title: 'Design Visuel',
      description: 'Flyers, brochures et supports marketing professionnels pour votre communication.',
      features: ['Flyers', 'Brochures', 'Affiches', 'Supports print'],
      color: 'green'
    },
    {
      id: 'web-development',
      icon: Globe,
      title: 'Développement Web',
      description: 'Sites web modernes, responsifs et performants adaptés à vos besoins spécifiques.',
      features: ['Sites vitrine', 'E-commerce', 'Responsive design', 'SEO optimisé'],
      color: 'indigo'
    },
    {
      id: 'web-applications',
      icon: Code,
      title: 'Applications Web',
      description: 'Solutions web évolutives avec les technologies de pointe pour votre business.',
      features: ['React/Vue.js', 'Node.js', 'APIs REST', 'Cloud deployment'],
      color: 'orange'
    },
    {
      id: 'mobile-apps',
      icon: Smartphone,
      title: 'Applications Mobile',
      description: 'Applications natives et cross-platform pour iOS et Android avec UX optimisée.',
      features: ['React Native', 'Flutter', 'iOS/Android', 'App Store'],
      color: 'teal'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600 hover:shadow-blue-500/25',
      purple: 'from-purple-500 to-purple-600 hover:shadow-purple-500/25',
      pink: 'from-pink-500 to-pink-600 hover:shadow-pink-500/25',
      green: 'from-green-500 to-green-600 hover:shadow-green-500/25',
      indigo: 'from-indigo-500 to-indigo-600 hover:shadow-indigo-500/25',
      orange: 'from-orange-500 to-orange-600 hover:shadow-orange-500/25',
      teal: 'from-teal-500 to-teal-600 hover:shadow-teal-500/25'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

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
                Mes Services
              </span>
              <div className="w-16 h-px bg-blue-500"></div>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-extralight text-gray-900 leading-tight">
              Solutions digitales
              <br />
              <span className="text-blue-500">sur mesure</span>
            </h1>
            
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              De la consultation IT au développement d'applications, je vous accompagne 
              dans tous vos projets digitaux avec expertise et créativité.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 px-8 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white p-8 h-full transition-all duration-500 hover:shadow-xl border border-gray-100 hover:border-gray-200 rounded-lg">
                  <div className="space-y-6">
                    <div className="w-16 h-16 flex items-center justify-center bg-gray-50 rounded-full group-hover:bg-gray-100 transition-colors">
                      <service.icon className="h-8 w-8 text-gray-600 group-hover:text-blue-500 transition-colors" />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-light text-gray-900 mb-4 group-hover:text-blue-500 transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-600 font-light leading-relaxed mb-6">
                        {service.description}
                      </p>

                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-500">
                            <div className="w-1 h-1 bg-blue-500 rounded-full mr-3"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                      
                      <Link
                        to={`/services/${service.id}`}
                        className="group/btn inline-flex items-center text-blue-500 font-light tracking-wide uppercase text-sm hover:text-blue-600 transition-colors"
                      >
                        En savoir plus
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-5xl lg:text-6xl font-extralight text-gray-900 leading-tight">
              Un projet en tête ?
              <br />
              <span className="text-blue-500">Discutons-en</span>
            </h2>
            
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              Chaque projet est unique. Parlons de vos besoins spécifiques 
              et créons ensemble la solution parfaite.
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

              <Link
                to="/portfolio"
                className="group px-12 py-6 border-2 border-gray-200 text-gray-700 font-light tracking-wide uppercase text-sm hover:border-blue-500 hover:text-blue-500 transition-all duration-300"
              >
                Voir mes réalisations
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;