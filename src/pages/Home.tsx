import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, MessageCircle, Award, Users, Code, Briefcase, Star, TrendingUp, BookOpen, Zap, Target, Globe, Settings, Database, Palette, FileImage, Smartphone, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ImageSlider from '../components/ImageSlider';

const Home = () => {
  const { t } = useTranslation();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openService, setOpenService] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const stats = [
    { icon: Award, label: t('stats.experience'), value: '2+' },
    { icon: Briefcase, label: t('stats.projects'), value: '10+' },
    { icon: Users, label: t('stats.clients'), value: '15+' },
    { icon: Code, label: t('stats.technologies'), value: '8+' }
  ];

  const services = [
    {
      icon: Settings,
      title: t('services.itConsultation.title'),
      description: t('services.itConsultation.description'),
      details: t('services.itConsultation.details'),
      color: 'blue'
    },
    {
      icon: Database,
      title: t('services.systemDesign.title'),
      description: t('services.systemDesign.description'),
      details: t('services.systemDesign.details'),
      color: 'purple'
    },
    {
      icon: Palette,
      title: t('services.graphicIdentity.title'),
      description: t('services.graphicIdentity.description'),
      details: t('services.graphicIdentity.details'),
      color: 'pink'
    },
    {
      icon: FileImage,
      title: t('services.visualDesign.title'),
      description: t('services.visualDesign.description'),
      details: t('services.visualDesign.details'),
      color: 'green'
    },
    {
      icon: Globe,
      title: t('services.webDevelopment.title'),
      description: t('services.webDevelopment.description'),
      details: t('services.webDevelopment.details'),
      color: 'indigo'
    },
    {
      icon: Code,
      title: t('services.webApplications.title'),
      description: t('services.webApplications.description'),
      details: t('services.webApplications.details'),
      color: 'orange'
    },
    {
      icon: Smartphone,
      title: t('services.mobileApps.title'),
      description: t('services.mobileApps.description'),
      details: t('services.mobileApps.details'),
      color: 'teal'
    }
  ];

  const galleryItems = [
    {
      id: 1,
      title: 'Flyers destiné à promouvoir la solution EnMKit',
      category: 'Branding',
      image: 'visuels/image1.jpeg'
    },
    {
      id: 2,
      title: 'Flyers ',
      category: 'Branding',
      image:'visuels/image2.jpg'
    },
    {
      id: 3,
      title: 'Flyers',
      category: 'Branding',
      image: 'visuels/image3.jpg'
    },
    {
      id: 4,
      title: 'Flyers',
      category: 'Branding',
      image: 'visuels/image4.jpg'
    },
    {
      id: 5,
      title: 'Flyers destiné à L\'IUT',
      category: 'Branding',
      image: 'visuels/image6.jpg'
    },
    {
      id: 6,
      title: 'Rollup Professionnel',
      category: 'Branding',
      image: 'visuels/image5.jpeg'
    }
  ];

  const testimonials = [
    {
      name: 'Christian BAONGLA',
      role: 'CEO',
      company: 'KSIES_Scholarships',
      content: 'Edwin a transformé notre vision en une solution technique exceptionnelle. Son expertise et son professionnalisme ont dépassé nos attentes. La plateforme qu\'il a développée a augmenté nos conversions de 150%.',
      rating: 5,
      avatar: ''
    },
    {
      name: 'Alex Toyu',
      role: 'Directeur d\'hôtel',
      company: 'Echangeur Hotel Bandjoun',
      content: 'Un développeur d\'exception qui allie compétences techniques et créativité. Notre application de gestion a été livrée dans les délais avec une qualité remarquable. Interface intuitive et performances excellentes.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Dr TJAHE Virginie',
      role: 'CEO',
      company: '2MeTech',
      content: 'Collaboration fluide et résultats remarquables. Edwin comprend parfaitement les enjeux business et propose des solutions techniques adaptées. Je recommande vivement ses services pour tout projet digital ambitieux.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'YAMKI',
      role: 'Responsable Cellule Informatique',
      company: 'IUT de Bandjoun',
      content: 'Avec la conception des flyers qualité il a réussi à capter l\'attention de nos étudiants et à promouvoir efficacement nos formations. Un travail remarquable qui a boosté nos inscriptions.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/612608/pexels-photo-612608.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Architecture Microservices avec Python et Docker',
      excerpt: 'Guide complet pour construire une architecture microservices scalable avec Python, FastAPI et Docker.',
      date: '21 Août 2025 - 09:15',
      readTime: '12 min',
      category: 'Architecture'
    },
    {
      id: 2,
      title: 'Développement d\'API REST avec FastAPI',
      excerpt: 'Créer des APIs performantes et sécurisées avec FastAPI, authentification JWT et PostgreSQL.',
      date: '21 Août 2025 - 14:30',
      readTime: '15 min',
      category: 'Backend'
    },
    {
      id: 3,
      title: 'Machine Learning avec Python',
      excerpt: 'Implémentation complète d\'un modèle de classification d\'images avec TensorFlow et Keras.',
      date: '21 Août 2025 - 16:45',
      readTime: '18 min',
      category: 'IA/ML'
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const toggleService = (index: number) => {
    setOpenService(openService === index ? null : index);
  };

  // Images pour le slider professionnel
  const profileImages = [
    'images/image3.jpeg',
    'images/image7.jpeg',
    'images/image3.jpeg',
    'images/image4.jpeg',
    'images/image7.jpeg'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-8">
        {/* Slider d'images pour mobile */}
        <div className="absolute inset-0 lg:hidden">
          <ImageSlider 
            images={profileImages}
            autoSlide={true}
            slideInterval={4000}
          />
          {/* Overlay sombre pour lisibilité du texte */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Contenu principal */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-10 relative z-10"
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-16 h-px bg-blue-500"></div>
                  <span className="text-sm font-light tracking-widest text-gray-500 lg:text-gray-500 text-white uppercase">
                    {t('hero.subtitle')}
                  </span>
                </motion.div>
                
                <motion.h1
                  className="text-3xl xs:text-5xl sm:text-6xl lg:text-5xl font-bold leading-none text-white lg:text-gray-900"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  {t('hero.name').split(' ').map((name, index) => (
                    <React.Fragment key={index}>
                      {index === 2 ? (
                        <span className="text-blue-500 font-light">{name}</span>
                      ) : (
                        <span className="text-white drop-shadow-lg lg:text-gray-900 lg:drop-shadow-none">{name}</span>
                      )}
                      {index < 2 && <br />}
                    </React.Fragment>
                  ))}
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-wrap gap-3"
                >
                  <div className="px-4 py-2 bg-blue-50 text-blue-600 text-xs font-medium tracking-wide uppercase rounded-full">
                    {t('hero.bestProject')}
                  </div>
                  <div className="px-4 py-2 bg-green-50 text-green-600 text-xs font-medium tracking-wide uppercase rounded-full">
                    {t('hero.pythonCertified')}
                  </div>
                  <div className="px-4 py-2 bg-purple-50 text-purple-600 text-xs font-medium tracking-wide uppercase rounded-full">
                    {t('hero.professionalTrainer')}
                  </div>
                </motion.div>
              </div>

              <motion.p
                className="text-lg sm:text-xl lg:text-2xl text-white drop-shadow-lg lg:text-gray-600 lg:drop-shadow-none font-light leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {t('hero.description')}
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 sm:gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <button
                  onClick={() => handleNavigation('/contact')}
                  className="group px-8 sm:px-10 py-4 sm:py-5 bg-blue-500 text-white font-light tracking-wide uppercase text-sm transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/25 text-center"
                >
                  <span className="flex items-center justify-center">
                    {t('hero.collaborate')}
                    <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>

                <a
                  href="https://wa.me/237673398046"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 sm:px-10 py-4 sm:py-5 border-2 border-white lg:border-gray-200 text-white lg:text-gray-700 font-light tracking-wide uppercase text-sm hover:border-green-500 hover:text-green-600 transition-all duration-300 text-center"
                >
                  <span className="flex items-center justify-center">
                    <MessageCircle className="mr-3 h-4 w-4" />
                    {t('hero.whatsapp')}
                  </span>
                </a>
              </motion.div>
            </motion.div>

            {/* Photo professionnelle */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full h-[500px]">
                {/* Slider d'images professionnelles */}
                <ImageSlider 
                  images={profileImages}
                  autoSlide={true}
                  slideInterval={5000}
                />

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

      {/* Stats Section */}
      <section className="py-32 px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-gray-900 leading-tight mb-6">
              {t('stats.title').split(' ')[0]} <span className="text-blue-500">{t('stats.title').split(' ')[1]}</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 font-light">
              {t('stats.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 flex items-center justify-center bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors">
                    <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500" />
                  </div>
                  <div className="text-2xl sm:text-4xl font-light text-gray-900 mb-2 sm:mb-3">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wide font-light">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section avec effet livre */}
      <section className="py-32 px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-extralight text-gray-900 leading-tight mb-6">
              {t('services.title').split(' ')[0]} <span className="text-blue-500">{t('services.title').split(' ')[1]}</span>
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </motion.div>

          {/* Services sur desktop */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gray-50 p-8 h-full transition-all duration-500 hover:shadow-lg hover:bg-white border border-gray-100 hover:border-blue-200 rounded-lg">
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

          {/* Services sur mobile avec effet livre */}
          <div className="md:hidden space-y-4 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleService(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-blue-50 rounded-full">
                      <service.icon className="h-5 w-5 text-blue-500" />
                    </div>
                    <h3 className="text-lg font-light text-gray-900">{service.title}</h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openService === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight className="h-5 w-5 text-gray-400" />
                  </motion.div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openService === index ? 'auto' : 0,
                    opacity: openService === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 border-t border-gray-100">
                    <p className="text-gray-600 font-light leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <p className="text-sm text-gray-500 font-light">
                      {service.details}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <button
              onClick={() => handleNavigation('/services')}
              className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-500 font-light tracking-wide uppercase text-sm hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              {t('services.seeAll')}
              <ArrowRight className="ml-3 h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-32 px-8 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-extralight text-gray-900 leading-tight mb-6">
              {t('gallery.title').split(' ')[0]} <span className="text-blue-500">{t('gallery.title').split(' ')[1]}</span>
            </h2>
            <p className="text-xl text-gray-600 font-light">
              {t('gallery.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden bg-gray-100 aspect-square rounded-lg">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white">
                      <Eye className="h-8 w-8 mx-auto mb-2" />
                      <div className="text-sm font-light tracking-wide uppercase">{item.category}</div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6">
                  <h3 className="text-lg font-light text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 font-light">{item.category}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <button
              onClick={() => handleNavigation('/gallery')}
              className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-light tracking-wide uppercase text-sm hover:border-blue-500 hover:text-blue-500 transition-all duration-300"
            >
              {t('gallery.seeAll')}
              <ArrowRight className="ml-3 h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Témoignages Slider */}
      <section className="py-32 px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-extralight text-gray-900 leading-tight mb-6">
              {t('testimonials.title').split('mes clients')[0]} <span className="text-blue-500">{t('testimonials.title').split('mes clients')[1] || 'mes clients'}</span>
            </h2>
            <p className="text-xl text-gray-600 font-light">
              {t('testimonials.subtitle')}
            </p>
          </motion.div>

          <div className="relative">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 p-8 rounded-lg text-center"
            >
              <div className="flex items-center justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-lg font-light text-gray-600 leading-relaxed mb-6 italic">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-medium text-sm">
                    {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="text-left">
                  <div className="font-medium text-gray-900">{testimonials[currentTestimonial].name}</div>
                  <div className="text-gray-500 text-sm">{testimonials[currentTestimonial].role}</div>
                  <div className="text-sm text-gray-400">{testimonials[currentTestimonial].company}</div>
                </div>
              </div>
            </motion.div>

            {/* Navigation du slider */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>

            {/* Indicateurs */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-16"
          >
            <button
              onClick={() => handleNavigation('/testimonials')}
              className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-light tracking-wide uppercase text-sm hover:border-blue-500 hover:text-blue-500 transition-all duration-300"
            >
              {t('testimonials.seeAll')}
              <ArrowRight className="ml-3 h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Blog Aperçu */}
      <section className="py-32 px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-extralight text-gray-900 leading-tight mb-6">
              Blogs
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Ici, nous explorons les tendances du monde digital, de l’intelligence artificielle au développement logiciel, en passant par les startups, le mobile, le cloud et la cybersécurité. Notre objectif : décrypter l’actualité tech, partager des analyses claires et fournir des guides pratiques pour passionnés, étudiants et professionnels du secteur.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <Link to={`/blog/${post.id}`} className="block">
                  <div className="bg-white p-8 rounded-lg hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200 h-full">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium tracking-wide uppercase rounded-full">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500 font-light">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-light text-gray-900 mb-4 group-hover:text-blue-500 transition-colors leading-tight">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 font-light leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 font-light">{post.date}</span>
                      <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <button
              onClick={() => handleNavigation('/blog')}
              className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-light tracking-wide uppercase text-sm hover:border-blue-500 hover:text-blue-500 transition-all duration-300"
            >
              <BookOpen className="mr-3 h-4 w-4" />
              {t('blog.seeAll')}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Section Partenaires */}
      <section className="py-32 px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-extralight text-gray-900 leading-tight mb-6">
              {t('partners.title', 'Nos Entreprises')}
              <br />
              <span className="text-blue-500">{t('partners.subtitle', 'Collaboratives & Partenaires')}</span>
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              {t('partners.description', 'Découvrez les entreprises qui nous font confiance et avec lesquelles nous collaborons pour créer des solutions digitales innovantes.')}
            </p>
          </motion.div>

          {/* Slider des partenaires */}
          <PartnersSlider />

          {/* Types de collaboration */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-blue-50 rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-4">
                {t('partners.collaboration.title', 'Collaboration')}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                {t('partners.collaboration.description', 'Partenariats stratégiques pour des projets d\'envergure et des solutions innovantes.')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-green-50 rounded-full flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-4">
                {t('partners.formation.title', 'Formation')}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                {t('partners.formation.description', 'Programmes de formation et transfert de compétences avec les institutions partenaires.')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-purple-50 rounded-full flex items-center justify-center">
                <Target className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-4">
                {t('partners.consulting.title', 'Conseil')}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                {t('partners.consulting.description', 'Expertise technique et conseil stratégique pour optimiser les processus digitaux.')}
              </p>
            </motion.div>
          </div>

          {/* CTA Partenariat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center bg-gradient-to-r from-blue-50 to-purple-50 p-12 rounded-lg border border-blue-100"
          >
            <h3 className="text-3xl font-light text-gray-900 mb-4">
              {t('partners.cta.title', 'Intéressé par un partenariat ?')}
            </h3>
            <p className="text-lg text-gray-600 font-light mb-8 max-w-2xl mx-auto">
              {t('partners.cta.description', 'Rejoignez notre réseau de partenaires et créons ensemble des solutions digitales innovantes.')}
            </p>
            <button
              onClick={() => handleNavigation('/contact')}
              className="inline-flex items-center px-8 py-4 bg-blue-500 text-white font-light tracking-wide uppercase text-sm hover:bg-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
            >
              {t('partners.cta.button', 'Devenir Partenaire')}
              <ArrowRight className="ml-3 h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 px-8 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-center justify-center mb-8">
              <Zap className="h-12 w-12 text-blue-500 mr-4" />
              <TrendingUp className="h-12 w-12 text-green-500" />
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-gray-900 leading-tight">
              {t('cta.title').split('projet digital')[0]}
              <br />
              <span className="text-blue-500">{t('cta.title').split('projet digital')[1] || 'projet digital'}</span> ?
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 font-light max-w-2xl mx-auto">
              {t('cta.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <button
                onClick={() => handleNavigation('/contact')}
                className="group px-10 sm:px-12 py-5 sm:py-6 bg-blue-500 text-white font-light tracking-wide uppercase text-sm transition-all duration-300 hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-500/25 text-center"
              >
                <span className="flex items-center justify-center">
                  {t('cta.startNow')}
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button
                onClick={() => handleNavigation('/portfolio')}
                className="group px-10 sm:px-12 py-5 sm:py-6 border-2 border-gray-200 text-gray-700 font-light tracking-wide uppercase text-sm hover:border-blue-500 hover:text-blue-500 transition-all duration-300 text-center"
              >
                {t('cta.viewProjects')}
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Composant Slider Partenaires
const PartnersSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const partners = [
    {
      name: 'BroadRange Consulting',
      logo: 'logos/cfp.jpg',
      description: 'Centre de formation professionnelle agée spécialisé dans metiers du renouveau',
      role: 'Partenaire Formation',
      website: 'https://www.cfp-brcgroup.com/',
      color: 'blue'
    },
    {
      name: 'KSIES',
      logo: 'logos/ksies.jpg',
      description: 'Entreprise camerounaise pour l\'obtention des bourses d\'études pour la Chine',
      role: 'Partenaire Technique',
      website: '#',
      color: 'green'
    },
    {
      name: '2MeTech',
      logo: 'logos/metech.jpg',
      description: 'Entrprise Camerounaise oeuvrant dans le secteur de l\'energie ',
      role: 'Partenaire Développement',
      website: 'https://www.2metechsarl.org/',
      color: 'purple'
    },
    {
      name: 'IUT FV Bandjoun',
      logo: 'logos/iut.png',
      description: 'Institut universitaire de technologie Fotso Victor de Bandjoun',
      role: 'Collaboration',
      website: 'https://www.univ-dschang.org/iutfv/',
      color: 'indigo'
    },
    {
      name: 'Murcas Fasas',
      logo: 'logos/murcas.png',
      description: 'Filiale ENEO - Mutuelle des Agents du Secteur de l\'Energie',
      role: 'Collaboration',
      website: '#',
      color: 'orange'
    },

  ];

  const slidesPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 1
  };

  const totalSlides = partners.length;

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      purple: 'from-purple-500 to-purple-600',
      indigo: 'from-indigo-500 to-indigo-600',
      orange: 'from-orange-500 to-orange-600',
      teal: 'from-teal-500 to-teal-600',
      pink: 'from-pink-500 to-pink-600',
      red: 'from-red-500 to-red-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="relative mb-16">
      {/* Slider Container */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-blue-50/30 p-8">
        <motion.div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`
          }}
        >
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="w-full flex-shrink-0 flex justify-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="group max-w-md w-full"
              >
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-blue-200/50 h-full flex flex-col relative overflow-hidden">
                  {/* Gradient Background */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${getColorClasses(partner.color)} opacity-5 rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-700`} />
                  
                  {/* Logo */}
                  <div className="relative z-10 w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Badge Role */}
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4 mx-auto bg-gradient-to-r ${getColorClasses(partner.color)} text-white shadow-sm`}>
                    {partner.role}
                  </div>
                  
                  {/* Content */}
                  <div className="text-center flex-1 flex flex-col">
                    <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {partner.name}
                    </h3>
                    
                    <p className="text-gray-600 font-light leading-relaxed text-sm flex-1 mb-6">
                      {partner.description}
                    </p>
                    
                    {/* Action Button */}
                    <motion.button
                      className={`inline-flex items-center justify-center px-6 py-2 bg-gradient-to-r ${getColorClasses(partner.color)} text-white text-sm font-medium rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:shadow-lg transform translate-y-2 group-hover:translate-y-0`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      En savoir plus
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
                    </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-300 z-10 group"
      >
        <ChevronLeft className="h-6 w-6 text-gray-600 group-hover:text-blue-500 transition-colors" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-300 z-10 group"
      >
        <ChevronRight className="h-6 w-6 text-gray-600 group-hover:text-blue-500 transition-colors" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-3 mt-8">
        {partners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-blue-500 scale-125 shadow-lg'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 h-1 rounded-full mt-4 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Auto-play Indicator */}
      <div className="flex items-center justify-center mt-4 space-x-2">
        <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-500' : 'bg-gray-400'} transition-colors`} />
        <span className="text-xs text-gray-500 font-light">
          {isAutoPlaying ? 'Défilement automatique' : 'Pause'}
        </span>
      </div>
    </div>
  );
};

export default Home;