import { motion, useReducedMotion } from "motion/react";
import {
    ArrowUp,
    ArrowUpRight,
    Code2,
    Heart,
} from "lucide-react";

import { FaGithubSquare } from "react-icons/fa";
import { TbBrandLinkedinFilled } from "react-icons/tb";

const navigationLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Learning Journey", href: "#journey" },
    { label: "Contact", href: "#contact" },
];

const socialLinks = [
    {
        label: "GitHub",
        href: "https://github.com/Satyajit799",
        icon: FaGithubSquare,
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/satyajit-mohanty-b79846230",
        icon: TbBrandLinkedinFilled,
    }
];

const Footer = () => {
    const shouldReduceMotion = useReducedMotion();
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: shouldReduceMotion ? "instant" : "smooth",
        });
    };

    return (
        <footer className="relative overflow-hidden border-t border-border bg-background px-5 pb-6 pt-14 text-text sm:px-8 lg:px-12">
            {/* Decorative gradient */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-32 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-purple/10 blur-[100px]"
            />

            <div className="relative mx-auto max-w-6xl">
                {/* Main footer */}
                <motion.div
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    className="grid gap-10 border-b border-border pb-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]"
                >
                    {/* Identity */}
                    <div>
                        <a
                            href="#home"
                            className="inline-flex items-center gap-3"
                            aria-label="Go to homepage"
                        >
                            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-purple to-cyan text-white shadow-lg shadow-purple/20">
                                <Code2 size={23} />
                            </span>

                            <span className="text-xl font-bold tracking-tight">
                                Satyajit
                                <span className="text-purple-light">.</span>
                            </span>
                        </a>

                        <p className="mt-5 max-w-sm text-sm leading-7 text-text-secondary">
                            Full-stack developer passionate about building useful web
                            applications, learning new technologies, and solving real-world
                            problems through code.
                        </p>

                        <div className="mt-5 flex items-center gap-3">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;

                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Visit my ${social.label} profile`}
                                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-text-secondary transition-all duration-300 hover:-translate-y-1 hover:border-purple/50 hover:text-purple-light"
                                    >
                                        <Icon size={19} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.15em]">
                            Quick Links
                        </h3>

                        <ul className="mt-5 space-y-3">
                            {navigationLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors duration-200 hover:text-cyan"
                                    >
                                        <span
                                            aria-hidden="true"
                                            className="h-1 w-1 rounded-full bg-purple"
                                        />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact and availability */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.15em]">
                            Let's Connect
                        </h3>

                        <p className="mt-5 text-sm leading-7 text-text-secondary">
                            Have an opportunity, a project idea, or a question? Let's
                            connect and explore how we can work together.
                        </p>

                        <a
                            href="#contact"
                            className="group mt-5 inline-flex items-center gap-2 rounded-xl border border-purple/30 bg-purple/10 px-4 py-3 text-sm font-medium text-purple-light transition-all duration-300 hover:border-purple/60 hover:bg-purple/15"
                        >
                            Get in Touch
                            <ArrowUpRight
                                size={17}
                                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                        </a>
                    </div>
                </motion.div>

                {/* Bottom bar */}
                <div className="flex flex-col items-center justify-between gap-5 pt-6 text-center sm:flex-row sm:text-left">
                    <p className="text-xs leading-6 text-text-secondary">
                        © {currentYear} Satyajit Mohanty. All rights reserved.
                    </p>

                    <p className="inline-flex items-center gap-1.5 text-xs text-text-secondary">
                        Built with
                        <Code2 size={14} className="text-cyan" />
                        React
                        <span className="mx-1">and</span>
                        <Heart size={13} className="fill-purple text-purple" />
                        curiosity.
                    </p>

                    <button
                        type="button"
                        onClick={scrollToTop}
                        aria-label="Scroll back to top"
                        className="group flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-text-secondary transition-all duration-300 hover:-translate-y-1 hover:border-cyan/50 hover:text-cyan"
                    >
                        <ArrowUp
                            size={19}
                            className="transition-transform duration-300 group-hover:-translate-y-0.5"
                        />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;