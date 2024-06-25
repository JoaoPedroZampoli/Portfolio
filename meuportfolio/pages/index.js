import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import Curve from "../components/Curve";
import { useState } from 'react';
import "../styles/Home.module.css"

const draw = {
  hidden: {pathLength: 0, opacity: 0},
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return{
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {delay, type: "spring", duration: 1.5, bounce: 0},
        opacity: {delay, duration: 0.01}
      }
    }
  }
}

export default function Projects() {
  const [showContent, setShowContent] = useState(false);

  const handleAnimationComplete = () => {
    setShowContent(true);
  };

  return (
    <Curve backgroundColor="black" onAnimationComplete={handleAnimationComplete}>
      <Head>
        <title>Home</title>
        <meta property="og:title" content="Home" key="title" />
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


{/* <motion.svg width="600" height="600" viewBox="0 0 600 600" initial="hidden" animate="visible">
        <motion.circle cx="100" cy="100" r="80" stroke="#ff0055" variants={draw} custom={1} initial={{pathLength: 0}} animate={{pathLength: 1}}/>
        <motion.line x1="220" y1="30" x2="360" y2="170" stroke="#00cc88" variants={draw} custom={2}/>
        <motion.line x1="220" y1="170" x2="360" y2="30" stroke="#00cc88" variants={draw} custom={2}/>
        <motion.rect width="140" height="140" x="410" y="30" rx="20" stroke="#0099ff" variants={draw} custom={3}/>
      </motion.svg> */}