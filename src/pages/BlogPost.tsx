import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen, Tag, Twitter, Linkedin, MessageCircle, Copy, Check } from 'lucide-react';

// Simulation des données d'article
const blogPosts = {
  '1': {
    title: 'Architecture Microservices avec Python et Docker',
    content: `
      <h2>Introduction</h2>
      <p>Dans le monde du développement moderne, l'architecture microservices est devenue incontournable pour créer des applications scalables et maintenables. Ce guide vous accompagne dans la création d'une architecture complète avec Python et Docker.</p>
      
      <h2>1. Conception de l'Architecture</h2>
      <p>Une architecture microservices bien conçue commence par la décomposition fonctionnelle. Chaque service doit avoir une responsabilité unique et bien définie. Nous utiliserons FastAPI pour créer des services légers et performants.</p>
      
      <h2>2. Containerisation avec Docker</h2>
      <p>Docker permet d'encapsuler chaque microservice dans un conteneur isolé. Cela garantit la cohérence entre les environnements de développement, test et production. Nous créerons des Dockerfiles optimisés pour Python.</p>
      
      <h2>3. Communication Inter-Services</h2>
      <p>Les microservices communiquent via des APIs REST ou des messages asynchrones. Nous implémenterons des patterns comme Circuit Breaker et Retry pour assurer la résilience du système.</p>
      
      <h2>4. Monitoring et Observabilité</h2>
      <p>Un système distribué nécessite une observabilité complète. Nous intégrerons des outils de logging, métriques et tracing pour surveiller la santé de nos services.</p>
      
      <h2>Conclusion</h2>
      <p>L'architecture microservices avec Python et Docker offre une base solide pour des applications modernes. Cette approche favorise la scalabilité, la maintenabilité et l'agilité de développement.</p>
    `,
    date: '21 Août 2025 - 09:15',
    readTime: '12 min',
    category: 'Architecture',
    author: 'Edwin Tchamba',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Python', 'FastAPI', 'Docker', 'Microservices', 'Architecture']
  },
  '2': {
    title: 'Développement d\'API REST avec FastAPI et PostgreSQL',
    content: `
      <h2>Introduction à FastAPI</h2>
      <p>FastAPI révolutionne le développement d'APIs en Python avec sa syntaxe moderne, sa validation automatique et sa documentation interactive. Ce framework combine performance et simplicité d'utilisation.</p>
      
      <h2>1. Configuration de l'Environnement</h2>
      <p>Nous commençons par configurer un environnement virtuel Python et installer FastAPI, Uvicorn, SQLAlchemy et Pydantic. Cette stack offre tout le nécessaire pour créer des APIs robustes.</p>
      
      <h2>2. Modélisation des Données</h2>
      <p>SQLAlchemy nous permet de définir nos modèles de données avec une approche ORM. Nous créerons des relations complexes et optimiserons les requêtes pour PostgreSQL.</p>
      
      <h2>3. Authentification JWT</h2>
      <p>L'authentification JWT sécurise nos endpoints. Nous implémenterons un système complet avec refresh tokens, gestion des rôles et middleware de sécurité.</p>
      
      <h2>4. Validation et Sérialisation</h2>
      <p>Pydantic assure la validation automatique des données d'entrée et de sortie. Cette approche garantit la cohérence et la sécurité de notre API.</p>
      
      <h2>Tests et Documentation</h2>
      <p>FastAPI génère automatiquement une documentation interactive. Nous ajouterons des tests unitaires et d'intégration pour assurer la qualité du code.</p>
    `,
    date: '21 Août 2025 - 14:30',
    readTime: '15 min',
    category: 'Backend',
    author: 'Edwin Tchamba',
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['FastAPI', 'PostgreSQL', 'JWT', 'Pydantic', 'API']
  },
  '3': {
    title: 'Machine Learning avec Python : Classification d\'Images',
    content: `
      <h2>Introduction au Deep Learning</h2>
      <p>L'intelligence artificielle transforme notre façon de traiter les données visuelles. Ce guide pratique vous accompagne dans la création d'un modèle de classification d'images avec TensorFlow et Keras.</p>
      
      <h2>1. Préparation des Données</h2>
      <p>La qualité des données détermine la performance du modèle. Nous explorerons les techniques de préprocessing, normalisation et augmentation de données pour optimiser l'entraînement.</p>
      
      <h2>2. Architecture CNN</h2>
      <p>Les réseaux de neurones convolutionnels (CNN) excellent dans la reconnaissance d'images. Nous construirons une architecture optimisée avec des couches de convolution, pooling et dropout.</p>
      
      <h2>3. Entraînement et Optimisation</h2>
      <p>L'entraînement nécessite une stratégie d'optimisation. Nous utiliserons des techniques comme l'early stopping, la réduction du learning rate et la validation croisée.</p>
      
      <h2>4. Évaluation et Déploiement</h2>
      <p>L'évaluation du modèle utilise des métriques comme l'accuracy, la précision et le recall. Nous déploierons le modèle avec FastAPI pour créer une API de prédiction.</p>
      
      <h2>Conclusion</h2>
      <p>La classification d'images avec Python ouvre de nombreuses possibilités. Cette approche peut être adaptée à divers domaines : médical, automobile, sécurité, etc.</p>
    `,
    date: '21 Août 2025 - 16:45',
    readTime: '18 min',
    category: 'IA/ML',
    author: 'Edwin Tchamba',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['TensorFlow', 'Keras', 'CNN', 'Computer Vision', 'Deep Learning']
  }
};

