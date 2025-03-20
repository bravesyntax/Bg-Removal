import "./App.css";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Result from "./pages/Result";
import BuyCredit from "./pages/BuyCredit";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Feather, HomeIcon, ShoppingBag } from "lucide-react";
import { useState, useEffect } from "react";
import { SignInButton } from "@clerk/clerk-react";

function App() {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  // Check if the device is mobile based on screen width
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is the standard md breakpoint
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile);

    // Clean up
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Animation variants for sidebar icons (desktop only)
  const iconVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.2 },
    tap: { scale: 0.9 },
  };

  // Animation variants for page transitions (desktop only)
  const pageVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  };

  return (
    <div className="relative min-h-screen pb-16 md:pb-0">
      {/* Desktop Sidebar Navigation - Hidden on mobile */}
      <div className="fixed h-max top-1/2 transform -translate-y-1/2 right-4 z-50 hidden md:block">
        <div className="flex flex-col gap-4">
          <NavLink
            to="/"
            aria-label="Home"
            className={({ isActive }) =>
              `p-2 transition-all ${
                isActive ? "border-l border-r border-black bg-gray-100" : ""
              }`
            }>
            {({ isActive }) => (
              <motion.div
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap">
                <HomeIcon
                  className={`w-5 h-5 ${
                    isActive ? "text-gray-700" : "text-gray-500"
                  }`}
                />
              </motion.div>
            )}
          </NavLink>

          <NavLink
            to="/result"
            aria-label="Results"
            className={({ isActive }) =>
              `p-2 transition-all ${
                isActive ? "border-l border-r border-black bg-gray-100" : ""
              }`
            }>
            {({ isActive }) => (
              <motion.div
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap">
                <Feather
                  className={`w-5 h-5 ${
                    isActive ? "text-gray-700" : "text-gray-500"
                  }`}
                />
              </motion.div>
            )}
          </NavLink>

          <NavLink
            to="/credit"
            aria-label="Buy Credits"
            className={({ isActive }) =>
              `p-2 transition-all ${
                isActive ? "border-l border-r border-black bg-gray-100" : ""
              }`
            }>
            {({ isActive }) => (
              <motion.div
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap">
                <ShoppingBag
                  className={`w-5 h-5 ${
                    isActive ? "text-gray-700" : "text-gray-500"
                  }`}
                />
              </motion.div>
            )}
          </NavLink>
        </div>
      </div>

      {/* Mobile Bottom Navigation - Visible only on mobile, no animations */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 md:hidden">
        <div className="flex justify-around items-center h-16">
          <NavLink
            to="/"
            aria-label="Home"
            className={({ isActive }) =>
              `flex flex-col items-center justify-center px-3 py-2 ${
                isActive ? "text-blue-600" : "text-gray-500"
              }`
            }>
            {({ isActive }) => (
              <>
                <HomeIcon
                  className={`w-6 h-6 ${
                    isActive ? "text-blue-600" : "text-gray-500"
                  }`}
                />
                <span className="text-xs mt-1">Home</span>
              </>
            )}
          </NavLink>

          <NavLink
            to="/result"
            aria-label="Results"
            className={({ isActive }) =>
              `flex flex-col items-center justify-center px-3 py-2 ${
                isActive ? "text-blue-600" : "text-gray-500"
              }`
            }>
            {({ isActive }) => (
              <>
                <Feather
                  className={`w-6 h-6 ${
                    isActive ? "text-blue-600" : "text-gray-500"
                  }`}
                />
                <span className="text-xs mt-1">Results</span>
              </>
            )}
          </NavLink>

          <NavLink
            to="/credit"
            aria-label="Buy Credits"
            className={({ isActive }) =>
              `flex flex-col items-center justify-center px-3 py-2 ${
                isActive ? "text-blue-600" : "text-gray-500"
              }`
            }>
            {({ isActive }) => (
              <>
                <ShoppingBag
                  className={`w-6 h-6 ${
                    isActive ? "text-blue-600" : "text-gray-500"
                  }`}
                />
                <span className="text-xs mt-1">Credits</span>
              </>
            )}
          </NavLink>
        </div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Conditional Rendering based on device type */}
      {isMobile ? (
        /* Mobile View - No Animations */
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
          <Route path="/credit" element={<BuyCredit />} />
        </Routes>
      ) : (
        /* Desktop View - With Animations */
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <motion.div
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageVariants}
                  transition={pageTransition}>
                  <Home />
                </motion.div>
              }
            />
            <Route
              path="/result"
              element={
                <motion.div
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageVariants}
                  transition={pageTransition}>
                  <Result />
                </motion.div>
              }
            />
            <Route
              path="/credit"
              element={
                <motion.div
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageVariants}
                  transition={pageTransition}>
                  <BuyCredit />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
