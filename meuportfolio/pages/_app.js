import '../styles/Global.css';
import "../components/style.scss";
import { AnimatePresence } from "framer-motion";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Curve from '../components/Curve';

export default function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <NavBar />
        <AnimatePresence mode="wait">
        <Curve backgroundColor="black" key={router.asPath}>
          <Component {...pageProps} />
          </Curve>
        </AnimatePresence>
      <Footer/>
    </>
  );
}
