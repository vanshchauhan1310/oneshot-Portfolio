
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    "HTML", "CSS", "JavaScript", "TypeScript", 
    "ReactJS", "AngularJS", "React Native", 
    "Node.js", "Express", "MongoDB", "MySQL",
    "Java", "Python", "Rust", "AWS", "Docker"
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="h-full flex items-center justify-center">
      <div className="max-w-3xl w-full">
        <motion.h2 
          className="text-3xl font-bold mb-6 text-[#9b87f5]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <motion.div 
          className="grid grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="col-span-2">
            <h3 className="text-xl font-semibold mb-3">Profile</h3>
            <p className="text-gray-300 mb-6">
              I'm currently in my third year of B.Tech CSE, and my journey has been an exciting blend of curiosity and code.
              Passionate about Web Development and Cloud, I love turning ideas into functional, user-friendly applications.
            </p>

            <h3 className="text-xl font-semibold mb-3">Education</h3>
            <div className="mb-4 p-4 bg-[#151921] rounded-lg">
              <div className="flex justify-between items-center mb-1">
                <h4 className="font-medium">B.Tech Computer Science, UPES</h4>
                <span className="text-sm text-[#9b87f5]">Expected 2026</span>
              </div>
              <p className="text-gray-400 text-sm">
                Relevant Coursework: Web Development, Cloud Computing, Software Development
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-3">Experience</h3>
            <div className="p-4 bg-[#151921] rounded-lg mb-4">
              <div className="flex justify-between items-center mb-1">
                <h4 className="font-medium">Front-end Intern, One Thing Design</h4>
                <span className="text-sm text-[#9b87f5]">May 2021 - July 2021</span>
              </div>
              <p className="text-gray-400 mb-3 text-sm">Gurgaon, India</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Mastered WordPress functionality and PHP coding through practical application, contributing to the enhancement of five major client websites utilized by over 10,000 users weekly.</li>
                <li>Engaged in projects for high-profile clients such as TVS and RBL, leveraged hands-on experience to develop unique solutions that increased user engagement at activities.</li>
                <li>Through meetings and code assessments, enhanced both technical and soft skills.</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Skills</h3>
            <motion.div 
              className="flex flex-wrap gap-2" 
              variants={container}
              initial="hidden"
              animate="show"
            >
              {skills.map((skill, index) => (
                <motion.span 
                  key={index}
                  variants={item} 
                  className="px-3 py-1.5 bg-[#151921] rounded-lg text-sm hover:bg-[#9b87f5]/20 transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
