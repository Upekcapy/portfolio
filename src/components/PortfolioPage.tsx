"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  BookOpenCheck,
  BriefcaseBusiness,
  Camera,
  CircleCheck,
  Code,
  GitBranch,
  GraduationCap,
  HandHeart,
  Mail,
  MessageCircle,
  Network,
  Phone,
  Smartphone,
  Sparkles,
  SquareTerminal,
  Trophy,
  UsersRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const smoothEase = [0.22, 1, 0.36, 1] as const;

type Project = {
  title: string;
  kicker: string;
  description: string;
  repo: string;
  image?: string;
  imageAlt?: string;
  icon: LucideIcon;
  tags: string[];
  stats: string[];
  featured?: boolean;
  terminal?: boolean;
};

type VolunteerItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
};

type ContactItem = {
  label: string;
  value: string;
  href?: string;
  icon: LucideIcon;
};

const navItems = [
  { label: "About", href: "#about" },
  { label: "Volunteering", href: "#volunteering" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const highlights = [
  "TMU Computer Science student",
  "Software developer co-op focused",
  "Project builder with web, mobile, Python, and Java experience",
];

const skills = [
  "Python",
  "Java",
  "C++",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Android",
  "Git",
  "GitHub",
  "OOP",
  "Data structures",
  "UI design",
  "Problem solving",
];

const volunteerItems: VolunteerItem[] = [
  {
    title: "Tech mentor in high school",
    description:
      "Supported students as they learned programming concepts, debugged projects, and built confidence with technology.",
    icon: UsersRound,
    accent: "bg-emerald-100 text-emerald-700 ring-emerald-200",
  },
  {
    title: "Free food distribution volunteer",
    description:
      "Helped organize and distribute free food at school, contributing to a more supportive and welcoming student community.",
    icon: HandHeart,
    accent: "bg-lime-100 text-lime-700 ring-lime-200",
  },
  {
    title: "Grade 12 CS course support",
    description:
      "Helped the new Grade 12 computer science teacher with C++ material, course planning, and classroom programming support.",
    icon: BookOpenCheck,
    accent: "bg-zinc-100 text-zinc-800 ring-zinc-200",
  },
];

const projects: Project[] = [
  {
    title: "NotiStock",
    kicker: "Flagship project",
    description:
      "A stock-trading alert app designed to help traders react faster by setting timely buy and sell alerts. This is my biggest software achievement so far because it connects a real user need with practical app design, notification logic, and a clean product experience.",
    repo: "https://github.com/Upekcapy/noti-stock",
    image: "/images/notistock-logo-lockup-white-bg.png",
    imageAlt: "NotiStock logo",
    icon: Trophy,
    featured: true,
    tags: ["React", "TypeScript", "Alerts", "Product design", "GitHub"],
    stats: ["Trading workflow", "Notification-first UX", "Real-world problem"],
  },
  {
    title: "NotiStock Android (Mobile)",
    kicker: "Mobile app direction",
    description:
      "A mobile-focused version of NotiStock built around fast access, readable screens, and alert-driven decision support. It pushed me to think about how software changes when users are checking important information on the go.",
    repo: "https://github.com/Upekcapy/noti-stock",
    image: "/images/notistock-mobile-maskable-icon-512.png",
    imageAlt: "NotiStock mobile app icon",
    icon: Smartphone,
    tags: ["Android", "Mobile UI", "Notifications", "State", "Usability"],
    stats: ["Mobile-first", "App icon system", "Alert experience"],
  },
  {
    title: "Rock Paper Scissors",
    kicker: "CPS109 Python",
    description:
      "A Python course project that helped me build a strong foundation in syntax, arrays and lists, conditional logic, loops, functions, and user input. It was a simple game, but it taught me how small programs become clearer when the logic is organized well.",
    repo: "https://github.com/Upekcapy/rock-paper-scissors",
    image: "/images/rockpapersissors.png",
    imageAlt: "Rock Paper Scissors project preview",
    icon: Code,
    tags: ["Python", "Lists", "Loops", "Functions", "Input handling"],
    stats: ["Game logic", "Beginner fundamentals", "Course project"],
  },
  {
    title: "Hangman",
    kicker: "CPS209 Java",
    description:
      "A Java project focused on object-oriented programming, classes, collections, and data structures. Building Hangman helped me practice turning a game idea into reusable code with state, validation, and structured behavior.",
    repo: "https://github.com/Upekcapy/hangman",
    icon: SquareTerminal,
    terminal: true,
    tags: ["Java", "OOP", "Classes", "Collections", "Data structures"],
    stats: ["Object design", "State management", "Course project"],
  },
];

const contactItems: ContactItem[] = [
  {
    label: "Email",
    value: "upek2007@gmail.com",
    href: "mailto:upek2007@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "437-235-6374",
    href: "tel:+14372356374",
    icon: Phone,
  },
  {
    label: "WhatsApp",
    value: "Upek Perera (437-235-6374)",
    href: "https://wa.me/14372356374",
    icon: MessageCircle,
  },
  {
    label: "GitHub",
    value: "github.com/Upekcapy",
    href: "https://github.com/Upekcapy",
    icon: GitBranch,
  },
  {
    label: "LinkedIn",
    value: "Upek Perera",
    href: "https://www.linkedin.com/in/upek-perera-6a41b0344/",
    icon: Network,
  },
  {
    label: "Discord",
    value: "Just for that!#3043",
    icon: MessageCircle,
  },
  {
    label: "Instagram",
    value: "Upek Perera",
    icon: Camera,
  },
];

export function PortfolioPage() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: smoothEase },
    },
  };

  const stagger: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#f6faf5] text-[#07120c]">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(9,82,47,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(9,82,47,0.06)_1px,transparent_1px)] bg-[size:44px_44px]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(36,199,95,0.20),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.85),rgba(246,250,245,0.95)_40%,#f6faf5)]" />

      <header className="sticky top-0 z-50 border-b border-emerald-950/10 bg-[#f6faf5]/86 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a
            href="#top"
            className="group flex items-center gap-3 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-4 focus-visible:ring-offset-[#f6faf5]"
          >
            <span className="grid size-11 place-items-center rounded-full bg-[#07120c] text-sm font-black text-lime-200 shadow-lg shadow-emerald-950/15 transition-transform duration-300 group-hover:scale-105">
              UP
            </span>
            <span className="hidden leading-tight sm:block">
              <span className="block text-sm font-bold">Upek Perera</span>
              <span className="block text-xs text-zinc-500">TMU CS</span>
            </span>
          </a>

          <div className="hidden items-center gap-1 rounded-full border border-emerald-950/10 bg-white/75 p-1 shadow-sm md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-zinc-600 transition hover:bg-emerald-50 hover:text-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                {item.label}
              </a>
            ))}
          </div>

          <motion.a
            href="#contact"
            whileHover={shouldReduceMotion ? undefined : { y: -2 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-emerald-700/20 transition hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-4 focus-visible:ring-offset-[#f6faf5]"
          >
            Contact
            <ArrowUpRight size={16} />
          </motion.a>
        </nav>
      </header>

      <section id="top" className="relative mx-auto max-w-7xl px-5 pb-16 pt-14 sm:px-8 lg:pb-24 lg:pt-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]"
        >
          <div>
            <motion.div
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-white/80 px-4 py-2 text-sm font-bold text-emerald-800 shadow-sm"
            >
              <Sparkles size={16} className="text-amber-500" />
              Building practical software for co-op opportunities
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="max-w-4xl text-5xl font-black leading-[0.95] tracking-normal text-[#07120c] sm:text-6xl lg:text-7xl"
            >
              Upek Perera
              <span className="mt-3 block text-emerald-700">
                TMU Computer Science.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-2xl text-lg leading-8 text-zinc-600 sm:text-xl"
            >
              I am a Computer Science student at Toronto Metropolitan University
              excited to join co-op, learn from real engineering teams, and keep
              building software that feels useful, reliable, and easy to use.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <AnimatedLink
                href="https://github.com/Upekcapy"
                label="GitHub"
                icon={GitBranch}
                dark
              />
              <AnimatedLink
                href="https://www.linkedin.com/in/upek-perera-6a41b0344/"
                label="LinkedIn"
                icon={Network}
              />
              <AnimatedLink href="#projects" label="View Projects" icon={Code} />
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-8 grid gap-3 sm:grid-cols-3"
            >
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-emerald-950/10 bg-white/75 p-4 shadow-sm backdrop-blur"
                >
                  <CircleCheck
                    className="mb-3 text-emerald-600"
                    size={20}
                    aria-hidden="true"
                  />
                  <p className="text-sm font-semibold leading-6 text-zinc-700">
                    {item}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            className="relative mx-auto w-full max-w-[520px]"
          >
            <motion.div
              animate={
                shouldReduceMotion
                  ? undefined
                  : { y: [0, -10, 0], rotate: [0, 0.6, 0] }
              }
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative overflow-hidden rounded-[2rem] border border-emerald-950/10 bg-[#07120c] p-4 shadow-2xl shadow-emerald-950/20"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-zinc-100">
                <Image
                  src="/images/pfp.png"
                  alt="Upek Perera profile photo"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 480px"
                  className="object-cover transition duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/10 bg-black/55 p-4 text-white shadow-xl backdrop-blur-md">
                <p className="text-sm font-semibold text-lime-200">
                  Open to co-op
                </p>
                <p className="mt-1 text-xl font-black">Software Developer</p>
              </div>
            </motion.div>

            <motion.div
              animate={shouldReduceMotion ? undefined : { x: [0, 10, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-2 top-8 hidden rounded-2xl border border-emerald-950/10 bg-white px-5 py-4 shadow-xl shadow-emerald-950/10 sm:block"
            >
              <p className="font-mono text-2xl font-black text-emerald-700">4</p>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-zinc-500">
                Projects
              </p>
            </motion.div>

            <motion.div
              animate={shouldReduceMotion ? undefined : { x: [0, -8, 0] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 left-4 rounded-2xl border border-emerald-950/10 bg-lime-100 px-5 py-4 shadow-xl shadow-emerald-950/10"
            >
              <p className="text-sm font-black text-emerald-900">
                Learning by building
              </p>
              <p className="mt-1 text-xs font-semibold text-emerald-700">
                Python, Java, C++, web, mobile
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <Section id="about" eyebrow="About" title="A student developer ready to grow inside a real team.">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="rounded-3xl border border-emerald-950/10 bg-[#07120c] p-8 text-white shadow-2xl shadow-emerald-950/15">
            <GraduationCap className="text-lime-300" size={36} />
            <p className="mt-6 text-2xl font-black leading-tight">
              I care about turning classroom learning into useful software.
            </p>
            <p className="mt-5 leading-7 text-zinc-300">
              My goal for co-op is to contribute to a team, improve my technical
              judgment, and become more confident writing code that other people
              can understand, maintain, and trust.
            </p>
          </Reveal>

          <Reveal className="rounded-3xl border border-emerald-950/10 bg-white p-8 shadow-xl shadow-emerald-950/5">
            <div className="flex items-center gap-3">
              <span className="grid size-12 place-items-center rounded-2xl bg-emerald-100 text-emerald-700">
                <BriefcaseBusiness size={24} />
              </span>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-700">
                  Co-op focus
                </p>
                <h2 className="text-2xl font-black">Software development</h2>
              </div>
            </div>
            <p className="mt-6 leading-8 text-zinc-600">
              I enjoy projects where the code has a clear purpose: alerts that
              help traders act in time, games that teach the fundamentals, and
              course support that helps other students understand programming. I
              am especially excited by teams where I can learn good engineering
              habits while building features that people actually use.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-emerald-950/10 bg-emerald-50 px-3 py-2 text-sm font-bold text-emerald-800 transition hover:-translate-y-0.5 hover:bg-lime-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section
        id="volunteering"
        eyebrow="Volunteering"
        title="Community work that made me a better communicator."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {volunteerItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <motion.article
                whileHover={shouldReduceMotion ? undefined : { y: -8 }}
                className="h-full rounded-3xl border border-emerald-950/10 bg-white p-7 shadow-xl shadow-emerald-950/5 transition"
              >
                <span
                  className={`grid size-14 place-items-center rounded-2xl ring-1 ${item.accent}`}
                >
                  <item.icon size={26} />
                </span>
                <h3 className="mt-6 text-xl font-black">{item.title}</h3>
                <p className="mt-4 leading-7 text-zinc-600">
                  {item.description}
                </p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        id="projects"
        eyebrow="Projects"
        title="Projects that show how I learn, build, and improve."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </Section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <Reveal className="overflow-hidden rounded-[2rem] border border-emerald-950/10 bg-[#07120c] text-white shadow-2xl shadow-emerald-950/20">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="p-8 sm:p-10 lg:p-12">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-lime-300">
                Toolkit
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                A growing foundation across code, design, and teamwork.
              </h2>
              <p className="mt-5 leading-8 text-zinc-300">
                I am still early in my career, but I am actively building the
                habits that matter: breaking problems down, asking better
                questions, debugging carefully, and making interfaces that feel
                clear for the person using them.
              </p>
            </div>
            <div className="grid border-t border-white/10 sm:grid-cols-2 lg:border-l lg:border-t-0">
              {[
                ["Frontend", "React, Next.js, responsive UI, accessibility"],
                ["Programming", "Python, Java, C++, TypeScript fundamentals"],
                ["Engineering", "GitHub, debugging, project organization"],
                ["Mindset", "Clear communication, curiosity, consistency"],
              ].map(([label, text]) => (
                <div
                  key={label}
                  className="border-b border-white/10 p-8 last:border-b-0 sm:border-r sm:even:border-r-0 lg:odd:border-r lg:even:border-r-0"
                >
                  <p className="text-xl font-black text-white">{label}</p>
                  <p className="mt-3 leading-7 text-zinc-300">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <Section
        id="contact"
        eyebrow="Contact"
        title="Let’s connect for co-op opportunities."
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="rounded-3xl border border-emerald-950/10 bg-white p-8 shadow-xl shadow-emerald-950/5">
            <Mail className="text-emerald-700" size={34} />
            <h3 className="mt-6 text-2xl font-black">Reach me directly.</h3>
            <p className="mt-4 leading-8 text-zinc-600">
              I am looking forward to co-op roles where I can contribute,
              receive feedback, and keep improving as a developer. Email is the
              best first contact, and my GitHub and LinkedIn are linked here too.
            </p>
            <div className="mt-7">
              <AnimatedLink
                href="mailto:upek2007@gmail.com"
                label="Email Upek"
                icon={Mail}
                dark
              />
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {contactItems.map((item, index) => (
              <Reveal key={item.label} delay={index * 0.04}>
                <ContactCard item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
      <Reveal className="mb-10 max-w-3xl">
        <p className="text-sm font-black uppercase tracking-[0.28em] text-emerald-700">
          {eyebrow}
        </p>
        <h2 className="mt-4 text-3xl font-black leading-tight text-[#07120c] sm:text-5xl">
          {title}
        </h2>
      </Reveal>
      {children}
    </section>
  );
}

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{
        duration: 0.65,
        delay: shouldReduceMotion ? 0 : delay,
        ease: smoothEase,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function AnimatedLink({
  href,
  label,
  icon: Icon,
  dark = false,
}: {
  href: string;
  label: string;
  icon: LucideIcon;
  dark?: boolean;
}) {
  const shouldReduceMotion = useReducedMotion();
  const isExternal = href.startsWith("http");

  return (
    <motion.a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      whileHover={shouldReduceMotion ? undefined : { y: -3 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
      className={
        dark
          ? "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#07120c] px-5 py-3 text-sm font-black text-white shadow-xl shadow-emerald-950/15 transition hover:bg-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-4 focus-visible:ring-offset-[#f6faf5]"
          : "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-emerald-950/10 bg-white px-5 py-3 text-sm font-black text-[#07120c] shadow-sm transition hover:border-emerald-300 hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-4 focus-visible:ring-offset-[#f6faf5]"
      }
    >
      <Icon size={18} />
      {label}
      {isExternal && <ArrowUpRight size={16} />}
    </motion.a>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Reveal delay={index * 0.08}>
      <motion.article
        whileHover={shouldReduceMotion ? undefined : { y: -10 }}
        className={`group h-full overflow-hidden rounded-[2rem] border border-emerald-950/10 bg-white shadow-xl shadow-emerald-950/5 transition ${
          project.featured ? "lg:col-span-2" : ""
        }`}
      >
        <div
          className={`grid h-full ${
            project.featured ? "lg:grid-cols-[0.9fr_1.1fr]" : ""
          }`}
        >
          <div className="relative min-h-72 overflow-hidden bg-[#07120c]">
            {project.terminal ? (
              <TerminalPreview />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <motion.div
                  whileHover={
                    shouldReduceMotion ? undefined : { scale: 1.06, rotate: 1.5 }
                  }
                  className="relative flex aspect-square w-full max-w-[280px] items-center justify-center rounded-[2rem] bg-white/95 p-6 shadow-2xl"
                >
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.imageAlt ?? project.title}
                      fill
                      sizes="(max-width: 1024px) 78vw, 360px"
                      className="object-contain p-7 transition duration-700 group-hover:scale-105"
                    />
                  )}
                </motion.div>
              </div>
            )}
            <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-lime-200 backdrop-blur">
              <project.icon size={15} />
              {project.kicker}
            </div>
          </div>

          <div className="flex flex-col p-7 sm:p-8">
            <h3 className="text-2xl font-black sm:text-3xl">{project.title}</h3>
            <p className="mt-4 leading-8 text-zinc-600">{project.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-emerald-50 px-3 py-2 text-xs font-black text-emerald-800 ring-1 ring-emerald-950/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {project.stats.map((stat) => (
                <div
                  key={stat}
                  className="rounded-2xl border border-emerald-950/10 bg-zinc-50 p-4"
                >
                  <p className="text-sm font-bold leading-5 text-zinc-700">
                    {stat}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-7">
              <AnimatedLink href={project.repo} label="View Repository" icon={GitBranch} />
            </div>
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
}

function TerminalPreview() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[#07120c] p-6">
      <div className="w-full max-w-sm rounded-2xl border border-lime-300/20 bg-black/45 p-5 font-mono text-sm text-lime-100 shadow-2xl">
        <div className="mb-4 flex gap-2">
          <span className="size-3 rounded-full bg-red-400" />
          <span className="size-3 rounded-full bg-amber-400" />
          <span className="size-3 rounded-full bg-emerald-400" />
        </div>
        <pre className="leading-6 text-lime-100">
{`word: _ _ _ _ _ _
misses: 3
letters: A E R T

class HangmanGame {
  validateGuess();
  updateState();
}`}
        </pre>
      </div>
    </div>
  );
}

function ContactCard({ item }: { item: ContactItem }) {
  const shouldReduceMotion = useReducedMotion();
  const content = (
    <>
      <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-emerald-100 text-emerald-700">
        <item.icon size={22} />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-black uppercase tracking-[0.18em] text-zinc-500">
          {item.label}
        </span>
        <span className="mt-1 block break-words text-base font-black text-[#07120c]">
          {item.value}
        </span>
      </span>
      {item.href && (
        <ArrowUpRight
          className="ml-auto shrink-0 text-emerald-700"
          size={18}
          aria-hidden="true"
        />
      )}
    </>
  );

  const className =
    "flex min-h-28 items-center gap-4 rounded-3xl border border-emerald-950/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-950/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500";

  if (!item.href) {
    return <div className={className}>{content}</div>;
  }

  return (
    <motion.a
      href={item.href}
      target={item.href.startsWith("http") ? "_blank" : undefined}
      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
      className={className}
    >
      {content}
    </motion.a>
  );
}
