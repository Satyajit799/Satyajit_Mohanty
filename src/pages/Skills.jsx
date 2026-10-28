import { motion, useReducedMotion } from "motion/react";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaPython,
} from "react-icons/fa";

import { VscVscode } from "react-icons/vsc";

import {
    SiTailwindcss,
    SiTypescript,
    SiNextdotjs,
    SiRedux,
    SiExpress,
    SiMongodb,
    SiMongoose,
    SiPostman,
    SiPostgresql,
    SiVite,
} from "react-icons/si";

import { Code2, Server, Database, Wrench } from "lucide-react";

const skillGroups = [
    {
        title: "Frontend Development",
        description: "Building responsive and interactive user interfaces.",
        icon: Code2,
        skills: [
            { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
            { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
            { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
            { name: "React", icon: FaReact, color: "#61DAFB" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
            { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
            { name: "Motion", icon: Code2, color: "#7D5CFF" },
        ],
    },
    {
        title: "Backend Development",
        description: "Developing APIs, server-side logic, and authentication.",
        icon: Server,
        skills: [
            { name: "Node.js", icon: FaNodeJs, color: "#5FA04E" },
            { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
            { name: "REST APIs", icon: Code2, color: "#7D5CFF" },
            { name: "JWT", icon: Code2, color: "#FB015B" },
        ],
    },
    {
        title: "Database",
        description: "Working with NoSQL and relational databases.",
        icon: Database,
        skills: [
            {
                name: "MongoDB",
                icon: SiMongodb,
                color: "#47A248",
            },
            {
                name: "Mongoose",
                icon: SiMongoose,
                color: "#880000",
            },
            {
                name: "PostgreSQL",
                icon: SiPostgresql,
                color: "#4169E1",
            }
        ],
    },

    {
        title: "Languages & Tools",
        description:
            "Programming languages and development tools I use to build, test, and manage applications.",
        icon: Wrench,
        skills: [
            { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
            { name: "Python", icon: FaPython, color: "#3776AB" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "Git", icon: FaGitAlt, color: "#F05032" },
            { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
            { name: "Postman", icon: SiPostman, color: "#FF6C37" },
            { name: "Vite", icon: SiVite, color: "#646CFF" },
            { name: "VS Code", icon: VscVscode, color: "#007ACC" },
        ],
    },
];

function Skills() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section
            id="skills"
            className="relative overflow-hidden bg-background px-6 text-text sm:px-8 py-20 md:py-24"
        >
            {/* Background accents */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-purple/10 blur-[100px]"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-cyan/10 blur-[100px]"
            />

            <div className="relative mx-auto max-w-7xl">
                {/* Section heading */}
                <motion.div
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="mb-14 text-center"
                >
                    <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple/30 bg-purple/10 px-4 py-2 text-sm font-medium text-purple">
                        <Code2 size={16} aria-hidden="true" />
                        What I Work With
                    </span>

                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                        My <span className="text-purple">Technical Skills</span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-secondary sm:text-lg">
                        Technologies and tools I use to build responsive interfaces,
                        develop APIs, manage data, and create full-stack applications.
                    </p>
                </motion.div>

                {/* Skill cards */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-2">
                    {skillGroups.map((group, index) => {
                        const GroupIcon = group.icon;

                        return (
                            <motion.article
                                key={group.title}
                                initial={
                                    shouldReduceMotion
                                        ? false
                                        : { opacity: 0, y: 25 }
                                }
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.5,
                                    delay: shouldReduceMotion ? 0 : index * 0.12,
                                }}
                                whileHover={
                                    shouldReduceMotion
                                        ? undefined
                                        : { y: -6, transition: { duration: 0.2 } }
                                }
                                className="group rounded-2xl border border-border bg-card/80 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-purple/60"
                            >
                                {/* Card icon */}
                                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-purple/30 bg-purple/10 text-purple transition-colors duration-300 group-hover:bg-purple/20">
                                    <GroupIcon size={24} aria-hidden="true" />
                                </div>

                                <h3 className="text-xl font-semibold">
                                    {group.title}
                                </h3>

                                <p className="mt-3 min-h-12 text-sm leading-6 text-secondary">
                                    {group.description}
                                </p>

                                {/* Technology logos */}
                                <div className="mt-6 flex flex-wrap gap-3">
                                    {group.skills.map((skill) => {
                                        const SkillIcon = skill.icon;

                                        return (
                                            <motion.div
                                                key={skill.name}
                                                whileHover={
                                                    shouldReduceMotion
                                                        ? undefined
                                                        : { scale: 1.06 }
                                                }
                                                title={skill.name}
                                                className="flex items-center gap-2 rounded-lg border border-border bg-background/80 px-3 py-2 text-sm text-secondary transition-colors duration-200 hover:border-purple/50 hover:text-text"
                                            >
                                                <SkillIcon
                                                    size={19}
                                                    style={{ color: skill.color }}
                                                    aria-hidden="true"
                                                />

                                                <span>{skill.name}</span>
                                            </motion.div>
                                        );
                                    })}
                                </div>

                                {/* Bottom accent */}
                                <div className="mt-7 h-1 w-12 rounded-full bg-linear-to-r from-purple to-cyan transition-all duration-300 group-hover:w-20" />
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Skills;