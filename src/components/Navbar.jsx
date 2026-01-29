// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, Menu } from "lucide-react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavItems = [
    { name: "Technical Experience", link: "#experience" },
    { name: "Work Experience", link: "#workexperience" },
    { name: "Projects", link: "#projects" },
  ];

  const theme = {
    navBg: "bg-gradient-to-br from-gray-500/90 to-gray-900/90 border border-white/20 shadow-2xl backdrop-blur-md",
    menuBg: "bg-gradient-to-br from-gray-500 to-gray-900 border border-white/20",
    textPrimary: "text-white hover:text-gray-200",
    textSecondary: "text-white hover:text-gray-200",
    activeText: "text-orange-500 font-bold",
    indicator: "bg-orange-500",
    mobileDivider: "border-white/20",
    hamburger: "text-white hover:bg-white/10",
  };

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const sectionId = href.replace("#", "");
    const element = document.getElementById(sectionId);
    
    if (element) {
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  
      window.scrollTo({ top: y, behavior: 'smooth' });
      
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    } else if (href === "#home") {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setActiveSection("home");
        setIsMenuOpen(false);
    }
  };

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`flex w-full max-w-5xl items-center justify-between rounded-full py-3 px-6 transition-all duration-300 ${theme.navBg}`}
      >
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, "#home")}
          style={{ marginLeft: '0.5cm' }}
          className={`text-2xl font-bold tracking-tight flex items-center gap-1 cursor-pointer ${theme.textPrimary}`}
        >
          Widy's Portfolio
          <span className="text-orange-500 text-3xl leading-none mb-1">.</span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {NavItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={(e) => scrollToSection(e, item.link)}
              className="relative px-2 py-2 text-base font-medium transition-colors"
            >
              <span
                className={`relative z-10 capitalize transition-colors duration-200 ${
                  activeSection === item.link.replace("#", "")
                    ? theme.activeText
                    : theme.textSecondary
                }`}
              >
                {item.name}
              </span>
              
              {activeSection === item.link.replace("#", "") && (
                <motion.span
                  layoutId="active-dot"
                  className={`absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full ${theme.indicator}`}
                />
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <motion.a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
                paddingLeft: '2cm',
                paddingRight: '2cm', 
                marginRight: '2px' 
            }}
            className="hidden lg:flex h-11 items-center rounded-full bg-gradient-to-r from-orange-500 to-amber-600 px-8 text-base font-bold text-white shadow-lg shadow-orange-500/20 transition-all hover:shadow-orange-500/40 cursor-pointer"
          >
            How To Reach Me
          </motion.a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden flex h-10 w-10 items-center justify-center rounded-full transition-colors ${theme.hamburger}`}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`absolute top-[95px] w-[95%] max-w-[380px] rounded-3xl p-6 shadow-2xl backdrop-blur-xl ${theme.menuBg}`}
          >
            <div className="flex flex-col items-center gap-2">
              <a
                  href="#home"
                  onClick={(e) => scrollToSection(e, "#home")}
                  className={`w-full text-center py-3 text-lg font-bold capitalize transition-all rounded-xl hover:bg-white/10 ${
                    activeSection === "home" ? theme.activeText : theme.textPrimary
                  }`}
              >
                  Home
              </a>
              {NavItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  onClick={(e) => scrollToSection(e, item.link)}
                  className={`w-full text-center py-3 text-lg font-medium capitalize transition-all rounded-xl hover:bg-white/10 ${
                    activeSection === item.link.replace("#", "")
                      ? theme.activeText
                      : theme.textPrimary
                  }`}
                >
                  {item.name}
                </a>
              ))}
              
              <div className={`w-full my-4 border-t ${theme.mobileDivider}`} />
              
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "#contact")}
                className="flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-orange-500 to-amber-600 py-4 text-lg font-bold text-white shadow-lg shadow-orange-500/30 active:scale-95 transition-transform"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;