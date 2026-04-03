import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
import solution1Img from "../../assets/solution1.png";
import solution2Img from "../../assets/solution2.png";
import solution3Img from "../../assets/solution3.png";

export function Solutions() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-[#f5f0ff] py-24">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#a8d7ff] px-6 py-2 rounded-full mb-6">
              <span className="font-['Manrope',sans-serif] font-bold text-[14px] text-[#104b6e] tracking-[0.7px]">
                OUR SERVICES
              </span>
            </div>
            
            <h1 className="font-['Poppins',sans-serif] font-extrabold text-[72px] leading-[72px] text-[#2d2f2c] mb-6">
              Comprehensive Play
              <br />
              <span className="text-[#5a529a]">Space Solutions</span>
            </h1>

            <p className="font-['Manrope',sans-serif] text-[20px] text-[#5a5c58] leading-[32px] max-w-[800px] mx-auto">
              From initial consultation to final build, we provide end-to-end services tailored to create sensory-friendly, inclusive play environments.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 gap-12 mb-24">
            {/* Card 1 */}
            <div className="bg-[#f5f0ff] rounded-[32px] overflow-hidden grid md:grid-cols-2 gap-0 shadow-sm">
              <div className="p-12 flex flex-col justify-center">
                <div className="bg-[#5a529a] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="font-['Poppins',sans-serif] font-bold text-[36px] text-[#2d2f2c] mb-4">
                  Consultation & Discovery
                </h3>
                <p className="font-['Manrope',sans-serif] text-[18px] text-[#5a5c58] leading-[28px] mb-6">
                  We begin with an in-depth discovery call to understand your child's unique sensory profile, space requirements, and play preferences. Our psychologist evaluates developmental needs while our architects assess site feasibility.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#5a529a] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-['Manrope',sans-serif] text-[16px] text-[#5a5c58]">
                      Family & child behavioral assessment
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#5a529a] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-['Manrope',sans-serif] text-[16px] text-[#5a5c58]">
                      Site evaluation & safety review
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#5a529a] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-['Manrope',sans-serif] text-[16px] text-[#5a5c58]">
                      Budget & timeline planning
                    </span>
                  </li>
                </ul>
              </div>
              <div className="relative h-full min-h-[300px]">
                <img src={solution1Img} alt="Consultation image" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#fff4e6] rounded-[32px] overflow-hidden grid md:grid-cols-2 gap-0 shadow-sm">
              <div className="relative h-full min-h-[300px] order-last md:order-first">
                <img src={solution2Img} alt="Safety installation" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="p-12 flex flex-col justify-center">
                <div className="bg-[#fec97a] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[#7a540f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-['Poppins',sans-serif] font-bold text-[36px] text-[#2d2f2c] mb-4">
                  Safety-Certified Installation
                </h3>
                <p className="font-['Manrope',sans-serif] text-[18px] text-[#5a5c58] leading-[28px] mb-6">
                  Marcus oversees every build phase with 20+ years of commercial safety expertise. All installations meet ADA, ASTM, and CPSC standards while maintaining the whimsical aesthetic children love.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#fec97a] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-['Manrope',sans-serif] text-[16px] text-[#5a5c58]">
                      Licensed contractor installation
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#fec97a] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-['Manrope',sans-serif] text-[16px] text-[#5a5c58]">
                      Impact-attenuating surfacing
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#fec97a] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-['Manrope',sans-serif] text-[16px] text-[#5a5c58]">
                      Post-installation safety audit
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#dcddd7] rounded-[32px] overflow-hidden grid md:grid-cols-2 gap-0 shadow-sm">
              <div className="p-12 flex flex-col justify-center">
                <div className="bg-[#5a5c58] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-['Poppins',sans-serif] font-bold text-[36px] text-[#2d2f2c] mb-4">
                  Ongoing Support & Maintenance
                </h3>
                <p className="font-['Manrope',sans-serif] text-[18px] text-[#5a5c58] leading-[28px] mb-6">
                  Our partnership doesn't end at installation. We provide quarterly check-ins, maintenance guidance, and adaptation recommendations as your child grows and their needs evolve.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#5a5c58] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-['Manrope',sans-serif] text-[16px] text-[#5a5c58]">
                      Quarterly developmental check-ins
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#5a5c58] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-['Manrope',sans-serif] text-[16px] text-[#5a5c58]">
                      Annual safety inspections
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#5a5c58] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-['Manrope',sans-serif] text-[16px] text-[#5a5c58]">
                      Upgrade & expansion planning
                    </span>
                  </li>
                </ul>
              </div>
              <div className="relative h-full min-h-[300px]">
                <img src={solution3Img} alt="Ongoing support" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-24 bg-[#f1f1ec]">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="font-['Poppins',sans-serif] font-bold text-[48px] text-[#2d2f2c] mb-4">
              Project Types We Serve
            </h2>
            <p className="font-['Manrope',sans-serif] text-[18px] text-[#5a5c58] max-w-[800px] mx-auto">
              From residential backyards to community centers, we adapt our expertise to any scale.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div className="bg-white rounded-[24px] p-8 shadow-sm">
              <h4 className="font-['Poppins',sans-serif] font-bold text-[24px] text-[#2d2f2c] mb-3">
                Residential Backyards
              </h4>
              <p className="font-['Manrope',sans-serif] text-[16px] text-[#5a5c58] leading-[26px]">
                Custom home play spaces designed for individual families and children with unique sensory needs.
              </p>
            </div>

            <div className="bg-white rounded-[24px] p-8 shadow-sm">
              <h4 className="font-['Poppins',sans-serif] font-bold text-[24px] text-[#2d2f2c] mb-3">
                Schools & Therapy Centers
              </h4>
              <p className="font-['Manrope',sans-serif] text-[16px] text-[#5a5c58] leading-[26px]">
                Educational environments that support multiple children and therapeutic activities simultaneously.
              </p>
            </div>

            <div className="bg-white rounded-[24px] p-8 shadow-sm">
              <h4 className="font-['Poppins',sans-serif] font-bold text-[24px] text-[#2d2f2c] mb-3">
                Community Playgrounds
              </h4>
              <p className="font-['Manrope',sans-serif] text-[16px] text-[#5a5c58] leading-[26px]">
                Large-scale public play spaces that welcome all children and promote inclusive play experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="font-['Poppins',sans-serif] font-bold text-[48px] text-[#2d2f2c] mb-4">
              Our 4-Phase Process
            </h2>
            <p className="font-['Manrope',sans-serif] text-[18px] text-[#5a5c58] max-w-[800px] mx-auto">
              We don't just sell play sets; we design developmental experiences through four carefully managed phases.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-6">
            <div className="bg-white border-b-4 border-[#a8d7ff] rounded-[24px] p-8 shadow-sm">
              <div className="font-['Manrope',sans-serif] font-bold text-[36px] text-[#a8d7ff] mb-4">01</div>
              <h4 className="font-['Poppins',sans-serif] font-bold text-[20px] text-[#2d2f2c] mb-3">
                Discovery Call
              </h4>
              <p className="font-['Manrope',sans-serif] text-[14px] text-[#5a5c58] leading-[22px]">
                A brief chat to understand your space requirements and your child's unique play profile.
              </p>
            </div>

            <div className="bg-white border-b-4 border-[#b5adfd] rounded-[24px] p-8 shadow-sm">
              <div className="font-['Manrope',sans-serif] font-bold text-[36px] text-[#b5adfd] mb-4">02</div>
              <h4 className="font-['Poppins',sans-serif] font-bold text-[20px] text-[#2d2f2c] mb-3">
                Site Evaluation
              </h4>
              <p className="font-['Manrope',sans-serif] text-[14px] text-[#5a5c58] leading-[22px]">
                Our experts assess terrain, safety concerns, and zoning to optimize your space's potential.
              </p>
            </div>

            <div className="bg-white border-b-4 border-[#fec97a] rounded-[24px] p-8 shadow-sm">
              <div className="font-['Manrope',sans-serif] font-bold text-[36px] text-[#fec97a] mb-4">03</div>
              <h4 className="font-['Poppins',sans-serif] font-bold text-[20px] text-[#2d2f2c] mb-3">
                3D Modeling
              </h4>
              <p className="font-['Manrope',sans-serif] text-[14px] text-[#5a5c58] leading-[22px]">
                See your play space come to life with photorealistic digital renderings before we build.
              </p>
            </div>

            <div className="bg-white border-b-4 border-[#5a529a] rounded-[24px] p-8 shadow-sm">
              <div className="font-['Manrope',sans-serif] font-bold text-[36px] text-[#5a529a] mb-4">04</div>
              <h4 className="font-['Poppins',sans-serif] font-bold text-[20px] text-[#2d2f2c] mb-3">
                The Build
              </h4>
              <p className="font-['Manrope',sans-serif] text-[14px] text-[#5a5c58] leading-[22px]">
                Safety-certified installation with premium, sustainable materials built to last decades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#5a529a] text-white">
        <div className="max-w-[1440px] mx-auto px-8 text-center">
          <h2 className="font-['Poppins',sans-serif] font-extrabold text-[48px] mb-6">
            Ready to transform your space?
          </h2>
          <p className="font-['Manrope',sans-serif] text-[20px] mb-8 max-w-[600px] mx-auto opacity-90">
            Schedule your free consultation today and let's create a play environment where every child can thrive.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-[#5a529a] px-8 py-4 rounded-full font-['Manrope',sans-serif] font-bold text-[16px] hover:shadow-xl transition-shadow"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}