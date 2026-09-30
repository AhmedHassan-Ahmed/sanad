"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  Camera,
  BriefcaseBusiness,
  Menu,
  MessageCircle,
  MoveUpRight,
  Play,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  Timer,
  Users,
  X,
  Zap,
} from "lucide-react";

const PRODUCT_IMAGE =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cqbbe0xklJI4KKwEURJsYfrpqZJitb.png";
const SANAD_WHATSAPP_NUMBER = "0111";

const navItems = [
  ["Technology", "#technology"],
  ["Features", "#features"],
  ["How it works", "#how-it-works"],
  ["Our team", "#team"],
  ["FAQ", "#faq"],
];

const features = [
  {
    icon: Target,
    title: "Personalized Safe Angle",
    text: "A posture baseline built around your body and your everyday movement.",
  },
  {
    icon: Timer,
    title: "Real-time monitoring",
    text: "Stay aware of how you sit and stand without interrupting your focus.",
  },
  {
    icon: Zap,
    title: "Gentle feedback",
    text: "A subtle vibration helps you notice drift and reset with intention.",
  },
  {
    icon: Smartphone,
    title: "Connected companion app",
    text: "A calm, simple space to understand your posture patterns over time.",
  },
  {
    icon: Sparkles,
    title: "Progress analytics",
    text: "See your consistency grow through clear, easy-to-read insights.",
  },
  {
    icon: ShieldCheck,
    title: "Made for every day",
    text: "Thoughtfully designed to fit into your routine, not take it over.",
  },
];

const teamMembers = [
  {
    name: "Momen Ahmed",
    role: "Social Media Marketing",
    image: "/image copy 2.png",
    color: "from-cyan-400/40 to-slate-800",
  },
  {
    name: "Ahmed Ibrahim",
    role: "R&D",
    image: "/image copy 5.png",
    color: "from-teal-400/40 to-slate-800",
  },
  {
    name: "Yousof Sayed",
    role: "Marketing",
    image: "/image copy 4.png",
    color: "from-sky-400/40 to-slate-800",
  },
  {
    name: "Youssif Ali",
    role: "Application Software Manager",
    image: "/image copy 3.png",
    color: "from-blue-400/40 to-slate-800",
  },
  {
    name: "Ahmed Yahya",
    role: "R&D ",
    image: "/image copy.png",
    color: "from-indigo-400/40 to-slate-800",
  },
  {
    name: "Ahmed Aassan",
    role: "Website Software Manager",
    image: "/image.png",
    color: "from-purple-400/40 to-slate-800",
  },
];

const faqs = [
  [
    "What is SANAD?",
    "SANAD is a smart wearable concept paired with a companion app, designed to help you notice posture patterns and build healthier everyday habits.",
  ],
  [
    "How does the wearable work?",
    "The device is designed to monitor posture relative to a personalized Safe Angle and provide gentle feedback when you move outside that range.",
  ],
  [
    "What is the Safe Angle?",
    "Safe Angle is the posture threshold configured for the wearer. Its exact calculation and final product specifications are to be confirmed as development continues.",
  ],
  [
    "Does SANAD connect to a mobile app?",
    "The SANAD ecosystem is being designed around a companion mobile application for setup and progress insights. Supported devices are to be confirmed.",
  ],
  [
    "When will SANAD be available?",
    "Availability and launch timing are still to be confirmed. Join the community to receive updates from the team.",
  ],
  [
    "How is user data handled?",
    "Our data handling approach and privacy policy are to be confirmed before launch. We are committed to communicating this clearly.",
  ],
];

