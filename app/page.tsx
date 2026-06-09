'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  Home, User, Briefcase, Mail, GraduationCap,
  Globe, Phone, MapPin, Sun, Moon, Linkedin, Twitter, Github, Codepen, X,
  ArrowUpRight, ChevronRight, ExternalLink,
} from 'lucide-react';
import CvButton from '@/components/ui/cvButton';
import Divider from '@/components/ui/divider';
import { education, portfolioItems, Skills, timeline } from '@/components/data';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

// ── Animated counter ──────────────────────────────────────────────────────────
function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.disconnect();
        let n = 0;
        const step = () => {
          n += to / 55;
          if (n >= to) { setVal(to); return; }
          setVal(Math.floor(n));
          requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.5 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);

  return <span ref={ref}>{val}{suffix}</span>;
}

// ── Cursor ────────────────────────────────────────────────────────────────────
function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ring position — lerped separately in a rAF loop
    let rx = 0, ry = 0;
    let mx = 0, my = 0;
    let af = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate(${mx - 3}px, ${my - 3}px)`;
      }
    };

    const loop = () => {
      rx += (mx - rx) * 0.10;
      ry += (my - ry) * 0.10;
      if (ring.current) {
        ring.current.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
      }
      af = requestAnimationFrame(loop);
    };

    loop();
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(af);
    };
  }, []);

  return (
    <>
      <div ref={dot} className="cursor-dot" />
      <div ref={ring} className="cursor-ring" />
    </>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDark, setIsDark] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  type PItem = typeof portfolioItems[number];
  const [modal, setModal] = useState<PItem | null>(null);

  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const portfolioRef = useRef<HTMLElement>(null);
  const educationRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const sectionRefs = {
    home: homeRef,
    about: aboutRef,
    portfolio: portfolioRef,
    education: educationRef,
    contact: contactRef,
  };

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 700], [0, -140]);
  const heroOpa = useTransform(scrollY, [0, 480], [1, 0]);

  // lock body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = modal ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [modal]);

  // escape key closes modal
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') setModal(null); };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, []);

  // intersection observer for active nav
  useEffect(() => {
    setIsLoaded(true);

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = e.target.getAttribute('id');
            if (id) setActiveSection(id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 },
    );

    const refs = [homeRef, aboutRef, portfolioRef, educationRef, contactRef];
    refs.forEach((r) => r.current && obs.observe(r.current));
    return () => obs.disconnect();
  }, []);

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'portfolio', icon: Briefcase, label: 'Work' },
    { id: 'education', icon: GraduationCap, label: 'Education' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  const scrollTo = (id: string) => {
    sectionRefs[id as keyof typeof sectionRefs].current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div
      className={[
        'min-h-screen overflow-x-hidden transition-opacity duration-500',
        isDark ? 'dark bg-[#080808]' : 'bg-[#f5f4f0]',
        isLoaded ? 'opacity-100' : 'opacity-0',
      ].join(' ')}
    >
      <style>{`
        html { scroll-behavior: smooth; }
        * { cursor: none !important; }
        ::-webkit-scrollbar { width: 2px; }
        ::-webkit-scrollbar-thumb { background: #e85d26; }

        .cursor-dot  {
          position: fixed; top: 0; left: 0;
          width: 6px; height: 6px;
          background: #e85d26; border-radius: 50%;
          pointer-events: none; z-index: 9999;
          will-change: transform;
        }
        .cursor-ring {
          position: fixed; top: 0; left: 0;
          width: 36px; height: 36px;
          border: 1.5px solid rgba(232,93,38,.32); border-radius: 50%;
          pointer-events: none; z-index: 9998;
          will-change: transform;
        }

        /* Large ghost section number */
        .sn {
          font-size: clamp(70px, 11vw, 148px);
          font-weight: 900; line-height: 1;
          color: transparent;
          -webkit-text-stroke: 1px rgba(232,93,38,.09);
          position: absolute; top: -.15em; right: -.02em;
          pointer-events: none; user-select: none;
        }

        /* Marquee */
        @keyframes mq { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .mq-inner { display: flex; white-space: nowrap; animation: mq 22s linear infinite; }

        /* Timeline connector */
        .tl-bar { width: 1px; background: linear-gradient(to bottom, #e85d26, transparent); }

        /* Skill pill */
        .s-pill {
          display: flex; align-items: center; gap: .45rem;
          padding: .38rem .85rem; border-radius: 99px;
          font-size: .77rem; font-weight: 500; border: 1px solid;
          transition: all .22s;
        }
        .dark .s-pill { border-color: rgba(255,255,255,.1); color: rgba(255,255,255,.6); }
        .s-pill       { border-color: rgba(0,0,0,.11);      color: rgba(0,0,0,.58); }
        .s-pill:hover  { border-color: #e85d26; color: #e85d26; }

        /* Bento project cards */
        .p-card {
          position: relative; overflow: hidden; border-radius: 1.25rem;
          cursor: pointer; will-change: transform;
          transition: transform .5s cubic-bezier(.16,1,.3,1), box-shadow .5s;
        }
        .p-card:hover { transform: translateY(-6px) scale(1.015); box-shadow: 0 30px 70px rgba(0,0,0,.45); }
        .p-card-img { width: 100%; height: 100%; object-fit: cover; transition: transform .7s cubic-bezier(.16,1,.3,1); }
        .p-card:hover .p-card-img { transform: scale(1.07); }
        .p-card-veil {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,.9) 0%, rgba(0,0,0,.25) 55%, transparent 100%);
          transition: opacity .35s;
        }
        .p-card:hover .p-card-veil { opacity: .88; }
        .p-card-body {
          position: absolute; bottom: 0; left: 0; right: 0; padding: 1.4rem;
          transition: transform .4s cubic-bezier(.16,1,.3,1);
        }
        .p-card:hover .p-card-body { transform: translateY(-4px); }
        .p-card-pin {
          position: absolute; top: .9rem; right: .9rem;
          width: 36px; height: 36px; border-radius: 50%;
          background: rgba(255,255,255,.1); backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,.15);
          display: flex; align-items: center; justify-content: center;
          opacity: 0; transform: scale(.75);
          transition: opacity .3s, transform .3s;
        }
        .p-card:hover .p-card-pin { opacity: 1; transform: scale(1); }

        /* Modal scrollbar */
        .modal-scroll::-webkit-scrollbar { width: 2px; }
        .modal-scroll::-webkit-scrollbar-thumb { background: rgba(232,93,38,.35); }

        /* Ambient orb */
        .orb { position: absolute; border-radius: 50%; filter: blur(90px); pointer-events: none; z-index: 0; }
      `}</style>

      <Cursor />

      {/* ── Side nav ── */}
      <nav
        className={[
          'fixed right-5 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2',
          'transition-all duration-700',
          isLoaded ? 'opacity-100' : 'opacity-0 translate-x-8',
        ].join(' ')}
      >
        {navItems.map((s) => {
          const Icon = s.icon;
          const active = activeSection === s.id;
          return (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              title={s.label}
              className="group relative flex items-center justify-end"
            >
              <span
                className={[
                  'absolute right-8 text-[10px] font-semibold tracking-widest uppercase',
                  'whitespace-nowrap pr-1.5 transition-all duration-250',
                  active
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0',
                  'dark:text-white/55 text-black/45',
                ].join(' ')}
              >
                {s.label}
              </span>
              <div
                className={[
                  'w-6 h-6 rounded-full flex items-center justify-center transition-all duration-250',
                  active
                    ? 'bg-orange-500 shadow-[0_0_16px_rgba(232,93,38,.55)] scale-110'
                    : 'border dark:border-white/10 border-black/10',
                ].join(' ')}
              >
                <Icon className="w-2.5 h-2.5" style={{ color: active ? '#fff' : '#f97316' }} />
              </div>
            </button>
          );
        })}
      </nav>

      {/* ── Theme toggle ── */}
      <button
        onClick={() => setIsDark(!isDark)}
        className={[
          'fixed top-5 right-5 z-50 w-9 h-9 rounded-full',
          'border dark:border-white/10 border-black/10',
          'dark:bg-white/5 bg-black/5',
          'flex items-center justify-center',
          'hover:border-orange-500/50 transition-all duration-250 hover:scale-110',
          isLoaded ? 'opacity-100' : 'opacity-0',
        ].join(' ')}
      >
        {isDark
          ? <Sun className="w-3.5 h-3.5 text-orange-400" />
          : <Moon className="w-3.5 h-3.5 text-gray-600" />}
      </button>

      {/* ════════════ HOME ════════════ */}
      <section
        id="home"
        ref={sectionRefs.home}
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        <div className="orb w-[460px] h-[460px] bg-orange-500/9 -top-28 -right-28" />
        <div className="orb w-[240px] h-[240px] bg-orange-500/5 bottom-14 left-8" />

        {/* Bottom fade into next section */}
        <div className="pointer-events-none absolute bottom-0 inset-x-0 h-32 z-10
          dark:bg-gradient-to-t dark:from-[#080808] to-transparent
          bg-gradient-to-t from-[#f5f4f0] to-transparent" />

        <motion.div
          style={{ y: heroY, opacity: heroOpa }}
          className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-14 py-28
            grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"
        >
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .82, ease: [.16, 1, .3, 1] }}
            className="space-y-6 order-2 lg:order-1"
          >
            <motion.p
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: .22, duration: .5 }}
              className="text-orange-500 text-[10px] tracking-[.32em] uppercase font-bold"
            >
              Full-Stack Developer
            </motion.p>

            <h1 className="text-[3.2rem] sm:text-[4.5rem] lg:text-[5.5rem] font-black leading-[.93] tracking-tight">
              <span className="dark:text-white text-gray-900 block">Hamza</span>
              <span className="text-orange-500 block">Hamid.</span>
            </h1>

            <p className="text-sm dark:text-white/42 text-gray-500 leading-[1.85] max-w-md font-light">
              I craft fast, sharp, and accessible web experiences.
              React · Next.js · .NET · Azure.
            </p>

            <div className="flex items-center gap-5 flex-wrap">
              <CvButton />
              <button
                onClick={() => scrollTo('portfolio')}
                className="group flex items-center gap-1.5 text-sm font-medium
                  dark:text-white/45 text-gray-400 hover:text-orange-500 transition-colors duration-250"
              >
                See my work
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </button>
            </div>

            <div className="flex gap-8 pt-4 border-t dark:border-white/8 border-black/8">
              {[
                { l: 'Years', v: 3, s: '+' },
                { l: 'Projects', v: 15, s: '+' },
                { l: 'Stack', v: 12, s: '' },
              ].map((st) => (
                <div key={st.l}>
                  <p className="text-[1.55rem] font-black dark:text-white text-gray-900 leading-none">
                    <Counter to={st.v} suffix={st.s} />
                  </p>
                  <p className="text-[9px] dark:text-white/32 text-gray-400 uppercase tracking-[.22em] mt-1">
                    {st.l}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: .88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .82, delay: .1, ease: [.16, 1, .3, 1] }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] border border-orange-500/14 scale-110" />
              <div className="absolute inset-0 rounded-[2rem] border border-orange-500/06 scale-[1.22]" />
              <Image
                src="/assets/me.png"
                alt="Hamza Hamid"
                width={380}
                height={480}
                priority
                className="relative z-10 w-48 h-64 sm:w-64 sm:h-80 lg:w-[320px] lg:h-[420px]
                  object-cover rounded-[2rem] shadow-[0_30px_75px_rgba(0,0,0,.55)]"
              />
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                className="absolute -bottom-3 -left-3 z-20 bg-orange-500 text-white
                  text-[10px] font-bold px-3 py-1.5 rounded-xl shadow-lg shadow-orange-500/28"
              >
                🚀 Open to work
              </motion.div>
              <motion.div
                animate={{ y: [3, -3, 3] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
                className="absolute -top-3 -right-3 z-20 dark:bg-white/10 bg-white/90
                  backdrop-blur-md border dark:border-white/8 border-black/8
                  text-[10px] font-semibold dark:text-white text-gray-800
                  px-3 py-1.5 rounded-xl shadow-lg"
              >
                React · .NET · Azure
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5"
        >
          <div className="w-px h-9 bg-gradient-to-b from-orange-500 to-transparent" />
          <p className="text-[9px] tracking-[.32em] uppercase dark:text-white/22 text-gray-400">scroll</p>
        </motion.div>
      </section>

      {/* ── Tech marquee ── */}
      <div className="overflow-hidden border-y dark:border-white/5 border-black/5 py-3">
        <div className="mq-inner">
          {[...Array(2)].map((_, r) => (
            <span key={r} className="flex items-center">
              {[
                'React', 'Next.js', 'TypeScript', '.NET', 'C#',
                'Azure', 'SignalR', 'SQL', 'Tailwind', 'REST APIs', 'Git', 'Docker',
              ].map((t, i) => (
                <span key={i} className="flex items-center">
                  <span className="px-6 dark:text-white/22 text-gray-400 text-[11px] tracking-[.2em] uppercase font-light">
                    {t}
                  </span>
                  <span className="text-orange-500/35 text-xs">◆</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ════════════ ABOUT ════════════ */}
      <section
        id="about"
        ref={sectionRefs.about}
        className="relative min-h-screen py-24 sm:py-32 px-6 sm:px-14 overflow-hidden"
      >
        <span className="sn">02</span>
        <div className="relative z-10 max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .5 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-12"
          >
            <div className="w-6 h-px bg-orange-500" />
            <p className="text-orange-500 text-[10px] tracking-[.32em] uppercase font-bold">About Me</p>
          </motion.div>

          {/* Bio + illustration */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .6 }}
              viewport={{ once: true }}
              className="lg:col-span-3 space-y-5"
            >
              <h2 className="text-3xl sm:text-5xl font-black dark:text-white text-gray-900 leading-tight">
                Building products that <span className="text-orange-500">matter</span>.
              </h2>
              <p className="text-sm dark:text-white/42 text-gray-500 leading-[1.85] font-light">
                Full-Stack developer with 3+ years delivering React/Next.js frontends and C# ASP.NET backends.
                Real-time apps with SignalR, Microsoft Graph API integrations, Azure deployments, and SQL schemas
                designed to scale. I treat clean code as a standard, not a preference.
              </p>
              <p className="text-sm dark:text-white/42 text-gray-500 leading-[1.85] font-light">
                Outside of code I&apos;m exploring new UI patterns, contributing to open source, and always searching
                for the gap between a good product and a great one.
              </p>
              <div className="pt-1"><CvButton /></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 22 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .6, delay: .1 }}
              viewport={{ once: true }}
              className="lg:col-span-2 flex items-center justify-center"
            >
              <Image
                src="/assets/aboutMe.png"
                alt="Developer illustration"
                width={380}
                height={380}
                className="rounded-3xl object-cover w-full max-w-xs lg:max-w-full"
              />
            </motion.div>
          </div>

          <Divider />

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .5 }}
            viewport={{ once: true }}
            className="my-14"
          >
            <p className="text-orange-500 text-[10px] tracking-[.32em] uppercase font-bold mb-10">
              Skills &amp; Tools
            </p>

            <div className="space-y-8">
              {['Frontend', 'Backend', 'Cloud & Tools', 'Testing'].map((group) => {
                const items = Skills.hard.filter(s => s.label === group);
                return (
                  <div key={group}>
                    <p className="text-[9px] tracking-[.28em] uppercase font-semibold
            dark:text-white/25 text-gray-400 mb-3">
                      {group}
                    </p>
                    <div className="grid grid-cols-[repeat(auto-fill,minmax(110px,1fr))] gap-2">
                      {items.map((item, i) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: .26, delay: i * .032 }}
                          viewport={{ once: true }}
                          className="group flex flex-col items-start gap-2.5 p-3.5
                  rounded-[14px]
                  border dark:border-white/[.07] border-black/[.07]
                  dark:bg-white/[.03] bg-black/[.025]
                  hover:border-orange-500/35
                  dark:hover:bg-orange-500/[.06] hover:bg-orange-500/[.04]
                  hover:-translate-y-0.5
                  transition-all duration-220 cursor-default"
                        >
                          <div className="w-8 h-8 rounded-lg bg-orange-500/10
                  flex items-center justify-center shrink-0">
                            <Image
                              src={item.icon}
                              width={18} height={18}
                              alt=""
                              className="w-[18px] h-[18px] object-contain"
                            />
                          </div>
                          <span className="text-xs font-medium leading-snug
                  dark:text-white/60 text-gray-500
                  group-hover:dark:text-white/90 group-hover:text-gray-800
                  transition-colors duration-200">
                            {item.text}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <Divider />

          {/* Experience timeline */}
          <div className="mt-14">
            <p className="text-orange-500 text-[10px] tracking-[.32em] uppercase font-bold mb-9">Experience</p>
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: .5, delay: i * .08 }}
                viewport={{ once: true }}
                className="grid grid-cols-[18px_1fr] gap-5"
              >
                <div className="flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-orange-500 ring-[3px] ring-orange-500/18 shrink-0 z-10 mt-1" />
                  {i < timeline.length - 1 && (
                    <div className="tl-bar flex-1 mt-1.5 min-h-[56px]" />
                  )}
                </div>
                <div className="pb-9">
                  <span className="text-[10px] bg-orange-500/10 text-orange-500
                    border border-orange-500/18 px-2.5 py-0.5 rounded-full font-bold">
                    {item.duration}
                  </span>
                  <h4 className="text-lg font-black dark:text-white text-gray-900 mt-2 mb-0.5">
                    {item.title}{' '}
                    <span className="text-orange-500 font-normal text-base">— {item.company}</span>
                  </h4>
                  <ul className="mt-2 space-y-1">
                    {item.points.map((p, j) => (
                      <li key={j} className="flex items-start gap-2 dark:text-white/42 text-gray-500 text-sm">
                        <ChevronRight className="w-3 h-3 text-orange-500 mt-0.5 shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ PORTFOLIO ════════════ */}
      <section
        id="portfolio"
        ref={sectionRefs.portfolio}
        className="relative py-24 sm:py-32 px-6 sm:px-14 overflow-hidden"
      >
        <span className="sn">03</span>
        <div className="pointer-events-none absolute bottom-0 inset-x-0 h-32 z-10
          dark:bg-gradient-to-t dark:from-[#080808] to-transparent
          bg-gradient-to-t from-[#f5f4f0] to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .5 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-5"
          >
            <div className="w-6 h-px bg-orange-500" />
            <p className="text-orange-500 text-[10px] tracking-[.32em] uppercase font-bold">Selected Work</p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .5, delay: .07 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-black dark:text-white text-gray-900 mb-12 leading-tight"
          >
            Projects I&apos;m<br />proud of.
          </motion.h2>

          {/* Bento grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[260px] gap-3.5">
            {portfolioItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: .5, delay: i * .065 }}
                viewport={{ once: true }}
                onClick={() => setModal(item)}
                className={[
                  'p-card',
                  i === 0 ? 'sm:col-span-2 lg:col-span-2' : '',
                  i === 1 ? 'sm:row-span-2' : '',
                ].join(' ')}
              >
                <Image src={item.image} alt={item.title} fill className="p-card-img" />
                <div className="p-card-veil" />
                <div className="p-card-pin">
                  <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="p-card-body">
                  <div className="flex flex-wrap gap-1.5 mb-2.5">
                    {item.technologies?.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-[9px] font-bold bg-orange-500/80 text-white
                          px-2 py-0.5 rounded-full tracking-wide"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-white font-black text-lg leading-tight mb-1">{item.title}</h3>
                  <p className="text-white text-xs line-clamp-2 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ PROJECT MODAL ════════════ */}
      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .25 }}
            className="fixed inset-0 z-[999] flex items-end sm:items-center justify-center p-0 sm:p-6"
            onClick={() => setModal(null)}
          >
            <div className="absolute inset-0 bg-black/72 backdrop-blur-[12px]" />

            <motion.div
              initial={{ y: 60, opacity: 0, scale: .97 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 60, opacity: 0, scale: .97 }}
              transition={{ duration: .4, ease: [.16, 1, .3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="modal-scroll relative z-10 w-full sm:max-w-2xl max-h-[92vh]
                overflow-y-auto overscroll-contain
                dark:bg-[#121212] bg-white
                rounded-t-[1.75rem] sm:rounded-[1.75rem]
                shadow-[0_40px_100px_rgba(0,0,0,.75)]"
            >
              {/* Hero image */}
              <div className="relative w-full h-52 sm:h-64 rounded-t-[1.75rem] overflow-hidden shrink-0">
                <Image src={modal.decImage} alt={modal.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
                <button
                  onClick={() => setModal(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full
                    bg-black/38 backdrop-blur-sm border border-white/14
                    flex items-center justify-center
                    hover:bg-orange-500 transition-colors duration-200"
                >
                  <X className="w-3.5 h-3.5 text-white" />
                </button>
                <div className="absolute bottom-5 left-5 right-12">
                  <p className="text-orange-400 text-[9px] tracking-[.32em] uppercase font-bold mb-0.5">Project</p>
                  <h2 className="text-white text-xl sm:text-2xl font-black leading-tight">{modal.title}</h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-7">
                <p className="dark:text-white/52 text-gray-500 text-sm leading-[1.85] mb-7">
                  {modal.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-[1fr_160px] gap-6">
                  {/* Points */}
                  <div>
                    <p className="text-orange-500 text-[9px] tracking-[.32em] uppercase font-bold mb-3.5">
                      What I built
                    </p>
                    <ul className="space-y-2.5">
                      {modal.points?.map((pt, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 dark:text-white/62 text-gray-600 text-sm leading-relaxed"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-[5px] shrink-0" />
                          {pt}
                        </li>
                      ))}
                    </ul>

                    <div className="flex gap-2.5 mt-6 flex-wrap">
                      {modal.github && (
                        <a href={modal.github} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                          <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl
                            bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold transition-colors duration-200">
                            <Github className="w-3.5 h-3.5" /> Code
                          </button>
                        </a>
                      )}
                      {modal.link && (
                        <a href={modal.link} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                          <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl
                            dark:bg-white/7 bg-black/6 dark:text-white text-gray-800
                            dark:hover:bg-white/12 hover:bg-black/10
                            text-sm font-bold transition-colors duration-200">
                            <ExternalLink className="w-3.5 h-3.5" /> Live
                          </button>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Stack */}
                  <div className="dark:bg-white/[.04] bg-black/[.03] rounded-2xl p-4 h-fit">
                    <p className="text-orange-500 text-[9px] tracking-[.32em] uppercase font-bold mb-3">Stack</p>
                    <div className="space-y-1.5">
                      {modal.technologies?.map((tech) => (
                        <div key={tech} className="flex items-center gap-2 text-sm dark:text-white/52 text-gray-600">
                          <div className="w-1 h-1 rounded-full bg-orange-500 shrink-0" />
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ════════════ EDUCATION ════════════ */}
      <section
        id="education" ref={sectionRefs.education}
        className="relative min-h-screen py-24 sm:py-32 px-6 sm:px-14 overflow-hidden">
         <div className="orb w-[320px] h-[320px] bg-orange-500/6 bottom-0 left-1/2 -translate-x-1/2 z-0" />
        <span className="sn">04</span>
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }} viewport={{ once: true }}
            className="flex items-center gap-4 mb-16"
          >
            <div className="w-8 h-px bg-orange-500" />
            <p className="text-orange-500 text-xs tracking-[.25em] uppercase font-medium">Education &amp; Certs</p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .6, delay: .1 }} viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-black dark:text-white text-gray-900 mb-16"
          >
            Always learning.
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {education.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: .5, delay: i * .06 }} viewport={{ once: true }}
                className="group relative dark:bg-white/[.03] bg-black/[.03]
                  border dark:border-white/[.06] border-black/[.06]
                  rounded-2xl p-6 hover:border-orange-500/30
                  hover:shadow-[0_0_40px_rgba(232,93,38,.08)]
                  transition-all duration-400 overflow-hidden"
              >
                {/* BG accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-full
                  -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />

                <span className="inline-block text-xs bg-orange-500/10 text-orange-500
                  border border-orange-500/20 px-3 py-1 rounded-full font-medium mb-4">
                  {item.year}
                </span>
                <h4 className="text-base font-bold dark:text-white text-gray-900 leading-snug mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-orange-500 font-medium">{item.institution}</p>
                <p className="text-xs dark:text-white/30 text-gray-400 mt-1">
                  {item.type === 1 ? '🎓 Education' : '📜 Certification'}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════ CONTACT ════════════ */}
      <section
        id="contact"
        ref={sectionRefs.contact}
        className="relative min-h-screen py-24 sm:py-32 px-6 sm:px-14 overflow-hidden"
      >
        <div className="orb w-[320px] h-[320px] bg-orange-500/6 bottom-0 left-1/2 -translate-x-1/2 z-0" />
        <span className="sn">05</span>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .5 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-12"
          >
            <div className="w-6 h-px bg-orange-500" />
            <p className="text-orange-500 text-[10px] tracking-[.32em] uppercase font-bold">Contact</p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .5, delay: .07 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-6xl lg:text-7xl font-black dark:text-white text-gray-900 mb-4 leading-none"
          >
            Let&apos;s build<br /><span className="text-orange-500">something</span><br />together.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .5, delay: .12 }}
            viewport={{ once: true }}
            className="dark:text-white/35 text-gray-400 text-sm mb-12 max-w-xs font-light"
          >
            Open to roles, freelance, and interesting collabs.
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -22 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .55 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              {[
                { icon: MapPin, label: 'Location', value: 'Lahore, Pakistan' },
                { icon: Mail, label: 'Email', value: 'hamza.hamid9055@gmail.com' },
                { icon: Phone, label: 'Mobile', value: '+92 315 4287721' },
                { icon: Globe, label: 'Languages', value: 'English, Urdu' },
              ].map((c, i) => {
                const Icon = c.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: .35, delay: i * .06 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-8 h-8 rounded-xl dark:bg-white/5 bg-black/5
                      flex items-center justify-center shrink-0
                      group-hover:bg-orange-500/10 transition-colors duration-220">
                      <Icon className="w-3.5 h-3.5 text-orange-500" />
                    </div>
                    <div>
                      <p className="text-[9px] dark:text-white/1 text-gray-400 uppercase tracking-[.22em]">
                        {c.label}
                      </p>
                      <p className="dark:text-orange-500 text-gray-700 text-sm font-semibold">{c.value}</p>
                    </div>
                  </motion.div>
                );
              })}

              {/* Social links */}
              <div className="flex gap-2 pt-2.5">
                {[
                  { icon: Twitter, href: 'https://x.com/hamzahamid09', label: 'Twitter' },
                  { icon: Github, href: 'https://github.com/hamza9055', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/hamza-hamid9055/', label: 'LinkedIn' },
                  { icon: Codepen, href: 'https://codepen.io/hamza9055', label: 'CodePen' },
                ].map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <motion.button
                      key={i}
                      initial={{ opacity: 0, scale: .5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: .26, delay: i * .045 }}
                      viewport={{ once: true }}
                      onClick={() => window.open(s.href, '_blank')}
                      aria-label={s.label}
                      className="w-8 h-8 rounded-xl dark:bg-orange-500/5 bg-black/5
                        flex items-center justify-center
                        hover:bg-orange-500 transition-all duration-220
                        hover:scale-110 hover:-translate-y-0.5
                        dark:text-white/42 text-gray-500 hover:text-white"
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>

            {/* Contact image */}
            <motion.div
              initial={{ opacity: 0, x: 22 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .55, delay: .1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden min-h-[17rem]"
            >
              <Image src="/assets/contact.png" alt="Contact" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/16 to-transparent" />
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-6 border-t dark:border-white/5 border-black/5
          flex flex-col sm:flex-row items-center justify-between gap-2.5
          max-w-7xl mx-auto relative z-10">
          <p className="text-[10px] dark:text-white/16 text-gray-400">
            © {new Date().getFullYear()} Hamza Hamid. All rights reserved.
          </p>
          <p className="text-[10px] dark:text-white/16 text-gray-400">
            Built with Next.js · Framer Motion
          </p>
        </div>
      </section>
    </div>
  );
}