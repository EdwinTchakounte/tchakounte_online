import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Settings, 
  Database, 
  Palette, 
  FileImage, 
  Globe, 
  Code, 
  Smartphone 
} from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Settings,
      title: 'Consultation IT',
      description: 'Conseil stratégique pour optimiser votre infrastructure digitale.'
    },
    {
      icon: Database,
      title: 'Conception de Systèmes',
      description: 'Architecture de bases de données et systèmes sur mesure.'
    },
    {
      icon: Palette,
      title: 'Identité Graphique',
      description: 'Création d\'identités visuelles marquantes et cohérentes.'
    },
    {
      icon: FileImage,
      title: 'Design Visuel',
      description: 'Flyers, brochures et supports marketing professionnels.'
    },
    {
      icon: Globe,
      title: 'Développement Web',
      description: 'Sites web modernes, responsifs et performants.'
    },
    {
      icon: Code,
      title: 'Applications Web',
      description: 'Solutions web évolutives avec technologies de pointe.'
    },
    {
      icon: Smartphone,
      title: 'Applications Mobile',
      description: 'Apps natives et cross-platform pour iOS et Android.'
    }
  ];

  return (
    <section id="services" ref={ref} className="py-32 px-8 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-20"
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
            Services
          </motion.div>
          
          <motion.h2
            className="text-4xl lg:text-5xl font-extralight text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Solutions digitales
            <br />
            <span className="text-blue-500">sur mesure</span>
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white p-8 h-full transition-all duration-500 hover:shadow-lg border border-gray-100 hover:border-blue-200">
                <div className="space-y-6">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-light text-gray-900 mb-3 group-hover:text-blue-500 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 font-light leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>
                  
                  <motion.div
                    className="w-8 h-px bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;