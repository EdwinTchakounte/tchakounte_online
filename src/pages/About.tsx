import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Users, Code, Trophy, GraduationCap } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'Meilleur Projet de Fin d\'Étude 2024',
      description: 'Élu meilleur projet à l\'IUT FV de Bandjoun',
      year: '2024'
    },
    {
      icon: Code,
      title: 'Développeur Python Certifié',
      description: 'Certification officielle en développement Python',
      year: '2024'
    },
    {
      icon: Users,
      title: 'Président Club Informatique',
      description: 'IUT FV Bandjoun - Leadership étudiant',
      year: '2024'
    },
    {
      icon: GraduationCap,
      title: 'Formation Spécialisée',
      description: 'Systèmes d\'Information et Technologies',
      year: '2022-2024'
    },
    {
      icon: Users,
      title: 'IT Freelance Multi-Entreprises',
      description: 'KSIES & 2MeTech - Consultant technique',
      year: '2024-2025'
    },
    {
      icon: Award,
      title: 'Audit Système Murcas Fasas',
      description: 'Filiale ENEO - Audit complet SI',
      year: '2024'
    }
  ];

  const skills = [
    { name: 'Python', level: 65 },
    { name: 'JavaScript/React', level: 50 },
    { name: 'Systèmes d\'Information', level: 60 },
    { name: 'UI/UX Design', level: 60 },
    { name: 'Consultation IT', level: 60 },
    { name: 'Formation', level: 80 }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-32 px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-center space-x-4 mb-6"
                >
                  <div className="w-16 h-px bg-blue-500"></div>
                  <span className="text-sm font-light tracking-widest text-gray-500 uppercase">
                    À propos de moi
                  </span>
                </motion.div>
                
                <motion.h1
                  className="text-5xl lg:text-6xl font-extralight text-gray-900 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Architecte digital
                  <br />
                  <span className="text-blue-500">passionné</span>
                </motion.h1>
              </div>

              <motion.div
                className="space-y-6 text-gray-600 font-light leading-relaxed text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <p>
                  Avec <strong className="text-gray-900">2 années d'expérience</strong> dans le conseil IT 
                  et les solutions digitales, je me spécialise dans la transformation d'exigences 
                  métier complexes en solutions élégantes et évolutives.
                </p>
                
                <p>
                  En tant que <strong className="text-blue-500">formateur professionnel</strong> chez 
                  BroadRange Consulting, je partage ma passion pour les technologies avec la nouvelle 
                  génération de développeurs. Mon expertise couvre le développement web, les applications 
                  mobiles et la stratégie digitale globale.
                </p>

                <p>
                  Élu <strong className="text-green-600">meilleur projet de fin d'étude 2024</strong> à 
                  l'IUTR FV de Bandjoun et certifié développeur Python, je continue d'innover et de 
                  repousser les limites technologiques...
                </p>
              </motion.div>
            </motion.div>

            {/* Photo et éléments visuels */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative w-full h-[500px]">
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden rounded-lg">

                   <img 
                  src="images/edwin.jpg" 
                  alt="About Image"
                  className="w-full h-full object-cover"
                />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-40 border-2 border-blue-500 flex items-center justify-center rounded-full">
                      <span className="text-4xl font-light text-blue-500">TT</span>
                    </div>
                  </div>
                  
                  {/* Overlay géométrique */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/20 rounded-tr-full"></div>
                </div>
                
                {/* Éléments décoratifs */}
                <motion.div
                  className="absolute -bottom-6 -right-6 w-40 h-px bg-blue-500"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
                <motion.div
                  className="absolute -top-6 -left-6 w-px h-40 bg-blue-500"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-32 px-8 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-extralight text-gray-900 leading-tight mb-6">
              Réalisations &
              <br />
              <span className="text-blue-500">certifications</span>
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Mon parcours professionnel et académique
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white p-8 h-full transition-all duration-500 hover:shadow-xl border border-gray-100 hover:border-blue-200 rounded-lg">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors">
                      <achievement.icon className="h-8 w-8 text-blue-500" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-light text-gray-900 group-hover:text-blue-500 transition-colors">
                          {achievement.title}
                        </h3>
                        <span className="text-sm text-gray-500 font-light">{achievement.year}</span>
                      </div>
                      
                      <p className="text-gray-600 font-light leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-extralight text-gray-900 leading-tight mb-6">
              Compétences &
              <br />
              <span className="text-blue-500">expertises</span>
            </h2>
          </motion.div>

          <div className="space-y-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-light text-gray-900">{skill.name}</h3>
                  <span className="text-sm text-gray-500 font-light">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;