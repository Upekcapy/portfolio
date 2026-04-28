"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  BookOpenCheck,
  Camera,
  Code,
  GitBranch,
  HandHeart,
  Mail,
  MessageCircle,
  Network,
  Phone,
  Smartphone,
  SquareTerminal,
  Trophy,
  UsersRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const terminalEase = [0.16, 1, 0.3, 1] as const;

type Project = {
  command: string;
  title: string;
  status: string;
  description: string;
  repo: string;
  liveUrl?: string;
  image?: string;
  imageAlt?: string;
  icon: LucideIcon;
  tags: string[];
  metrics: { label: string; value: number }[];
  featured?: boolean;
  visual?: "rps" | "hangman";
};

type VolunteerItem = {
  command: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

type ContactItem = {
  label: string;
  value: string;
  href?: string;
  icon: LucideIcon;
};

const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "VOLUNTEER", href: "#volunteering" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

const systemFacts = [
  ["USER", "UPEK_PERERA"],
  ["ROLE", "TMU_CS_COOP_APPLICANT"],
  ["TARGET", "SOFTWARE_DEVELOPER / GAME_DEVELOPER"],
  ["STATUS", "[OK] READY_TO_BUILD"],
];

const skills = [
  { label: "PYTHON", value: 82 },
  { label: "JAVA", value: 78 },
  { label: "C++", value: 70 },
  { label: "TYPESCRIPT", value: 74 },
  { label: "REACT/NEXT", value: 72 },
  { label: "ANDROID", value: 66 },
  { label: "GIT/GITHUB", value: 80 },
  { label: "OOP/DATA_STRUCTURES", value: 76 },
];

const volunteerItems: VolunteerItem[] = [
  {
    command: "mentor --tech --high-school",
    title: "TECH MENTOR",
    description:
      "Supported students with programming concepts, debugging habits, and confidence around technology.",
    icon: UsersRound,
  },
  {
    command: "serve --community --food",
    title: "FOOD DISTRIBUTION VOLUNTEER",
    description:
      "Helped organize and distribute free food at school to support a stronger student community.",
    icon: HandHeart,
  },
  {
    command: "assist --grade12-cs --cpp",
    title: "GRADE 12 CS COURSE SUPPORT",
    description:
      "Helped the new computer science teacher with C++ material, course planning, and classroom support.",
    icon: BookOpenCheck,
  },
];

const projects: Project[] = [
  {
    command: "open ./projects/notistock --flagship",
    title: "NOTISTOCK",
    status: "[OK] FLAGSHIP_BUILD",
    description:
      "A stock-trading alert app built to help traders react faster with timely buy/sell notifications. It connects a real market workflow with alert logic, product thinking, and a clean trading-focused experience.",
    repo: "https://github.com/Upekcapy/noti-stock",
    liveUrl: "https://noti-stock.vercel.app",
    image: "/images/notistock-usethisimage.png",
    imageAlt: "NotiStock stock alert screen",
    icon: Trophy,
    featured: true,
    tags: ["REACT", "TYPESCRIPT", "ALERTS", "PRODUCT_UX", "GITHUB"],
    metrics: [
      { label: "REAL_WORLD_USE", value: 92 },
      { label: "ALERT_WORKFLOW", value: 88 },
      { label: "PRODUCT_DESIGN", value: 84 },
    ],
  },
  {
    command: "open ./projects/notistock-android --mobile",
    title: "NOTISTOCK ANDROID",
    status: "[OK] MOBILE_MODE",
    description:
      "A mobile direction for NotiStock focused on fast access, readable screens, and alert-driven decision support when users are away from a desktop setup.",
    repo: "https://github.com/Upekcapy/noti-stock",
    image: "/images/notistock-mobile-icon-512.png",
    imageAlt: "NotiStock mobile app icon",
    icon: Smartphone,
    featured: true,
    tags: ["ANDROID", "MOBILE_UI", "NOTIFICATIONS", "STATE", "USABILITY"],
    metrics: [
      { label: "MOBILE_FIRST", value: 80 },
      { label: "APP_IDENTITY", value: 86 },
      { label: "ALERT_EXPERIENCE", value: 78 },
    ],
  },
  {
    command: "python cps109/rps.py --play",
    title: "ROCK PAPER SCISSORS",
    status: "[OK] PYTHON_FOUNDATIONS",
    description:
      "A CPS109 Python project that reinforced syntax, arrays/lists, conditionals, loops, functions, and user input through a simple game loop.",
    repo: "https://github.com/Upekcapy/rock-paper-scissors",
    visual: "rps",
    icon: Code,
    tags: ["PYTHON", "LISTS", "LOOPS", "FUNCTIONS", "INPUT"],
    metrics: [
      { label: "FUNDAMENTALS", value: 82 },
      { label: "GAME_LOGIC", value: 74 },
      { label: "COURSEWORK", value: 90 },
    ],
  },
  {
    command: "javac cps209/Hangman.java && java Hangman",
    title: "HANGMAN",
    status: "[OK] JAVA_OOP",
    description:
      "A CPS209 Java project focused on object-oriented programming, classes, collections, state management, and data structures.",
    repo: "https://github.com/Upekcapy/hangman",
    icon: SquareTerminal,
    visual: "hangman",
    tags: ["JAVA", "OOP", "CLASSES", "COLLECTIONS", "DATA_STRUCTURES"],
    metrics: [
      { label: "OOP_DESIGN", value: 84 },
      { label: "STATE_LOGIC", value: 76 },
      { label: "DATA_STRUCTURES", value: 78 },
    ],
  },
];

const contactItems: ContactItem[] = [
  {
    label: "EMAIL",
    value: "upek2007@gmail.com",
    href: "mailto:upek2007@gmail.com",
    icon: Mail,
  },
  {
    label: "PHONE",
    value: "437-235-6374",
    href: "tel:+14372356374",
    icon: Phone,
  },
  {
    label: "WHATSAPP",
    value: "Upek Perera (437-235-6374)",
    href: "https://wa.me/14372356374",
    icon: MessageCircle,
  },
  {
    label: "GITHUB",
    value: "github.com/Upekcapy",
    href: "https://github.com/Upekcapy",
    icon: GitBranch,
  },
  {
    label: "LINKEDIN",
    value: "Upek Perera",
    href: "https://www.linkedin.com/in/upek-perera-6a41b0344/",
    icon: Network,
  },
  {
    label: "DISCORD",
    value: "Just for that!#3043",
    icon: MessageCircle,
  },
  {
    label: "INSTAGRAM",
    value: "Upek Perera",
    icon: Camera,
  },
];

export function PortfolioPage() {
  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.48, ease: terminalEase },
    },
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0a0a] font-mono text-[#33ff00]">
      <div className="crt-overlay pointer-events-none fixed inset-0 z-50 opacity-55" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(51,255,0,0.12),transparent_32%),linear-gradient(180deg,rgba(10,10,10,0)_0%,rgba(10,10,10,0.92)_84%)]" />

      <header className="sticky top-0 z-40 border-b border-[#1f521f] bg-[#0a0a0a]/92">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a
            href="#top"
            className="glitch-link flex min-w-0 items-center gap-3 text-sm font-bold uppercase text-[#33ff00] focus-visible:bg-[#33ff00] focus-visible:text-black focus-visible:outline-none"
          >
            <SquareTerminal size={22} aria-hidden="true" />
            <span className="hidden sm:inline">upek@portfolio:~$</span>
            <span className="inline sm:hidden">upek:~$</span>
            <span className="blink-cursor inline-block h-5 w-3 bg-[#33ff00]" />
          </a>

          <div className="hidden border border-[#1f521f] md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="glitch-link border-r border-[#1f521f] px-4 py-2 text-xs font-bold uppercase last:border-r-0 hover:bg-[#33ff00] hover:text-black focus-visible:bg-[#33ff00] focus-visible:text-black focus-visible:outline-none"
              >
                ./ {item.label}
              </a>
            ))}
          </div>

          <TerminalLink href="#contact" label="CONTACT" icon={ArrowUpRight} />
        </nav>
      </header>

      <section id="top" className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-14">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08 },
            },
          }}
          className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]"
        >
          <motion.div variants={fadeIn}>
            <TerminalWindow title="BOOT_SEQUENCE" command="whoami --coop-ready">
              <div className="space-y-5">
                <div>
                  <h1 className="terminal-glow mt-3 text-4xl font-black uppercase leading-none sm:text-6xl">
                    <span className="typing-line">UPEK PERERA</span>
                    <span
                      className="glitch-title mt-3 block text-2xl text-[#ffb000] sm:text-4xl"
                      data-text="TMU COMPUTER SCIENCE"
                    >
                      TMU COMPUTER SCIENCE
                    </span>
                  </h1>
                </div>
                <PromptLine>
                  Oh hey there! I&apos;m a computer science student at Toronto
                  Metropolitan University and its been its really chill and easy
                  despite my gpa 💀. Excited to join co-op, learn from real
                  engineering teams, and build software that is useful, reliable,
                  and clear!
                </PromptLine>
                <div className="grid gap-2 sm:grid-cols-2">
                  {systemFacts.map(([label, value]) => (
                    <KeyValue
                      key={label}
                      label={label}
                      value={value}
                      className={label === "TARGET" ? "sm:col-span-2" : ""}
                    />
                  ))}
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <TerminalLink
                    href="https://github.com/Upekcapy"
                    label="GITHUB"
                    icon={GitBranch}
                  />
                  <TerminalLink
                    href="https://www.linkedin.com/in/upek-perera-6a41b0344/"
                    label="LINKEDIN"
                    icon={Network}
                  />
                  <TerminalLink href="#projects" label="PROJECTS" icon={Code} />
                </div>
              </div>
            </TerminalWindow>
          </motion.div>

          <motion.div variants={fadeIn}>
            <TerminalWindow title="USER_IMAGE_BUFFER" command="render pfp.png --crt">
              <div className="grid items-center gap-5 sm:grid-cols-[0.75fr_1fr] lg:grid-cols-1 xl:grid-cols-[0.72fr_1fr]">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.25, ease: terminalEase }}
                  className="relative mx-auto size-48 overflow-hidden rounded-full border border-[#33ff00] bg-black sm:size-56 lg:size-52"
                >
                  <Image
                    src="/images/pfp.png"
                    alt="Upek Perera profile photo"
                    fill
                    priority
                    sizes="224px"
                    className="object-cover transition duration-300"
                  />
                </motion.div>
                <div className="space-y-3 text-sm">
                  <StatusRow label="COOP_STATE" value="[OPEN]" tone="ok" />
                  <StatusRow label="PROJECTS" value="04" tone="ok" />
                  <StatusRow label="FOCUS" value="SOFTWARE/GAME_DEV" tone="warn" />
                  <StatusRow label="STACK" value="PY/JAVA/TS/C++" tone="ok" />
                  <pre className="overflow-hidden border border-dashed border-[#1f521f] p-3 text-[10px] leading-4 text-[#1f521f] sm:text-xs">
{`+----------------+
|  BUILD -> SHIP |
|  DEBUG -> LEARN|
|  REPEAT -> OK  |
+----------------+`}
                  </pre>
                  <div className="border border-[#1f521f] bg-black p-3 text-sm leading-7 text-[#ffb000]">
                    Ima be the best video game dev alive trust 😄😄😈
                  </div>
                </div>
              </div>
            </TerminalWindow>
          </motion.div>
        </motion.div>
      </section>

      <Section
        id="about"
        index="01"
        title="ABOUT"
        command="cat about/upek.md"
      >
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <TerminalWindow title="COOP_OBJECTIVE" command="read --intent">
              <div className="space-y-4 text-sm leading-7 text-[#b7ffb7]">
                <p>
                  I care about turning classroom learning into useful software.
                  My goal for co-op is to contribute to a team, improve my
                  technical judgment, and become more confident writing code that
                  other people can understand, maintain, and trust.
                </p>
                <p>
                  I like projects where the code has a purpose: alerts that help
                  traders act in time, games that teach fundamentals, and course
                  support that helps other students understand programming.
                </p>
              </div>
            </TerminalWindow>
          </Reveal>

          <Reveal delay={0.08}>
            <TerminalWindow title="SKILL_MATRIX" command="scan --skills">
              <div className="grid gap-3">
                {skills.map((skill) => (
                  <ProgressBar
                    key={skill.label}
                    label={skill.label}
                    value={skill.value}
                  />
                ))}
              </div>
            </TerminalWindow>
          </Reveal>
        </div>
      </Section>

      <Section
        id="volunteering"
        index="02"
        title="VOLUNTEERING"
        command="ls volunteer/*.log"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {volunteerItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.07}>
              <TerminalWindow title={`LOG_${String(index + 1).padStart(2, "0")}`} command={item.command}>
                <div className="space-y-4">
                  <item.icon className="text-[#ffb000]" size={28} />
                  <h3 className="text-lg font-black uppercase text-[#33ff00]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-7 text-[#b7ffb7]">
                    {item.description}
                  </p>
                </div>
              </TerminalWindow>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        id="projects"
        index="03"
        title="PROJECTS"
        command="find ./projects -maxdepth 1 -type app"
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectPane key={project.title} project={project} index={index} />
          ))}
        </div>
      </Section>

      <Section
        id="contact"
        index="04"
        title="CONTACT"
        command="connect --co-op --send-signal"
      >
        <div className="grid gap-5 lg:grid-cols-[0.86fr_1.14fr]">
          <Reveal>
            <TerminalWindow title="TRANSMIT_MESSAGE" command="mail --compose">
              <div className="space-y-5">
                <Mail className="text-[#ffb000]" size={30} />
                <p className="text-sm leading-7 text-[#b7ffb7]">
                  I am looking forward to co-op roles where I can contribute,
                  receive feedback, and keep improving as a developer. Email is
                  the best first contact; GitHub and LinkedIn are linked too.
                </p>
                <TerminalLink
                  href="mailto:upek2007@gmail.com"
                  label="EMAIL_UPEK"
                  icon={Mail}
                />
              </div>
            </TerminalWindow>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2">
            {contactItems.map((item, index) => (
              <Reveal key={item.label} delay={index * 0.035}>
                <ContactPane item={item} />
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
  index,
  title,
  command,
  children,
}: {
  id: string;
  index: string;
  title: string;
  command: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-14">
      <Reveal className="mb-5">
        <div className="border border-[#1f521f] bg-black">
          <div className="border-b border-[#1f521f] bg-[#33ff00] px-3 py-2 text-xs font-black uppercase text-black">
            [{index}] {title}
          </div>
          <div className="px-3 py-3 text-xs text-[#ffb000]">
            upek@portfolio:~$ {command}
            <span className="blink-cursor ml-1 inline-block h-4 w-2 bg-[#33ff00] align-middle" />
          </div>
        </div>
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.18 }}
      transition={{
        duration: 0.42,
        delay,
        ease: terminalEase,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function TerminalWindow({
  title,
  command,
  children,
}: {
  title: string;
  command: string;
  children: React.ReactNode;
}) {
  return (
    <div className="h-full border border-[#1f521f] bg-[#050805]">
      <div className="flex items-center justify-between gap-3 border-b border-[#1f521f] bg-[#071207] px-3 py-2">
        <p className="min-w-0 truncate text-xs font-black uppercase text-[#33ff00]">
          +-- {title} --+
        </p>
        <p className="hidden text-xs uppercase text-[#1f521f] sm:block">[OK]</p>
      </div>
      <div className="border-b border-dashed border-[#1f521f] px-3 py-2 text-xs text-[#ffb000]">
        $ {command}
      </div>
      <div className="p-4 sm:p-5">{children}</div>
    </div>
  );
}

function PromptLine({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l border-[#1f521f] pl-3">
      <p className="mt-2 text-sm leading-7 text-[#b7ffb7]">{children}</p>
    </div>
  );
}

function KeyValue({
  label,
  value,
  className = "",
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={`grid grid-cols-[6.2rem_1fr] border border-[#1f521f] text-xs ${className}`}>
      <span className="border-r border-[#1f521f] bg-[#071207] px-2 py-2 text-[#ffb000]">
        {label}
      </span>
      <span className="min-w-0 break-words px-2 py-2 text-[#33ff00]">{value}</span>
    </div>
  );
}

function StatusRow({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "ok" | "warn";
}) {
  return (
    <div className="flex items-start justify-between gap-3 border-b border-dashed border-[#1f521f] pb-2">
      <span className="text-[#1f521f]">{label}</span>
      <span className={tone === "warn" ? "text-[#ffb000]" : "text-[#33ff00]"}>
        {value}
      </span>
    </div>
  );
}

function ProgressBar({ label, value }: { label: string; value: number }) {
  const total = 18;
  const filled = Math.round((value / 100) * total);
  const bar = `${"|".repeat(filled)}${".".repeat(total - filled)}`;

  return (
    <div className="grid gap-1 text-xs sm:grid-cols-[11rem_1fr_3rem] sm:items-center">
      <span className="text-[#ffb000]">{label}</span>
      <span className="overflow-hidden whitespace-nowrap text-[#33ff00]">
        [{bar}]
      </span>
      <span className="text-right text-[#b7ffb7]">{value}%</span>
    </div>
  );
}

function TerminalLink({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: LucideIcon;
}) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="terminal-button glitch-link w-full text-xs font-black sm:w-auto"
    >
      <Icon size={16} strokeWidth={2} aria-hidden="true" />
      [ {label} ]
      {isExternal && <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" />}
    </a>
  );
}

function ProjectPane({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={index * 0.08} className={project.featured ? "lg:col-span-2" : ""}>
      <TerminalWindow
        title={`PROJECT_${String(index + 1).padStart(2, "0")}_${project.title.replaceAll(" ", "_")}`}
        command={project.command}
      >
        <motion.article
          whileHover={{ scale: 1.015 }}
          transition={{ duration: 0.18, ease: terminalEase }}
          className={`grid gap-5 ${project.featured ? "lg:grid-cols-[0.82fr_1.18fr]" : ""}`}
        >
          <div className="border border-[#1f521f] bg-black p-3">
            {project.visual ? (
              <ProjectVisual type={project.visual} />
            ) : (
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.18, ease: terminalEase }}
                className="relative flex aspect-[16/10] items-center justify-center overflow-hidden border border-dashed border-[#1f521f] bg-[#020402] p-5"
              >
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.imageAlt ?? project.title}
                    fill
                    sizes="(max-width: 1024px) 88vw, 460px"
                    className="object-contain p-3 transition duration-200"
                  />
                )}
              </motion.div>
            )}
          </div>

          <div className="space-y-5">
            <div>
              <p className="mb-2 inline-flex items-center gap-2 text-xs uppercase text-[#ffb000]">
                <project.icon size={16} aria-hidden="true" />
                {project.status}
              </p>
              <h3 className="terminal-glow text-2xl font-black uppercase leading-tight text-[#33ff00]">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#b7ffb7]">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-[#1f521f] px-2 py-1 text-[11px] font-bold text-[#ffb000]"
                >
                  --{tag.toLowerCase()}
                </span>
              ))}
            </div>

            <div className="grid gap-2">
              {project.metrics.map((metric) => (
                <ProgressBar
                  key={metric.label}
                  label={metric.label}
                  value={metric.value}
                />
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <TerminalLink href={project.repo} label="VIEW_REPO" icon={GitBranch} />
              {project.liveUrl && (
                <TerminalLink
                  href={project.liveUrl}
                  label="LIVE_SITE"
                  icon={ArrowUpRight}
                />
              )}
            </div>
          </div>
        </motion.article>
      </TerminalWindow>
    </Reveal>
  );
}

function ProjectVisual({ type }: { type: "rps" | "hangman" }) {
  if (type === "rps") {
    return (
      <motion.div
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.18, ease: terminalEase }}
        className="flex min-h-52 items-center justify-center border border-dashed border-[#1f521f] bg-[#020402] p-8"
      >
        <div className="grid w-full max-w-sm grid-cols-3 items-center gap-4">
          <div className="aspect-square rounded-full border border-[#33ff00] bg-[#33ff00]/10" />
          <div className="aspect-[0.78/1] border border-[#ffb000] bg-[#ffb000]/10" />
          <div className="relative aspect-square">
            <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 rotate-45 bg-[#33ff00]" />
            <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 -rotate-45 bg-[#33ff00]" />
            <span className="absolute left-1 top-1 size-4 rounded-full border border-[#ffb000]" />
            <span className="absolute bottom-1 right-1 size-4 rounded-full border border-[#ffb000]" />
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.18, ease: terminalEase }}
      className="flex min-h-52 items-center justify-center border border-dashed border-[#1f521f] bg-[#020402] p-8"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 240 180"
        className="h-full max-h-52 w-full max-w-sm text-[#33ff00]"
      >
        <path
          d="M48 156H190M70 156V28H154M154 28V54"
          fill="none"
          stroke="currentColor"
          strokeLinecap="square"
          strokeWidth="6"
        />
        <circle
          cx="154"
          cy="74"
          r="20"
          fill="none"
          stroke="#ffb000"
          strokeWidth="5"
        />
        <path
          d="M154 94V132M124 110H184M154 132L130 156M154 132L178 156"
          fill="none"
          stroke="#ffb000"
          strokeLinecap="square"
          strokeWidth="5"
        />
        <path
          d="M36 28H70M36 156H70M190 156H218"
          fill="none"
          stroke="#1f521f"
          strokeDasharray="8 8"
          strokeWidth="4"
        />
      </svg>
    </motion.div>
  );
}

function ContactPane({ item }: { item: ContactItem }) {
  const content = (
    <>
      <span className="border-r border-[#1f521f] p-3 text-[#ffb000]">
        <item.icon size={18} aria-hidden="true" />
      </span>
      <span className="min-w-0 px-3 py-2">
        <span className="block text-[11px] font-black uppercase text-[#1f521f]">
          {item.label}
        </span>
        <span className="mt-1 block break-words text-xs font-bold text-[#33ff00] sm:text-sm">
          {item.value}
        </span>
      </span>
      {item.href && (
        <ArrowUpRight
          className="ml-auto mr-3 shrink-0 text-[#ffb000]"
          size={16}
          aria-hidden="true"
        />
      )}
    </>
  );

  const className =
    "glitch-link flex min-h-20 items-center border border-[#1f521f] bg-black transition hover:scale-[1.02] hover:bg-[#071207] focus-visible:bg-[#33ff00] focus-visible:text-black focus-visible:outline-none";

  if (!item.href) {
    return <div className={className}>{content}</div>;
  }

  return (
    <a
      href={item.href}
      target={item.href.startsWith("http") ? "_blank" : undefined}
      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={className}
    >
      {content}
    </a>
  );
}
