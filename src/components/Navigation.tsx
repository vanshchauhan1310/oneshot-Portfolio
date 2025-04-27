
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, Code, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const Navigation = ({ setIsNavigating }: { setIsNavigating: (value: boolean) => void }) => {
  const location = useLocation();
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  
  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/about', icon: User, label: 'About' },
    { path: '/projects', icon: Code, label: 'Projects' },
    { path: '/contact', icon: Mail, label: 'Contact' }
  ];

  return (
    <motion.nav 
      className="h-screen w-24 bg-[#151921]/50 backdrop-blur-xl flex flex-col items-center py-8 border-r border-white/5"
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="flex flex-col gap-8 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const isHovered = hoveredPath === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "p-3 rounded-xl transition-all duration-300 relative group",
                isActive
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              )}
              onClick={() => setIsNavigating(true)}
              onTransitionEnd={() => setIsNavigating(false)}
              onMouseEnter={() => setHoveredPath(item.path)}
              onMouseLeave={() => setHoveredPath(null)}
            >
              {isActive && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute inset-0 bg-gradient-to-br from-[#9b87f5] to-[#7c3aed] rounded-xl -z-10"
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30
                  }}
                />
              )}
              {!isActive && isHovered && (
                <motion.span
                  layoutId="nav-hover"
                  className="absolute inset-0 bg-[#9b87f5]/20 rounded-xl -z-10"
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30
                  }}
                />
              )}
              <item.icon size={24} className={cn(
                "transition-transform", 
                isActive ? "scale-110" : "group-hover:scale-110"
              )} />
              
              <motion.div 
                className="absolute left-full ml-4 px-3 py-1.5 bg-[#151921] rounded-lg text-xs whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity"
                initial={{ x: -10, opacity: 0 }}
                whileHover={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
              </motion.div>
            </Link>
          );
        })}
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;
