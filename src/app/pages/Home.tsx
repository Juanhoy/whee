import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-[#f5f0ff] overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-8 py-24">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-[#a8d7ff] px-6 py-2 rounded-full mb-6">
                <span className="font-['Manrope',sans-serif] font-bold text-[14px] text-[#104b6e] tracking-[0.7px]">
                  SAFE SPACES DESIGNED BY EXPERTS
                </span>
              </div>
              
              <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[72px] leading-[72px] mb-6">
                <span className="text-[#2d2f2c]">Architects of</span>
                <br />
                <span className="text-[#5a529a]">Inclusion.</span>
              </h1>

              <p className="font-['Manrope',sans-serif] text-[20px] text-[#5a5c58] leading-[32px] mb-8">
                We blend clinical psychology with sensory-focused architecture to build environments where kids with autism, especially those on the autism spectrum, can flourish without barriers.
              </p>

              <div className="flex gap-4">
                <Link
                  to="/contact"
                  className="bg-[#5a529a] text-white px-8 py-4 rounded-full font-['Manrope',sans-serif] font-bold text-[16px] hover:shadow-xl transition-shadow"
                >
                  Book a Tour
                </Link>
                <Link
                  to="/solutions"
                  className="bg-white text-[#5a529a] px-8 py-4 rounded-full font-['Manrope',sans-serif] font-bold text-[16px] border-2 border-[#5a529a] hover:bg-[#5a529a] hover:text-white transition-colors"
                >
                  Explore Solutions
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[32px] overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1763463034855-c48bc328fd4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwbGF5Z3JvdW5kJTIwaW5jbHVzaXZlJTIwZGVzaWduJTIwY2hpbGRyZW58ZW58MXx8fHwxNzc0OTI1MjI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Modern inclusive playground design"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-[#fec97a] rounded-[24px] p-6 shadow-xl">
                <div className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[48px] text-[#2d2f2c]">
                  12k+
                </div>
                <div className="font-['Manrope',sans-serif] font-medium text-[14px] text-[#5a5c58]">
                  Happy Families
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[48px] text-[#2d2f2c] mb-4">
              Why Families Trust Whee!
            </h2>
            <p className="font-['Manrope',sans-serif] text-[18px] text-[#5a5c58] max-w-[800px] mx-auto">
              Our multidisciplinary approach ensures that every design choice is backed by science and executed with architectural precision.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div className="bg-[#f5f0ff] rounded-[32px] p-8">
              <div className="bg-[#5a529a] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[24px] text-[#2d2f2c] mb-4">
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
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[24px] text-[#2d2f2c] mb-4">
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
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[24px] text-[#2d2f2c] mb-4">
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
          <div className="grid grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[60px] text-[#5a529a] mb-2">
                12k+
              </div>
              <div className="font-['Manrope',sans-serif] font-medium text-[16px] text-[#5a5c58]">
                Happy Families
              </div>
            </div>

            <div className="text-center">
              <div className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[60px] text-[#5a529a] mb-2">
                45
              </div>
              <div className="font-['Manrope',sans-serif] font-medium text-[16px] text-[#5a5c58]">
                Active Projects
              </div>
            </div>

            <div className="text-center">
              <div className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[60px] text-[#5a529a] mb-2">
                100%
              </div>
              <div className="font-['Manrope',sans-serif] font-medium text-[16px] text-[#5a5c58]">
                Satisfaction
              </div>
            </div>

            <div className="text-center">
              <div className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[60px] text-[#5a529a] mb-2">
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
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[48px] mb-6">
            Ready to build something <span className="text-[#fec97a]">wonderful</span>?
          </h2>
          <p className="font-['Manrope',sans-serif] text-[20px] mb-8 max-w-[600px] mx-auto opacity-90">
            Give us a ring or schedule a site visit today to bring inclusive play to your community.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-[#5a529a] px-8 py-4 rounded-full font-['Manrope',sans-serif] font-bold text-[16px] hover:shadow-xl transition-shadow"
            >
              Book a Project
            </Link>
            <a
              href="https://example.com/guide"
              className="bg-[rgba(255,255,255,0.2)] text-white px-8 py-4 rounded-full font-['Manrope',sans-serif] font-bold text-[16px] border-2 border-white hover:bg-white hover:text-[#5a529a] transition-colors"
            >
              Download Safety Guide
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}