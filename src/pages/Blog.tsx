import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight, Search, Tag, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Blog = () => {
  const { t, i18n } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const blogPosts = [
    {
      id: 1,
      title: t('blogPosts.1.title'),
      excerpt: t('blogPosts.1.excerpt'),
      content: t('blogPosts.1.content'),
      date: t('blogPosts.1.date'),
      readTime: t('blogPosts.1.readTime'),
      category: t('blogPosts.1.category'),
      author: t('blogPosts.1.author'),
      tags: t('blogPosts.1.tags', { returnObjects: true }) || [],
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      title: t('blogPosts.2.title'),
      excerpt: t('blogPosts.2.excerpt'),
      content: t('blogPosts.2.content'),
      date: t('blogPosts.2.date'),
      readTime: t('blogPosts.2.readTime'),
      category: t('blogPosts.2.category'),
      author: t('blogPosts.2.author'),
      tags: t('blogPosts.2.tags', { returnObjects: true }) || [],
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: t('blogPosts.3.title'),
      excerpt: t('blogPosts.3.excerpt'),
      content: t('blogPosts.3.content'),
      date: t('blogPosts.3.date'),
      readTime: t('blogPosts.3.readTime'),
      category: t('blogPosts.3.category'),
      author: t('blogPosts.3.author'),
      tags: t('blogPosts.3.tags', { returnObjects: true }) || [],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      title: t('blogPosts.4.title'),
      excerpt: t('blogPosts.4.excerpt'),
      content: t('blogPosts.4.content'),
      date: t('blogPosts.4.date'),
      readTime: t('blogPosts.4.readTime'),
      category: t('blogPosts.4.category'),
      author: t('blogPosts.4.author'),
      tags: t('blogPosts.4.tags', { returnObjects: true }) || [],
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 5,
      title: t('blogPosts.5.title'),
      excerpt: t('blogPosts.5.excerpt'),
      content: t('blogPosts.5.content'),
      date: t('blogPosts.5.date'),
      readTime: t('blogPosts.5.readTime'),
      category: t('blogPosts.5.category'),
      author: t('blogPosts.5.author'),
      tags: t('blogPosts.5.tags', { returnObjects: true }) || [],
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 6,
      title: t('blogPosts.6.title'),
      excerpt: t('blogPosts.6.excerpt'),
      content: t('blogPosts.6.content'),
      date: t('blogPosts.6.date'),
      readTime: t('blogPosts.6.readTime'),
      category: t('blogPosts.6.category'),
      author: t('blogPosts.6.author'),
      tags: t('blogPosts.6.tags', { returnObjects: true }) || [],
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 7,
      title: t('blogPosts.7.title'),
      excerpt: t('blogPosts.7.excerpt'),
      content: t('blogPosts.7.content'),
      date: t('blogPosts.7.date'),
      readTime: t('blogPosts.7.readTime'),
      category: t('blogPosts.7.category'),
      author: t('blogPosts.7.author'),
      tags: t('blogPosts.7.tags', { returnObjects: true }) || [],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 8,
      title: t('blogPosts.8.title'),
      excerpt: t('blogPosts.8.excerpt'),
      content: t('blogPosts.8.content'),
      date: t('blogPosts.8.date'),
      readTime: t('blogPosts.8.readTime'),
      category: t('blogPosts.8.category'),
      author: t('blogPosts.8.author'),
      tags: t('blogPosts.8.tags', { returnObjects: true }) || [],
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 9,
      title: t('blogPosts.9.title'),
      excerpt: t('blogPosts.9.excerpt'),
      content: t('blogPosts.9.content'),
      date: t('blogPosts.9.date'),
      readTime: t('blogPosts.9.readTime'),
      category: t('blogPosts.9.category'),
      author: t('blogPosts.9.author'),
      tags: t('blogPosts.9.tags', { returnObjects: true }) || [],
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const categories = [
    t('common.all', 'Tous'),
    t('blog.categories.architecture'),
    t('blog.categories.backend'),
    t('blog.categories.aiml'),
    t('blog.categories.frontend'),
    t('blog.categories.devops'),
    t('blog.categories.mobile'),
    t('blog.categories.dataScience'),
    t('blog.categories.security'),
    t('blog.categories.design')
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === t('common.all', 'Tous') || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-16 h-px bg-blue-500"></div>
              <span className="text-sm font-medium tracking-widest text-blue-600 uppercase flex items-center">
                <BookOpen className="h-4 w-4 mr-2" />
                Mon Blog
              </span>
              <div className="w-16 h-px bg-blue-500"></div>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-extralight text-gray-900 leading-tight mb-6">
              Insights <span className="text-blue-500">&</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expertise</span>
            </h1>
            
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed mb-8">
              Découvrez mes réflexions sur les technologies modernes, les meilleures pratiques 
              de développement et les tendances qui façonnent l'avenir du digital.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8">
              <div className="text-center">
                <div className="text-3xl font-light text-blue-600 mb-2">{filteredPosts.length}</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">Articles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-green-600 mb-2">{categories.length - 1}</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">Catégories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-purple-600 mb-2">2+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">Années</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recherche et Filtres */}
      <section className="py-20 px-8 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
            {/* Barre de recherche */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative flex-1 max-w-md"
            >
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-500" />
              <input
                type="text"
                placeholder={t('blog.searchPlaceholder', 'Rechercher un article...')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/90 backdrop-blur-sm border-2 border-gray-200 focus:border-blue-500 focus:outline-none font-light transition-all duration-300 rounded-xl shadow-sm focus:shadow-md"
              />
            </motion.div>

            {/* Filtres par catégorie */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-3"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 text-sm font-medium tracking-wide uppercase transition-all duration-300 rounded-full ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transform scale-105'
                      : 'bg-white/90 backdrop-blur-sm text-gray-600 hover:text-blue-500 hover:bg-blue-50 hover:shadow-md border border-gray-200 hover:border-blue-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Articles du Blog */}
      <section className="py-32 px-8 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          {filteredPosts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <h3 className="text-2xl font-light text-gray-900 mb-4">Aucun article trouvé</h3>
              <p className="text-gray-600 font-light">
                Essayez de modifier vos critères de recherche ou de filtrage.
              </p>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={`/blog/${post.id}`} className="block">
                    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 border border-gray-100 hover:border-blue-300 transform hover:-translate-y-2">
                      {/* Image */}
                      <div className="relative overflow-hidden aspect-[16/10] bg-gradient-to-br from-blue-50 to-purple-50">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 group-hover:brightness-110"
                        />
                        
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div className="absolute top-4 left-4 z-10">
                          <span className="px-4 py-2 bg-white/95 backdrop-blur-md text-blue-600 text-xs font-bold tracking-wider uppercase rounded-full shadow-lg border border-blue-100">
                            {post.category}
                          </span>
                        </div>
                        
                        {/* Reading time badge */}
                        <div className="absolute top-4 right-4 z-10">
                          <div className="flex items-center px-3 py-2 bg-black/70 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                            <Clock className="h-3 w-3 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                        
                        {/* Hover overlay with read more */}
                        <div className="absolute inset-0 bg-blue-600/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                          <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <div className="w-12 h-12 mx-auto mb-3 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                              <ArrowRight className="h-6 w-6" />
                            </div>
                            <span className="text-sm font-medium tracking-wide uppercase">Lire l'article</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Contenu */}
                      <div className="p-8 relative">
                        {/* Decorative element */}
                        <div className="absolute top-0 left-8 w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-y-1"></div>
                        
                        <div className="flex items-center text-sm text-gray-500 font-light mb-6 space-x-6">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-blue-500" />
                            {post.date}
                          </div>
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-2 text-green-500" />
                            {post.author}
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-medium text-gray-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight line-clamp-2">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-600 font-light leading-relaxed mb-6 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-8">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 text-xs font-medium rounded-full border border-blue-100 hover:from-blue-100 hover:to-purple-100 transition-colors"
                            >
                              #{tag}
                            </span>
                          ))}
                          {post.tags.length > 3 && (
                            <span className="px-3 py-1 bg-gray-100 text-gray-500 text-xs font-medium rounded-full">
                              +{post.tags.length - 3}
                            </span>
                          )}
                        </div>
                        
                        {/* Footer with read more */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs font-bold">ET</span>
                            </div>
                            <div>
                              <div className="text-sm font-medium text-gray-900">{post.author}</div>
                              <div className="text-xs text-gray-500">Développeur & Consultant</div>
                            </div>
                          </div>
                          
                          <div className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors">
                            <span className="mr-2">Lire plus</span>
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 px-8 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl font-extralight text-gray-900 leading-tight">
              {t('blog.newsletter.title', 'Restez informé')}
            </h2>
            
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              {t('blog.newsletter.description', 'Recevez mes derniers articles et insights directement dans votre boîte mail.')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto pt-8">
              <input
                type="email"
                placeholder={t('blog.newsletter.emailPlaceholder', 'Votre adresse email')}
                className="flex-1 px-6 py-4 border border-gray-200 focus:border-blue-500 focus:outline-none font-light"
              />
              <button className="px-8 py-4 bg-blue-500 text-white font-light tracking-wide uppercase text-sm hover:bg-blue-600 transition-colors">
                {t('blog.newsletter.subscribe', "S'abonner")}
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;