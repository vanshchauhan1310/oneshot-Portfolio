
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import Navigation from './Navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { ScrollArea } from "./ui/scroll-area";

const LoadingIndicator = () => (
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="relative w-12 h-12">
      <div className="absolute inset-0 border-4 border-[#9b87f5]/20 rounded-full"></div>
      <div className="absolute inset-0 border-4 border-[#9b87f5] rounded-full border-t-transparent animate-spin"></div>
    </div>
  </div>
);

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [isNavigating, setIsNavigating] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen w-full bg-gradient-to-br from-[#1A1F2C] to-[#151921] text-white overflow-hidden flex">
      <Navigation setIsNavigating={setIsNavigating} />
      
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex-1 relative"
          >
            <ScrollArea className="h-screen w-full">
              <motion.main
                className={cn(
                  "p-8 max-w-7xl mx-auto",
                  isNavigating ? "pointer-events-none" : ""
                )}
                layoutId="main-content"
              >
                {children}
              </motion.main>
            </ScrollArea>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default Layout;
