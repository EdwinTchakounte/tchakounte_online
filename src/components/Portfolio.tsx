import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: 'Plateforme E-commerce',
      category: 'Développement Web',
      description: 'Solution complète avec paiement intégré et gestion avancée.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB'],
      year: '2024'
    },
    {
      title: 'App Bancaire Mobile',
      category: 'Développement Mobile',
      description: 'Application sécurisée avec authentification biométrique.',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Firebase'],
      year: '2024'
    },
    {
      title: 'Système de Gestion',
      category: 'Système d\'Information',
      description: 'Plateforme complète pour la gestion hospitalière.',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'Laravel', 'MySQL'],
      year: '2023'
    }
  ];

  return (
    <section id="portfolio" ref={ref} className="py-32 px-8 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm font-light tracking-widest text-gray-500 uppercase mb-6"
          >
            Projets sélectionnés
          </motion.div>
          
          <motion.h2
            className="text-4xl lg:text-5xl font-extralight text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Réalisations
            <br />
            <span className="text-blue-500">remarquables</span>
          </motion.h2>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Image */}
                <div className={`relative overflow-hidden ${
                  index % 2 === 1 ? 'lg:col-start-2' : ''
                }`}>
                  <div className="aspect-[4/3] bg-gray-200 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  
                  {/* Overlay avec année */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2">
                    <span className="text-sm font-light text-gray-900">{project.year}</span>
                  </div>
                </div>

                {/* Contenu */}
                <div className={`space-y-6 ${
                  index % 2 === 1 ? 'lg:col-start-1' : ''
                }`}>
                  <div>
                    <div className="text-sm font-light tracking-widest text-gray-500 uppercase mb-3">
                      {project.category}
                    </div>
                    <h3 className="text-3xl font-light text-gray-900 mb-4 group-hover:text-blue-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 font-light leading-relaxed text-lg">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-light text-gray-600 border border-gray-200 tracking-wide uppercase"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <motion.button
                    className="group/btn flex items-center text-blue-500 font-light tracking-wide uppercase text-sm hover:text-blue-600 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    Voir le projet
                    <ArrowUpRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;