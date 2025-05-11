'use client';

import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col items-center">
        <div className="relative h-16 w-16">
          <motion.span 
            className="absolute h-full w-full rounded-full border-4 border-t-blue-500 border-r-transparent border-b-emerald-500 border-l-transparent"
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "linear"
            }}
          />
        </div>
        <motion.p 
          className="mt-4 text-blue-400 text-lg font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Carregando...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loading;