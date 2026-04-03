import { Link } from "react-router";

export function NotFound() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#f5f0ff]">
      <div className="max-w-[600px] mx-auto px-8 text-center">
        <div className="font-['Poppins',sans-serif] font-extrabold text-[120px] text-[#5a529a] mb-4">
          404
        </div>
        
        <h1 className="font-['Poppins',sans-serif] font-bold text-[36px] text-[#2d2f2c] mb-4">
          Page Not Found
        </h1>
        
        <p className="font-['Manrope',sans-serif] text-[18px] text-[#5a5c58] leading-[28px] mb-8">
          Oops! The page you're looking for doesn't exist. Let's get you back to exploring our inclusive play spaces.
        </p>
        
        <div className="flex gap-4 justify-center">
          <Link
            to="/"
            className="bg-[#5a529a] text-white px-8 py-4 rounded-full font-['Manrope',sans-serif] font-bold text-[16px] hover:bg-[#4a4289] transition-colors shadow-lg"
          >
            Go Home
          </Link>
          <Link
            to="/contact"
            className="bg-white text-[#5a529a] px-8 py-4 rounded-full font-['Manrope',sans-serif] font-bold text-[16px] border-2 border-[#5a529a] hover:bg-[#f5f0ff] transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
