import { motion } from 'framer-motion';

const About = () => {
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

  const skills = [
    'JavaScript (ES6+)',
    'React',
    'Node.js',
    'TypeScript',
    'HTML & CSS',
    'Python',
    'SQL',
    'Git',
  ];

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
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-slate mb-4">
                Hello! I'm a passionate software engineer with a strong focus on web development.
                I enjoy creating things that live on the internet, whether that be websites,
                applications, or anything in between.
              </p>
              <p className="text-slate mb-4">
                My goal is to always build applications that are scalable and efficient
                under the hood while providing engaging, pixel-perfect user experiences.
              </p>
              <p className="text-slate mb-4">
                Here are a few technologies I've been working with recently:
              </p>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    variants={itemVariants}
                    custom={index}
                    className="flex items-center"
                  >
                    <span className="text-teal mr-2">▹</span>
                    <span className="text-slate">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About; 