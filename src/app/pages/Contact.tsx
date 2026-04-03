import svgPaths from "../../imports/svg-qwoiqi3i2u";
import imgAb6AXuD47Mb8H3XVbvo7FMbeAgxhtSm0IPzfw1Cpxk67Ok1CtAqpENy2JxMae2KmzIup8Cl6UBzlwfNjfbGVPprUsqQam1OaIcB4V94ARrJf7GUihS0E64IvB8MJo380DbqW6HeLcm6FjvpzFxHonORW6AseXrawepB1ZCEePTl5013HwpyxPw31SzViS0Nhva8K2MybBGgGGg7PCpjiodysgVp8MhWwMielPweljJrPeUlvMEskA99EvbDRrHYdhZ9Hv9AyIAkAm from "../../assets/topdownview.png";

export function Contact() {
  return (
    <div className="bg-[#f7f7f2] w-full pt-20">
      <div className="max-w-[1280px] mx-auto px-8 py-20">
        {/* Header Section */}
        <div className="flex gap-12 items-end mb-24">
          <div className="flex-1">
            <div className="inline-block bg-[#a8d7ff] px-4 py-1 rounded-full mb-6">
              <span className="font-['Manrope',sans-serif] font-bold text-[14px] text-[#104b6e] tracking-[0.7px]">
                SAY HELLO
              </span>
            </div>
            
            <h1 className="font-['Poppins',sans-serif] font-extrabold text-[72px] leading-[72px] tracking-[-1.8px] mb-6">
              <span className="text-[#5a529a]">Let's build a</span>
              <br />
              <span className="text-[#2c6084]">world of wonder</span>
              <br />
              <span className="text-[#5a529a]">together.</span>
            </h1>

            <p className="font-['Manrope',sans-serif] text-[20px] text-[#5a5c58] leading-[32px] max-w-[672px]">
              Whether you're starting from scratch or reimagining an existing space,
              our team is here to guide you through every joyful milestone.
            </p>
          </div>

          <div className="w-[96px] h-[96px] bg-[rgba(254,201,122,0.3)] rounded-full flex items-center justify-center">
            <svg className="w-[27px] h-[27px]" fill="none" viewBox="0 0 27 27">
              <path d={svgPaths.p7f33a00} fill="#7A540F" />
            </svg>
          </div>
        </div>

        {/* Contact Info and Form Grid */}
        <div className="grid grid-cols-12 gap-8 mb-24">
          {/* Contact Details & Map */}
          <div className="col-span-5 flex flex-col gap-8">
            {/* Info Card */}
            <div className="bg-[#f1f1ec] rounded-[32px] p-10 relative overflow-hidden">
              <div className="absolute bg-[rgba(168,215,255,0.2)] blur-[32px] bottom-[-48px] right-[-48px] rounded-full w-[192px] h-[192px]" />
              
              <div className="relative">
                <h3 className="font-['Poppins',sans-serif] font-bold text-[24px] text-[#5a529a] mb-4">
                  Direct Connection
                </h3>

                <div className="flex gap-4 items-center mb-4">
                  <div className="w-12 h-12 bg-white rounded-[48px] flex items-center justify-center">
                    <svg className="w-5 h-4" fill="none" viewBox="0 0 20 16">
                      <path d={svgPaths.p13e73800} fill="#5A529A" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-['Manrope',sans-serif] font-bold text-[14px] text-[#5a5c58] uppercase tracking-[1.4px]">
                      Email Us
                    </div>
                    <div className="font-['Manrope',sans-serif] font-medium text-[18px] text-[#2d2f2c]">
                      hello@wheeplay.com
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 items-center mb-8">
                  <div className="w-12 h-12 bg-white rounded-[48px] flex items-center justify-center">
                    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 18 18">
                      <path d={svgPaths.p143e1930} fill="#5A529A" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-['Manrope',sans-serif] font-bold text-[14px] text-[#5a5c58] uppercase tracking-[1.4px]">
                      Call Our Studio
                    </div>
                    <div className="font-['Manrope',sans-serif] font-medium text-[18px] text-[#2d2f2c]">
                      +1 (555) 012-3456
                    </div>
                  </div>
                </div>

                <h3 className="font-['Poppins',sans-serif] font-bold text-[24px] text-[#5a529a] mb-4">
                  Our Home Base
                </h3>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-white rounded-[48px] flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-5" fill="none" viewBox="0 0 16 20">
                      <path d={svgPaths.p1869180} fill="#5A529A" />
                    </svg>
                  </div>
                  <div className="font-['Manrope',sans-serif] text-[18px] text-[#2d2f2c] leading-[29px]">
                    123 Imagination Drive<br />
                    Suite 400, Creative District<br />
                    Austin, TX 78701
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-[#e8e9e3] rounded-[32px] h-[300px] relative overflow-hidden">
              <div className="absolute inset-0 opacity-60">
                <img 
                  src={imgAb6AXuD47Mb8H3XVbvo7FMbeAgxhtSm0IPzfw1Cpxk67Ok1CtAqpENy2JxMae2KmzIup8Cl6UBzlwfNjfbGVPprUsqQam1OaIcB4V94ARrJf7GUihS0E64IvB8MJo380DbqW6HeLcm6FjvpzFxHonORW6AseXrawepB1ZCEePTl5013HwpyxPw31SzViS0Nhva8K2MybBGgGGg7PCpjiodysgVp8MhWwMielPweljJrPeUlvMEskA99EvbDRrHYdhZ9Hv9AyIAkAm}
                  alt="Map"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-[rgba(90,82,154,0.1)] flex items-center justify-center">
                <div className="w-12 h-12 bg-[#5a529a] rounded-full flex items-center justify-center shadow-xl">
                  <svg className="w-4 h-5" fill="none" viewBox="0 0 16 20">
                    <path d={svgPaths.p303da380} fill="white" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-[32px] shadow-sm">
                <div className="font-['Manrope',sans-serif] font-bold text-[12px] text-[#2d2f2c] tracking-[-0.3px]">
                  VIEW ON GOOGLE MAPS
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-span-7 bg-white rounded-[32px] p-12 shadow-lg">
            <h2 className="font-['Poppins',sans-serif] font-extrabold text-[30px] text-[#2d2f2c] mb-2">
              Start Your Project
            </h2>
            <p className="font-['Manrope',sans-serif] text-[16px] text-[#5a5c58] leading-[24px] mb-10">
              Fill out the form below and an expert from our design team will reach out within 24<br />
              hours.
            </p>

            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="font-['Manrope',sans-serif] font-bold text-[14px] text-[#5a5c58] block mb-2">
                    Parent Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-[#e2e3dd] px-6 py-4 rounded-md font-['Manrope',sans-serif] text-[16px] text-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#5a529a]"
                  />
                </div>

                <div>
                  <label className="font-['Manrope',sans-serif] font-bold text-[14px] text-[#5a5c58] block mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-[#e2e3dd] px-6 py-4 rounded-md font-['Manrope',sans-serif] text-[16px] text-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#5a529a]"
                  />
                </div>
              </div>

              <div>
                <label className="font-['Manrope',sans-serif] font-bold text-[14px] text-[#5a5c58] block mb-2">
                  Project Interest
                </label>
                <select className="w-full bg-[#e2e3dd] px-6 py-4 rounded-md font-['Manrope',sans-serif] text-[16px] text-[#2d2f2c] focus:outline-none focus:ring-2 focus:ring-[#5a529a] appearance-none">
                  <option>Residential Backyard Play</option>
                  <option>Community Playground</option>
                  <option>School Environment</option>
                  <option>Therapy Center</option>
                </select>
              </div>

              <div>
                <label className="font-['Manrope',sans-serif] font-bold text-[14px] text-[#5a5c58] block mb-2">
                  Tell us about your space & child
                </label>
                <textarea
                  placeholder="Share your vision or any specific safety needs..."
                  rows={5}
                  className="w-full bg-[#e2e3dd] px-6 py-4 rounded-md font-['Manrope',sans-serif] text-[16px] text-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#5a529a] resize-none"
                />
              </div>

              <button
                type="submit"
                className="bg-[#5a529a] text-white py-5 rounded-full font-['Manrope',sans-serif] font-bold text-[16px] hover:bg-[#4a4289] transition-colors shadow-lg flex items-center justify-center gap-3"
              >
                Begin My Project Journey
                <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                  <path d={svgPaths.p1a406200} fill="white" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}