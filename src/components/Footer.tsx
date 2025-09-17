import { motion } from 'framer-motion';
import { Linkedin, Github, MessageCircle, Instagram, Heart } from 'lucide-react';

const socialLinks = [
  {
    icon: Linkedin,
    href: 'https://linkedin.com/in/pratikkadam',
    label: 'LinkedIn'
  },
  {
    icon: Github,
    href: 'https://github.com/pratikkadam',
    label: 'GitHub'
  },
  {
    icon: MessageCircle,
    href: 'https://wa.me/918975623356',
    label: 'WhatsApp'
  },
  {
    icon: Instagram,
    href: 'https://instagram.com/pratikkadam',
    label: 'Instagram'
  }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Logo */}
          <div className="flex items-center justify-center space-x-3 mb-8">
            <img
              src="/pk logo latest.png"
              alt="Pratik Kadam"
              className="h-12 w-auto"
            />
            <span className="text-2xl font-bold">Pratik Kadam</span>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 flex items-center justify-center gap-2">
              © {currentYear} Pratik Kadam. Made with
              <Heart size={16} className="text-red-500 fill-current" />
              using React & Tailwind CSS
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}