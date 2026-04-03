import { motion } from "framer-motion";
import { Link } from "react-router";
import heroImg from "../../assets/hero.png";

export function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-[#f5f0ff] overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col"
            >
              <div className="inline-block self-start bg-[#a8d7ff] px-6 py-2 rounded-full mb-6 relative overflow-hidden group hover:bg-[#92ccfd] transition-colors cursor-default">
                <span className="font-['Poppins',sans-serif] font-bold text-[14px] text-[#104b6e] tracking-[0.7px]">
                  SAFE SPACES DESIGNED BY EXPERTS
                </span>
                <motion.div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none" />
              </div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-['Poppins',sans-serif] font-extrabold text-[48px] md:text-[60px] lg:text-[72px] leading-tight mb-6"
              >
                <span className="text-[#2d2f2c]">Architects of</span>
                <br />
                <span className="text-[#5a529a]">Inclusion.</span>
              </motion.h1>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="lg:hidden relative my-6"
              >
                <div className="rounded-[24px] overflow-hidden flex items-center justify-center">
                  <img
                    src={heroImg}
                    alt="Modern inclusive playground design"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </motion.div>

              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-['Manrope',sans-serif] text-[18px] md:text-[20px] text-[#5a5c58] leading-[32px] mb-8"
              >
                We blend clinical psychology with sensory-focused architecture to build environments where kids with autism, especially those on the autism spectrum, can flourish without barriers.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                  <Link
                    to="/contact"
                    className="block w-full text-center bg-[#5a529a] text-white px-8 py-4 rounded-full font-['Manrope',sans-serif] font-bold text-[16px] hover:shadow-xl hover:bg-[#4a4381] transition-all"
                  >
                    Book a Tour
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                  <Link
                    to="/solutions"
                    className="block w-full text-center bg-white text-[#5a529a] px-8 py-4 rounded-full font-['Manrope',sans-serif] font-bold text-[16px] border-2 border-[#5a529a] hover:bg-[#5a529a] hover:text-white transition-all"
                  >
                    Explore Solutions
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              <motion.div 
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4 }}
                className="rounded-[32px] overflow-hidden flex items-center justify-center"
              >
                <img
                  src={heroImg}
                  alt="Modern inclusive playground design"
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="font-['Poppins',sans-serif] font-bold text-[48px] text-[#2d2f2c] mb-4">
              Why Families Trust Whee!
            </h2>
            <p className="font-['Manrope',sans-serif] text-[18px] text-[#5a5c58] max-w-[800px] mx-auto">
              Our multidisciplinary approach ensures that every design choice is backed by science and executed with architectural precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#f5f0ff] rounded-[32px] p-8">
              <div className="bg-[#5a529a] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-['Poppins',sans-serif] font-bold text-[24px] text-[#2d2f2c] mb-4">
                Sensory-Informed Design
              </h3>
              <p className="font-['Manrope',sans-serif] text-[16px] text-[#5a5c58] leading-[26px]">
                Every space is carefully crafted to minimize sensory overload and create calming "de-escalation nodes" that support emotional regulation.
              </p>
            </div>

            <div className="bg-[#fce8e7] rounded-[32px] p-8">
              <div className="bg-[#F99A96] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-['Poppins',sans-serif] font-bold text-[24px] text-[#2d2f2c] mb-4">
                Safety-First Architecture
              </h3>
              <p className="font-['Manrope',sans-serif] text-[16px] text-[#5a5c58] leading-[26px]">
                Our architects ensure every whimsical design meets the highest rigorous structural safety and accessibility codes without compromise.
              </p>
            </div>

            <div className="bg-[#fff4e6] rounded-[32px] p-8">
              <div className="bg-[#fec97a] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#7a540f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-['Poppins',sans-serif] font-bold text-[24px] text-[#2d2f2c] mb-4">
                Expert Team Collaboration
              </h3>
              <p className="font-['Manrope',sans-serif] text-[16px] text-[#5a5c58] leading-[26px]">
                A psychologist and two architects working in harmony, combining behavioral science with structural innovation for optimal results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-[#f1f1ec]">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-['Poppins',sans-serif] font-extrabold text-[60px] text-[#5a529a] mb-2">
                12k+
              </div>
              <div className="font-['Manrope',sans-serif] font-medium text-[16px] text-[#5a5c58]">
                Happy Families
              </div>
            </div>

            <div className="text-center">
              <div className="font-['Poppins',sans-serif] font-extrabold text-[60px] text-[#5a529a] mb-2">
                45
              </div>
              <div className="font-['Manrope',sans-serif] font-medium text-[16px] text-[#5a5c58]">
                Active Projects
              </div>
            </div>

            <div className="text-center">
              <div className="font-['Poppins',sans-serif] font-extrabold text-[60px] text-[#5a529a] mb-2">
                100%
              </div>
              <div className="font-['Manrope',sans-serif] font-medium text-[16px] text-[#5a5c58]">
                Satisfaction
              </div>
            </div>

            <div className="text-center">
              <div className="font-['Poppins',sans-serif] font-extrabold text-[60px] text-[#5a529a] mb-2">
                18
              </div>
              <div className="font-['Manrope',sans-serif] font-medium text-[16px] text-[#5a5c58]">
                Expert Partners
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#5a529a] text-white">
        <div className="max-w-[1440px] mx-auto px-8 text-center">
          <h2 className="font-['Poppins',sans-serif] font-extrabold text-[48px] mb-6">
            Ready to build something <span className="text-[#fec97a]">wonderful</span>?
          </h2>
          <p className="font-['Manrope',sans-serif] text-[20px] mb-8 max-w-[600px] mx-auto opacity-90">
            Give us a ring or schedule a site visit today to bring inclusive play to your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
            <Link
              to="/contact"
              className="block w-full sm:w-auto bg-white text-[#5a529a] px-8 py-4 rounded-full font-['Manrope',sans-serif] font-bold text-[16px] hover:shadow-xl transition-shadow"
            >
              Book a Project
            </Link>
            <a
              href="https://example.com/guide"
              className="block w-full sm:w-auto bg-[rgba(255,255,255,0.2)] text-white px-8 py-4 rounded-full font-['Manrope',sans-serif] font-bold text-[16px] border-2 border-white hover:bg-white hover:text-[#5a529a] transition-colors"
            >
              Download Safety Guide
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}