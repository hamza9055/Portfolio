'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Home, User, Briefcase, FileText, Mail, Download, Github, Youtube, Facebook, Twitter, MapPin, GraduationCap, Globe, Phone, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import CvButton from '@/components/ui/cvButton';
import Divider from '@/components/ui/divider';
import { portfolioItems, Skills, timeline } from '@/components/data';
import Link from 'next/link';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDark, setIsDark] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const sections = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'portfolio', icon: Briefcase, label: 'Portfolio' },
    { id: 'blogs', icon: FileText, label: 'Blogs' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  // const skills = [
  //   { name: 'HTML 5', percentage: 90 },
  //   { name: 'CSS 3', percentage: 95 },
  //   { name: 'JavaScript', percentage: 60 },
  //   { name: 'ReactJS', percentage: 75 },
  //   { name: 'NodeJS', percentage: 50 },
  //   { name: 'Python', percentage: 70 },
  // ];







  const blogs = [
    {
      title: 'How to Build Modern Web Applications',
      description: 'Learn the latest techniques for building scalable web applications.',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'The Future of Frontend Development',
      description: 'Exploring upcoming trends and technologies in frontend development.',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Best Practices for React Development',
      description: 'Tips and tricks for writing clean, maintainable React code.',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

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
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800"
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
              <h1 className="text-gray-600 lg:text-6xl font-bold animate-fadeInUp">
                <span className='dark:text-gray-300'>Hi, I&apos;m </span><span className="text-orange-500">Hamza Hamid.</span>
                <br />
                <span className="text-3xl lg:text-4xl text-gray-600 dark:text-gray-300 animate-typewriter">A Web Developer.</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed  animation-delay-300">
                I&apos;m a passionate Web Developer who loves creating beautiful and functional websites.
                I specialize in modern web technologies and enjoy bringing creative ideas to life through code.
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

            <div className="grid grid-cols-1 lg:col-span-2 gap-12 mb-16">
              <div className="space-y-6 animate-slideInLeft">
                <h3 className="text-2xl font-semibold dark:text-orange-500">Information About Me</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I&apos;m a dedicated web developer with a passion for creating exceptional digital experiences.
                  My journey in web development started several years ago, and I&apos;ve been constantly learning
                  and evolving with the latest technologies.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I believe in writing clean, maintainable code and creating user-friendly interfaces that
                  not only look great but also provide excellent user experiences.
                </p>
                <CvButton />
              </div>

              {/* <div className="grid grid-cols-2 gap-6 animate-slideInRight">
                {[
                  // { number: '50+', label: 'Projects Completed' },
                  { number: '3+', label: 'Years of Experience' },
                  // { number: '30+', label: 'Happy Clients' },
                  // { number: '25+', label: 'Customer Reviews' },
                ].map((stat, index) => (
                  <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fadeInUp hover:shadow-orange-500/20" style={{ animationDelay: `${100}ms` }}>
                    <CardContent className="p-0">
                      <h4 className="text-3xl font-bold text-orange-500 mb-2 animate-countUp">{stat.number}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div> */}
            </div>

            < Divider />
            {/* Skills */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 animate-fadeInUp dark:text-orange-500">My Skills</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {Skills.hard.map((item, index) => (


                  <div key={index} className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-orange-500/5'>
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
          <section className="min-h-screen py-20 px-8 animate-fadeIn" id="portfolio">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 animate-fadeInUp">
                <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                  My <span className="text-orange-500">Portfolio</span>
                </h2>
                <div className="w-24 h-1 bg-orange-500 mx-auto mb-6 animate-expandWidth"></div>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Here are some of my recent projects that showcase my skills in various programming languages and frameworks.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioItems.map((item, index) => (
                  <Card key={item.id} className="group overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-4 animate-fadeInUp hover:shadow-orange-500/20 hover:scale-105" style={{ animationDelay: `${index * 150}ms` }}>
                    <div className="relative overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={400}
                        height={192}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-125 "
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                        <div className="text-center text-white">
                          <h3 className="text-xl font-semibold mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.title}</h3>
                          <div className="flex gap-4 justify-center transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                            <Button onClick={() => window.open(`/projectInfo/${item.slug}`, '_blank')} className="rounded-full hover:scale-110 transition-transform duration-300">
                              More info
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )
      }

      {/* Blogs Section */}
      {
        activeSection === 'blogs' && (
          <section className="min-h-screen py-20 px-8 animate-fadeIn">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 animate-fadeInUp">
                <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                  My <span className="text-orange-500">Blogs</span>
                </h2>
                <div className="w-24 h-1 bg-orange-500 mx-auto animate-expandWidth"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-4 animate-fadeInUp hover:shadow-orange-500/20 hover:scale-105 group" style={{ animationDelay: `${index * 200}ms` }}>
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-orange-500 transition-colors duration-300">{blog.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">{blog.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )
      }

      {/* Contact Section */}
      {
        activeSection === 'contact' && (
          <section className="min-h-screen py-20 px-8 animate-fadeIn">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 animate-fadeInUp">
                <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                  Contact <span className="text-orange-500">Me</span>
                </h2>
                <div className="w-24 h-1 bg-orange-500 mx-auto animate-expandWidth"></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-8 animate-slideInLeft">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Get in touch</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      I&apos;m always open to discussing new opportunities and interesting projects.
                      Feel free to reach out if you&apos;d like to work together!
                    </p>
                  </div>

                  <div className="space-y-4">
                    {[
                      { icon: MapPin, label: 'Location', value: 'Lahore, Pakistan' },
                      { icon: Mail, label: 'Email', value: 'hamza@example.com' },
                      { icon: GraduationCap, label: 'Education', value: 'Computer Science Graduate' },
                      { icon: Phone, label: 'Mobile', value: '+92 123 456 7890' },
                      { icon: Globe, label: 'Languages', value: 'English, Urdu' },
                    ].map((contact, index) => {
                      const Icon = contact.icon;
                      return (
                        <div key={index} className="flex items-center gap-4 animate-fadeInUp hover:scale-105 transition-transform duration-300" style={{ animationDelay: `${index * 100}ms` }}>
                          <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center hover:bg-orange-500/30 transition-colors duration-300 hover:rotate-12">
                            <Icon className="w-5 h-5 text-orange-500" />
                          </div>
                          <div>
                            <span className="font-medium">{contact.label}: </span>
                            <span className="text-gray-600 dark:text-gray-300">{contact.value}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex gap-4">
                    {[
                      { icon: Facebook, href: '#' },
                      { icon: Twitter, href: '#' },
                      { icon: Github, href: '#' },
                      { icon: Youtube, href: '#' },
                    ].map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <Button
                          key={index}
                          variant="outline"
                          size="icon"
                          className="w-12 h-12 rounded-full hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 hover:scale-110 hover:rotate-12 animate-fadeInUp"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <Icon className="w-5 h-5" />
                        </Button>
                      );
                    })}
                  </div>
                </div>

                <Card className="p-8 animate-slideInRight hover:shadow-xl transition-shadow duration-500 hover:shadow-orange-500/20">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input placeholder="Your Name" className="h-12 focus:scale-105 transition-transform duration-300" />
                      <Input type="email" placeholder="Your Email" className="h-12 focus:scale-105 transition-transform duration-300" />
                    </div>
                    <Input placeholder="Subject" className="h-12 focus:scale-105 transition-transform duration-300" />
                    <Textarea placeholder="Your Message" rows={6} className="focus:scale-105 transition-transform duration-300" />
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white h-12 rounded-full hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30">
                      Send Message
                    </Button>
                  </form>
                </Card>
              </div>
            </div>
          </section>
        )
      }
    </div >
  );
}