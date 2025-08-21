import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-20 px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Marque */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-light tracking-wider mb-4">
              EDWIN<span className="text-blue-400">.</span>
            </h3>
            <p className="text-gray-400 font-light leading-relaxed">
              {t('footer.brand')}
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-sm font-light tracking-widest uppercase text-gray-400 mb-6">{t('footer.contact')}</h4>
            <div className="space-y-3 text-gray-300 font-light">
              <p>contact@tchakounte.online</p>
              <p>+237 673398046</p>
              <p>tchakounte.online</p>
            </div>
          </motion.div>

          {/* Liens sociaux */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-sm font-light tracking-widest uppercase text-gray-400 mb-6">{t('footer.followMe')}</h4>
            <div className="flex space-x-4">
              <a
                href="mailto:contact@tchakounte.online"
                className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/237673398046"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:border-green-400 hover:text-green-400 transition-all duration-300"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href="https://tchakounte.online"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:border-purple-400 hover:text-purple-400 transition-all duration-300"
              >
                <Globe className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Ligne de séparation */}
        <div className="w-full h-px bg-gray-800 mb-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.p
            className="text-gray-400 font-light text-sm mb-4 md:mb-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            © {currentYear} Tchamba Tchakounte Edwin. {t('footer.copyright')}
          </motion.p>

          <motion.button
            onClick={scrollToTop}
            className="text-sm font-light tracking-wide uppercase text-gray-400 hover:text-white transition-colors"
            whileHover={{ y: -2 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {t('footer.backToTop')}
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;