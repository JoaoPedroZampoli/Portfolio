import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import Curve from "../../components/Curve";
import { useState } from 'react';

export default function Projects() {
  const [showContent, setShowContent] = useState(false);

  const handleAnimationComplete = () => {
    setShowContent(true);
  };

  return (
    <Curve backgroundColor="black" onAnimationComplete={handleAnimationComplete}>
      <Head>
        <title>Projects</title>
        <meta property="og:title" content="Projects" key="title" />
      </Head>
      <AnimatePresence mode="wait">
        {showContent && (
          <motion.div key="projects" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <h1>Welcome to Next.js with Framer Motion!</h1>
          </motion.div>
        )}
      </AnimatePresence>
    </Curve>
  );
}
