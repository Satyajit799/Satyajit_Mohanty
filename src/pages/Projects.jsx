import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  ExternalLink,
  Layers,
  Monitor,
} from "lucide-react";
import { FaGithubSquare } from "react-icons/fa";

const projects = [
    {
        title: "College Canteen Management System",
        category: "Full Stack",
        description: "A student canteen booking application with booking-window validation, duplicate-booking prevention, QR-based booking plans, and a payment workflow.",
        tech: ["TypeScript", "React", "Node.js", "Express", "PostgreSQL", "Prisma", "Razorpay"],
        github: "https://github.com/Satyajit799/college-canteen",
        live: "",
        status: "Project",
    },
    {
        title: "Hospital Appointment System",
        category: "Full Stack",
        description: "A hospital appointment application for managing doctor information, patient appointments, and appointment status updates.",
        tech: ["React", "Node.js", "Express", "MongoDB", "Mongoose"],
        github: "https://github.com/Satyajit799/Hospital-Appointment-System",
        live: "",
        status: "Project",
    },
    {
        title: "Event Management System",
        category: "Full Stack",
        description: "A backend-driven event management application with event data and booking workflows.",
        tech: ["Node.js", "Express", "MongoDB", "Mongoose"],
        github: "https://github.com/Satyajit799/event-management-system",
        live: "",
        status: "Project",
    },
    {
        title: "Smart Complaint Management System",
        category: "Full Stack",
        description: "A complaint management application in progress, with complaint workflows and map-based functionality.",
        tech: ["React", "Node.js", "Express", "MongoDB", "Leaflet"],
        github: "",
        live: "",
        status: "In Development",
    },
    {
        title: "Moody Player",
        category: "Full Stack",
        description: "A music-player project exploring facial emotion detection and mood-based music recommendations.",
        tech: ["React", "JavaScript", "face-api.js", "Node.js", "MongoDB"],
        github: "",
        live: "",
        status: "Project",
    },
    {
        title: "FloraVision",
        category: "Frontend",
        description: "A deployed web application project. Visit the repository or live deployment to explore its implemented features.",
        tech: ["React", "JavaScript"],
        github: "https://github.com/Satyajit799/FloraVision",
        live: "https://flora-vision-k49xaaav4-satyajit799s-projects.vercel.app/",
        status: "Project",
    },
    {
        title: "Redux E-commerce App",
        category: "Frontend",
        description: "An e-commerce frontend using Redux for state management and JSON Server to simulate backend API data.",
        tech: ["React", "Redux Toolkit", "JavaScript", "JSON Server"],
        github: "https://github.com/Satyajit799/React_project2",
        live: "",
        status: "Project",
    },
    {
        title: "Notes App",
        category: "Frontend",
        description: "A notes application that stores notes in browser LocalStorage. Backend integration and user authentication are planned for a future update.",
        tech: ["React", "JavaScript", "LocalStorage"],
        github: "https://github.com/Satyajit799/notes-app",
        live: "https://notes-25nh4u8e3-satyajit799s-projects.vercel.app/",
        status: "Backend Planned",
    },
    {
        title: "ToDesktop Landing Page",
        category: "Frontend",
        description: "A frontend recreation of a software product landing page, focused on layout, responsive design, and interface styling.",
        tech: ["React", "JavaScript", "Tailwind CSS"],
        github: "https://github.com/Satyajit799/ToDesktop",
        live: "",
        status: "Project",
    },
    {
        title: "Netflix Data Analysis",
        category: "Data & AI",
        description: "A data analysis project exploring Netflix-related data to identify patterns and communicate insights.",
        tech: ["Python", "Data Analysis"],
        github: "https://github.com/Satyajit799/netFilx_Data_Analysis",
        live: "",
        status: "Project",
    },
    {
        title: "Smart Helmet Detection",
        category: "Data & AI",
        description: "A computer vision project for helmet detection and vehicle number-plate extraction using object detection and OCR.",
        tech: ["Python", "YOLO", "OpenCV", "OCR"],
        github: "",
        live: "",
        status: "Project",
    },
    {
        title: "Snake Game",
        category: "Frontend",
        description:
            "A classic Snake game built with interactive gameplay, keyboard controls, and real-time score tracking.",
        tech: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/Satyajit799/snake_game",
        live: "https://satyajit799.github.io/snake_game/",
        status: "Project",
    },
];

const categories = ["All", "Full Stack", "Frontend", "Data & AI"];

