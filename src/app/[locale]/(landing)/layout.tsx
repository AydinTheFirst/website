import { motion } from "framer-motion";
import { Outlet } from "react-router";

import Footer from "./footer";
import Navbar from "./navbar";

export default function LandingLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <motion.main
        animate={{ opacity: 1 }}
        className="flex-1"
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Outlet />
      </motion.main>
      <Footer />
    </div>
  );
}
