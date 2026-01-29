import React from 'react';
import { Briefcase, Calendar, MapPin, ArrowUpRight } from 'lucide-react';
import pt_imss from '../assets/imss.png';
import telkom from '../assets/iflab.png';

const WorkExperience = () => {
    const experiences = [
        { 
            role: 'Full Stack Web Developer', 
            company: 'PT IMSS', 
            logo: pt_imss, 
            period: 'June 2025 - August 2025', 
            location: 'Madiun, Indonesia',
            description: 'Create, developing, and maintaining scalable web applications full-stack for project monitoring dashboard using laravel and mysql, ensuring seamless user experience and data integrity.',
            tags: ['Laravel', 'MySQL', 'Cpanel', 'PHP'],
            color: 'from-blue-500 to-cyan-400'
        },
        { 
            role: 'Coordinator Laboratory Assistant', 
            company: 'Informatics Laboratory Telkom University', 
            logo: telkom, 
            period: 'July 2025 - Present', 
            location: 'Bandung, Indonesia',
            description: 'Coordinating laboratory practicum activities by preparing course materials and software for Computer Networks and Object-Oriented Programming across four departments, collaborating with lecturers to design semester-long practicum modules, maintaining laboratory hardware, contributing operational improvement ideas, and representing the laboratory in public relations activities.',
            tags: ['Teaching', 'Python', 'Algorithms', 'OOP', 'Java', 'Excel', 'Hardware', 'Data Structures', 'Operating Systems'],
            color: 'from-red-500 to-orange-500'
        },
        { 
            role: 'Assistant Lecturer', 
            company: 'Informatics Faculty Telkom University', 
            logo: telkom, 
            period: 'Sept 2025 - Jan 2025', 
            location: 'Bandung, Indonesia',
            description: 'Assisted in teaching data structures course for Informatics students, conducted exam preparation, provided guidance on programming assignments, and supported students in understanding core OOP concepts and applications.',
            tags: ['Teaching', 'Python', 'Algorithms', 'OOP', 'Java', 'Excel', 'Hardware', 'Data Structures', 'Operating Systems'],
            color: 'from-red-500 to-orange-500'
        },
    ];

    return (
        <section id="workexperience" className="py-24 sm:py-36 bg-[#09090b] relative overflow-hidden flex items-center justify-center min-h-screen">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-sky-500/20 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-20 max-w-6xl relative z-10">
                <div className="flex flex-col items-center justify-center text-center mb-16 sm:mb-24" data-aos="fade-up">
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold mb-6 text-white tracking-tight">
                        Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-400">Experience</span>
                    </h1>
                    <p className="text-gray-400 text-base sm:text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
                        A timeline of my professional journey, highlighting key roles, contributions, and the companies I've had the privilege to work with.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 w-full">
                    {experiences.map((job, index) => (
                        <div 
                            key={index}
                            className="group relative p-6 sm:p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(16,185,129,0.2)]"
                            data-aos="fade-up"
                            data-aos-delay={100 + (index * 50)}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
                            
                            <div className="relative z-10">
                                <div className="flex flex-col sm:flex-row justify-between items-start mb-6 gap-4 sm:gap-0">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white p-2 border border-zinc-700 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                                            <img 
                                                src={job.logo} 
                                                alt={job.company} 
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                                                {job.role}
                                            </h3>
                                            <p className="text-zinc-400 font-medium text-xs sm:text-sm">{job.company}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center text-zinc-400 bg-zinc-800/50 px-3 py-1 rounded-full text-xs font-medium border border-zinc-700 self-start sm:self-auto">
                                        <MapPin size={14} className="mr-1" />
                                        {job.location}
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-6 text-sm text-zinc-400 border-y border-zinc-800 py-4 sm:py-3">
                                    <div className="flex items-center text-emerald-400 font-medium">
                                        <Briefcase size={16} className="mr-2" />
                                        {job.company}
                                    </div>
                                    <div className="flex items-center">
                                        <Calendar size={16} className="mr-2" />
                                        {job.period}
                                    </div>
                                </div>

                                <p className="text-zinc-400 leading-relaxed mb-6 text-sm sm:text-base">
                                    {job.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {job.tags.map((tag, i) => (
                                        <span 
                                            key={i}
                                            className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <a 
                                    href="https://www.linkedin.com/in/yustinus-dwi-adyra-924295247/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-zinc-800 hover:bg-emerald-600 text-white font-medium transition-all duration-300 group/btn text-sm sm:text-base"
                                >
                                    View Details
                                    <ArrowUpRight size={18} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;