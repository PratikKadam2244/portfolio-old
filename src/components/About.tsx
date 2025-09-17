import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-xl">
            <CardContent className="p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    Career Objective
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    As a dedicated Full Stack Java Developer with experience in modern web technologies, 
                    I am passionate about creating robust, scalable applications that solve real-world problems. 
                    My expertise spans across Java, Spring Boot, Angular, and various databases, 
                    combined with a strong foundation in system design and software architecture.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mt-4">
                    I thrive in collaborative environments and am always eager to learn new technologies 
                    and contribute to innovative projects that make a positive impact.
                  </p>
                </div>
                
                <div className="flex justify-center">
                  <div className="relative">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl opacity-20"
                    />
                    <img
                      src="/pk logo latest.png"
                      alt="Pratik Kadam"
                      className="relative h-32 w-auto mx-auto"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}