import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, X, ExternalLink } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('Tous');

  const galleryItems = [
    {
      id: 1,
     title: 'Flyers destiné à promouvoir la solution EnMKit',
      category: 'Branding',
      image: 'visuels/image1.jpeg',
      description: 'Design graphique ',
      client: '2MeTech Sarl',
      year: '2025',
      technologies: ['Photoshop', 'Illustrator', ]
    },
    {
      id: 2,
       title: 'Flyers ',
      category: 'Branding',
      image:'visuels/image2.jpg',
      description: 'Flyers pour la promotion de la solution EnMKit',

      client: 'Cabinet Dentaire Pearl',
      year: '2024',
      technologies: ['photoshop', 'Illustrator']
    },
    {
      id: 3,
      title: 'Flyers',
      category: 'Branding',
      image: 'visuels/image3.jpg',
      description: 'Flyers pout l\'entreprise Voyage Express',
      client: 'Voyage Express',
      year: '2023',
      technologies: ['Illustrator', 'Photoshop']
    },
    {
      id: 4,
           title: 'Flyers',
      category: 'Branding',
      image: 'visuels/image4.jpg',
      description: '',
      client: 'Discovery Univers',
      year: '2022',
      technologies: ['photoshop', 'Illustrator']
    },
    {
      id: 5,
      title: 'Flyers destiné à L\'IUT',
      category: 'Branding',
      image: 'visuels/image6.jpg',
      description: 'Flyers pour l\'IUT FV de Bandjoun',
      client: 'IUT FV Bandjoun',
      year: '2024',
      technologies: ['photoshop', 'Illustrator']
    },
    {
      id: 6,
        title: 'Rollup Professionnel',
      category: 'Branding',
      image: 'visuels/image5.jpeg',
      description: 'Rollup pour l\'entreprise 2MeTech',
      client: '2MeTech',
      year: '2023',
      technologies: ['photoshop', 'Illustrator']
    },
    
  ];

  const categories = ['Tous', 'UI/UX Design', 'Mobile Design', 'Branding', 'Web Design', 'Print Design'];

  const filteredItems = activeCategory === 'Tous' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

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
                Ma Galerie
              </span>
              <div className="w-16 h-px bg-blue-500"></div>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-extralight text-gray-900 leading-tight">
              Créations
              <br />
              <span className="text-blue-500">visuelles</span>
            </h1>
            
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Découvrez une sélection de mes réalisations les plus marquantes, 
              alliant créativité, technique et innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filtres */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-3 text-sm font-light tracking-wide uppercase transition-all duration-300 ${
                  activeCategory === category
                    ? 'text-blue-500 border-b-2 border-blue-500 bg-white'
                    : 'text-gray-600 hover:text-blue-500 bg-white hover:shadow-sm'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Grille de la galerie */}
      <section className="py-32 px-8 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(item.id)}
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white">
                        <Eye className="h-8 w-8 mx-auto mb-3" />
                        <div className="text-sm font-light tracking-wide uppercase">{item.category}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-blue-500 font-medium tracking-wide uppercase">
                        {item.category}
                      </span>
                      <span className="text-xs text-gray-500 font-light">{item.year}</span>
                    </div>
                    
                    <h3 className="text-lg font-light text-gray-900 mb-2 group-hover:text-blue-500 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 font-light leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 font-light">
                        Client: {item.client}
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {item.technologies.slice(0, 2).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs text-gray-500 bg-gray-50 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modal pour image agrandie */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-8"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-8 right-8 text-white hover:text-gray-300 transition-colors z-10"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="max-w-6xl max-h-full w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {galleryItems.find(item => item.id === selectedImage) && (
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="relative">
                  <img
                    src={galleryItems.find(item => item.id === selectedImage)?.image}
                    alt={galleryItems.find(item => item.id === selectedImage)?.title}
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>
                
                <div className="text-white space-y-6">
                  <div>
                    <span className="text-blue-400 text-sm font-medium tracking-wide uppercase">
                      {galleryItems.find(item => item.id === selectedImage)?.category}
                    </span>
                    <h2 className="text-3xl font-light mt-2">
                      {galleryItems.find(item => item.id === selectedImage)?.title}
                    </h2>
                  </div>
                  
                  <p className="text-gray-300 font-light leading-relaxed">
                    {galleryItems.find(item => item.id === selectedImage)?.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <span className="text-sm text-gray-400 uppercase tracking-wide">Client:</span>
                      <p className="text-white font-light">
                        {galleryItems.find(item => item.id === selectedImage)?.client}
                      </p>
                    </div>
                    
                    <div>
                      <span className="text-sm text-gray-400 uppercase tracking-wide">Technologies:</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {galleryItems.find(item => item.id === selectedImage)?.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs text-gray-300 border border-gray-600 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}

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
              Un projet créatif ?
              <br />
              <span className="text-blue-500">Créons ensemble</span>
            </h2>
            
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              Chaque création raconte une histoire unique. 
              Parlons de la vôtre et donnons-lui vie.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <motion.a
                href="/contact"
                className="group px-12 py-6 bg-blue-500 text-white font-light tracking-wide uppercase text-sm transition-all duration-300 hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-500/25"
                whileHover={{ y: -2 }}
              >
                <span className="flex items-center justify-center">
                  Démarrer un projet
                  <ExternalLink className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;