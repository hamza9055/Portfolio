'use client';

import { useState, useEffect } from 'react';
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


  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const sections = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'portfolio', icon: Briefcase, label: 'Portfolio' },
    { id: 'education', icon: GraduationCap, label: 'Education' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];
  const handleCardClick = (item: any) => {
    // Toggle drawer if clicking the same project again
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
              onClick={() => setActiveSection(section.id)}
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
      {activeSection === 'home' && (
        <section className="min-h-screen flex items-center justify-center px-8 animate-fadeIn">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-slideInLeft">
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
            </div>
            <div className="order-1 lg:order-2 space-y-6 animate-slideInRight">
              <h1 className="text-gray-600 text-2xl lg:text-6xl font-bold animate-fadeInUp">
                <span className='dark:text-gray-300'>Hi, I&apos;m </span><span className="text-orange-500">Hamza Hamid.</span>
                <br />
                <span className="text-3xl lg:text-4xl text-gray-600 dark:text-gray-300 animate-typewriter">A Web Developer.</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed  animation-delay-300">
                I&apos;m a passionate Web Developer who loves creating beautiful and functional websites. I specialize in modern web technologies like React, Next.js, and .NET, and I enjoy bringing creative ideas to life through code.

              </p>

              <CvButton />
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      {activeSection === 'about' && (
        <section className="min-h-screen py-20 px-8 animate-fadeIn">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fadeInUp">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 dark:text-gray-300">
                About <span className="text-orange-500">Me</span>
              </h2>
              <div className="w-24 h-1 bg-orange-500 mx-auto animate-expandWidth"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Left Side (Text Section) */}
              <div className="space-y-6 animate-slideInLeft">
                <h3 className="text-2xl font-semibold dark:text-orange-500">
                  Information About Me
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I am a Full-Stack Web Developer with 2+ years of experience in React.js, Next.js, TypeScript, and C# (ASP.NET). Skilled in building scalable web applications, I work with RESTful APIs, SQL databases, Azure services, Microsoft Graph APIs, and SignalR for real-time communication. I focus on writing clean, maintainable code and creating responsive, user-friendly interfaces that deliver excellent experiences.
                </p>
                <CvButton />
              </div>

              {/* Right Side (Image Section) */}
              <div className="animate-slideInRight flex justify-center items-center">
                <Image
                  src="/assets/aboutMe.png"
                  alt="Developer illustration"
                  width={500}
                  height={500}
                  className="rounded-2xl object-cover hover:shadow-xl transition-shadow duration-500 hover:shadow-orange-500/20"
                  priority
                />
              </div>
            </div>


            < Divider />
            {/* Skills */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 animate-fadeInUp dark:text-orange-500">My Skills</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {Skills.hard.map((item, index) => (


                  <div key={index} className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-orange-500/5 flex animate-fadeIn animate-fadeInUp'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                      <div className='m-auto'>
                        <Image src={item.icon} width='64' height='64' alt='' />
                      </div>
                      <div className='flex flex-col items-center justify-center  dark:text-gray-300'>
                        <h3>{item.text}
                        </h3>
                      </div>
                    </div>
                  </div>

                ))}
              </div>
            </div>
            < Divider />

            {/* Timeline */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 animate-fadeInUp dark:text-orange-500">My Timeline</h3>
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="flex gap-6 animate-slideInLeft" style={{ animationDelay: `${index * 200}ms` }}>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center  hover:animate-spin transition-all duration-300">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      {index < timeline.length - 1 && <div className="w-0.5 h-20 bg-gray-300 dark:bg-gray-600 mt-4 animate-growHeight"></div>}
                    </div>
                    <div className="flex-1 pb-2">
                      <Badge variant="secondary" className="mb-2">{item.duration}</Badge>
                      <h4 className="text-xl font-semibold mb-1 dark:text-gray-300">
                        {item.title} <span className="text-orange-500 ">- {item.company}</span>
                      </h4>
                      <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-700">
                        {item.points.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )
      }

      {/* Portfolio Section */}
      {
        activeSection === 'portfolio' && (
          <section className="min-h-screen py-20 px-8 animate-fadeIn h-full" id="portfolio">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 animate-fadeInUp">
                <h2 className="text-4xl lg:text-5xl font-bold mb-4 dark:text-gray-300">
                  My <span className="text-orange-500">Portfolio</span>
                </h2>
                <div className="w-24 h-1 bg-orange-500 mx-auto mb-6 animate-expandWidth"></div>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Here are some of my recent projects that showcase my skills in various programming languages and frameworks.
                </p>
              </div>

              <div className="">
                <div className="flex gap-6 flex-wrap justify-center lg:justify-start relative">
                  {portfolioItems.map((item) => (
                    <Card
                      key={item.id}
                      onClick={() => handleCardClick(item)}
                      className="w-[350px] animate-slideInLeft cursor-pointer group overflow-hidden hover:shadow-xl transition-all duration-700 transform hover:-translate-y-2 hover:scale-105"
                    >
                      <div className="relative overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={400}
                          height={192}
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-125"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                          <h3 className="text-white text-lg font-semibold">{item.title}</h3>
                        </div>
                      </div>
                    </Card>
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



            </div>
          </section>
        )
      }

      {/* Education Section */}
      {
        activeSection === 'education' && (
          <section className="min-h-screen py-20 px-8 animate-fadeIn">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 animate-fadeInUp">
                <h2 className="text-4xl lg:text-5xl font-bold mb-4 dark:text-gray-300">
                  My <span className="text-orange-500">Education</span>
                </h2>
                <div className="w-24 h-1 bg-orange-500 mx-auto animate-expandWidth"></div>
              </div>



              {/* Timeline */}
              {/* <div>
                <h3 className="text-2xl font-semibold mb-8 animate-fadeInUp dark:text-orange-500">My Education & Certifications</h3>
                <div className="space-y-8">
                  {education.map((item, index) => (
                    <div key={index} className="flex gap-6 " style={{ animationDelay: `${index * 200}ms` }}>
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center  hover:animate-spin transition-all duration-300">
                          <Briefcase className="w-6 h-6 text-white" />
                        </div>
                        {index < timeline.length - 1 && <div className="w-0.5 h-20 bg-gray-300 dark:bg-gray-600 mt-4 animate-growHeight"></div>}
                      </div>
                      <div className="flex-1 pb-2">
                        <Badge variant="secondary" className="mb-2">{item.year}</Badge>
                        <h4 className="sm:text-xl text-sm font-semibold mb-1 dark:text-gray-300">
                          {item.title} <span className="text-orange-500 ">- {item.institution}</span>
                        </h4>

                      </div>
                    </div>
                  ))}
                </div>
              </div> */}
              <div>

                {/* Education Section */}
                <div className="mb-12">
                  <h4 className="text-xl font-semibold mb-6 text-orange-500">🎓 Education & 📜 Certifications</h4>
                  <div className="relative border-l-2 border-orange-500 dark:border-orange-400 pl-6 space-y-10">
                    {education.map((item) => (
                      <div
                        key={item.id}
                        className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 group"
                      >
                        {/* <span className="absolute -left-[1.55rem] top-6 w-6 h-6 bg-orange-500 rounded-full border-4 border-white dark:border-gray-800 group-hover:scale-125 transition-transform"></span> */}

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
                      </div>
                    ))}
                  </div>
                </div>


              </div>

            </div>
            <div>

            </div>
          </section>
          // <section className="min-h-screen py-20 px-8 animate-fadeIn">

          //   <div className="max-w-6xl mx-auto">
          //     <div className="text-center mb-16 animate-fadeInUp">
          //       <h2 className="text-4xl lg:text-5xl font-bold mb-4">
          //         My <span className="text-orange-500">Education</span>
          //       </h2>
          //       <div className="w-24 h-1 bg-orange-500 mx-auto animate-expandWidth"></div>
          //     </div>

          //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          //       {blogs.map((blog, index) => (
          //         <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-4 animate-fadeInUp hover:shadow-orange-500/20 hover:scale-105 group" style={{ animationDelay: `${index * 200}ms` }}>
          //           <img
          //             src={blog.image}
          //             alt={blog.title}
          //             className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          //           />
          //           <CardContent className="p-6">
          //             <h3 className="text-xl font-semibold mb-3 group-hover:text-orange-500 transition-colors duration-300">{blog.title}</h3>
          //             <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">{blog.description}</p>
          //           </CardContent>
          //         </Card>
          //       ))}
          //     </div>
          //   </div>
          // </section>
        )
      }

      {/* Contact Section */}
      {
        activeSection === 'contact' && (
          <section className="min-h-screen py-20 px-8 animate-fadeIn">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 animate-fadeInUp">
                <h2 className="text-4xl lg:text-5xl font-bold mb-4 dark:text-gray-300">
                  Contact <span className="text-orange-500">Me</span>
                </h2>
                <div className="w-24 h-1 bg-orange-500 mx-auto animate-expandWidth"></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-8 animate-slideInLeft">
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
                        <div key={index} className="flex items-center gap-4 animate-slideInLeft hover:scale-105 transition-transform duration-300" style={{ animationDelay: `${index * 100}ms` }}>
                          <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center hover:bg-orange-500/30 transition-colors duration-300 hover:rotate-12">
                            <Icon className="w-5 h-5 text-orange-500" />
                          </div>
                          <div className='flex flex-wrap justify-between w-full'>
                            <span className="font-medium dark:text-orange-500">{contact.label}: </span>
                            <span className="text-gray-600 dark:text-gray-300">{contact.value}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex gap-4">
                    {[
                      // { icon: Facebook, href: '#' },
                      { icon: Twitter, href: 'https://x.com/hamzahamid09' },
                      { icon: Github, href: 'https://github.com/hamza9055' },
                      { icon: Linkedin, href: 'https://www.linkedin.com/in/hamza-hamid9055/' },
                      { icon: Codepen, href: 'https://codepen.io/hamza9055' },
                    ].map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <Button
                          key={index}
                          variant="outline"
                          size="icon"
                          className="w-12 h-12 rounded-full dark:bg-orange-500 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 hover:scale-110 hover:rotate-12 animate-fadeInUp"
                          style={{ animationDelay: `${index * 100}ms` }}
                          onClick={() => window.open(social.href, '_blank')}
                        >
                          <Icon className="w-5 h-5" />
                        </Button>
                      );
                    })}
                  </div>
                </div>

                <Card className="p-8 animate-slideInRight hover:shadow-xl transition-shadow duration-500 hover:shadow-orange-500/20">
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
                    src={'/assets/skills/dev.png'}
                    alt={'/assets/dev.png'}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Card>
              </div>
            </div>
          </section>
        )
      }
    </div >
  );
}