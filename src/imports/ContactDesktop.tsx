import svgPaths from "./svg-qwoiqi3i2u";
import imgAb6AXuD47Mb8H3XVbvo7FMbeAgxhtSm0IPzfw1Cpxk67Ok1CtAqpENy2JxMae2KmzIup8Cl6UBzlwfNjfbGVPprUsqQam1OaIcB4V94ARrJf7GUihS0E64IvB8MJo380DbqW6HeLcm6FjvpzFxHonORW6AseXrawepB1ZCEePTl5013HwpyxPw31SzViS0Nhva8K2MybBGgGGg7PCpjiodysgVp8MhWwMielPweljJrPeUlvMEskA99EvbDRrHYdhZ9Hv9AyIAkAm from "../../img/hero.png";

function Background() {
  return (
    <div className="bg-[#a8d7ff] content-stretch flex items-start px-[16px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#104b6e] text-[14px] tracking-[0.7px] w-[78.3px]">
        <p className="leading-[20px]">SAY HELLO</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Extra_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5a529a] text-[72px] tracking-[-1.8px] w-full">
        <p className="leading-[72px] mb-0">Let’s build a</p>
        <p className="leading-[72px] mb-0 text-[#2c6084]">world of wonder</p>
        <p className="leading-[72px]">together.</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[672px] pb-[0.75px] pt-[7.25px] relative shrink-0 w-[672px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[65px] justify-center leading-[0] relative shrink-0 text-[#5a5c58] text-[20px] w-[644.7px]">
        <p className="leading-[32.5px] mb-0">{`Whether you're starting from scratch or reimagining an existing space,`}</p>
        <p className="leading-[32.5px]">our team is here to guide you through every joyful milestone.</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[778.67px]" data-name="Container">
      <Background />
      <Heading />
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 size-[27px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
        <g id="Container">
          <path d={svgPaths.p7f33a00} fill="var(--fill-0, #7A540F)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(254,201,122,0.3)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[96px]" data-name="Overlay">
      <Container3 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-[389.33px]" data-name="Container">
      <Overlay />
    </div>
  );
}

function HeaderSection() {
  return (
    <div className="content-stretch flex gap-[48px] items-end relative shrink-0 w-full" data-name="Header Section">
      <Container />
      <Container2 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5a529a] text-[24px] w-full">
        <p className="leading-[32px]">Direct Connection</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
        <g id="Container">
          <path d={svgPaths.p13e73800} fill="var(--fill-0, #5A529A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[48px]" data-name="Background">
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#5a5c58] text-[14px] tracking-[1.4px] uppercase w-[73.11px]">
        <p className="leading-[20px]">Email Us</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[28px] justify-center leading-[0] relative shrink-0 text-[#2d2f2c] text-[18px] w-[177.69px]">
        <p className="leading-[28px]">hello@wheeplay.com</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[177.69px]" data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Background1 />
      <Container9 />
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p143e1930} fill="var(--fill-0, #5A529A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[48px]" data-name="Background">
      <Container13 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#5a5c58] text-[14px] tracking-[1.4px] uppercase w-[142.11px]">
        <p className="leading-[20px]">Call Our Studio</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[28px] justify-center leading-[0] relative shrink-0 text-[#2d2f2c] text-[18px] w-[150.91px]">
        <p className="leading-[28px]">+1 (555) 012-3456</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[150.91px]" data-name="Container">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Background2 />
      <Container14 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container12 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Container6 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5a529a] text-[24px] w-full">
        <p className="leading-[32px]">Our Home Base</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p1869180} fill="var(--fill-0, #5A529A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background3() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-0 rounded-[48px] size-[48px] top-0" data-name="Background">
      <Container19 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[64px] top-[-0.75px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[88px] justify-center leading-[0] relative shrink-0 text-[#2d2f2c] text-[18px] w-[222.58px]">
        <p className="leading-[29.25px] mb-0">123 Imagination Drive</p>
        <p className="leading-[29.25px] mb-0">Suite 400, Creative District</p>
        <p className="leading-[29.25px]">Austin, TX 78701</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[87.75px] relative shrink-0 w-full" data-name="Container">
      <Background3 />
      <Container20 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Container18 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Container17 />
    </div>
  );
}

function InfoCard() {
  return (
    <div className="bg-[#f1f1ec] relative rounded-[32px] shrink-0 w-full" data-name="Info Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[40px] relative w-full">
          <div className="absolute bg-[rgba(168,215,255,0.2)] blur-[32px] bottom-[-48px] right-[-48px] rounded-[9999px] size-[192px]" data-name="Decorative Shape" />
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Ab6AXuD47Mb8H3XVbvo7FMbeAgxhtSm0IPzfw1Cpxk67Ok1CtAqpENy2JxMae2KmzIup8Cl6UBzlwfNjfbGVPprUsqQam1OaIcB4V94ARrJf7GUihS0E64IvB8MJo380DbqW6HeLcm6FjvpzFxHonORW6AseXrawepB1ZCEePTl5013HwpyxPw31SzViS0Nhva8K2MybBGgGGg7PCpjiodysgVp8MhWwMielPweljJrPeUlvMEskA99EvbDRrHYdhZ9Hv9AyIAkAm() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px opacity-60 relative w-full" data-name="AB6AXuD47MB-8H3xVBVO7fMBEAgxhtSM0iPzfw1Cpxk67ok1CTAqpE_ny2-jxMAE2KmzIUP8CL6uBzlwfNjfbG_vPPRUsqQAM1oaIcB4v_94ARrJf7gUihS0E64IvB8MJo380dbqW6HELcm_6FJVPZFxHonO-rW6AseXrawepB1zCEePTl5013HwpyxPW31SzViS0NHVA8k2MybBGgGGg7PCpjiodysgVP8mhWwMIELPweljJrPEUlvMEskA99EvbDRrHYdhZ9Hv9ayIAkAm">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[162.67%] left-0 max-w-none top-[-31.33%] w-full" src={imgAb6AXuD47Mb8H3XVbvo7FMbeAgxhtSm0IPzfw1Cpxk67Ok1CtAqpENy2JxMae2KmzIup8Cl6UBzlwfNjfbGVPprUsqQam1OaIcB4V94ARrJf7GUihS0E64IvB8MJo380DbqW6HeLcm6FjvpzFxHonORW6AseXrawepB1ZCEePTl5013HwpyxPw31SzViS0Nhva8K2MybBGgGGg7PCpjiodysgVp8MhWwMielPweljJrPeUlvMEskA99EvbDRrHYdhZ9Hv9AyIAkAm} />
        </div>
        <div className="absolute bg-white inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p303da380} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#5a529a] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(255,255,255,0)] left-1/2 rounded-[9999px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] size-[48px] top-1/2" data-name="Overlay+Shadow" />
      <Container21 />
    </div>
  );
}

function Overlay1() {
  return (
    <div className="absolute bg-[rgba(90,82,154,0.1)] content-stretch flex inset-0 items-center justify-center" data-name="Overlay">
      <Background4 />
    </div>
  );
}

function OverlayShadowOverlayBlur() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(255,255,255,0.9)] bottom-[16px] content-stretch flex flex-col items-start left-[16px] px-[16px] py-[8px] rounded-[32px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" data-name="Overlay+Shadow+OverlayBlur">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#2d2f2c] text-[12px] tracking-[-0.3px] w-[131.73px]">
        <p className="leading-[16px]">VIEW ON GOOGLE MAPS</p>
      </div>
    </div>
  );
}

