import { motion } from 'framer-motion';
import { Download, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TypewriterEffect } from './TypewriterEffect';

export default function Hero() {
  const typewriterTexts = [
    'Full Stack Java Developer',
    'Software Developer',
    'Web Developer',
    'Problem Solver'
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl lg:text-7xl font-bold"
              >
                <span className="text-gray-900 dark:text-white">Hello, It's Me</span>
                <br />
                <span className="text-gray-900 dark:text-white">Pratik Kadam</span>
                <br />
                <span className="text-2xl lg:text-3xl text-gray-700 dark:text-gray-300">
                  And I'm a{' '}
                  <TypewriterEffect 
                    texts={typewriterTexts}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold"
                    speed={150}
                    deleteSpeed={100}
                    delayBetweenTexts={2000}
                  />
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mt-6"
              >
                Strong in design and integration with intuitive problem-solving skills. 
                Proficient in JAVA, JAVASCRIPT, MYSQL and Website Building. Passionate 
                about implementing and launching new projects. Ability to translate 
                business requirements into technical solutions.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => window.open('https://linkedin.com/in/pratikkadam', '_blank')}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open('https://github.com/pratikkadam', '_blank')}
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Pratik Kadam Resume.pdf';
                  link.download = 'Pratik_Kadam_Resume.pdf';
                  link.click();
                }}
              >
                <Download className="mr-2 h-5 w-5" />
                Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Logo/Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-4 border-dashed border-blue-200 dark:border-blue-400"
              />
              <div className="relative bg-white dark:bg-gray-800 p-8 rounded-full shadow-2xl border-4 border-blue-400 dark:border-blue-500">
                <img
                  src="/pk5.JPG"
                  alt="Pratik Kadam"
                  className="h-48 w-48 object-cover rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}