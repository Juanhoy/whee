import { Link } from "react-router";

export function Process() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-[#f5f0ff] py-24">
        <div className="max-w-[1440px] mx-auto px-8 text-center">
          <div className="inline-block bg-[#a8d7ff] px-6 py-2 rounded-full mb-6">
            <span className="font-['Manrope',sans-serif] font-bold text-[14px] text-[#104b6e] tracking-[0.7px]">
              HOW WE WORK
            </span>
          </div>
          
          <h1 className="font-['Poppins',sans-serif] font-extrabold text-[72px] leading-[72px] mb-6">
            <span className="text-[#2d2f2c]">Our Consultative</span>
            <br />
            <span className="text-[#5a529a]">Process</span>
          </h1>

          <p className="font-['Manrope',sans-serif] text-[20px] text-[#5a5c58] leading-[32px] max-w-[740px] mx-auto">
            We don't just sell play sets; we design developmental experiences through five carefully managed phases that put your child's needs at the center of everything we do.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-3 gap-8">
            {/* Step 1 - Empathy Meeting */}
            <div className="bg-white rounded-[48px] p-10 border-b-4 border-[#a8d7ff] shadow-sm">
              <div className="font-['Manrope',sans-serif] font-bold text-[48px] text-[#a8d7ff] mb-8">
                01
              </div>
              <h3 className="font-['Poppins',sans-serif] font-bold text-[24px] text-[#2d2f2c] mb-4">
                Empathy Meeting
              </h3>
              <p className="font-['Manrope',sans-serif] text-[16px] text-[#5a5c58] leading-[26px]">
                We like to connect with the kids and their parents or institutions to understand what they need. This initial conversation helps us learn about your child's unique sensory preferences, behavioral patterns, and developmental goals.
              </p>
            </div>

            {/* Step 2 - Concept */}
            <div className="bg-white rounded-[48px] p-10 border-b-4 border-[#b5adfd] shadow-sm">
              <div className="font-['Manrope',sans-serif] font-bold text-[48px] text-[#b5adfd] mb-8">
                02
              </div>
              <h3 className="font-['Poppins',sans-serif] font-bold text-[24px] text-[#2d2f2c] mb-4">
                Concept
              </h3>
              <p className="font-['Manrope',sans-serif] text-[16px] text-[#5a5c58] leading-[26px]">
                We sketch and imagine the best solutions for our users and customers with our expertise in psychology and architecture. Our team collaborates to create spaces that support emotional regulation and sensory integration.
              </p>
            </div>

            {/* Step 3 - Architectural Drawings */}
            <div className="bg-white rounded-[48px] p-10 border-b-4 border-[#fec97a] shadow-sm">
              <div className="font-['Manrope',sans-serif] font-bold text-[48px] text-[#fec97a] mb-8">
                03
              </div>
              <h3 className="font-['Poppins',sans-serif] font-bold text-[24px] text-[#2d2f2c] mb-4">
                Architectural Drawings
              </h3>
              <p className="font-['Manrope',sans-serif] text-[16px] text-[#5a5c58] leading-[26px]">
                We detail every element of the design with precise technical specifications, ensuring compliance with safety standards while maintaining the creative vision. Our drawings include acoustic treatments, lighting plans, and material selections tailored to sensory needs.
              </p>
            </div>

            {/* Step 4 - Renders */}
            <div className="bg-white rounded-[48px] p-10 border-b-4 border-[#5a529a] shadow-sm">
              <div className="font-['Manrope',sans-serif] font-bold text-[48px] text-[#5a529a] mb-8">
                04
              </div>
              <h3 className="font-['Poppins',sans-serif] font-bold text-[24px] text-[#2d2f2c] mb-4">
                Renders
              </h3>
              <p className="font-['Manrope',sans-serif] text-[16px] text-[#5a5c58] leading-[26px]">
                We visualize with you the play space for your kids through stunning 3D renders. These detailed visualizations help you see exactly how the finished space will look and feel, allowing for any final adjustments before construction begins.
              </p>
            </div>

            {/* Step 5 - We Build with You */}
            <div className="bg-white rounded-[48px] p-10 border-b-4 border-[#a8d7ff] shadow-sm col-span-2">
              <div className="font-['Manrope',sans-serif] font-bold text-[48px] text-[#a8d7ff] mb-8">
                05
              </div>
              <h3 className="font-['Poppins',sans-serif] font-bold text-[24px] text-[#2d2f2c] mb-4">
                We Build with You
              </h3>
              <p className="font-['Manrope',sans-serif] text-[16px] text-[#5a5c58] leading-[26px]">
                We build a safe place with safety specifications and the best design, materials, and solutions for your kid. Our construction team works closely with you throughout the build process, maintaining the highest standards for structural integrity, accessibility, and sensory-friendly features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Process Works */}
      <section className="py-24 bg-[#f1f1ec]">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-['Poppins',sans-serif] font-bold text-[36px] text-[#2d2f2c] mb-6">
                Why Our Process Works
              </h2>
              <p className="font-['Manrope',sans-serif] text-[18px] text-[#5a5c58] leading-[28px] mb-6">
                Every step is designed to ensure that your child's unique needs are understood, respected, and incorporated into the final design. We don't just build play spaces—we create environments where children with autism can thrive.
              </p>
              <p className="font-['Manrope',sans-serif] text-[18px] text-[#5a5c58] leading-[28px] mb-8">
                Our interdisciplinary team combines clinical psychology insights with architectural excellence to deliver spaces that are both beautiful and functionally supportive of neurodivergent development.
              </p>
              
              <div className="flex gap-4">
                <div className="flex-1 bg-white rounded-[24px] p-6">
                  <div className="font-['Poppins',sans-serif] font-bold text-[32px] text-[#5a529a] mb-2">
                    100%
                  </div>
                  <p className="font-['Manrope',sans-serif] text-[14px] text-[#5a5c58]">
                    Safety Certified
                  </p>
                </div>
                
                <div className="flex-1 bg-white rounded-[24px] p-6">
                  <div className="font-['Poppins',sans-serif] font-bold text-[32px] text-[#5a529a] mb-2">
                    15+
                  </div>
                  <p className="font-['Manrope',sans-serif] text-[14px] text-[#5a5c58]">
                    Years Experience
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#5a529a] rounded-[48px] p-12 text-white">
              <h3 className="font-['Poppins',sans-serif] font-bold text-[28px] text-[#f5f0ff] mb-6">
                Collaborative Approach
              </h3>
              <p className="font-['Manrope',sans-serif] text-[16px] text-[rgba(245,240,255,0.9)] leading-[26px] mb-6">
                We believe the best results come from collaboration. Throughout our process, you're not just a client—you're a partner. We value your insights about your child and incorporate your feedback at every stage.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#b5adfd] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#5a529a]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-['Manrope',sans-serif] text-[15px] text-[#f5f0ff]">
                    Regular check-ins and progress updates
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#b5adfd] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#5a529a]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-['Manrope',sans-serif] text-[15px] text-[#f5f0ff]">
                    Transparent communication throughout
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#b5adfd] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#5a529a]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-['Manrope',sans-serif] text-[15px] text-[#f5f0ff]">
                    Flexibility to adapt to your needs
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[896px] mx-auto px-8">
          <div className="bg-[#f5f0ff] rounded-[48px] p-16 text-center">
            <h2 className="font-['Poppins',sans-serif] font-bold text-[36px] mb-4">
              <span className="text-[#2d2f2c]">Ready to start </span>
              <span className="text-[#5a529a]">your journey?</span>
            </h2>
            <p className="font-['Manrope',sans-serif] text-[18px] text-[#5a5c58] mb-8">
              Let's begin with an empathy meeting to understand your child's unique needs.
            </p>
            
            <div className="flex gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-[#5a529a] text-[#f5f0ff] px-10 py-4 rounded-full font-['Manrope',sans-serif] font-bold text-[16px] hover:bg-[#4a4289] transition-colors shadow-lg"
              >
                Schedule a Meeting
              </Link>
              <Link
                to="/team"
                className="bg-white text-[#5a529a] px-10 py-4 rounded-full font-['Manrope',sans-serif] font-bold text-[16px] border-2 border-[#5a529a] hover:bg-[#f5f0ff] transition-colors"
              >
                Meet the Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
