import { useEffect, useState } from "react";
import {
    AnimatePresence,
    motion,
    useReducedMotion,
} from "motion/react";
import { X, GraduationCap, Code2, Target } from "lucide-react";

const aboutCards = [
    {
        id: "education",
        number: "01",
        title: "Education",
        subtitle: "Academic background",
        icon: GraduationCap,
        heading: "My Education",
        description:
            "I'm currently pursuing my Master of Computer Applications (MCA), strengthening my programming fundamentals and software development knowledge.",
        points: [
            "Master of Computer Applications (MCA)",
            "Learning through coursework and practical projects",
            "Building a foundation in software engineering",
        ],
    },
    {
        id: "development",
        number: "02",
        title: "Development",
        subtitle: "My technical journey",
        icon: Code2,
        heading: "My Development Journey",
        description:
            "I'm developing my skills as a Full-Stack MERN Developer by building practical applications and learning how frontend and backend systems work together.",
        points: [
            "React, JavaScript, HTML, and CSS",
            "Node.js, Express, MongoDB, and Mongoose",
            "REST APIs, authentication, and Git",
        ],
    },
    {
        id: "focus",
        number: "03",
        title: "Current Focus",
        subtitle: "What I'm working towards",
        icon: Target,
        heading: "My Current Focus",
        description:
            "My priority is improving my full-stack development skills, building stronger projects, and preparing for junior developer opportunities.",
        points: [
            "Building responsive React applications",
            "Improving backend development and debugging",
            "Practising coding problems and interview questions",
        ],
    },
];

const About = () => {
    const [activeCard, setActiveCard] = useState(null);
    const shouldReduceMotion = useReducedMotion();

    const selectedCard = aboutCards.find(
        (card) => card.id === activeCard
    );

    useEffect(() => {
        if (!activeCard) return;

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setActiveCard(null);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [activeCard]);

    const animationProps = shouldReduceMotion
        ? {}
        : {
            initial: { opacity: 0, y: 12, scale: 0.98 },
            animate: { opacity: 1, y: 0, scale: 1 },
            exit: { opacity: 0, y: -8, scale: 0.98 },
            transition: { duration: 0.25, ease: "easeOut" },
        };

    return (
        <section
            id="about"
            className="relative overflow-hidden bg-background px-6 text-text sm:px-8 py-20 md:py-28"
        >
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
                {/* Left: Introduction */}
                <motion.div
                    className="flex flex-col gap-6"
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                >
                    <p className="text-sm font-semibold tracking-[0.25em] text-cyan">
                        GET TO KNOW ME
                    </p>

                    <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                        A little about{" "}
                        <span className="bg-linear-to-r from-purple to-cyan bg-clip-text text-transparent">
                            me.
                        </span>
                    </h2>

                    <p className="leading-7 text-text-secondary">
                        I'm an MCA student passionate about web development and
                        building useful digital experiences. I enjoy turning ideas
                        into responsive, interactive applications.
                    </p>

                    <p className="leading-7 text-text-secondary">
                        I'm currently focusing on the MERN stack, developing
                        practical projects, and improving my ability to solve
                        real-world software development problems.
                    </p>

                    <div className="flex flex-wrap gap-3 pt-1">
                        {["HTML", "CSS", "JavaScript", "TailwindCSS", "React", "Node.js", "MongoDB", "Next.js", "TypeScript", "MySQL", "REST", "PostgreSQL"].map((technology) => (
                            <span
                                key={technology}
                                className="rounded-full border border-border bg-card px-4 py-2 text-sm text-text-secondary"
                            >
                                {technology}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Right: Interactive cards and in-place popup */}
                <motion.div
                    className="relative min-w-0 w-full"
                    initial={shouldReduceMotion ? false : { opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <AnimatePresence mode="wait" initial={false}>
                        {!selectedCard ? (
                            <motion.div
                                key="cards"
                                className="flex flex-col gap-4"
                                {...animationProps}
                            >
                                {aboutCards.map((card) => {
                                    const Icon = card.icon;

                                    return (
                                        <motion.button
                                            key={card.id}
                                            type="button"
                                            onClick={() => setActiveCard(card.id)}
                                            aria-haspopup="region"
                                            className="group flex min-h-24 w-full items-center gap-4 rounded-2xl border border-border bg-card p-5 text-left transition-colors duration-300 hover:border-purple hover:bg-purple/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple sm:p-6"
                                            whileHover={
                                                shouldReduceMotion ? undefined : { y: -3 }
                                            }
                                            whileTap={
                                                shouldReduceMotion ? undefined : { scale: 0.99 }
                                            }
                                            transition={{ duration: 0.2 }}
                                        >
                                            <span className="text-sm font-semibold text-text-secondary">
                                                {card.number}
                                            </span>

                                            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-background text-cyan transition-colors group-hover:bg-purple/10 group-hover:text-purple sm:size-12">
                                                <Icon size={22} aria-hidden="true" />
                                            </span>

                                            <span className="min-w-0 flex-1">
                                                <span className="block font-semibold text-text sm:text-lg">
                                                    {card.title}
                                                </span>

                                                <span className="mt-1 block text-sm text-text-secondary">
                                                    {card.subtitle}
                                                </span>
                                            </span>

                                            <span
                                                className="text-xl text-cyan transition-transform duration-200 group-hover:translate-x-1"
                                                aria-hidden="true"
                                            >
                                                →
                                            </span>
                                        </motion.button>
                                    );
                                })}
                            </motion.div>
                        ) : (
                            <motion.div
                                key={selectedCard.id}
                                id="about-details-panel"
                                role="region"
                                aria-labelledby="about-details-heading"
                                className="relative rounded-2xl border border-border bg-card p-5 shadow-xl shadow-purple/5 sm:rounded-3xl sm:p-8"
                                {...animationProps}
                            >
                                <button
                                    type="button"
                                    onClick={() => setActiveCard(null)}
                                    aria-label="Close details"
                                    className="absolute right-4 top-4 rounded-full border border-border p-2 text-text-secondary transition-colors hover:bg-background hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple sm:right-5 sm:top-5"
                                >
                                    <X size={19} aria-hidden="true" />
                                </button>

                                <div className="mb-5 flex items-center gap-3 pr-10 sm:mb-6 sm:gap-4">
                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-purple/15 text-purple sm:size-14 sm:rounded-2xl">
                                        <selectedCard.icon size={25} aria-hidden="true" />
                                    </div>

                                    <div className="min-w-0">
                                        <p className="text-xs font-semibold tracking-widest text-cyan">
                                            {selectedCard.number} / ABOUT ME
                                        </p>

                                        <h3
                                            id="about-details-heading"
                                            className="mt-1 text-xl font-bold leading-snug sm:text-2xl"
                                        >
                                            {selectedCard.heading}
                                        </h3>
                                    </div>
                                </div>

                                <p className="mb-5 text-sm leading-7 text-text-secondary sm:mb-6 sm:text-base">
                                    {selectedCard.description}
                                </p>

                                <ul className="space-y-3 sm:space-y-4">
                                    {selectedCard.points.map((point) => (
                                        <li
                                            key={point}
                                            className="flex items-start gap-3 text-sm leading-6 text-text"
                                        >
                                            <span
                                                className="mt-2 size-2 shrink-0 rounded-full bg-green"
                                                aria-hidden="true"
                                            />

                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    type="button"
                                    onClick={() => setActiveCard(null)}
                                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan transition-colors hover:text-purple sm:mt-8"
                                >
                                    <span aria-hidden="true">←</span>
                                    Back to cards
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default About;