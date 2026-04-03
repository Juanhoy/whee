import imgCeleste from "../../../img/hero.png";
import imgMarcus from "../../../img/hero.png";
import imgXimena from "../../../img/hero.png";
import imgHero from "../../../img/hero.png";
import { Link } from "react-router";

// Reusable Team Member Card Component
function TeamMemberCard({ 
  image, 
  name, 
  title, 
  description, 
  signatureLabel, 
  signatureValue 
}: {
  image: string;
  name: string;
  title: string;
  description: string;
  signatureLabel: string;
  signatureValue: string;
}) {
  return (
    <div className="bg-[#5a529a] rounded-[48px] p-8 text-white flex flex-col h-full">
      <div className="flex flex-col flex-1 justify-between">
        <div>
          <div className="w-24 h-24 rounded-full overflow-hidden mb-8 border-4 border-[#b5adfd]">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
          
          <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[30px] text-[#f5f0ff] mb-2">
            {name}
          </h3>
          <p className="font-['Manrope',sans-serif] font-semibold text-[12px] text-[#b5adfd] uppercase tracking-[0.3px] mb-8">
            {title}
          </p>
          
          <p className="font-['Manrope',sans-serif] text-[16px] text-[rgba(245,240,255,0.9)] leading-[26px] mb-8">
            {description}
          </p>
        </div>
        
        <div className="border-t border-[rgba(181,173,253,0.3)] pt-6">
          <p className="font-['Manrope',sans-serif] font-bold text-[12px] text-[#b5adfd] uppercase tracking-[1.2px] mb-2">
            {signatureLabel}
          </p>
          <p className="font-['Manrope',sans-serif] font-semibold text-[16px] text-[#f5f0ff]">
            {signatureValue}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Team() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-white py-24">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-[#a8d7ff] px-6 py-2 rounded-full mb-6">
                <span className="font-['Manrope',sans-serif] font-bold text-[14px] text-[#104b6e] tracking-[0.7px]">
                  THE EXPERTS BEHIND THE MAGIC
                </span>
              </div>
              
              <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[72px] leading-[72px] mb-6">
                <span className="text-[#2d2f2c]">Architects of</span>
                <br />
                <span className="text-[#5a529a]">Inclusion.</span>
              </h1>

              <p className="font-['Manrope',sans-serif] text-[20px] text-[#5a5c58] leading-[32px]">
                We blend clinical psychology with sensory-focused architecture to build environments where every child, especially those on the autism spectrum, can flourish without barriers.
              </p>
            </div>

            <div className="relative">
              <div className="rounded-[48px] overflow-hidden">
                <img src={imgHero} alt="Team workspace" className="w-full h-[576px] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-[#f1f1ec] py-24">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[36px] text-[#2d2f2c] mb-6">
              Driven by Purpose & Expertise
            </h2>
            <p className="font-['Manrope',sans-serif] text-[18px] text-[#5a5c58] max-w-[740px] mx-auto">
              Our multidisciplinary approach ensures that every design choice is backed by science and executed with architectural precision.
            </p>
          </div>

          {/* Team Grid - All 3 in one row */}
          <div className="grid grid-cols-3 gap-8 mb-12">
            {/* Ximena Hoyos */}
            <TeamMemberCard
              image={imgXimena}
              name="Ximena Hoyos"
              title="Lead Inclusive Architect"
              description="Ximena pioneers 'Acoustically Safe Layouts.' She designs the physical flow that reduces anxiety and encourages parallel play for children with autism."
              signatureLabel="Signature Project"
              signatureValue="The Echo-Free Pavilion"
            />

            {/* Celeste Ramirez */}
            <div className="bg-[#F99A96] rounded-[48px] p-8 text-white flex flex-col h-full">
              <div className="flex flex-col flex-1 justify-between">
                <div>
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-8 border-4 border-white">
                    <img src={imgCeleste} alt="Celeste Ramirez" className="w-full h-full object-cover" />
                  </div>
                  
                  <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[30px] text-white mb-2">
                    Celeste Ramirez
                  </h3>
                  <p className="font-['Manrope',sans-serif] font-semibold text-[12px] text-white uppercase tracking-[0.3px] mb-8 opacity-90">
                    Psychologist & Behavioral Expert
                  </p>
                  
                  <p className="font-['Manrope',sans-serif] text-[16px] text-white leading-[26px] mb-8 opacity-95">
                    With over 15 years in neurodevelopmental psychology, Celeste ensures our spaces minimize sensory overload. Her work focuses on creating 'de-escalation nodes' within play environments.
                  </p>
                </div>
                
                <div className="border-t border-white border-opacity-30 pt-6">
                  <p className="font-['Manrope',sans-serif] font-bold text-[12px] text-white uppercase tracking-[1.2px] mb-2 opacity-90">
                    Specialization
                  </p>
                  <p className="font-['Manrope',sans-serif] font-semibold text-[16px] text-white">
                    Sensory Modulation
                  </p>
                </div>
              </div>
            </div>

            {/* Marcus Thorne */}
            <div className="bg-[#FFCA7B] rounded-[48px] p-8 text-white flex flex-col h-full">
              <div className="flex flex-col flex-1 justify-between">
                <div>
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-8 border-4 border-white">
                    <img src={imgMarcus} alt="Marcus Thorne" className="w-full h-full object-cover" />
                  </div>
                  
                  <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[30px] text-white mb-2">
                    Marcus Thorne
                  </h3>
                  <p className="font-['Manrope',sans-serif] font-semibold text-[12px] text-white uppercase tracking-[0.3px] mb-8 opacity-90">
                    Strategic Design Partner
                  </p>
                  
                  <p className="font-['Manrope',sans-serif] text-[16px] text-white leading-[26px] mb-8 opacity-95">
                    Bringing 20 years of commercial safety standards, Marcus ensures every whimsical design meets the highest rigorous structural safety and accessibility codes.
                  </p>
                </div>
                
                <div className="border-t border-white border-opacity-30 pt-6">
                  <p className="font-['Manrope',sans-serif] font-bold text-[12px] text-white uppercase tracking-[1.2px] mb-2 opacity-90">
                    Specialization
                  </p>
                  <p className="font-['Manrope',sans-serif] font-semibold text-[16px] text-white">
                    Safety Standards
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Philosophy Card */}
          <div className="bg-white rounded-[48px] p-10">
            <div className="flex gap-10 items-center">
              <div className="flex-1">
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[24px] text-[#2d2f2c] mb-4">
                  Our Collaborative Pulse
                </h3>
                <p className="font-['Manrope',sans-serif] text-[16px] text-[#5a5c58] leading-[26px] mb-6">
                  We don't just build parks; we build ecosystems. Our team meets weekly with a focus group of parents and neurodivergent advocates to peer-review every material, texture, and light fixture before it goes to production.
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#e2e3dd] border-2 border-white"></div>
                    <div className="w-10 h-10 rounded-full bg-[#b5adfd] border-2 border-white -ml-3"></div>
                    <div className="w-10 h-10 rounded-full bg-[#a8d7ff] border-2 border-white -ml-3"></div>
                  </div>
                  <p className="font-['Manrope',sans-serif] font-medium text-[14px] text-[#5a5c58]">
                    Trusted by 200+ families nationwide
                  </p>
                </div>
              </div>
              
              <div className="w-72 h-48 rounded-[32px] bg-[#fec97a] flex-shrink-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-y-2 border-[#f1f1ec] bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[48px] text-[#5a529a] mb-2">
                12k+
              </div>
              <div className="font-['Manrope',sans-serif] font-bold text-[14px] text-[#5a5c58] uppercase tracking-[1.4px]">
                Happy Families
              </div>
            </div>

            <div className="text-center">
              <div className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[48px] text-[#5a529a] mb-2">
                45
              </div>
              <div className="font-['Manrope',sans-serif] font-bold text-[14px] text-[#5a5c58] uppercase tracking-[1.4px]">
                Active Projects
              </div>
            </div>

            <div className="text-center">
              <div className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[48px] text-[#5a529a] mb-2">
                100%
              </div>
              <div className="font-['Manrope',sans-serif] font-bold text-[14px] text-[#5a5c58] uppercase tracking-[1.4px]">
                Safety Certified
              </div>
            </div>

            <div className="text-center">
              <div className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[48px] text-[#5a529a] mb-2">
                18
              </div>
              <div className="font-['Manrope',sans-serif] font-bold text-[14px] text-[#5a5c58] uppercase tracking-[1.4px]">
                Expert Partners
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#f1f1ec]">
        <div className="max-w-[896px] mx-auto px-8">
          <div className="bg-white rounded-[48px] p-16 text-center shadow-sm">
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[36px] mb-4">
              <span className="text-[#2d2f2c]">Ready to build something </span>
              <span className="text-[#5a529a] underline decoration-[#b5adfd]">wonderful?</span>
            </h2>
            <p className="font-['Manrope',sans-serif] text-[18px] text-[#5a5c58] mb-6">
              Consult with Ximena and Celeste today to bring inclusive play to your community.
            </p>
            
            <div className="flex gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-[#5a529a] text-[#f5f0ff] px-10 py-4 rounded-full font-['Manrope',sans-serif] font-bold text-[16px] hover:bg-[#4a4289] transition-colors shadow-lg"
              >
                Get a Proposal
              </Link>
              <a
                href="#"
                className="bg-white text-[#5a529a] px-10 py-4 rounded-full font-['Manrope',sans-serif] font-bold text-[16px] border-2 border-[#5a529a] hover:bg-[#f5f0ff] transition-colors"
              >
                Download Safety Guide
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}