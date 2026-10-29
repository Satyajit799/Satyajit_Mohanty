import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, useReducedMotion } from "motion/react";
import {
    ArrowUpRight,
    MapPin,
    Send,
    MessageCircle,
    CheckCircle2,
    LoaderCircle,
} from "lucide-react";

import { FaGithubSquare } from "react-icons/fa";
import { TbBrandLinkedinFilled } from "react-icons/tb";

const contactMethods = [
    {
        title: "GitHub",
        value: "Explore my projects",
        href: "https://github.com/Satyajit799",
        icon: FaGithubSquare,
        color: "purple",
        external: true,
    },
    {
        title: "LinkedIn",
        value: "Connect with me",
        href: "https://www.linkedin.com/in/satyajit-mohanty-b79846230",
        icon: TbBrandLinkedinFilled,
        color: "purple",
        external: true,
    },
    {
        title: "Location",
        value: "Odisha, India",
        icon: MapPin,
        color: "cyan",
    },
];

const Contact = () => {
    const shouldReduceMotion = useReducedMotion();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [notice, setNotice] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));

        setErrors((previous) => ({
            ...previous,
            [name]: "",
        }));

        setNotice("");
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Please enter your name.";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Please enter your email address.";
        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
        ) {
            newErrors.email = "Please enter a valid email address.";
        }

        if (!formData.subject.trim()) {
            newErrors.subject = "Please enter a subject.";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Please enter your message.";
        } else if (formData.message.trim().length < 10) {
            newErrors.message = "Your message must contain at least 10 characters.";
        }

        return newErrors;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const validationErrors = validateForm();
        setErrors(validationErrors);
        setNotice("");

        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        setIsSubmitting(true);

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name.trim(),
                    from_email: formData.email.trim(),
                    subject: formData.subject.trim(),
                    message: formData.message.trim(),
                    reply_to: formData.email.trim(),
                },
                {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                }
            );

            setNotice("Your message has been sent successfully!");

            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
        } catch (error) {
            console.error("EmailJS submission failed:", error);

            setNotice(
                "We couldn't send your message. Please check your email configuration and try again."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputClasses =
        "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-text outline-none transition-all duration-300 placeholder:text-text-secondary/70 focus:border-purple focus:ring-2 focus:ring-purple/20";

    return (
        <section
            id="contact"
            aria-labelledby="contact-heading"
            className="relative overflow-hidden bg-background px-5 py-22 text-text sm:px-8 lg:px-12"
        >
            {/* Background decoration */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-purple/10 blur-[120px]"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-cyan/10 blur-[120px]"
            />

            <div className="relative mx-auto max-w-6xl">
                {/* Section heading */}
                <motion.div
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="mb-14 text-center"
                >
                    <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple/30 bg-purple/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-purple-light">
                        <span className="h-2 w-2 rounded-full bg-cyan" />
                        Get in Touch
                    </span>

                    <h2
                        id="contact-heading"
                        className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
                    >
                        Let's Build Something{" "}
                        <span className="bg-linear-to-r from-purple to-cyan bg-clip-text text-transparent">
                            Together
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-text-secondary sm:text-base">
                        Have a project idea, a job opportunity, or just want to connect?
                        I'd be happy to hear from you.
                    </p>
                </motion.div>

                {/* Main content */}
                <div className="grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
                    {/* Contact information */}
                    <motion.div
                        initial={shouldReduceMotion ? false : { opacity: 0, x: -25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div>
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-purple/30 bg-purple/10 text-purple-light">
                                <MessageCircle size={23} />
                            </div>

                            <h3 className="text-2xl font-semibold">
                                Let's start a conversation
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-text-secondary">
                                I'm interested in junior software development opportunities
                                and collaborating on meaningful projects. Feel free to explore
                                my work or reach out.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {contactMethods.map((method, index) => {
                                const Icon = method.icon;
                                const isPurple = method.color === "purple";

                                const content = (
                                    <>
                                        <div
                                            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${isPurple
                                                ? "border-purple/30 bg-purple/10 text-purple-light"
                                                : "border-cyan/30 bg-cyan/10 text-cyan"
                                                }`}
                                        >
                                            <Icon size={21} />
                                        </div>

                                        <div className="min-w-0 flex-1">
                                            <p className="text-sm font-semibold text-text">
                                                {method.title}
                                            </p>
                                            <p className="mt-1 wrap-break-words text-sm text-text-secondary">
                                                {method.value}
                                            </p>
                                        </div>

                                        {method.external && (
                                            <ArrowUpRight
                                                size={19}
                                                className="shrink-0 text-text-secondary transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan"
                                            />
                                        )}
                                    </>
                                );

                                return (
                                    <motion.div
                                        key={method.title}
                                        initial={
                                            shouldReduceMotion ? false : { opacity: 0, y: 15 }
                                        }
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.4,
                                            delay: shouldReduceMotion ? 0 : index * 0.1,
                                        }}
                                    >
                                        {method.href ? (
                                            <a
                                                href={method.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:border-purple/50 hover:shadow-lg hover:shadow-purple/5"
                                            >
                                                {content}
                                            </a>
                                        ) : (
                                            <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4">
                                                {content}
                                            </div>
                                        )}
                                    </motion.div>
                                );
                            })}
                        </div>

                        <div className="rounded-2xl border border-cyan/20 bg-linear-to-br from-cyan/5 to-purple/5 p-5">
                            <div className="flex items-start gap-3">
                                <div className="mt-0.5 text-cyan">
                                    <CheckCircle2 size={20} />
                                </div>

                                <div>
                                    <h4 className="text-sm font-semibold">
                                        Open to opportunities
                                    </h4>

                                    <p className="mt-2 text-sm leading-6 text-text-secondary">
                                        Looking forward to connecting with developers, recruiters,
                                        and teams building great products.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact form */}
                    <motion.div
                        initial={shouldReduceMotion ? false : { opacity: 0, x: 25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className="rounded-3xl border border-border bg-card p-5 shadow-2xl shadow-black/10 sm:p-8"
                    >
                        <div className="mb-7">
                            <h3 className="text-xl font-semibold sm:text-2xl">
                                Send me a message
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-text-secondary">
                                Fill out the form below to get started.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} noValidate className="space-y-5">
                            {/* Name and email */}
                            <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="contact-name"
                                        className="mb-2 block text-sm font-medium"
                                    >
                                        Full Name <span className="text-cyan">*</span>
                                    </label>

                                    <input
                                        id="contact-name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        placeholder="Your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        aria-invalid={Boolean(errors.name)}
                                        aria-describedby={
                                            errors.name ? "contact-name-error" : undefined
                                        }
                                        className={inputClasses}
                                    />

                                    {errors.name && (
                                        <p
                                            id="contact-name-error"
                                            className="mt-2 text-xs text-red-400"
                                        >
                                            {errors.name}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label
                                        htmlFor="contact-email"
                                        className="mb-2 block text-sm font-medium"
                                    >
                                        Email Address <span className="text-cyan">*</span>
                                    </label>

                                    <input
                                        id="contact-email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        placeholder="you@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        aria-invalid={Boolean(errors.email)}
                                        aria-describedby={
                                            errors.email ? "contact-email-error" : undefined
                                        }
                                        className={inputClasses}
                                    />

                                    {errors.email && (
                                        <p
                                            id="contact-email-error"
                                            className="mt-2 text-xs text-red-400"
                                        >
                                            {errors.email}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Subject */}
                            <div>
                                <label
                                    htmlFor="contact-subject"
                                    className="mb-2 block text-sm font-medium"
                                >
                                    Subject <span className="text-cyan">*</span>
                                </label>

                                <input
                                    id="contact-subject"
                                    name="subject"
                                    type="text"
                                    placeholder="What would you like to discuss?"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    aria-invalid={Boolean(errors.subject)}
                                    aria-describedby={
                                        errors.subject ? "contact-subject-error" : undefined
                                    }
                                    className={inputClasses}
                                />

                                {errors.subject && (
                                    <p
                                        id="contact-subject-error"
                                        className="mt-2 text-xs text-red-400"
                                    >
                                        {errors.subject}
                                    </p>
                                )}
                            </div>

                            {/* Message */}
                            <div>
                                <label
                                    htmlFor="contact-message"
                                    className="mb-2 block text-sm font-medium"
                                >
                                    Message <span className="text-cyan">*</span>
                                </label>

                                <textarea
                                    id="contact-message"
                                    name="message"
                                    rows={5}
                                    placeholder="Tell me about your idea or opportunity..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    aria-invalid={Boolean(errors.message)}
                                    aria-describedby={
                                        errors.message ? "contact-message-error" : undefined
                                    }
                                    className={`${inputClasses} resize-y`}
                                />

                                {errors.message && (
                                    <p
                                        id="contact-message-error"
                                        className="mt-2 text-xs text-red-400"
                                    >
                                        {errors.message}
                                    </p>
                                )}
                            </div>

                            {/* Submission notice */}
                            {notice && (
                                <div
                                    role="status"
                                    aria-live="polite"
                                    className="rounded-xl border border-cyan/20 bg-cyan/5 p-4 text-sm leading-6 text-text-secondary"
                                >
                                    {notice}
                                </div>
                            )}

                            {/* Submit button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-purple to-[#6650E8] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple/30 disabled:cursor-not-allowed disabled:opacity-70"
                            >
                                {isSubmitting ? (
                                    <>
                                        <LoaderCircle size={18} className="animate-spin" />
                                        Validating...
                                    </>
                                ) : (
                                    <>
                                        <Send size={17} />
                                        Send Message
                                        <ArrowUpRight
                                            size={17}
                                            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                        />
                                    </>
                                )}
                            </button>

                            <p className="text-center text-xs leading-5 text-text-secondary">
                                Fields marked with * are required.
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;