import { motion } from 'framer-motion';

const About = () => {
  const techStack = [
    { name: 'React', color: 'bg-blue-500' },
    { name: 'Node.js', color: 'bg-green-500' },
    { name: 'Express', color: 'bg-gray-500' },
    { name: 'MongoDB', color: 'bg-green-600' },
    { name: 'JavaScript', color: 'bg-yellow-500' },
    { name: 'HTML', color: 'bg-orange-500' },
    { name: 'CSS', color: 'bg-blue-400' },
    { name: 'Bootstrap', color: 'bg-purple-500' },
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
            About Me
          </h1>
          <p className="py-6 text-lighter">
            I am a passionate MERN Stack Developer with a strong foundation in web development.
            My journey in programming started with a curiosity about how websites work,
            which led me to explore various technologies and frameworks. I enjoy creating
            responsive and user-friendly applications that solve real-world problems.
          </p>
          <p className="py-2 text-lighter">
            When I'm not coding, you can find me exploring new technologies, contributing
            to open-source projects, or working on personal projects to enhance my skills.
          </p>
          
          <h2 className="text-2xl font-bold text-light py-4">Tech Stack</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${tech.color} text-white px-4 py-2 rounded-lg text-center`}
              >
                {tech.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 