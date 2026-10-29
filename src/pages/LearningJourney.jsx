import { motion, useReducedMotion } from "motion/react";
import {
    GraduationCap,
    Code2,
    BriefcaseBusiness,
    BrainCircuit,
    Cloud,
    Target,
    CheckCircle2,
} from "lucide-react";

const journey = [
    {
        year: "School Education & Higher Secondary | 2019 - 2022",
        title: "Building My Foundation",
        description:
            "Developed my academic foundation and essential learning skills during my school years.",
        technologies: ["School Education", "Core Subjects", "Problem Solving"],
        icon: GraduationCap,
        status: "Completed",
        color: "purple",
    },
    {
        year: "Undergraduate Studies | 2022 - 2025",
        title: "My Bachelor's Degree",
        description:
            "Completed my undergraduate education and built the foundation for pursuing advanced studies in computer applications and software development.",
        technologies: ["Graduation", "Academic Foundation"],
        icon: GraduationCap,
        status: "Completed",
        color: "cyan",
    },
    {
        year: "Postgraduate Studies | 2025 - 2027",
        title: "Master of Computer Applications",
        description:
            "Currently pursuing my MCA while strengthening my knowledge of computer science, databases, software development, and application design.",
        technologies: ["MCA", "DBMS", "Software Development"],
        icon: GraduationCap,
        status: "In Progress",
        color: "purple",
    },
    {
        year: "Full-Stack Development",
        title: "Full-Stack MERN Development",
        description:
            "Completed my core MERN stack learning and applied it by building full-stack applications with frontend interfaces, REST APIs, authentication, and database integration. I continue improving through project work and debugging.",
        technologies: [
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Mongoose",
            "REST APIs",
            "JWT",
        ],
        icon: Code2,
        status: "Core Learning Completed",
        color: "cyan",
    },
    {
        year: "Hands-On Experience",
        title: "Building Real-World Projects",
        description:
            "Putting my skills into practice through projects such as a College Canteen Management System, Hospital Appointment System, Event Management System, and Smart Complaint Management System.",
        technologies: [
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "PostgreSQL",
            "Prisma",
        ],
        icon: BriefcaseBusiness,
        status: "Ongoing",
        color: "purple",
    },
    {
        year: "Expanding My Skills",
        title: "Exploring AI, Data & Cloud",
        description:
            "Building on my existing exposure to Python, data analysis, and computer vision while working toward deeper knowledge of AI/ML and cloud integration.",
        technologies: ["Python", "Data Analysis", "AI/ML", "AWS", "Cloud Integration"],
        icon: BrainCircuit,
        status: "Learning Goal",
        color: "cyan",
    },
    {
        year: "Next Steps",
        title: "Spring Boot & Scalable Applications",
        description:
            "Plan to explore Java and Spring Boot for backend development, deepen my AI/ML knowledge, and learn to integrate cloud services into reliable, scalable applications.",
        technologies: ["Java", "Spring Boot", "AI/ML", "Cloud Services"],
        icon: Cloud,
        status: "Future Goal",
        color: "purple",
    },
    {
        year: "Career Goal",
        title: "Grow as a Software Developer",
        description:
            "Aim to begin my career in software development, strengthen problem-solving and debugging skills, and keep expanding across backend engineering, AI/ML, and cloud technologies.",
        technologies: ["Software Engineering", "DSA", "Backend Development", "Cloud"],
        icon: Target,
        status: "Working Toward",
        color: "cyan",
    },
];

