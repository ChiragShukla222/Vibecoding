import { useState } from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    company: 'Tech Company',
    role: 'Senior Software Engineer',
    period: '2020 - Present',
    description: [
      'Led the development of a new e-commerce platform using React and Node.js',
      'Implemented real-time features using WebSocket and Firebase',
      'Optimized application performance, reducing load times by 40%',
      'Mentored junior developers and conducted code reviews',
    ],
  },
  {
    id: 2,
    company: 'Startup Inc',
    role: 'Full Stack Developer',
    period: '2018 - 2020',
    description: [
      'Developed and maintained multiple web applications using React and Django',
      'Implemented CI/CD pipelines using GitHub Actions and Docker',
      'Collaborated with designers to create responsive and accessible UIs',
      'Participated in agile development processes and sprint planning',
    ],
  },
  {
    id: 3,
    company: 'Digital Agency',
    role: 'Frontend Developer',
    period: '2016 - 2018',
    description: [
      'Built responsive websites and web applications for various clients',
      'Worked with designers to implement pixel-perfect UIs',
      'Optimized websites for performance and SEO',
      'Maintained and updated existing client websites',
    ],
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      className="min-h-screen flex items-center justify-center px-8 py-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl md:text-3xl font-bold text-lightest-slate mb-4">
            Experience
          </h2>
          <p className="text-slate mb-8">
            Here's a brief overview of my professional experience and the roles I've held.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-4 overflow-x-auto md:overflow-x-visible">
                {experiences.map((exp, index) => (
                  <button
                    key={exp.id}
                    onClick={() => setActiveTab(index)}
                    className={`text-left px-4 py-2 rounded transition-colors duration-300 ${
                      activeTab === index
                        ? 'bg-teal/10 text-teal'
                        : 'text-slate hover:text-teal hover:bg-teal/5'
                    }`}
                  >
                    {exp.company}
                  </button>
                ))}
              </div>
            </div>

            <div className="md:col-span-3">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold text-lightest-slate mb-1">
                  {experiences[activeTab].role}
                </h3>
                <p className="text-teal mb-4">{experiences[activeTab].period}</p>
                <ul className="space-y-2">
                  {experiences[activeTab].description.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-teal mr-2 mt-1">▹</span>
                      <span className="text-slate">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience; 