function MapIntegration() {
  return (
    <div className="bg-[#e8e9e3] content-stretch flex flex-col h-[300px] items-start justify-center overflow-clip relative rounded-[32px] shrink-0 w-full" data-name="Map Integration">
      <Ab6AXuD47Mb8H3XVbvo7FMbeAgxhtSm0IPzfw1Cpxk67Ok1CtAqpENy2JxMae2KmzIup8Cl6UBzlwfNjfbGVPprUsqQam1OaIcB4V94ARrJf7GUihS0E64IvB8MJo380DbqW6HeLcm6FjvpzFxHonORW6AseXrawepB1ZCEePTl5013HwpyxPw31SzViS0Nhva8K2MybBGgGGg7PCpjiodysgVp8MhWwMielPweljJrPeUlvMEskA99EvbDRrHYdhZ9Hv9AyIAkAm />
      <Overlay1 />
      <OverlayShadowOverlayBlur />
    </div>
  );
}

function ContactDetailsMapCard() {
  return (
    <div className="col-[1/span_5] content-stretch flex flex-col gap-[32px] items-start justify-self-stretch pb-[4.25px] relative row-1 self-start shrink-0" data-name="Contact Details & Map Card">
      <InfoCard />
      <MapIntegration />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Extra_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2d2f2c] text-[30px] w-full">
        <p className="leading-[36px]">Start Your Project</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a5c58] text-[16px] w-full">
        <p className="leading-[24px] mb-0">Fill out the form below and an expert from our design team will reach out within 24</p>
        <p className="leading-[24px]">hours.</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Container23 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[16px] w-full">
        <p className="leading-[normal]">John Doe</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-[#e2e3dd] content-stretch flex items-start justify-center left-0 overflow-clip px-[24px] py-[17px] right-0 rounded-[6px] top-[28px]" data-name="Input">
      <Container26 />
    </div>
  );
}

