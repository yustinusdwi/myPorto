import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 border-t border-slate-800 pt-10 pb-10 relative overflow-hidden">
            <div className="container mx-auto px-6 flex flex-col justify-center items-center gap-6 relative z-10">
                <div className="text-center">
                    <p className="text-sm text-slate-500 flex items-center justify-center gap-1">
                        &copy; {currentYear} Yustinus Dwi Adyra. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;