const BlogPost = () => {
  const { postId } = useParams();
  const { t } = useTranslation();
  const [copied, setCopied] = React.useState(false);

  const currentUrl = window.location.href;
  const post = blogPosts[postId as keyof typeof blogPosts];

  const shareOnTwitter = () => {
    const text = `Découvrez cet article intéressant: ${post?.title}`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(currentUrl)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  const shareOnLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  const shareOnWhatsApp = () => {
    const text = `Découvrez cet article: ${post?.title} - ${currentUrl}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Erreur lors de la copie:', err);
    }
  };

  if (!post) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light text-gray-900 mb-4">Article non trouvé</h1>
          <Link to="/blog" className="text-blue-500 hover:text-blue-600">
            Retour au blog
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
              to="/blog"
              className="inline-flex items-center text-gray-500 hover:text-blue-500 transition-colors font-light"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('blog.backToBlog', 'Retour au blog')}
            </Link>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <span className="px-4 py-2 bg-blue-50 text-blue-600 text-sm font-medium tracking-wide uppercase rounded-full">
                  {post.category}
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-extralight text-gray-900 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-gray-500 font-light">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {post.readTime}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4 pt-4">
              <button 
                onClick={copyToClipboard}
                className="flex items-center px-4 py-2 border border-gray-200 text-gray-600 hover:border-blue-500 hover:text-blue-500 transition-colors font-light"
              >
                {copied ? <Check className="h-4 w-4 mr-2" /> : <Share2 className="h-4 w-4 mr-2" />}
                {copied ? 'Copié!' : 'Partager'}
              </button>
              <button 
                onClick={copyToClipboard}
                className="flex items-center px-4 py-2 border border-gray-200 text-gray-600 hover:border-blue-500 hover:text-blue-500 transition-colors font-light"
              >
                {copied ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
                {copied ? 'Lien copié' : 'Copier le lien'}
              </button>
              <button className="flex items-center px-4 py-2 border border-gray-200 text-gray-600 hover:border-blue-500 hover:text-blue-500 transition-colors font-light">
                <BookOpen className="h-4 w-4 mr-2" />
                Sauvegarder
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Boutons de partage flottants */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col space-y-3">
        <motion.button
          onClick={shareOnTwitter}
          className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Partager sur Twitter"
        >
          <Twitter className="h-5 w-5" />
        </motion.button>
        
        <motion.button
          onClick={shareOnLinkedIn}
          className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Partager sur LinkedIn"
        >
          <Linkedin className="h-5 w-5" />
        </motion.button>
        
        <motion.button
          onClick={shareOnWhatsApp}
          className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Partager sur WhatsApp"
        >
          <MessageCircle className="h-5 w-5" />
        </motion.button>
        
        <motion.button
          onClick={copyToClipboard}
          className={`w-12 h-12 ${copied ? 'bg-green-500' : 'bg-gray-600'} text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors shadow-lg`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Copier le lien"
        >
          {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
        </motion.button>
      </div>

      {/* Image principale */}
      <section className="px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative overflow-hidden rounded-lg aspect-[16/9]"
          >
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Contenu de l'article */}
      <section className="py-32 px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="grid lg:grid-cols-4 gap-16">
            {/* Contenu principal */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-3"
            >
              <div 
                className="prose prose-lg max-w-none font-light leading-relaxed text-gray-700"
                dangerouslySetInnerHTML={{ __html: post.content }}
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.75'
                }}
              />
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="lg:col-span-1 space-y-8"
            >
              {/* Tags */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-light text-gray-900 mb-4 flex items-center">
                  <Tag className="h-4 w-4 mr-2" />
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white text-gray-600 text-sm font-light rounded border hover:border-blue-200 hover:text-blue-500 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Partage */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-light text-gray-900 mb-4">
                  Partager cet article
                </h3>
                <div className="space-y-3">
                  <button 
                    onClick={shareOnTwitter}
                    className="w-full flex items-center justify-center px-4 py-3 bg-blue-500 text-white font-light hover:bg-blue-600 transition-colors"
                  >
                    <Twitter className="h-4 w-4 mr-2" />
                    Twitter
                  </button>
                  <button 
                    onClick={shareOnLinkedIn}
                    className="w-full flex items-center justify-center px-4 py-3 bg-blue-700 text-white font-light hover:bg-blue-800 transition-colors"
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </button>
                  <button 
                    onClick={shareOnWhatsApp}
                    className="w-full flex items-center justify-center px-4 py-3 bg-green-500 text-white font-light hover:bg-green-600 transition-colors"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp
                  </button>
                  <button 
                    onClick={copyToClipboard}
                    className={`w-full flex items-center justify-center px-4 py-3 ${copied ? 'bg-green-500' : 'bg-gray-600'} text-white font-light hover:bg-gray-700 transition-colors`}
                  >
                    {copied ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
                    {copied ? 'Lien copié!' : 'Copier le lien'}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Articles similaires */}
      <section className="py-32 px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-extralight text-gray-900 leading-tight mb-6">
              Articles <span className="text-blue-500">similaires</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(blogPosts)
              .filter(([id]) => id !== postId)
              .slice(0, 3)
              .map(([id, relatedPost], index) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group"
                >
                  <Link to={`/blog/${id}`} className="block">
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200">
                      <div className="relative overflow-hidden aspect-[16/10]">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      
                      <div className="p-6">
                        <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium tracking-wide uppercase rounded-full">
                          {relatedPost.category}
                        </span>
                        
                        <h3 className="text-lg font-light text-gray-900 mt-4 mb-3 group-hover:text-blue-500 transition-colors leading-tight">
                          {relatedPost.title}
                        </h3>
                        
                        <div className="flex items-center text-sm text-gray-500 font-light">
                          <Clock className="h-4 w-4 mr-2" />
                          {relatedPost.readTime}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;