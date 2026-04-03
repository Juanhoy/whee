import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router";
import { ScrollToTop } from "./ScrollToTop";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "../../assets/logo.png";

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-[#f9f9f6] flex flex-col">
      <ScrollToTop />
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-[#e2e3dd]">
        <div className="max-w-[1440px] mx-auto px-8 py-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logoImg} alt="Whee! Play Spaces Logo" className="h-16 w-auto" />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`font-['Poppins',sans-serif] font-medium text-[16px] transition-all hover:scale-105 ${
                isActive("/") 
                  ? "text-[#5a529a] font-bold" 
                  : "text-[#5a5c58] hover:text-[#5a529a]"
              }`}
            >
              Home
            </Link>
            <Link
              to="/solutions"
              className={`font-['Poppins',sans-serif] font-medium text-[16px] transition-all hover:scale-105 ${
                isActive("/solutions") 
                  ? "text-[#5a529a] font-bold" 
                  : "text-[#5a5c58] hover:text-[#5a529a]"
              }`}
            >
              Solutions
            </Link>
            <Link
              to="/team"
              className={`font-['Poppins',sans-serif] font-medium text-[16px] transition-all hover:scale-105 ${
                isActive("/team") 
                  ? "text-[#5a529a] font-bold" 
                  : "text-[#5a5c58] hover:text-[#5a529a]"
              }`}
            >
              Team
            </Link>
            <Link
              to="/process"
              className={`font-['Poppins',sans-serif] font-medium text-[16px] transition-all hover:scale-105 ${
                isActive("/process") 
                  ? "text-[#5a529a] font-bold" 
                  : "text-[#5a5c58] hover:text-[#5a529a]"
              }`}
            >
              Process
            </Link>
            <Link
              to="/contact"
              className="bg-[#5a529a] text-white px-6 py-3 rounded-full font-['Poppins',sans-serif] font-bold text-[14px] hover:bg-[#4a4289] active:scale-95 transition-all"
            >
              Contact
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-[#5a529a]">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white border-b border-[#e2e3dd] flex flex-col px-8 py-4 gap-4 overflow-hidden"
            >
              <Link to="/" onClick={() => setIsMenuOpen(false)} className={`font-['Poppins',sans-serif] font-medium text-[18px] py-2 ${isActive("/") ? "text-[#5a529a] font-bold" : "text-[#5a5c58]"}`}>Home</Link>
              <Link to="/solutions" onClick={() => setIsMenuOpen(false)} className={`font-['Poppins',sans-serif] font-medium text-[18px] py-2 ${isActive("/solutions") ? "text-[#5a529a] font-bold" : "text-[#5a5c58]"}`}>Solutions</Link>
              <Link to="/team" onClick={() => setIsMenuOpen(false)} className={`font-['Poppins',sans-serif] font-medium text-[18px] py-2 ${isActive("/team") ? "text-[#5a529a] font-bold" : "text-[#5a5c58]"}`}>Team</Link>
              <Link to="/process" onClick={() => setIsMenuOpen(false)} className={`font-['Poppins',sans-serif] font-medium text-[18px] py-2 ${isActive("/process") ? "text-[#5a529a] font-bold" : "text-[#5a5c58]"}`}>Process</Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="bg-[#5a529a] text-white px-6 py-3 rounded-full font-['Poppins',sans-serif] font-bold text-[16px] text-center mt-2 active:scale-95 transition-transform">Contact</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#2d2f2c] text-white py-12">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="font-['Poppins',sans-serif] font-bold text-[20px] text-[#b5adfd] mb-4">
                Whee! Play Spaces
              </div>
              <p className="font-['Poppins',sans-serif] text-[14px] text-[#e2e3dd] leading-[22px]">
                © 2026 Whee! Play Spaces. Built for Every Child.
              </p>
            </div>

            <div>
              <div className="font-['Poppins',sans-serif] font-bold text-[14px] text-white mb-4">
                Quick Links
              </div>
              <div className="flex flex-col gap-2">
                <Link to="/" className="font-['Poppins',sans-serif] text-[14px] text-[#e2e3dd] hover:text-[#b5adfd] transition-colors">
                  Home
                </Link>
                <Link to="/solutions" className="font-['Poppins',sans-serif] text-[14px] text-[#e2e3dd] hover:text-[#b5adfd] transition-colors">
                  Solutions
                </Link>
                <Link to="/team" className="font-['Poppins',sans-serif] text-[14px] text-[#e2e3dd] hover:text-[#b5adfd] transition-colors">
                  Team
                </Link>
                <Link to="/contact" className="font-['Poppins',sans-serif] text-[14px] text-[#e2e3dd] hover:text-[#b5adfd] transition-colors">
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <div className="font-['Poppins',sans-serif] font-bold text-[14px] text-white mb-4">
                Legal
              </div>
              <div className="flex flex-col gap-2">
                <a href="#" className="font-['Poppins',sans-serif] text-[14px] text-[#e2e3dd] hover:text-[#b5adfd] transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="font-['Poppins',sans-serif] text-[14px] text-[#e2e3dd] hover:text-[#b5adfd] transition-colors">
                  Safety Standards
                </a>
                <a href="#" className="font-['Poppins',sans-serif] text-[14px] text-[#e2e3dd] hover:text-[#b5adfd] transition-colors">
                  Accessibility
                </a>
                <a href="#" className="font-['Poppins',sans-serif] text-[14px] text-[#e2e3dd] hover:text-[#b5adfd] transition-colors">
                  Careers
                </a>
              </div>
            </div>

            <div>
              <div className="font-['Poppins',sans-serif] font-bold text-[14px] text-white mb-4">
                Contact
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-['Poppins',sans-serif] text-[14px] text-[#e2e3dd]">
                  123 Imagination Drive<br />
                  Austin, TX 78701
                </p>
                <p className="font-['Poppins',sans-serif] text-[14px] text-[#e2e3dd]">
                  hello@wheeplay.com
                </p>
                <p className="font-['Poppins',sans-serif] text-[14px] text-[#e2e3dd]">
                  +1 (555) 012-3456
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}