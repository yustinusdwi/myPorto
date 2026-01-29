import React from 'react';
import { Mail, Linkedin, Github, Instagram, ArrowRight } from 'lucide-react';

const Contact = () => {
    const socialLinks = [
        {
            name: 'LinkedIn',
            icon: Linkedin,
            url: 'https://www.linkedin.com/in/yustinus-dwi-adyra-924295247/',
            color: 'group-hover:text-blue-400'
        },
        {
            name: 'GitHub',
            icon: Github,
            url: 'https://github.com/yustinusdwi',
            color: 'group-hover:text-white'
        },
        {
            name: 'Instagram',
            icon: Instagram,
            url: 'https://www.instagram.com/widyyda',
            color: 'group-hover:text-pink-500'
        }
    ];

    const emails = [
        { address: 'yustinus134@gmail.com', label: 'Personal Email' },
        { address: 'yustinus@student.telkomuniversity.ac.id', label: 'University Email' }
    ];

    return (
        <section id="contact" className="py-20 sm:py-32 bg-[#050505] relative overflow-hidden flex items-center justify-center min-h-screen">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-orange-600/20 rounded-full blur-[120px]" />
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-amber-600/20 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-20 max-w-4xl relative z-10">
                <div className="flex flex-col items-center justify-center text-center mb-16" data-aos="fade-up">
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold mb-6 text-white tracking-tight">
                        Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Connect</span>
                    </h1>
                    <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed text-center">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
                    {emails.map((email, index) => (
                        <a
                            key={index}
                            href={`mailto:${email.address}`}
                            className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-full bg-orange-500/20 text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300 flex-shrink-0">
                                    <Mail size={24} className="w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                                <div className="flex-1 overflow-hidden">
                                    <p className="text-xs sm:text-sm text-gray-500 font-medium mb-1">{email.label}</p>
                                    <p className="text-white font-medium text-sm sm:text-base truncate group-hover:text-orange-400 transition-colors">
                                        {email.address}
                                    </p>
                                </div>
                                <ArrowRight size={20} className="text-gray-600 group-hover:text-orange-400 transform group-hover:translate-x-1 transition-all flex-shrink-0" />
                            </div>
                        </a>
                    ))}
                </div>

                <div 
                    className="flex flex-col items-center gap-6"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    <span className="text-gray-400 text-xs sm:text-sm uppercase tracking-widest font-bold"></span>
                    <span className="text-gray-400 text-xs sm:text-sm uppercase tracking-widest font-bold">Follow Me</span>
                    <div className="flex flex-wrap justify-center gap-6">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noreferrer"
                                className="group relative"
                                aria-label={social.name}
                            >
                                <div className="absolute -inset-0.5 bg-gradient-to-br from-white/20 to-white/5 rounded-full blur-[1px] group-hover:from-orange-500 group-hover:to-amber-500 transition-all duration-300 opacity-70 group-hover:opacity-100 group-hover:blur-md"></div>
                                
                                <div className="relative p-0.5 rounded-full bg-gradient-to-br from-white/10 to-transparent group-hover:from-orange-500 group-hover:to-amber-500 transition-all duration-300">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center relative z-10 overflow-hidden group-hover:border-transparent transition-colors">
                                        <social.icon 
                                            size={24} 
                                            className={`text-gray-400 transition-colors duration-300 ${social.color} w-5 h-5 sm:w-6 sm:h-6`} 
                                        />
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;