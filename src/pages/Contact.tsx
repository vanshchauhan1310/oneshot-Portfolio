
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Linkedin, Github, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9818270754",
      href: "tel:+919818270754",
    },
    {
      icon: Mail,
      title: "Email",
      value: "vanshchauhan1310@gmail.com",
      href: "mailto:vanshchauhan1310@gmail.com",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Gurgaon, Haryana, India",
    },
    {
      icon: Calendar,
      title: "Availability",
      value: "Open for opportunities",
    },
  ];

  return (
    <div className="h-full flex items-center justify-center">
      <motion.div 
        className="max-w-4xl w-full px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 
          className="text-3xl font-bold mb-8 text-[#9b87f5]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-[#151921] border-transparent hover:border-[#9b87f5]/20 transition-all duration-300">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 bg-[#9b87f5]/10 rounded-lg">
                    <method.icon className="w-6 h-6 text-[#9b87f5]" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{method.title}</h3>
                    {method.href ? (
                      <a 
                        href={method.href}
                        className="text-gray-300 hover:text-[#9b87f5] transition-colors"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="text-gray-300">{method.value}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-8 flex gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a 
            href="https://linkedin.com/in/vansh-raj-chauhan" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 bg-[#151921] rounded-full hover:bg-[#9b87f5]/10 transition-colors group"
          >
            <Linkedin className="w-6 h-6 text-[#9b87f5] group-hover:scale-110 transition-transform" />
          </a>
          <a 
            href="https://github.com/vanshchauhan1310" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 bg-[#151921] rounded-full hover:bg-[#9b87f5]/10 transition-colors group"
          >
            <Github className="w-6 h-6 text-[#9b87f5] group-hover:scale-110 transition-transform" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
