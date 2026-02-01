import React from 'react';
import { Folder, Calendar, Github, ExternalLink, ArrowRight } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'SIPANTRI ',
            category: 'Website Development & AI Integration',
            period: 'Sept 2025 - Jan 2026',
            description: 'A Smart Queueing System integrated with AI model to optimize waiting time prediction per service.',
            tech: ['js', 'LigthBGM', 'python', 'Rest API'],
            link: 'https://drive.google.com/file/d/1clD-sLa4-hKH8VYJykErnvI_hh543HgL/view?usp=sharing',
            github: '#',
            color: 'from-violet-500 to-fuchsia-500'
        },
        {
            title: 'myKOA',
            category: 'Data Scientist & Web Development',
            period: 'Feb 2025 - Jan 2026',
            description: 'An web application for Knee osteoarthritis severity grading classification',
            tech: ['streamlit', 'computer vision', 'deep learning', 'python'],
            link: 'https://mykoayustinusdwiadyra.streamlit.app/',
            github: 'https://github.com/yustinusdwi/myKOA',
            color: 'from-purple-500 to-pink-500'
        },
        {
            title: 'MarkLens',
            category: 'Web Development',
            period: 'Jul 2025 - Augst 2025',
            description: 'An web application for project company monitoring and visualization built for PT IMSS.',
            tech: ['Laravel', 'php', 'cpanel', 'mysql'],
            link: 'https://visdat-tubes.streamlit.app/',
            github: 'https://github.com/yustinusdwi/DasborPemantauanProyek',
            color: 'from-purple-500 to-pink-500'
        },
        {
            title: 'Pacific Food and Beverage Trade Data Visualization (PFTD 2.1)',
            category: 'Data Scientist',
            period: 'July - November 2023',
            description: 'An data visualization system for Pacific Food and Beverage Trade Data using py and streamlit',
            tech: ['python', 'streamlit', 'data analytics', 'data visualization'],
            link: 'https://visdat-tubes.streamlit.app/',
            github: 'https://github.com/yustinusdwi/Pacific-Food-and-Beverage-Trade-Data-Visualization-PFTD-2.1-',
            color: 'from-purple-500 to-pink-500'
        },
        {
            title: 'Self-ie',
            category: 'Web Development',
            period: 'May 2024 - Sept 2024',
            description: 'An web application for self improvement.',
            tech: ['Go Lang', 'supabase', 'swagger'],
            link: 'https://github.com/yustinusdwi/ProgressieAPI',
            github: 'https://github.com/yustinusdwi/ProgressieAPI',
            color: 'from-purple-500 to-pink-500'
        },
        {
            title: 'InvenTrack',
            category: 'Web Development',
            period: 'Sept 2024 - Jan 2025',
            description: 'An web application for warehouse inventory management system.',
            tech: ['java', 'jsp', 'servlet', 'mysql', 'bootstrap','jdbc'],
            link: 'https://github.com/yustinusdwi/IMPALfixed',
            github: 'https://github.com/yustinusdwi/IMPALfixed',
            color: 'from-purple-500 to-pink-500'
        }, 
            {
                title: 'BookWise',
                category: 'Web Development',
                period: 'Sept 2024 - Jan 2025',
                description: 'An web application for library book management system, recommendation system and chatbot integration.',
                tech: ['Go Lang', 'supabase', 'swagger'],
                link: 'https://github.com/yustinusdwi/book-wise',
                github: 'https://github.com/yustinusdwi/book-wise',
                color: 'from-purple-500 to-pink-500'
            }, 
            {
                title: 'Garbage Classification',
                category: 'Data Scientist',
                period: 'Feb 2025 - May 2025',
                description: 'An image classification system for garbage using deep learning and computer vision.',
                tech: ['python', 'tensorflow', 'opencv', 'streamlit'],
                link: 'https://github.com/yustinusdwi/Garbage-Classification',
                github: 'https://github.com/yustinusdwi/Garbage-Classification',
                color: 'from-purple-500 to-pink-500'
            },
    ];

    return (
        <section id="projects" className="py-20 sm:py-32 bg-[#020617] relative overflow-hidden flex items-center justify-center min-h-screen">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-violet-600/30 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-fuchsia-600/30 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-20 max-w-6xl relative z-10">
                <div className="flex flex-col items-center justify-center text-center mb-16 sm:mb-20" data-aos="fade-up">
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold mb-6 text-white tracking-tight">
                        My latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">projects</span>
                    </h1>
                    <p className="text-gray-400 text-base sm:text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
                        A collection of innovative projects where I've applied my skills in software engineering and data science to solve real-world problems.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 w-full">
                    {projects.map((project, index) => (
                        <div 
                            key={index}
                            className="group relative p-6 sm:p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-violet-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(139,92,246,0.2)] flex flex-col h-full"
                            data-aos="fade-up"
                            data-aos-delay={100 + (index * 50)}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
                            
                            <div className="relative z-10 flex flex-col flex-grow">
                                <div className="flex flex-col sm:flex-row justify-between items-start mb-6 gap-4 sm:gap-0">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/5 p-3 border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                                            <Folder size={24} className="text-violet-400 sm:w-7 sm:h-7" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-violet-400 transition-colors line-clamp-1">
                                                {project.title}
                                            </h3>
                                            <p className="text-slate-400 font-medium text-xs sm:text-sm">{project.category}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex gap-3 self-end sm:self-auto">
                                        <a href={project.github} className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/5">
                                            <Github size={18} className="sm:w-5 sm:h-5" />
                                        </a>
                                        <a href={project.link} className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/5">
                                            <ExternalLink size={18} className="sm:w-5 sm:h-5" />
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 mb-6 text-xs sm:text-sm text-slate-500 bg-slate-800/50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl border border-slate-700 w-fit">
                                    <Calendar size={14} />
                                    {project.period}
                                </div>

                                <p className="text-slate-400 leading-relaxed mb-6 flex-grow text-sm sm:text-base line-clamp-4">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tech.map((tag, i) => (
                                        <span 
                                            key={i}
                                            className="px-2.5 sm:px-3 py-1 rounded-full text-xs font-medium bg-violet-500/10 text-violet-300 border border-violet-500/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <a 
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800 hover:bg-violet-600 text-white font-medium transition-all duration-300 group/btn mt-auto text-sm sm:text-base"
                                >
                                    View Project
                                    <ArrowRight size={18} className="group-hover/btn:translate-x-0.5 transition-transform group-hover/btn:-translate-y-0.5 transition-transform" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;