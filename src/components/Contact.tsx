import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Linkedin, Github, Instagram, MessageCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'pratikkadam3356@gmail.com',
    href: 'mailto:pratikkadam3356@gmail.com',
    color: 'from-red-500 to-red-700'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 8975623356',
    href: 'tel:+918975623356',
    color: 'from-green-500 to-green-700'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Connect on LinkedIn',
    href: 'https://linkedin.com/in/pratikkadam',
    color: 'from-blue-500 to-blue-700'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'View GitHub Profile',
    href: 'https://github.com/pratikkadam',
    color: 'from-gray-500 to-gray-700'
  }
];

const socialLinks = [
  {
    icon: Linkedin,
    href: 'https://linkedin.com/in/pratikkadam',
    color: 'hover:text-blue-600'
  },
  {
    icon: Github,
    href: 'https://github.com/pratikkadam',
    color: 'hover:text-gray-700'
  },
  {
    icon: MessageCircle,
    href: 'https://wa.me/918975623356',
    color: 'hover:text-green-600'
  },
  {
    icon: Instagram,
    href: 'https://instagram.com/pratikkadam',
    color: 'hover:text-pink-600'
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to discuss a project or just say hello!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Contact Information
            </h3>
            
            {contactInfo.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800 border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${contact.color}`}>
                        <contact.icon size={24} className="text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                          {contact.label}
                        </p>
                        <a
                          href={contact.href}
                          className="text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {contact.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 border-0 shadow-xl text-white">
              <CardContent className="p-8 lg:p-12">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <Mail size={32} className="text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold">
                    Let's Work Together
                  </h3>
                  
                  <p className="text-blue-100 leading-relaxed">
                  <p className="text-blue-100 dark:text-blue-200 leading-relaxed">
                    Ready to bring your ideas to life? I'm available for freelance projects, 
                    full-time positions, and consulting opportunities.
                  </p>
                  
                  <Button
                    size="lg"
                    variant="secondary"
                    onClick={() => window.location.href = 'mailto:pratikkadam3356@gmail.com'}
                    className="bg-white text-blue-600 hover:bg-gray-100 dark:bg-gray-200 dark:text-blue-700 dark:hover:bg-gray-300"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                  </Button>
                  
                  {/* Social Links */}
                  <div className="flex justify-center gap-4 pt-6">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white/20 rounded-full text-white hover:bg-white/30 dark:bg-white/10 dark:hover:bg-white/20 transition-colors"
                      >
                        <social.icon size={20} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}