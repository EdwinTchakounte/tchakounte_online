import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MessageCircle, Send, MapPin } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Message envoyé avec succès ! Je vous recontacterai bientôt.');
  };

  return (
    <section id="contact" ref={ref} className="py-32 px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
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
            Contact
          </motion.div>
          
          <motion.h2
            className="text-4xl lg:text-5xl font-extralight text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Démarrons votre
            <br />
            <span className="text-blue-500">projet ensemble</span>
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-12"
          >
            <div>
              <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
                Prêt à transformer vos idées en réalité digitale ? 
                Discutons de votre projet et explorons ensemble les possibilités.
              </p>
            </div>

            <div className="space-y-8">
              <motion.a
                href="mailto:contact@synapsetech.online"
                className="group flex items-center space-x-4 p-6 border border-gray-100 hover:border-blue-200 transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <div className="text-sm font-light tracking-wide uppercase text-gray-500 mb-1">Email</div>
                  <div className="text-gray-900 group-hover:text-blue-500 transition-colors">
                    contact@synapsetech.online
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="https://wa.me/237673398046"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-4 p-6 border border-gray-100 hover:border-green-200 transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <div className="text-sm font-light tracking-wide uppercase text-gray-500 mb-1">WhatsApp</div>
                  <div className="text-gray-900 group-hover:text-green-500 transition-colors">
                    +237 673398046
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="https://synapsetech.online"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-4 p-6 border border-gray-100 hover:border-purple-200 transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-purple-500" />
                </div>
                <div>
                  <div className="text-sm font-light tracking-wide uppercase text-gray-500 mb-1">Website</div>
                  <div className="text-gray-900 group-hover:text-purple-500 transition-colors">
                    synapsetech.online
                  </div>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Formulaire de contact */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Nom complet"
                    className="w-full px-0 py-4 border-0 border-b border-gray-200 focus:border-blue-500 focus:outline-none bg-transparent font-light transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Adresse email"
                    className="w-full px-0 py-4 border-0 border-b border-gray-200 focus:border-blue-500 focus:outline-none bg-transparent font-light transition-colors"
                  />
                </div>
              </div>

              <div>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Sujet"
                  className="w-full px-0 py-4 border-0 border-b border-gray-200 focus:border-blue-500 focus:outline-none bg-transparent font-light transition-colors"
                />
              </div>

              <div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Parlez-moi de votre projet..."
                  className="w-full px-0 py-4 border-0 border-b border-gray-200 focus:border-blue-500 focus:outline-none bg-transparent font-light resize-none transition-colors"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="group flex items-center justify-center w-full py-4 bg-blue-500 text-white font-light tracking-wide uppercase text-sm hover:bg-blue-600 transition-all duration-300"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                Envoyer le message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;