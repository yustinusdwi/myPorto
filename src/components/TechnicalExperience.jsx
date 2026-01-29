import React from 'react';
import python from '../assets/py.png';
import r_lang from '../assets/r.png';
import excel from '../assets/excel.png';
import go from '../assets/go.png';
import java from '../assets/java.png';
import cpp from '../assets/cpp.png';
import javascript from '../assets/js.png';
import react_icon from '../assets/react.png';
import laravel from '../assets/laravel.png';
import php from '../assets/php.png';
import vite from '../assets/vite.png';
import swagger from '../assets/swagger.png';

const Experience = () => {
    const experiences = [
        { name: 'Python', icon: python, years: 3.5, color: 'from-blue-500 to-yellow-400' },
        { name: 'Excel', icon: excel, years: 2, color: 'from-green-500 to-emerald-400' },
        { name: 'Java', icon: java, years: 2, color: 'from-red-500 to-orange-400' },
        { name: 'JavaScript', icon: javascript, years: 2, color: 'from-yellow-400 to-yellow-600' },
        { name: 'Go', icon: go, years: 1.5, color: 'from-cyan-500 to-blue-400' },
        { name: 'React.js', icon: react_icon, years: 1.5, color: 'from-cyan-400 to-blue-500' },
        { name: 'Laravel', icon: laravel, years: 1.5, color: 'from-red-500 to-pink-500' },
        { name: 'PHP', icon: php, years: 1.5, color: 'from-indigo-400 to-purple-500' },
        { name: 'R', icon: r_lang, years: 1, color: 'from-blue-600 to-blue-300' },
        { name: 'C++', icon: cpp, years: 1, color: 'from-blue-600 to-indigo-500' },
        { name: 'Vite', icon: vite, years: 1, color: 'from-purple-500 to-blue-400' },
        { name: 'Swagger', icon: swagger, years: 0.5, color: 'from-green-400 to-lime-500' },
    ];

    return (
        <section id="experience" className="py-10 sm:py-32 bg-slate-950 relative overflow-hidden flex items-center justify-center min-h-screen">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/30 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 sm:px-12 lg:px-20 max-w-6xl relative z-10">
                <div className="flex flex-col items-center justify-center text-center mb-16 sm:mb-20" data-aos="fade-up">
                
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-white tracking-tight">
                        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Experience</span>
                    </h1>
                    <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
                        A comprehensive overview of my technical expertise and the years dedicated to mastering these technologies.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
                    {experiences.map((tech, index) => (
                        <div 
                            key={index}
                            className="group relative p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(99,102,241,0.2)]"
                            data-aos="fade-up"
                            data-aos-delay={100 + (index * 50)}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                            
                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-14 h-14 rounded-xl bg-slate-800/80 p-3 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                                        <img 
                                            src={tech.icon} 
                                            alt={tech.name} 
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                                            {tech.name}
                                        </h3>
                                        <p className="text-sm text-gray-500 font-medium">Tech Stack</p>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex justify-between items-end">
                                        <span className="text-gray-400 text-sm font-medium">Proficiency</span>
                                        <span className="text-white font-bold text-lg">
                                            {tech.years} <span className="text-sm text-gray-500 font-normal">Years</span>
                                        </span>
                                    </div>
                                    
                                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                                        <div 
                                            className={`h-full rounded-full bg-gradient-to-r ${tech.color} relative overflow-hidden`}
                                            style={{ width: `${Math.min((tech.years / 5) * 100, 100)}%` }}
                                        >
                                            <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;