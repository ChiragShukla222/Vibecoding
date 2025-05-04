import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub size={30} />,
      url: 'https://github.com/yourusername',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin size={30} />,
      url: 'https://linkedin.com/in/yourusername',
    },
    {
      name: 'Twitter',
      icon: <FaTwitter size={30} />,
      url: 'https://twitter.com/yourusername',
    },
    {
      name: 'Instagram',
      icon: <FaInstagram size={30} />,
      url: 'https://instagram.com/yourusername',
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
            Contact
          </h1>
          <p className="py-6 text-lighter">
            Feel free to reach out to me for any opportunities or just to say hello!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-tertiary p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-light mb-4">Contact Information</h2>
              <div className="space-y-4">
                <p className="text-lighter">
                  <span className="text-secondary">📧 Email:</span> your.email@example.com
                </p>
                <p className="text-lighter">
                  <span className="text-secondary">📞 Phone:</span> +91 1234567890
                </p>
                <p className="text-lighter">
                  <span className="text-secondary">📍 Location:</span> Bhopal, India
                </p>
              </div>
            </div>

            <div className="bg-tertiary p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-light mb-4">Social Links</h2>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-light hover:text-secondary transition duration-300"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact; 