function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [teamIndex, setTeamIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    interest: "",
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (key: string, value: string | boolean) =>
    setForm((current) => ({ ...current, [key]: value }));
  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Please enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email))
      next.email = "Please enter a valid email address.";
    if (!form.type) next.type = "Please choose an application type.";
    if (!form.message.trim()) next.message = "Please tell us a little more.";
    if (!form.consent) next.consent = "Consent is required to continue.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };
  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) return;
    if (SANAD_WHATSAPP_NUMBER !== "0111") {
      setErrors({
        form: "WhatsApp is not configured yet. Please add SANAD’s international number in the page configuration.",
      });
      return;
    }
    const message = `Hello SANAD Team!\n\nI would like to contact SANAD.\n\nFull Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || "Not provided"}\nApplication Type: ${form.type}\nTeam Role / Interest: ${form.interest || "Not specified"}\n\nMessage:\n${form.message}`;
    window.open(
      `https://wa.me/${SANAD_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#06121f] text-slate-100 selection:bg-cyan-300 selection:text-[#06121f]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#06121f]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a
            href="#home"
            className="flex items-center gap-2.5"
            aria-label="SANAD home"
          >
            <span className="grid size-8 place-items-center rounded-lg bg-cyan-300 text-sm font-black text-[#06121f]">
              S
            </span>
            <span className="text-lg font-bold tracking-[0.28em]">SANAD</span>
          </a>
          <nav
            className="hidden items-center gap-7 lg:flex"
            aria-label="Primary navigation"
          >
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-sm text-slate-400 transition hover:text-cyan-200"
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-[#06121f] transition hover:bg-cyan-200 sm:inline-flex"
          >
            Join SANAD <ArrowRight data-icon="inline-end" />
          </a>
          <button
            className="rounded-lg p-2 lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav
            className="flex flex-col gap-4 border-t border-white/[0.07] px-5 py-6 lg:hidden"
            aria-label="Mobile navigation"
          >
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-slate-300"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-semibold text-cyan-300"
            >
              Join SANAD <ArrowRight className="ml-1 inline size-4" />
            </a>
          </nav>
        )}
      </header>

      <section
        id="home"
        className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-10 px-5 pb-20 pt-36 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:pt-40"
      >
        <div className="pointer-events-none absolute left-[-15%] top-20 size-[500px] rounded-full bg-cyan-400/10 blur-[130px]" />
        <Reveal className="relative z-10">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-3.5 py-2 text-xs font-medium tracking-[0.18em] text-cyan-200 uppercase">
            <span className="size-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_#67e8f9]" />{" "}
            Everyday posture, reimagined
          </div>
          <h1 className="max-w-xl text-5xl font-semibold leading-[1.03] tracking-[-0.05em] text-white sm:text-7xl">
            A smarter way to <span className="text-cyan-300">sit, stand,</span>{" "}
            and move.
          </h1>
          <p className="mt-7 max-w-lg text-lg leading-8 text-slate-400">
            Meet SANAD — a smart wearable designed to monitor your posture,
            provide gentle feedback, and help you build better daily habits.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#technology"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3.5 text-sm font-bold text-[#06121f] transition hover:-translate-y-0.5 hover:bg-cyan-200"
            >
              Discover SANAD <ArrowRight className="size-4" />
            </a>
            <a
              href="#team"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:text-cyan-200"
            >
              Meet our team <MoveUpRight className="size-4" />
            </a>
          </div>
          <div className="mt-12 flex items-center gap-8 border-t border-white/10 pt-6 text-sm text-slate-500">
            <span>
              <strong className="block text-lg text-slate-200">01</strong>
              Wearable
            </span>
            <span>
              <strong className="block text-lg text-slate-200">02</strong>
              Feedback
            </span>
            <span>
              <strong className="block text-lg text-slate-200">03</strong>
              Progress
            </span>
          </div>
        </Reveal>
        <Reveal className="relative">
          <div className="absolute -inset-10 rounded-full bg-cyan-300/10 blur-[90px]" />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-br from-white/10 to-white/[0.02] p-4 shadow-2xl shadow-cyan-950/40"
          >
            <div className="absolute left-8 top-8 rounded-full border border-cyan-200/20 bg-[#06121f]/60 px-3 py-1.5 text-[10px] tracking-[0.18em] text-cyan-200 uppercase">
              Prototype / 01
            </div>
            <img
              src={PRODUCT_IMAGE}
              alt="SANAD posture wearable prototype"
              className="relative w-full rounded-[1.3rem] object-contain mix-blend-screen"
            />
            <div className="flex items-center justify-between border-t border-white/10 px-2 pt-4 text-xs text-slate-500">
              <span>SANAD wearable</span>
              <span className="flex items-center gap-1.5 text-cyan-200">
                <span className="size-1.5 rounded-full bg-cyan-300" /> Concept
                device
              </span>
            </div>
          </motion.div>
        </Reveal>
      </section>

      <section
        id="technology"
        className="border-y border-white/[0.07] bg-[#081a2b] py-24 lg:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
          <Reveal>
            <p className="mb-4 text-xs font-bold tracking-[0.25em] text-cyan-300 uppercase">
              The everyday problem
            </p>
            <h2 className="max-w-md text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              Your body keeps the score.
            </h2>
          </Reveal>
          <Reveal>
            <p className="max-w-2xl text-xl leading-9 text-slate-300">
              Long hours at a desk can make awareness fade. SANAD brings a quiet
              signal back into the moment — helping you notice, reset, and
              create a better rhythm without judgment.
            </p>
            <div className="mt-9 grid gap-5 sm:grid-cols-3">
              <div className="border-l border-cyan-300/50 pl-4">
                <p className="text-2xl font-semibold text-white">Notice</p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Understand your posture in real time.
                </p>
              </div>
              <div className="border-l border-cyan-300/50 pl-4">
                <p className="text-2xl font-semibold text-white">Reset</p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Get a gentle cue, right when it matters.
                </p>
              </div>
              <div className="border-l border-cyan-300/50 pl-4">
                <p className="text-2xl font-semibold text-white">Grow</p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Build lasting awareness over time.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="how-it-works"
        className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32"
      >
        <Reveal>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="mb-4 text-xs font-bold tracking-[0.25em] text-cyan-300 uppercase">
                A simple loop
              </p>
              <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                Small signals. Better habits.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-slate-500">
              Designed to support your awareness — not distract from your day.
            </p>
          </div>
        </Reveal>
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-4">
          {[
            [
              "01",
              "Wear",
              "Put on SANAD and let it become part of your routine.",
            ],
            [
              "02",
              "Monitor",
              "The system learns your personalized Safe Angle.",
            ],
            [
              "03",
              "Feedback",
              "A gentle vibration helps you notice when you drift.",
            ],
            [
              "04",
              "Improve",
              "Review your trends and celebrate steady progress.",
            ],
          ].map(([number, title, text]) => (
            <Reveal key={number}>
              <div className="group h-full bg-[#081a2b] p-7 transition hover:bg-[#0c2439]">
                <span className="text-xs font-bold tracking-[0.2em] text-cyan-300">
                  {number}
                </span>
                <div className="my-10 grid size-12 place-items-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                  <CircleCheck className="size-5" />
                </div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="features" className="bg-[#081a2b] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <p className="mb-4 text-xs font-bold tracking-[0.25em] text-cyan-300 uppercase">
              Thoughtfully built
            </p>
            <h2 className="max-w-xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              Technology that feels human.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, text }) => (
              <Reveal key={title}>
                <article className="group rounded-2xl border border-white/10 bg-[#0b2236]/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30">
                  <div className="mb-12 flex size-11 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:px-8 lg:py-32">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#123653] to-[#081522] p-8 sm:p-12">
            <p className="text-xs font-bold tracking-[0.25em] text-cyan-300 uppercase">
              The companion app
            </p>
            <div className="mt-16 max-w-sm">
              <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white">
                Your progress, in perspective.
              </h2>
              <p className="mt-5 leading-7 text-slate-400">
                An illustrative preview of the future SANAD app experience.
                Final screens and features will be confirmed as the product
                develops.
              </p>
            </div>
            <div className="mt-12 flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="grid size-9 place-items-center rounded-lg bg-cyan-300 text-[#06121f]">
                <Play className="size-4 fill-current" />
              </div>
              <span className="text-sm text-slate-300">
                A calmer way to check in
              </span>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <p className="mb-4 text-xs font-bold tracking-[0.25em] text-cyan-300 uppercase">
            Built around you
          </p>
          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Keep the focus on feeling good.
          </h2>
          <p className="mt-6 leading-8 text-slate-400">
            SANAD is being developed as an everyday companion: discreet when you
            need focus, informative when you want to learn more about your
            patterns.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-cyan-300 hover:text-cyan-200"
          >
            Join the journey <ArrowRight className="size-4" />
          </a>
        </Reveal>
      </section>

      <section
        id="team"
        className="border-y border-white/[0.07] bg-[#081a2b] py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="mb-4 text-xs font-bold tracking-[0.25em] text-cyan-300 uppercase">
                  The people behind SANAD
                </p>
                <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                  Meet the team.
                </h2>
              </div>
              <div className="hidden gap-2 sm:flex">
                <button
                  onClick={() => setTeamIndex(Math.max(0, teamIndex - 1))}
                  disabled={teamIndex === 0}
                  className="grid size-10 place-items-center rounded-full border border-white/10 text-slate-300 transition hover:border-cyan-300/50 disabled:opacity-30"
                  aria-label="Previous team member"
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={() =>
                    setTeamIndex(
                      Math.min(teamMembers.length - 1, teamIndex + 1),
                    )
                  }
                  disabled={teamIndex === teamMembers.length - 1}
                  className="grid size-10 place-items-center rounded-full border border-white/10 text-slate-300 transition hover:border-cyan-300/50 disabled:opacity-30"
                  aria-label="Next team member"
                >
                  <ChevronRight />
                </button>
              </div>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <motion.article
                key={member.role}
                animate={{ opacity: index < teamIndex ? 0.5 : 1 }}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b2236]"
              >
                <div
                  className={`grid aspect-[4/3] place-items-center bg-gradient-to-br ${member.color}`}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="size-20 rounded-full border border-white/20 object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-white">{member.name}</h3>
                  <p className="mt-1 text-sm text-cyan-300">{member.role}</p>
                  <p className="mt-4 text-sm leading-6 text-slate-500">
                    Portrait and bio to be added by the SANAD team.
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
          <div className="mt-7 flex justify-center gap-2 sm:hidden">
            {teamMembers.map((member, index) => (
              <button
                key={member.role}
                onClick={() => setTeamIndex(index)}
                className={`size-1.5 rounded-full ${teamIndex === index ? "bg-cyan-300" : "bg-white/20"}`}
                aria-label={`Show team member ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-5 py-24 lg:py-32">
        <Reveal>
          <p className="mb-4 text-center text-xs font-bold tracking-[0.25em] text-cyan-300 uppercase">
            Good to know
          </p>
          <h2 className="text-center text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Questions, answered.
          </h2>
        </Reveal>
        <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {faqs.map(([question, answer], index) => (
            <div key={question}>
              <button
                className="flex w-full items-center justify-between gap-6 py-6 text-left font-medium text-white"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                aria-expanded={openFaq === index}
              >
                <span>{question}</span>
                <ChevronDown
                  className={`size-5 shrink-0 text-cyan-300 transition ${openFaq === index ? "rotate-180" : ""}`}
                />
              </button>
              {openFaq === index && (
                <p className="max-w-2xl pb-6 pr-8 text-sm leading-7 text-slate-500">
                  {answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="bg-gradient-to-br from-[#0b2a40] to-[#06121f] py-24 lg:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <Reveal>
            <p className="mb-4 text-xs font-bold tracking-[0.25em] text-cyan-300 uppercase">
              Stay close
            </p>
            <h2 className="max-w-md text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              Join the SANAD community.
            </h2>
            <p className="mt-6 max-w-md leading-7 text-slate-400">
              Interested in SANAD, joining our team, or collaborating with us?
              Tell us a little about yourself, and let&apos;s connect.
            </p>
            <div className="mt-10 flex items-center gap-3 text-sm text-slate-400">
              <Users className="size-5 text-cyan-300" /> Early conversations
              shape what comes next.
            </div>
          </Reveal>
          <Reveal>
            <form
              onSubmit={submit}
              className="rounded-3xl border border-white/10 bg-[#06121f]/60 p-6 sm:p-8"
              noValidate
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm text-slate-300">
                  Full name *
                  <input
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-300/60"
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <span className="mt-1 block text-xs text-rose-300">
                      {errors.name}
                    </span>
                  )}
                </label>
                <label className="text-sm text-slate-300">
                  Email address *
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-300/60"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <span className="mt-1 block text-xs text-rose-300">
                      {errors.email}
                    </span>
                  )}
                </label>
                <label className="text-sm text-slate-300">
                  Phone number
                  <input
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-cyan-300/60"
                  />
                </label>
                <label className="text-sm text-slate-300">
                  Application type *
                  <select
                    value={form.type}
                    onChange={(e) => update("type", e.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-[#0b2236] px-4 py-3 text-white outline-none focus:border-cyan-300/60"
                    aria-invalid={!!errors.type}
                  >
                    <option value="">Choose one</option>
                    {[
                      "Join the Team",
                      "Try SANAD",
                      "Partnership",
                      "General Inquiry",
                      "Other",
                    ].map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                  {errors.type && (
                    <span className="mt-1 block text-xs text-rose-300">
                      {errors.type}
                    </span>
                  )}
                </label>
              </div>
              <label className="mt-5 block text-sm text-slate-300">
                Team role or area of interest
                <input
                  value={form.interest}
                  onChange={(e) => update("interest", e.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-cyan-300/60"
                />
              </label>
              <label className="mt-5 block text-sm text-slate-300">
                Message *
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-cyan-300/60"
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <span className="mt-1 block text-xs text-rose-300">
                    {errors.message}
                  </span>
                )}
              </label>
              <label className="mt-5 flex items-start gap-3 text-xs leading-5 text-slate-500">
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) => update("consent", e.target.checked)}
                  className="mt-0.5 accent-cyan-300"
                />
                I agree that my information can be shared with SANAD through
                WhatsApp. *
                {errors.consent && (
                  <span className="text-rose-300"> {errors.consent}</span>
                )}
              </label>
              {errors.form && (
                <p className="mt-5 rounded-lg border border-amber-300/20 bg-amber-300/10 p-3 text-xs text-amber-200">
                  {errors.form}
                </p>
              )}
              <button
                type="submit"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3.5 text-sm font-bold text-[#06121f] transition hover:bg-cyan-200"
              >
                {submitted ? "Open WhatsApp again" : "Continue to WhatsApp"}{" "}
                <ArrowRight className="size-4" />
              </button>
              <p className="mt-4 text-xs text-slate-600">
                WhatsApp will open with your message prefilled. You&apos;ll
                press Send there.
              </p>
            </form>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-white/[0.07] bg-[#04101b] py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-8 sm:flex-row">
            <div>
              <a href="#home" className="flex items-center gap-2.5">
                <span className="grid size-8 place-items-center rounded-lg bg-cyan-300 text-sm font-black text-[#06121f]">
                  S
                </span>
                <span className="text-lg font-bold tracking-[0.28em]">
                  SANAD
                </span>
              </a>
              <p className="mt-4 max-w-xs text-sm leading-6 text-slate-600">
                A smarter way to build awareness around how you move.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xs font-bold tracking-[0.2em] text-slate-500 uppercase">
                Follow SANAD
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/reel/DasY90VNc9g/?igsh=MTZ4dHp3bmp0a3JvZg=="
                  target="_blank"
                  rel="noreferrer"
                  aria-label="SANAD on Instagram"
                  className="grid size-10 place-items-center rounded-full border border-white/10 text-slate-400 transition hover:border-cyan-300/40 hover:text-cyan-300"
                >
                  <Camera className="size-4" />
                </a>
                <a
                  href="https://www.facebook.com/share/19Eq36F1md/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="SANAD on Facebook"
                  className="grid size-10 place-items-center rounded-full border border-white/10 text-slate-400 transition hover:border-cyan-300/40 hover:text-cyan-300"
                >
                  <span className="text-sm font-bold">f</span>
                </a>
                <a
                  href="https://vt.tiktok.com/ZSXFqPrQo/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="SANAD on TikTok"
                  className="grid size-10 place-items-center rounded-full border border-white/10 text-slate-400 transition hover:border-cyan-300/40 hover:text-cyan-300"
                >
                  <span className="text-xs font-bold">♪</span>
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="SANAD on LinkedIn"
                  className="grid size-10 place-items-center rounded-full border border-white/10 text-slate-400 transition hover:border-cyan-300/40 hover:text-cyan-300"
                >
                  <BriefcaseBusiness className="size-4" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-3 border-t border-white/[0.07] pt-6 text-xs text-slate-600 sm:flex-row">
            <span>
              © {new Date().getFullYear()} SANAD. All rights reserved.
            </span>
            <span>Contact details coming soon.</span>
          </div>
        </div>
      </footer>
      <a
        href="#contact"
        className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-cyan-300 text-[#06121f] shadow-lg shadow-cyan-950/50 transition hover:scale-105"
        aria-label="Contact SANAD"
      >
        <MessageCircle className="size-6" />
      </a>
    </main>
  );
}
