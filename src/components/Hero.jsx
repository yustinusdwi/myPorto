import React from 'react';
import instagram from "../assets/ig.jpeg";
import linkedin from "../assets/linkedin.jpeg";
import github from "../assets/github.jpeg";
import hero from "../assets/hero.png";
import hi from "../assets/hi.png"; 
import { DownloadIcon, Mail, Sparkles } from "lucide-react";

const Hero = () => {
    const socialIcons = [
        { icon: instagram, alt: "Instagram", url: "https://www.instagram.com/widyyda" },
        { icon: linkedin, alt: "LinkedIn", url: "https://www.linkedin.com/in/yustinus-dwi-adyra-924295247/" },
        { icon: github, alt: "GitHub", url: "https://github.com/yustinusdwi" }
    ];

    const theme = {
        textPrimary: "text-white",
        textSecondary: "text-gray-400",
        accent: "text-orange-500",
        gradientText: "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500",
    };

    return (
        <section className='relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#030014]'>
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            </div>

            <div className='container mx-auto px-6 sm:px-12 lg:px-20 max-w-6xl relative z-10'>
                <div className='flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16'>
                    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
                        <h1 
                            className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight ${theme.textPrimary}`}
                            data-aos="fade-up"
                        >
                            <span className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-indigo-400 mt-3 block tracking-normal">
                                Web Developer & Data Science
                            </span>
                        </h1>

                        <p 
                            className={`mb-10 leading-relaxed text-base sm:text-lg max-w-xl ${theme.textSecondary}`}
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            I'm Yustinus Dwi Adyra, an Informatics graduate from Telkom University with a 3.81 GPA. I excel in developing robust web applications using Laravel and React, while also diving deep into Data Science with Python and Deep Learning.
                        </p>

                        <div className='flex flex-col sm:flex-row gap-6 w-full sm:w-auto mb-12 justify-center lg:justify-start' data-aos='fade-up' data-aos-delay='400'>
                            <a href="https://drive.google.com/drive/folders/1Kq03SrIwpVAHBOOp7MoGn_fEswEbfy1C?usp=drive_link" download className='w-full sm:w-auto group cursor-pointer'>
                                <button className="w-full sm:w-auto relative px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold shadow-lg shadow-orange-500/25 transition-all duration-300 hover:shadow-orange-500/50 hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 overflow-hidden cursor-pointer">
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                    <span className="relative z-10">Download CV</span>
                                </button>
                            </a>
                        </div>
                    </div>

                    <div
                        className='w-full lg:w-1/2 flex justify-center lg:justify-end items-center relative order-1 lg:order-2 mb-12 lg:mb-0'
                        data-aos='fade-left'
                        data-aos-delay='400'
                    >
                        <div className="relative w-[280px] sm:w-[360px] lg:w-[420px]"> 
                            <div className="absolute inset-0 bg-gradient-to-b from-orange-500/20 to-transparent rounded-[3rem] blur-3xl -z-10 transform translate-y-4"></div>
                            
                            <img
                                src={hero}
                                alt="Widy Profile"
                                className="w-full h-auto object-cover rounded-[2.5rem] sm:rounded-[3rem] shadow-2xl ring-1 ring-white/10 z-10 relative transform hover:scale-[1.02] transition-transform duration-500"
                                style={{ maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)' }}
                            />

                            <div className="absolute top-6 -right-4 sm:top-12 sm:-right-8 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl z-20 animate-[bounce_3s_infinite] flex items-center gap-4 transform transition-transform hover:scale-105 hover:bg-white/10 hover:border-orange-500/30">
                                <img 
                                    src={hi} 
                                    alt="Hi" 
                                    className="w-10 h-10 object-contain drop-shadow-lg animate-pulse" 
                                />
                                <div>
                                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider mb-0.5">Status</p>
                                    <p className="text-white text-sm font-bold leading-tight">I'm Open to Work</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
