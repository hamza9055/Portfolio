'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Home, User, Briefcase, FileText, Mail, Download, Github, Youtube, Facebook, Twitter, MapPin, GraduationCap, Globe, Phone, Sun, Moon, Linkedin, Code, Codepen, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import CvButton from '@/components/ui/cvButton';
import Divider from '@/components/ui/divider';
import { education, portfolioItems, Skills, timeline } from '@/components/data';
import Link from 'next/link';
import { RiRadioButtonFill } from 'react-icons/ri';
import { motion, AnimatePresence } from "framer-motion";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDark, setIsDark] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  type PortfolioItem = typeof portfolioItems[number];
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [openDrawerId, setOpenDrawerId] = useState(null);

  const sectionRefs = {
    home: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    portfolio: useRef<HTMLElement>(null),
    education: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  useEffect(() => {
    setIsLoaded(true);

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('id');
          if (sectionId) setActiveSection(sectionId);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const sections = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'portfolio', icon: Briefcase, label: 'Portfolio' },
    { id: 'education', icon: GraduationCap, label: 'Education' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = sectionRefs[sectionId as keyof typeof sectionRefs].current;
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCardClick = (item: any) => {
    if (openDrawerId === item.id) {
      setOpenDrawerId(null);
      setSelectedProject(null);
    } else {
      setSelectedProject(item);
      setOpenDrawerId(item.id);
    }
  };

  const closeDrawer = () => {
    setOpenDrawerId(null);
    setSelectedProject(null);
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDark ? 'dark bg-gray-900' : 'bg-gray-50'} ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Navigation Controls */}
      <div className={`fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4 transition-all duration-700 delay-300 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}>
        {sections.map((section, index) => {
          const Icon = section.icon;
          return (
            <Button
              key={section.id}
              variant={activeSection === section.id ? "default" : "outline"}
              size="icon"
              onClick={() => scrollToSection(section.id)}
              className={`md:w-12 md:h-12 w-8 h-8 rounded-full transition-all duration-300 hover:scale-110 ${activeSection === section.id
                ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/30 scale-110'
                : 'bg-white/10 backdrop-blur-sm hover:bg-white/20 border-white/20 hover:shadow-lg'
                }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Icon className="w-4 h-4 md:w-5 md:h-5" />
            </Button>
          );
        })}
      </div>

      {/* Theme Toggle */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => setIsDark(!isDark)}
        className={`fixed top-8 right-8 z-50 md:w-12 md:h-12 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 border-white/20 transition-all duration-700 delay-500 hover:scale-110 hover:rotate-180 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`}
      >
        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </Button>

      {/* Home Section */}
      <section id="home" ref={sectionRefs.home} className="min-h-screen flex items-center justify-center px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <Image
                src="/assets/me.png"
                alt="Hamza Hamid"
                width={320}
                height={320}
                className="relative z-10 w-80 h-80 object-cover rounded-full border-4 border-orange-500/30 shadow-2xl hover:scale-105 transition-transform duration-500 hover:shadow-orange-500/20"
                style={{ width: '320px', height: '320px' }}
                priority
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-6"
          >
            <h1 className="text-gray-600 text-2xl lg:text-6xl font-bold">
              <span className='dark:text-gray-300'>Hi, I&apos;m </span><span className="text-orange-500">Hamza Hamid.</span>
              <br />
              <span className="text-3xl lg:text-4xl text-gray-600 dark:text-gray-300">A Web Developer.</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I&apos;m a passionate Web Developer who loves creating beautiful and functional websites. I specialize in modern web technologies like React, Next.js, and .NET, and I enjoy bringing creative ideas to life through code.
            </p>
            <CvButton />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={sectionRefs.about} className="min-h-screen py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 dark:text-gray-300">
              About <span className="text-orange-500">Me</span>
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold dark:text-orange-500">
                Information About Me
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I am a Full-Stack Web Developer with 2+ years of experience in React.js, Next.js, TypeScript, and C# (ASP.NET). Skilled in building scalable web applications, I work with RESTful APIs, SQL databases, Azure services, Microsoft Graph APIs, and SignalR for real-time communication. I focus on writing clean, maintainable code and creating responsive, user-friendly interfaces that deliver excellent experiences.
              </p>
              <CvButton />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center items-center"
            >
              <Image
                src="/assets/aboutMe.png"
                alt="Developer illustration"
                width={500}
                height={500}
                className="rounded-2xl object-cover hover:shadow-xl transition-shadow duration-500 hover:shadow-orange-500/20"
                priority
              />
            </motion.div>
          </div>


          <Divider />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-semibold mb-8 dark:text-orange-500">My Skills</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {Skills.hard.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-orange-500/5 flex'
                >
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                      <Image src={item.icon} width='64' height='64' alt='' />
                    </div>
                    <div className='flex flex-col items-center justify-center dark:text-gray-300'>
                      <h3>{item.text}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <Divider />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-8 dark:text-orange-500">My Timeline</h3>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex gap-6"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center hover:rotate-180 transition-all duration-300">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    {index < timeline.length - 1 && <div className="w-0.5 h-20 bg-gray-300 dark:bg-gray-600 mt-4"></div>}
                  </div>
                  <div className="flex-1 pb-2">
                    <Badge variant="secondary" className="mb-2">{item.duration}</Badge>
                    <h4 className="text-xl font-semibold mb-1 dark:text-gray-300">
                      {item.title} <span className="text-orange-500">- {item.company}</span>
                    </h4>
                    <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                      {item.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" ref={sectionRefs.portfolio} className="min-h-screen py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 dark:text-gray-300">
              My <span className="text-orange-500">Portfolio</span>
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills in various programming languages and frameworks.
            </p>
          </motion.div>

          <div className="flex gap-6 flex-wrap justify-center lg:justify-start relative">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="w-full"
              >
                <Card
                  onClick={() => handleCardClick(item)}
                  className="bg-orange-500 dark:bg-black relative w-full overflow-hidden cursor-pointer group rounded-xl shadow-md hover:shadow-xl transition-all duration-700 transform hover:-translate-y-2 hover:scale-105"
                >
                      {/* Diagonal background using clip-path */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-gray-600 via-gray-500 to-gray-300 dark:from-orange-600 dark:via-orange-500 dark:to-orange-300 clip-diagonal"></div>

                      {/* Content Layer */}
                      <div className="relative z-10 grid grid-cols-2 h-48">
                        {/* Text Side */}
                        <div className="flex flex-col justify-center pl-6 pr-4 text-white  ">
                          <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                          <p className="text-sm opacity-90 line-clamp-3">{item.description}</p>
                          <span
                            className="mt-2 inline-block text-xs font-semibold tracking-wide 
                                      text-orange-100 bg-orange-700/40 px-3 py-1 rounded-full shadow-md 
                                       transition-all duration-300 hover:bg-orange-500 hover:text-white hover:scale-105"
                          >
                            More Info
                          </span>

                        </div>

                        {/* Image Side */}
                        <div className="relative overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={400}
                            height={192}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>
                  </div>
                </Card>
              </motion.div>
            ))}

            {/* Right Drawer with AnimatePresence */}
                  <AnimatePresence>
                    {openDrawerId && selectedProject && (
                      <>
                        {/* Overlay background */}
                        <motion.div
                          className="fixed inset-0 bg-black/40 z-[998]"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          onClick={closeDrawer}
                        />

                        {/* Drawer panel */}
                        <motion.div
                          initial={{ x: "-100%", opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: "100%", opacity: 0 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                          className="fixed top-[0] left-[0]  h-full w-auto  sm:w-[700px] sm:max-w-full bg-white dark:bg-gray-800 shadow-2xl z-[999] overflow-y-auto rounded-xl custom-scrollbar"
                        >
                          <div className="relative p-6">
                            {/* Close Button */}
                            <Button
                              variant="ghost"
                              size="icon"
                              className="absolute top-4 right-4"
                              onClick={closeDrawer}
                            >
                              <X className="h-5 w-5" />
                            </Button>

                            {/* Content */}
                            <p className="text-gray-600 dark:text-gray-300">Project</p>
                            <h2 className="text-4xl font-bold text-orange-500">Overview</h2>
                            <p className="text-gray-700 dark:text-gray-300 mt-4">{selectedProject.description}</p>

                            <div className="relative mt-4">
                              <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10 rounded-xl" />
                              <Image
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                width={700}
                                height={300}
                                className="rounded-xl object-cover"
                              />
                            </div>

                            <div className="z-10 p-2">
                              <h2 className="text-xl font-bold py-2 dark:text-gray-300">{selectedProject.title}</h2>
                            </div>

                            <div className="flex flex-col lg:flex-row gap-8 justify-between">
                              <div>
                                {selectedProject.points?.map((point, index) => (
                                  <p key={index} className="mt-4 flex items-center dark:text-gray-300">
                                    <RiRadioButtonFill className="pr-1" /> {point}
                                  </p>
                                ))}

                                {selectedProject.github && (
                                  <a href={selectedProject.github} target="_blank" rel="noreferrer">
                                    <Button className="px-8 py-2 mt-4 mr-4 bg-orange-500">Code</Button>
                                  </a>
                                )}
                                {selectedProject.link && (
                                  <a href={selectedProject.link} target="_blank" rel="noreferrer">
                                    <Button className="px-8 py-2 mt-4 bg-orange-500">WebSite</Button>
                                  </a>
                                )}
                              </div>

                              <div className="shadow-xl shadow-gray-400 rounded-xl py-4 dark:shadow-gray-700">
                                <div className="p-4">
                                  <p className="text-center font-bold pb-2 text-orange-500">
                                    Technologies
                                  </p>
                                  <div className="flex md:flex-col flex-row flex-wrap justify-around w-auto sm:w-[200px]">
                                    {selectedProject.technologies?.map((tech) => (
                                      <p
                                        key={tech}
                                        className="text-gray-600 dark:text-gray-300 py-2 flex items-center"
                                      >
                                        <RiRadioButtonFill className="pr-1" /> {tech}
                                      </p>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </>
                    )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" ref={sectionRefs.education} className="min-h-screen py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 dark:text-gray-300">
              My <span className="text-orange-500">Education</span>
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </motion.div>

          <div className="mb-12">
            <motion.h4
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-xl font-semibold mb-6 text-orange-500"
            >
              🎓 Education & 📜 Certifications
            </motion.h4>
            <div className="relative border-l-2 border-orange-500 dark:border-orange-400 pl-6 space-y-10">
              {education.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 group"
                >
                  <Badge variant="secondary" className="mb-2">
                    {item.year}
                  </Badge>
                  <h4 className="text-lg sm:text-xl font-semibold mb-1 dark:text-gray-200">
                    {item.title}
                  </h4>
                  <p className="text-orange-500 font-medium">{item.institution}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {item.type === 1 ? "Education" : "Certification"}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={sectionRefs.contact} className="min-h-screen py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 dark:text-gray-300">
              Contact <span className="text-orange-500">Me</span>
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-4 dark:text-orange-500">Get in touch</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I&apos;m always open to discussing new opportunities and interesting projects.
                  Feel free to reach out if you&apos;d like to work together!
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: MapPin, label: 'Location', value: 'Lahore, Pakistan' },
                  { icon: Mail, label: 'Email', value: 'hamza.hamid9055@gmail.com' },
                  { icon: GraduationCap, label: 'Education', value: 'Computer Science Graduate' },
                  { icon: Phone, label: 'Mobile', value: '+92 315 4287721' },
                  { icon: Globe, label: 'Languages', value: 'English, Urdu' },
                ].map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 hover:scale-105 transition-transform duration-300"
                    >
                      <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center hover:bg-orange-500/30 transition-colors duration-300 hover:rotate-12">
                        <Icon className="w-5 h-5 text-orange-500" />
                      </div>
                      <div className='flex flex-wrap justify-between w-full'>
                        <span className="font-medium dark:text-orange-500">{contact.label}: </span>
                        <span className="text-gray-600 dark:text-gray-300">{contact.value}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="flex gap-4">
                {[
                  { icon: Twitter, href: 'https://x.com/hamzahamid09' },
                  { icon: Github, href: 'https://github.com/hamza9055' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/hamza-hamid9055/' },
                  { icon: Codepen, href: 'https://codepen.io/hamza9055' },
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-12 h-12 rounded-full dark:bg-orange-500 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 hover:scale-110 hover:rotate-12"
                        onClick={() => window.open(social.href, '_blank')}
                      >
                        <Icon className="w-5 h-5" />
                      </Button>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 hover:shadow-xl transition-shadow duration-500 hover:shadow-orange-500/20 relative overflow-hidden">
                  {/* <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input placeholder="Your Name" className="h-12 focus:scale-105 transition-transform duration-300" />
                      <Input type="email" placeholder="Your Email" className="h-12 focus:scale-105 transition-transform duration-300" />
                    </div>
                    <Input placeholder="Subject" className="h-12 focus:scale-105 transition-transform duration-300" />
                    <Textarea placeholder="Your Message" rows={6} className="focus:scale-105 transition-transform duration-300" />
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white h-12 rounded-full hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30">
                      Send Message
                    </Button>
                  </form> */}
                <Image
                  className="absolute z-1"
                  src={'/assets/contact.png'}
                  alt={'/assets/dev.png'}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}