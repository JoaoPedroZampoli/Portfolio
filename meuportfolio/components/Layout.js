import { motion } from "framer-motion";

const Layout = ({ children }) => (
    <motion.div initial={{ x: 0, opacity: 0 }} animate={{ x: 0, opacity: 1}} exit={{ x: 0, opacity: 0}} 
    transition={{ease: "easeInOut", duration: 0.75}}>
        {children}
    </motion.div>
);
export default Layout;