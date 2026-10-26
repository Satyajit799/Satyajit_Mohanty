import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

const menuVariants = {
  closed: {
    opacity: 0,
    y: -12,
    scale: 0.96,
    transition: {
      duration: 0.18,
      ease: "easeIn",
    },
  },
  open: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.25,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.055,
    },
  },
};

const linkVariants = {
  closed: {
    opacity: 0,
    x: -12,
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const shouldReduceMotion = useReducedMotion();

  const toggleMenu = () => {
    setIsMenuOpen((previous) => !previous);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const panelVariants = shouldReduceMotion
    ? {
        closed: { opacity: 0 },
        open: { opacity: 1 },
      }
    : menuVariants;

  const itemVariants = shouldReduceMotion
    ? {
        closed: { opacity: 0 },
        open: { opacity: 1 },
      }
    : linkVariants;

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Learning Journey", href: "#journey" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="relative z-50 flex items-center justify-between mx-6 py-4 md:mx-10 md:py-6 bg-[#080B14] border-b border-[#293349]">
      <a
        href="#home"
        onClick={closeMenu}
        className="text-3xl font-bold text-white"
      >
        SM<span className="text-[#7D5CFF]">.</span>
      </a>
      {/* Desktop navigation */}
      <div className="hidden items-center gap-8 md:flex">
        {navLinks.map((link) => (
          <motion.a
            key={link.href}
            href={link.href}
            className="text-lg text-gray-200 transition-colors hover:text-[#21D1ED]"
            whileTap={{
              scale: 0.95,
            }}
          >
            {link.label}
          </motion.a>
        ))}
      </div>
      {/* Mobile / tablet menu */}
      <div className="relative md:hidden">
        <motion.button
          type="button"
          onClick={toggleMenu}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.9 }}
          className="flex size-11 items-center justify-center rounded-lg border border-[#293349] text-gray-300 transition-colors hover:border-[#7D5CFF]"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isMenuOpen ? "close" : "open"}
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, rotate: -45, scale: 0.7 }
              }
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, rotate: 45, scale: 0.7 }
              }
              transition={{ duration: 0.18 }}
              className="flex"
            >
              {isMenuOpen ? (
                <X size={24} aria-hidden="true" />
              ) : (
                <Menu size={24} aria-hidden="true" />
              )}
            </motion.span>
          </AnimatePresence>
        </motion.button>

        {/* Animated dropdown */}
        <AnimatePresence initial={false}>
          {isMenuOpen && (
            <motion.div
              id="mobile-navigation"
              key="mobile-navigation"
              variants={panelVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="absolute right-0 top-14 w-64 origin-top-right overflow-hidden rounded-xl border border-[#293349] bg-[#080B14] p-3 shadow-2xl shadow-black/30"
            >
              <motion.div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    variants={itemVariants}
                    onClick={closeMenu}
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : { x: 4, backgroundColor: "rgba(125, 92, 255, 0.12)" }
                    }
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                    className="group flex items-center justify-between rounded-lg px-3 py-3 text-lg font-medium text-gray-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7D5CFF]"
                  >
                    <span>{link.label}</span>

                    <ArrowUpRight
                      size={16}
                      aria-hidden="true"
                      className="text-gray-500 transition-colors group-hover:text-[#21D1ED]"
                    />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default NavBar;
