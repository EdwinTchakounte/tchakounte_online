import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Palette, Globe, Smartphone, Settings, BookOpen, Award } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Développement Frontend',
      icon: Code,
      color: 'blue',
      skills: [
        { name: 'React / Next.js', level: 95, experience: '2 ans' },
        { name: 'TypeScript', level: 90, experience: '2 ans' },
        { name: 'Vue.js / Nuxt.js', level: 85, experience: '1.5 ans' },
        { name: 'HTML5 / CSS3', level: 95, experience: '2+ ans' },
        { name: 'Tailwind CSS', level: 90, experience: '2 ans' },
        { name: 'Sass / SCSS', level: 85, experience: '2 ans' }
      ]
    },
    {
      title: 'Développement Backend',
      icon: Database,
      color: 'green',
      skills: [
        { name: 'Python / Django', level: 95, experience: '2+ ans' },
        { name: 'Node.js / Express', level: 88, experience: '2 ans' },
        { name: 'PHP / Laravel', level: 82, experience: '1.5 ans' },
        { name: 'PostgreSQL', level: 90, experience: '2 ans' },
        { name: 'MongoDB', level: 85, experience: '1.5 ans' },
        { name: 'Redis', level: 80, experience: '1 an' }
      ]
    },
    {
      title: 'Développement Mobile',
      icon: Smartphone,
      color: 'purple',
      skills: [
        { name: 'React Native', level: 88, experience: '1.5 ans' },
        { name: 'Flutter', level: 82, experience: '1 an' },
        { name: 'Expo', level: 85, experience: '1.5 ans' },
        { name: 'Firebase', level: 90, experience: '2 ans' },
        { name: 'App Store Deploy', level: 85, experience: '1 an' },
        { name: 'Push Notifications', level: 80, experience: '1 an' }
      ]
    },
    {
      title: 'Design & UI/UX',
      icon: Palette,
      color: 'pink',
      skills: [
        { name: 'Figma', level: 90, experience: '2 ans' },
        { name: 'Adobe Creative Suite', level: 85, experience: '2+ ans' },
        { name: 'Sketch', level: 80, experience: '1.5 ans' },
        { name: 'Prototyping', level: 88, experience: '2 ans' },
        { name: 'Design Systems', level: 85, experience: '1.5 ans' },
        { name: 'User Research', level: 75, experience: '1 an' }
      ]
    },
    {
      title: 'DevOps & Cloud',
      icon: Settings,
      color: 'orange',
      skills: [
        { name: 'Docker', level: 85, experience: '1.5 ans' },
        { name: 'AWS', level: 80, experience: '1 an' },
        { name: 'Vercel / Netlify', level: 90, experience: '2 ans' },
        { name: 'GitHub Actions', level: 82, experience: '1 an' },
        { name: 'Linux', level: 88, experience: '2+ ans' },
        { name: 'Nginx', level: 75, experience: '1 an' }
      ]
    },
    {
      title: 'Outils & Méthodologies',
      icon: Globe,
      color: 'teal',
      skills: [
        { name: 'Git / GitHub', level: 95, experience: '2+ ans' },
        { name: 'Agile / Scrum', level: 88, experience: '2 ans' },
        { name: 'Jest / Testing', level: 82, experience: '1.5 ans' },
        { name: 'Webpack / Vite', level: 85, experience: '2 ans' },
        { name: 'API REST', level: 92, experience: '2+ ans' },
        { name: 'GraphQL', level: 78, experience: '1 an' }
      ]
    }
  ];

  const certifications = [
    {
      title: 'Développeur Python Certifié',
      issuer: 'Python Institute',
      date: '2024',
      level: 'Professionnel',
      icon: '🐍'
    },
    {
      title: 'Meilleur Projet de Fin d\'Étude',
      issuer: 'IUTR FV Bandjoun',
      date: '2024',
      level: 'Excellence',
      icon: '🏆'
    },
    {
      title: 'Formateur Professionnel',
      issuer: 'BroadRange Consulting',
      date: '2023-2024',
      level: 'Certifié',
      icon: '👨‍🏫'
    },
    {
      title: 'React Developer',
      issuer: 'Meta (Facebook)',
      date: '2023',
      level: 'Avancé',
      icon: '⚛️'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      purple: 'from-purple-500 to-purple-600',
      pink: 'from-pink-500 to-pink-600',
      orange: 'from-orange-500 to-orange-600',
      teal: 'from-teal-500 to-teal-600'
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
                Mes Compétences
              </span>
              <div className="w-16 h-px bg-blue-500"></div>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-extralight text-gray-900 leading-tight">
              Expertise &
              <br />
              <span className="text-blue-500">Savoir-faire</span>
            </h1>
            
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Découvrez l'étendue de mes compétences techniques et créatives, 
              forgées par 2 années d'expérience et une passion constante pour l'innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Compétences par catégorie */}
      <section className="py-32 px-8 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="space-y-20">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                className="bg-white rounded-lg p-8 shadow-sm border border-gray-100"
              >
                <div className="flex items-center mb-8">
                  <div className={`w-16 h-16 flex items-center justify-center bg-gradient-to-r ${getColorClasses(category.color)} rounded-full mr-6`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-light text-gray-900">{category.title}</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                      className="space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-light text-gray-900">{skill.name}</h3>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500 font-light">{skill.level}%</span>
                          <span className="text-xs text-gray-400">({skill.experience})</span>
                        </div>
                      </div>
                      
                      <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${getColorClasses(category.color)} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-32 px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-extralight text-gray-900 leading-tight mb-6">
              Certifications &
              <br />
              <span className="text-blue-500">Reconnaissances</span>
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Validation officielle de mon expertise technique
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all duration-300 hover:bg-white border border-gray-100 hover:border-blue-200 text-center h-full">
                  <div className="text-4xl mb-4">{cert.icon}</div>
                  
                  <h3 className="text-lg font-light text-gray-900 mb-3 group-hover:text-blue-500 transition-colors">
                    {cert.title}
                  </h3>
                  
                  <p className="text-gray-600 font-light mb-2">{cert.issuer}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{cert.date}</span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-medium tracking-wide uppercase rounded-full">
                      {cert.level}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formation continue */}
      <section className="py-32 px-8 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-center justify-center mb-8">
              <BookOpen className="h-12 w-12 text-blue-500 mr-4" />
              <Award className="h-12 w-12 text-green-500" />
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-extralight text-gray-900 leading-tight">
              Formation
              <br />
              <span className="text-blue-500">continue</span>
            </h2>
            
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              En tant que formateur professionnel chez BroadRange Consulting, 
              je reste constamment à jour avec les dernières technologies et tendances du marché.
            </p>

            <div className="grid md:grid-cols-3 gap-8 pt-12">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="text-3xl font-light text-blue-500 mb-2">50+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Heures de formation/mois</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="text-3xl font-light text-green-500 mb-2">15+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Étudiants formés</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="text-3xl font-light text-purple-500 mb-2">8+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Technologies enseignées</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Skills;