const LearningJourney = () => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section
            id="journey"
            aria-labelledby="journey-heading"
            className="relative overflow-hidden bg-background px-5 py-20 text-text sm:px-8 lg:px-12"
        >
            {/* Decorative background glows */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-40 h-72 w-72 rounded-full bg-purple/10 blur-[120px]"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-20 right-0 h-72 w-72 rounded-full bg-cyan/10 blur-[120px]"
            />

            <div className="relative mx-auto max-w-6xl">
                <motion.div
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple/30 bg-purple/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-purple-light">
                        <span className="h-2 w-2 rounded-full bg-cyan" />
                        Learning Journey
                    </span>

                    <h2
                        id="journey-heading"
                        className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
                    >
                        Always Learning,{" "}
                        <span className="bg-linear-to-r from-purple to-cyan bg-clip-text text-transparent">
                            Always Building
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-text-secondary sm:text-base">
                        From my education to hands-on development, each milestone helps me
                        grow as a software developer and explore what I want to learn next.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Timeline line */}
                    <div
                        aria-hidden="true"
                        className="absolute bottom-8 left-5 top-8 w-px bg-linear-to-b from-purple via-cyan/70 to-transparent sm:left-1/2 sm:-translate-x-1/2"
                    />

                    <div className="space-y-8 sm:space-y-12">
                        {journey.map((item, index) => {
                            const Icon = item.icon;
                            const isLeft = index % 2 === 0;
                            const isPurple = item.color === "purple";

                            return (
                                <motion.div
                                    key={item.title}
                                    initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.15 }}
                                    transition={{ duration: 0.45, delay: shouldReduceMotion ? 0 : 0.05 }}
                                    className="relative grid grid-cols-[40px_minmax(0,1fr)] gap-4 sm:grid-cols-[minmax(0,1fr)_56px_minmax(0,1fr)] sm:gap-5"
                                >
                                    {/* Timeline marker */}
                                    <div className="relative z-10 col-start-1 row-start-1 flex justify-center sm:col-start-2">
                                        <div
                                            className={`flex h-10 w-10 items-center justify-center rounded-full border bg-background shadow-lg sm:h-12 sm:w-12 ${isPurple
                                                    ? "border-purple/60 text-purple-light shadow-purple/10"
                                                    : "border-cyan/60 text-cyan shadow-cyan/10"
                                                }`}
                                        >
                                            <Icon size={21} strokeWidth={1.8} aria-hidden="true" />
                                        </div>
                                    </div>

                                    {/* Spacer creates the alternating desktop timeline */}
                                    <div
                                        aria-hidden="true"
                                        className={`hidden sm:block ${isLeft ? "sm:col-start-3" : "sm:col-start-1"
                                            } sm:row-start-1`}
                                    />

                                    {/* Milestone card */}
                                    <div
                                        className={`col-start-2 row-start-1 min-w-0 sm:row-start-1 ${isLeft
                                                ? "sm:col-start-1 sm:pr-5"
                                                : "sm:col-start-3 sm:pl-5"
                                            }`}
                                    >
                                        <article
                                            className={`group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 sm:p-6 ${isPurple
                                                    ? "hover:border-purple/60 hover:shadow-xl hover:shadow-purple/5"
                                                    : "hover:border-cyan/60 hover:shadow-xl hover:shadow-cyan/5"
                                                }`}
                                        >
                                            <div
                                                aria-hidden="true"
                                                className={`pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full blur-3xl ${isPurple ? "bg-purple/10" : "bg-cyan/10"
                                                    }`}
                                            />

                                            <div className="relative">
                                                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                                                    <span
                                                        className={`text-xs font-semibold uppercase tracking-wider ${isPurple ? "text-purple-light" : "text-cyan"
                                                            }`}
                                                    >
                                                        {item.year}
                                                    </span>

                                                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/70 px-2.5 py-1 text-[10px] font-medium text-text-secondary sm:text-xs">
                                                        <CheckCircle2 size={12} aria-hidden="true" />
                                                        {item.status}
                                                    </span>
                                                </div>

                                                <h3 className="text-lg font-semibold leading-snug text-text sm:text-xl">
                                                    {item.title}
                                                </h3>

                                                <p className="mt-3 text-sm leading-7 text-text-secondary">
                                                    {item.description}
                                                </p>

                                                <div className="mt-5 flex flex-wrap gap-2">
                                                    {item.technologies.map((technology) => (
                                                        <span
                                                            key={technology}
                                                            className="rounded-lg border border-border bg-background/70 px-2.5 py-1.5 text-xs text-text-secondary"
                                                        >
                                                            {technology}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                <motion.p
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5 }}
                    className="mt-16 text-center text-sm text-text-secondary"
                >
                    The journey continues — one concept, one project, and one challenge at a time.
                </motion.p>
            </div>
        </section>
    );
};

export default LearningJourney;