function ProjectCard({ project, index, shouldReduceMotion }) {
    return (
        <motion.article
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: shouldReduceMotion ? 0 : (index % 3) * 0.08 }}
            whileHover={shouldReduceMotion ? undefined : { y: -5, transition: { duration: 0.2 } }}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/80 transition-colors duration-300 hover:border-purple/60"
        >
            <div className="relative flex h-48 shrink-0 flex-col items-center justify-center gap-3 overflow-hidden border-b border-border bg-linear-to-br from-purple/25 via-background to-cyan/20 px-5 text-center">
                <div aria-hidden="true" className="pointer-events-none absolute -left-10 -top-12 h-36 w-36 rounded-full bg-purple/20 blur-3xl transition-transform duration-500 group-hover:scale-125" />
                <div aria-hidden="true" className="pointer-events-none absolute -bottom-12 -right-8 h-36 w-36 rounded-full bg-cyan/15 blur-3xl transition-transform duration-500 group-hover:scale-125" />
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-purple/30 bg-background/60 text-purple shadow-lg shadow-purple/10 backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
                    {project.category === "Data & AI" ? (
                        <BrainCircuit size={32} strokeWidth={1.7} aria-hidden="true" />
                    ) : project.category === "Frontend" ? (
                        <Monitor size={32} strokeWidth={1.7} aria-hidden="true" />
                    ) : (
                        <Layers size={32} strokeWidth={1.7} aria-hidden="true" />
                    )}
                </div>
                <h3 className="relative max-w-full text-balance text-lg font-semibold text-text sm:text-xl">
                    {project.title}
                </h3>
                <span className="absolute left-3 top-3 rounded-full border border-purple/30 bg-background/80 px-3 py-1 text-xs font-medium text-purple backdrop-blur-sm">
                    {project.category}
                </span>
                {project.status !== "Project" && (
                    <span className="absolute right-3 top-3 max-w-[55%] rounded-full border border-cyan/30 bg-background/80 px-3 py-1 text-right text-xs font-medium text-cyan backdrop-blur-sm">
                        {project.status}
                    </span>
                )}
            </div>

            <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-lg line-clamp-2 min-h-14 font-semibold text-text transition-colors group-hover:text-purple sm:text-xl">
                    {project.title}
                </h3>
                <p className="min-h-18 text-sm leading-6 text-secondary">{project.description}</p>

                <div className="mt-4 flex min-h-16 content-start flex-wrap gap-2">
                    {project.tech.map((technology) => (
                        <span key={technology} className="rounded-md border border-border bg-background/80 px-2.5 py-1 text-xs text-secondary">
                            {technology}
                        </span>
                    ))}
                </div>

                <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-border pt-4">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} source code on GitHub`}
                            className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-medium text-text transition-colors hover:border-purple/60 hover:bg-purple/10"
                        >
                            <FaGithubSquare size={16} aria-hidden="true" /> GitHub <ArrowUpRight size={14} aria-hidden="true" />
                        </a>
                    )}
                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open live preview of ${project.title}`}
                            className="inline-flex items-center gap-2 rounded-lg bg-purple px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-purple/80"
                        >
                            <ExternalLink size={15} aria-hidden="true" /> Live Preview
                        </a>
                    )}
                    {!project.github && !project.live && (
                        <span className="inline-flex items-center gap-2 text-xs text-secondary/70">
                            <Code2 size={15} aria-hidden="true" /> Repository link to be added
                        </span>
                    )}
                </div>
            </div>
        </motion.article>
    );
}

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState("All");
    const shouldReduceMotion = useReducedMotion();
    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter((project) => project.category === activeCategory);

    return (
        <section id="projects" className="relative overflow-hidden bg-background px-6 py-20 text-text sm:px-8 md:py-24">
            <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-40 h-72 w-72 rounded-full bg-purple/10 blur-[100px]" />
            <div aria-hidden="true" className="pointer-events-none absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-cyan/10 blur-[100px]" />

            <div className="relative mx-auto max-w-7xl">
                <motion.div
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                    className="mb-10 text-center sm:mb-14"
                >
                    <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple/30 bg-purple/10 px-4 py-2 text-sm font-medium text-purple">
                        <Code2 size={16} aria-hidden="true" /> My Work
                    </span>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                        Projects I&apos;ve <span className="text-purple">Built</span>
                    </h2>
                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-secondary sm:text-lg">
                        A selection of applications and experiments across full-stack development, frontend engineering, and data-focused projects.
                    </p>
                </motion.div>

                <div className="mb-10 flex flex-wrap justify-center gap-3" aria-label="Filter projects by category">
                    {categories.map((category) => {
                        const isActive = activeCategory === category;
                        return (
                            <button
                                key={category}
                                type="button"
                                onClick={() => setActiveCategory(category)}
                                aria-pressed={isActive}
                                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${isActive
                                    ? "border-purple bg-purple text-white"
                                    : "border-border bg-card text-secondary hover:border-purple/60 hover:text-text"
                                    }`}
                            >
                                {category}
                            </button>
                        );
                    })}
                </div>

                <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} shouldReduceMotion={shouldReduceMotion} />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="https://github.com/Satyajit799"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium text-text transition-colors hover:border-purple/60 hover:bg-purple/10"
                    >
                        <FaGithubSquare size={17} aria-hidden="true" /> More on GitHub <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                </div>
            </div>
        </section>
    );
}
