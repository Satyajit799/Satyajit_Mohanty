import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaGithubSquare } from "react-icons/fa";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const hoverLift = shouldReduceMotion ? {} : { y: -4 };

  return (
    <section
      id="home"
      className="relative bg-background px-6 py-16 text-text sm:px-8 md:py-20"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
        {/* Left: Introduction */}
        <div className="flex flex-col gap-7">
          {/* Availability badge */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-fit rounded-full border border-border bg-card px-4 py-2"
          >
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-text-green" />
              <span className="text-xs font-medium text-text-green sm:text-sm">
                Open to Junior Developer Opportunities
              </span>
            </div>
          </motion.div>

          {/* Main text */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            whileHover={hoverLift}
            className="space-y-5"
          >
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-text-secondary">
              Hello, I'm
            </p>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              <motion.span
                className="inline-block bg-linear-to-r from-purple to-cyan bg-clip-text text-transparent"
                whileHover={
                  shouldReduceMotion ? undefined : { scale: 1.03 }
                }
                transition={{ duration: 0.25 }}
              >
                Satyajit Mohanty.
              </motion.span>
            </h1>

            <h2 className="text-lg font-medium text-cyan sm:text-xl">
              A Full-Stack MERN Developer in Progress
            </h2>

            <p className="max-w-xl text-sm leading-7 text-text-secondary sm:text-base">
              I'm an MCA student passionate about building useful web
              applications. I work with React, JavaScript, Node.js, Express,
              and MongoDB while continuously improving my development skills
              through hands-on projects.
            </p>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            {/* Explore Projects */}
            <motion.a
              href="#projects"
              whileHover={shouldReduceMotion ? undefined : { scale: 1.04 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center gap-2 rounded-xl bg-purple px-5 py-3 text-sm font-semibold text-text shadow-lg shadow-purple/20 transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
            >
              Explore Projects
              <ArrowUpRight size={18} aria-hidden="true" />
            </motion.a>

            {/* Contact Me */}
            <motion.a
              href="#contact"
              whileHover={shouldReduceMotion ? undefined : { scale: 1.04 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold text-text transition-colors hover:border-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple"
            >
              Contact Me
            </motion.a>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <motion.a
                href="https://github.com/Satyajit799"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my GitHub profile"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.15, y: -3 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
                className="text-3xl text-text transition-colors hover:text-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple rounded-md"
              >
                <FaGithubSquare size={25} aria-hidden="true" />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/satyajit-mohanty-b79846230/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my LinkedIn profile"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.15, y: -3 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
                className="text-3xl text-text transition-colors hover:text-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan rounded-md"
              >
                <TbBrandLinkedinFilled size={25} aria-hidden="true" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Right: Avatar */}
        <motion.div
          initial={
            shouldReduceMotion ? false : { opacity: 0, scale: 0.92, x: 20 }
          }
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          {/* Decorative glow */}
          <div
            aria-hidden="true"
            className="absolute inset-8 rounded-full bg-purple/20 blur-3xl"
          />

          {/* Avatar container */}
          <motion.div
            whileHover={shouldReduceMotion ? undefined : { y: -5 }}
            transition={{ duration: 0.3 }}
            className="relative flex aspect-square items-center justify-center overflow-hidden rounded-3xl border border-border bg-linear-to-br from-[#162030] to-[#0B1020] shadow-2xl shadow-purple/10"
          >
            {/* Replace this placeholder with your profile image */}
            <div className="text-center">
              <div className="mx-auto mb-5 flex size-28 items-center justify-center rounded-full border border-purple/50 bg-purple/10 text-4xl font-bold text-cyan sm:size-36 sm:text-5xl">
                SM
              </div>

              <p className="text-xl font-semibold text-text">
                Developer & Builder
              </p>

              <p className="mt-2 text-sm text-text-secondary">
                Learning by building.
              </p>
            </div>

            {/* Floating tech badge */}
            <motion.div
              animate={
                shouldReduceMotion ? undefined : { y: [0, -6, 0] }
              }
              transition={
                shouldReduceMotion
                  ? undefined
                  : {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
              }
              className="absolute bottom-5 right-4 rounded-xl border border-border bg-card/95 px-4 py-3 shadow-xl sm:bottom-8 sm:right-8"
            >
              <p className="text-xs text-text-secondary">
                Currently building with
              </p>
              <p className="mt-1 text-sm font-semibold text-text-green">
                React + Node.js
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}