function Container25() {
  return (
    <div className="col-1 h-[84px] justify-self-stretch relative row-1 shrink-0" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-[4px] text-[#5a5c58] text-[14px] top-[9.5px] w-[87.13px]">
        <p className="leading-[20px]">Parent Name</p>
      </div>
      <Input />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[16px] w-full">
        <p className="leading-[normal]">john@example.com</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="absolute bg-[#e2e3dd] content-stretch flex items-start justify-center left-0 overflow-clip px-[24px] py-[17px] right-0 rounded-[6px] top-[28px]" data-name="Input">
      <Container28 />
    </div>
  );
}

function Container27() {
  return (
    <div className="col-2 h-[84px] justify-self-stretch relative row-1 shrink-0" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-[4px] text-[#5a5c58] text-[14px] top-[9.5px] w-[95.2px]">
        <p className="leading-[20px]">Email Address</p>
      </div>
      <Input1 />
    </div>
  );
}

function Container24() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_84px] relative shrink-0 w-full" data-name="Container">
      <Container25 />
      <Container27 />
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d="M7.2 9.6L12 14.4L16.8 9.6" id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function ImageFill() {
  return (
    <div className="absolute content-stretch flex flex-col h-[56px] items-start justify-center left-0 overflow-clip pl-[568px] pr-[8px] py-[16px] top-0 w-[600px]" data-name="image fill">
      <Svg />
    </div>
  );
}

function Container30() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[24px] overflow-clip right-[24px] top-1/2" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#2d2f2c] text-[16px] w-[186.67px]">
        <p className="leading-[24px]">Residential Backyard Play</p>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="absolute bg-[#e2e3dd] h-[56px] left-0 right-0 rounded-[6px] top-[28px]" data-name="Options">
      <ImageFill />
      <Container30 />
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[84px] relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-[4px] text-[#5a5c58] text-[14px] top-[9.5px] w-[106.73px]">
        <p className="leading-[20px]">Project Interest</p>
      </div>
      <Options />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[16px] w-full">
        <p className="leading-[24px]">Share your vision or any specific safety needs...</p>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div className="absolute bg-[#e2e3dd] content-stretch flex items-start justify-center left-0 overflow-clip pb-[112px] pt-[16px] px-[24px] right-0 rounded-[6px] top-[28px]" data-name="Textarea">
      <Container32 />
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[196px] relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-[4px] text-[#5a5c58] text-[14px] top-[9.5px] w-[210.72px]">
        <p className="leading-[20px]">{`Tell us about your space & child`}</p>
      </div>
      <Textarea />
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p1a406200} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#5a529a] content-stretch flex gap-[12px] items-center justify-center py-[20px] relative rounded-[48px] shrink-0 w-full" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[48px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white w-[195.61px]">
        <p className="leading-[24px]">Begin My Project Journey</p>
      </div>
      <Container33 />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Form">
      <Container24 />
      <Container29 />
      <Container31 />
      <Button />
    </div>
  );
}

function ContactFormCard() {
  return (
    <div className="bg-white col-[6/span_7] justify-self-stretch relative rounded-[32px] row-1 self-start shrink-0" data-name="Contact Form Card">
      <div className="content-stretch flex flex-col gap-[40px] items-start pb-[64px] pt-[48px] px-[48px] relative w-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[32px] shadow-[0px_20px_25px_-5px_rgba(90,82,154,0.05),0px_8px_10px_-6px_rgba(90,82,154,0.05)]" data-name="Contact Form Card:shadow" />
        <Container22 />
        <Form />
      </div>
    </div>
  );
}

