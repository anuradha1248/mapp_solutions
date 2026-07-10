import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "calc(100vh - 300px)", paddingTop: "64px" }}>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
