import { motion } from "framer-motion";
import Link from "next/link";
import "../styles/Footer.module.css";

const Footer = () =>{
    return(
        <motion.footer>
            <motion.div initial={{ x: 0, opacity: 0 }} animate={{ x: 0, opacity: 1}} exit={{ x: 0, opacity: 0}}>
                
            </motion.div>
        </motion.footer>
    )
}
export default Footer;