function BentoGridContactInfoForm() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_744px] relative shrink-0 w-full" data-name="Bento Grid Contact Info & Form">
      <ContactDetailsMapCard />
      <ContactFormCard />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Extra_Bold',sans-serif] h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#5a529a] text-[36px] text-center w-[446.59px]">
        <p className="leading-[40px]">Our Consultative Process</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[672px] relative shrink-0 w-[672px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[48px] justify-center leading-[0] relative shrink-0 text-[#5a5c58] text-[16px] text-center w-[645.34px]">
        <p className="leading-[24px] mb-0">{`We don't just sell play sets; we design developmental experiences through four carefully`}</p>
        <p className="leading-[24px]">managed phases.</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <Container35 />
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[32px] right-[32px] top-[32px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[40px] justify-center leading-[0] relative shrink-0 text-[#a8d7ff] text-[36px] w-[39.47px]">
        <p className="leading-[40px]">01</p>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[32px] right-[32px] top-[88px]" data-name="Heading 4">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#2d2f2c] text-[18px] w-[124.39px]">
        <p className="leading-[28px]">Discovery Call</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[32px] right-[32px] top-[122.75px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[69px] justify-center leading-[0] relative shrink-0 text-[#5a5c58] text-[14px] w-[199.56px]">
        <p className="leading-[22.75px] mb-0">A brief chat to understand your</p>
        <p className="leading-[22.75px] mb-0">space requirements and your</p>
        <p className="leading-[22.75px]">{`child's unique play profile.`}</p>
      </div>
    </div>
  );
}

function Phase() {
  return (
    <div className="bg-white col-1 h-[228.25px] justify-self-stretch relative rounded-[32px] row-1 shrink-0" data-name="Phase 1">
      <div aria-hidden="true" className="absolute border-[#a8d7ff] border-b-4 border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container37 />
      <Heading5 />
      <Container38 />
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[32px] right-[32px] top-[32px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[40px] justify-center leading-[0] relative shrink-0 text-[#b5adfd] text-[36px] w-[45.14px]">
        <p className="leading-[40px]">02</p>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[32px] right-[32px] top-[88px]" data-name="Heading 4">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#2d2f2c] text-[18px] w-[128.58px]">
        <p className="leading-[28px]">Site Evaluation</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[32px] right-[32px] top-[122.75px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[69px] justify-center leading-[0] relative shrink-0 text-[#5a5c58] text-[14px] w-[227.55px]">
        <p className="leading-[22.75px] mb-0">Our experts assess terrain, safety</p>
        <p className="leading-[22.75px] mb-0">perimeters, and lighting to optimize</p>
        <p className="leading-[22.75px]">the footprint.</p>
      </div>
    </div>
  );
}

function Phase1() {
  return (
    <div className="bg-white col-2 h-[228.25px] justify-self-stretch relative rounded-[32px] row-1 shrink-0" data-name="Phase 2">
      <div aria-hidden="true" className="absolute border-[#b5adfd] border-b-4 border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container39 />
      <Heading6 />
      <Container40 />
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[32px] right-[32px] top-[32px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[40px] justify-center leading-[0] relative shrink-0 text-[#fec97a] text-[36px] w-[44.63px]">
        <p className="leading-[40px]">03</p>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[32px] right-[32px] top-[88px]" data-name="Heading 4">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#2d2f2c] text-[18px] w-[109.94px]">
        <p className="leading-[28px]">3D Modeling</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[32px] right-[32px] top-[122.75px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[69px] justify-center leading-[0] relative shrink-0 text-[#5a5c58] text-[14px] w-[224.06px]">
        <p className="leading-[22.75px] mb-0">See your play space come to life</p>
        <p className="leading-[22.75px] mb-0">with detailed digital renders before</p>
        <p className="leading-[22.75px]">any build begins.</p>
      </div>
    </div>
  );
}

function Phase2() {
  return (
    <div className="bg-white col-3 h-[228.25px] justify-self-stretch relative rounded-[32px] row-1 shrink-0" data-name="Phase 3">
      <div aria-hidden="true" className="absolute border-[#fec97a] border-b-4 border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container41 />
      <Heading7 />
      <Container42 />
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[32px] right-[32px] top-[32px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[40px] justify-center leading-[0] relative shrink-0 text-[#5a529a] text-[36px] w-[45.59px]">
        <p className="leading-[40px]">04</p>
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[32px] right-[32px] top-[88px]" data-name="Heading 4">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#2d2f2c] text-[18px] w-[78.94px]">
        <p className="leading-[28px]">The Build</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[32px] right-[32px] top-[122.75px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[69px] justify-center leading-[0] relative shrink-0 text-[#5a5c58] text-[14px] w-[208.16px]">
        <p className="leading-[22.75px] mb-0">Safety-certified installation with</p>
        <p className="leading-[22.75px] mb-0">premium, sustainable materials</p>
        <p className="leading-[22.75px]">built to last a lifetime.</p>
      </div>
    </div>
  );
}

function Phase3() {
  return (
    <div className="bg-white col-4 h-[228.25px] justify-self-stretch relative rounded-[32px] row-1 shrink-0" data-name="Phase 4">
      <div aria-hidden="true" className="absolute border-[#5a529a] border-b-4 border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container43 />
      <Heading8 />
      <Container44 />
    </div>
  );
}

function Container36() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[_228.25px] relative shrink-0 w-full" data-name="Container">
      <Phase />
      <Phase1 />
      <Phase2 />
      <Phase3 />
    </div>
  );
}

function ProcessSection() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start pt-[32px] relative shrink-0 w-full" data-name="Process Section">
      <Container34 />
      <Container36 />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[96px] items-start left-0 max-w-[1280px] px-[32px] py-[80px] right-0 top-[82px]" data-name="Main">
      <HeaderSection />
      <BentoGridContactInfoForm />
      <ProcessSection />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#7a72bd] text-[18px] w-[166.73px]">
        <p className="leading-[28px]">Whee! Play Spaces</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] w-[305.19px]">
        <p className="leading-[20px]">© 2024 Whee! Play Spaces. Built for Every Child.</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[305.19px]" data-name="Container">
      <Container47 />
      <Container48 />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] w-[86.98px]">
        <p className="leading-[20px]">Privacy Policy</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] w-[111.77px]">
        <p className="leading-[20px]">Safety Standards</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] w-[80.98px]">
        <p className="leading-[20px]">Accessibility</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] w-[51.19px]">
        <p className="leading-[20px]">Careers</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex gap-[32px] h-[20px] items-start justify-center relative shrink-0" data-name="Container">
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function Container45() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between max-w-[inherit] px-[32px] py-[48px] relative w-full">
          <Container46 />
          <Container49 />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#f1f1ec] bottom-[1.75px] content-stretch flex flex-col items-start left-0 right-0" data-name="Footer">
      <Container45 />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[32px] justify-center leading-[0] relative shrink-0 text-[#7a72bd] text-[24px] tracking-[-0.6px] w-[212.13px]">
        <p className="leading-[32px]">Whee! Play Spaces</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#475569] text-[16px] w-[43.97px]">
        <p className="leading-[24px]">Home</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#475569] text-[16px] w-[71.69px]">
        <p className="leading-[24px]">Solutions</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#475569] text-[16px] w-[40.45px]">
        <p className="leading-[24px]">Team</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[6px] relative shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#7a72bd] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#7a72bd] text-[16px] w-[64px]">
        <p className="leading-[24px]">Contact</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Container">
      <Link4 />
      <Link5 />
      <Link6 />
      <Link7 />
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[32px] py-[12px] relative rounded-[48px] shrink-0 bg-[#5a529a]" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[48px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#f5f0ff] text-[16px] text-center w-[88.81px]">
        <p className="leading-[24px]">Book a Tour</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between max-w-[inherit] pl-[32px] pr-[32.02px] py-[16px] relative w-full">
          <Container51 />
          <Container52 />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function TopNavBar() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.8)] content-stretch flex flex-col items-start left-0 right-0 shadow-[0px_1px_2px_0px_rgba(122,114,189,0.05)] top-0" data-name="TopNavBar">
      <Container50 />
      <div className="bg-[#f1f1ec] h-[2px] shrink-0 w-full" data-name="Horizontal Divider" />
    </div>
  );
}

export default function ContactDesktop() {
  return (
    <div className="bg-[#f7f7f2] relative size-full" data-name="Contact (Desktop)">
      <Main />
      <Footer />
      <TopNavBar />
    </div>
  );
}