import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'BrandSmashers',
      role: 'Frontend Developer',
      period: '2022 - Present',
      description: 'Built responsive UI components and improved user interactions for various client projects. Implemented modern design patterns and optimized performance.',
    },
    {
      id: 2,
      company: 'Cybrom',
      role: 'Full Stack Developer Intern',
      period: '2021 - 2022',
      description: 'Worked on scalable web applications using MERN stack. Developed RESTful APIs and implemented authentication systems.',
    },
  ];

  return (
    <div className="w-full h-full bg-primary pt-20">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold inline border-b-4 border-secondary text-light">
            Experience
          </h1>
          <p className="py-6 text-lighter">
            My professional journey in web development and software engineering.
          </p>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-8 border-l-2 border-secondary"
              >
                <div className="absolute w-4 h-4 bg-secondary rounded-full -left-2 top-0"></div>
                <div className="bg-tertiary p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-light">{exp.role}</h3>
                  <h4 className="text-secondary">{exp.company}</h4>
                  <p className="text-lighter text-sm mb-2">{exp.period}</p>
                  <p className="text-lighter">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience; 