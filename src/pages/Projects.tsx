
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "Id-Card Generator",
      description: 
        "Created a React Native application that allows event organizers to list events. Participants can generate their ID cards and download them in PDF format.",
      additionalInfo: "To facilitate networking, participants can easily connect with one another by scanning the QR code present on each ID card.",
      tech: ["React Native", "PDF Generation", "QR Code"],
      github: "https://github.com/vanshchauhan1310/Event-Id-Card",
      image: "/Prasang.jpg",
    },
    {
      title: "Draw-Together",
      description: 
        "Created a real-time drawing board using WebSockets where two users can draw together and have fun. Built real-time user synchronization and achieved seamless real-time collaboration with minimal latency.",
      tech: ["WebSockets", "Canvas API", "Node.js"],
      github: "https://github.com/vanshchauhan1310/Draw-Board-client",
      tryIt: "https://draw-board-client.vercel.app/",
      image: "/white-Board.jpg",
    },
    {
      title: "Thief-Detection Alarm",
      description: 
        "Created a thief detection alarm system where whenever a person stands in front of CCTV, ML model detects the person, triggers an alarm, and sends the person's image to the CCTV owner through WhatsApp with an alert message.",
      tech: ["Machine Learning", "Computer Vision", "WhatsApp API"],
      github: "https://github.com/vanshchauhan1310/Thief-Detection-Alaram",
      image: "/Thief.jpeg",
    },
    {
      title: "Deploying a Streamlit App Using Docker",
      description: 
        "This project demonstrates how to containerize a Streamlit web application using Docker for easy deployment and scalability. Streamlit is a powerful Python framework for building interactive data applications, while Docker ensures consistent execution across different environments.",
      tech: ["Streamlit", "Docker", "Devops"],
      github: "https://github.com/vanshchauhan1310/Streamlit-Docker",
      tryIt: "https://app-docker-zruo9bdrzeybd9ihmxwdvx.streamlit.app/",
      image: "/Steamlit_Application.png",
    },

    {
      title: "Machine Learning Model Deployment Using Docker ",
      description: 
        "This project demonstrates how to containerize a machine learning (ML) model using Docker for seamless deployment and scalability",
      tech: ["Streamlit", "Docker", "Machine-Learning"],
      github: "https://github.com/vanshchauhan1310/Streamlit_Ml_Model_Docker",
      tryIt: "https://appmlmodeldocker-bc2xdfrd9qzua9ct7r44mv.streamlit.app/",
      image: "/Ml_Model.png",
    },

    {
      title: "ML Monitoring Dashboard with Evidently and Streamlit",
      description: 
        "This project builds an interactive monitoring dashboard to track machine learning model performance, data quality, and drift over time. It leverages",
      tech: ["Streamlit", "Docker", "Machine-Learning"],
      github: "https://github.com/vanshchauhan1310/Streamlit_EvidentlyAI",
      tryIt: "https://appevidentlyai-abrlsgpib86gtzxa9auxbk.streamlit.app/",
      image: "/Evidently.png",
    },

    {
      title: "Multi-Page Dashboard Data Visualisation",
      description: 
        "A comprehensive, modular dashboard for machine learning visualization, model interpretation, and data exploration built with Streamlit. Features SHAP analysis, interactive visualizations, and multi-page navigation.",
      tech: ["Streamlit", "Docker", "Data-visualization"],
      github: "https://github.com/vanshchauhan1310/Streamlit_EvidentlyAI",
      tryIt: "https://multipage-dashboard-evidently-xenhwy7vcmujfbbxttsojs.streamlit.app/",
      image: "/Dashboard.png",
    },


  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-full overflow-auto py-8 px-4 lg:px-8">
      <motion.div 
        className="max-w-[1400px] mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2 
          className="text-2xl md:text-3xl font-bold mb-4 md:mb-8 text-[#9b87f5]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={item}
              className="h-full"
            >
              <Card className="bg-[#151921] border-transparent hover:border-[#9b87f5]/20 transition-all duration-300 h-full flex flex-col">
                <motion.div 
                  className="relative overflow-hidden rounded-t-lg aspect-video group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
                <CardHeader className="space-y-2">
                  <CardTitle className="text-gray-100 text-xl md:text-2xl">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400 text-sm md:text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-[#9b87f5]/10 rounded-full text-[#9b87f5] text-xs md:text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="mt-auto pt-4">
                  <div className="flex gap-4">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors group text-sm md:text-base"
                      >
                        <Github className="w-4 h-4 md:w-5 md:h-5" />
                        <span>Source</span>
                      </a>
                    )}
                    {project.tryIt && (
                      <a 
                        href={project.tryIt} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-[#9b87f5] hover:text-[#8B5CF6] transition-colors group text-sm md:text-base"
                      >
                        <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
