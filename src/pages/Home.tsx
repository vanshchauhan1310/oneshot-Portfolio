import { motion } from "framer-motion";
import { ArrowRight, Code, User, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Home = () => {
  return (
    <div className="h-full overflow-auto">
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 lg:px-8">
        {/* Hero Background */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#9b87f5] via-[#8B5CF6] to-[#7c3aed] opacity-30" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48Y2lyY2xlIGZpbGw9IiNmZmYiIGN4PSIzNiIgY3k9IjE4IiByPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-20" />
        </motion.div>

        <motion.div 
          className="max-w-6xl w-full z-10 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Text Content */}
          <div className="md:w-2/3 text-center md:text-left">
            <motion.div 
              className="relative mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-sm font-medium text-[#9b87f5] mb-2 block">Welcome to my portfolio</span>
              <h1 className="text-4xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-[#9b87f5] via-[#8B5CF6] to-[#7c3aed] text-transparent bg-clip-text relative">
                VANSH RAJ CHAUHAN
                <motion.span 
                  className="absolute -bottom-2 left-0 w-1/3 h-1 bg-[#9b87f5]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
              </h1>
            </motion.div>
            
            <motion.h2 
              className="text-xl text-gray-400 mb-6 flex items-center gap-2 flex-wrap"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="text-[#9b87f5]">Web Developer</span>
              <span className="h-1 w-1 rounded-full bg-gray-400"></span>
              <span>B.Tech CSE Student</span>
              <span className="h-1 w-1 rounded-full bg-gray-400"></span>
              <span>Gurgaon, Haryana</span>
            </motion.h2>
            
            <motion.p 
              className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I'm currently in my third year of B.Tech CSE, and my journey has been an exciting blend of curiosity and code. 
              Passionate about Web Development and Cloud, I love turning ideas into functional, user-friendly applications.
            </motion.p>
            
            <motion.div 
              className="flex gap-3"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link 
                to="/projects" 
                className="group flex items-center gap-2 bg-[#9b87f5] text-white px-6 py-3 rounded-lg hover:bg-[#8B5CF6] transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                <motion.div
                  className="absolute inset-0 bg-[#7c3aed]"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
              <Link
                to="/about"
                className="flex items-center gap-2 bg-transparent border border-[#9b87f5] text-white px-6 py-3 rounded-lg hover:bg-[#9b87f5]/10 transition-all duration-300"
              >
                About Me
              </Link>
            </motion.div>
            
            <motion.div 
              className="mt-12 flex items-center gap-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a href="https://linkedin.com/in/vansh-raj-chauhan" target="_blank" rel="noopener noreferrer" 
                className="p-2 rounded-full hover:bg-[#151921] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300 hover:text-[#9b87f5] transition-colors">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://github.com/vanshchauhan1310" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-[#151921] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300 hover:text-[#9b87f5] transition-colors">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <span className="h-6 w-px bg-gray-700"></span>
              <a href="mailto:vanshchauhan1310@gmail.com" 
                className="text-gray-300 hover:text-[#9b87f5] transition-colors text-sm">
                vanshchauhan1310@gmail.com
              </a>
            </motion.div>
          </div>

          {/* Profile Photo */}
          <motion.div 
            className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#9b87f5]/50"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Avatar className="w-full h-full">
              <AvatarImage 
                src="/me.jpeg" 
                alt="Vansh Raj Chauhan" 
                className="object-cover w-full h-full"
              />
              <AvatarFallback>VRC</AvatarFallback>
            </Avatar>
          </motion.div>
        </motion.div>
      </div>

      {/* Removed Quick Access and Skills & Technologies Sections */}
    </div>
  );
};

export default Home;
