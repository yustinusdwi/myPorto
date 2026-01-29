import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 border-t border-slate-800 pt-10 pb-10 relative overflow-hidden">
            <div className="w-full flex justify-center items-center px-6 relative z-10">
                <div className="text-center w-full">
                    <p className="text-sm text-slate-500 flex items-center justify-center gap-1 text-center">
                        &copy; {currentYear} Yustinus Dwi Adyra. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;