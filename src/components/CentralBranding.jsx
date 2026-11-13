import React from 'react';

export default function CentralBranding() {
  return (
    <div className="flex flex-col items-center justify-center text-center select-none pointer-events-none px-4">
      {/* Golden Roman Courthouse Temple Emblem with Laurel Wreath */}
      <div className="w-28 sm:w-32 md:w-36 h-18 sm:h-20 md:h-22 mb-3 flex items-center justify-center">
        <img 
          src="/emblem.svg" 
          alt="Roman Courthouse Emblem with Laurel Wreath" 
          className="w-full h-full object-contain filter drop-shadow-[0_2px_10px_rgba(167,122,53,0.3)]" 
        />
      </div>

      {/* Brand Name: Nyaya */}
      <h1 className="font-cormorant text-5xl sm:text-6xl md:text-[72px] font-bold tracking-tight text-[#302016] leading-none mb-2">
        Nyaya
      </h1>

      {/* Decorative Divider with Central Diamond */}
      <div className="w-full max-w-[320px] sm:max-w-[380px] my-1.5 flex items-center justify-center">
        <img 
          src="/divider.svg" 
          alt="Classical Decorative Divider" 
          className="w-full h-3 sm:h-4 object-contain"
        />
      </div>

      {/* Subtitle in Classical Roman Epigraphic Capitals */}
      <p className="font-cinzel text-[11px] sm:text-[12.5px] md:text-[13px] font-semibold tracking-[0.22em] sm:tracking-[0.24em] text-[#302016] uppercase mt-2.5 max-w-[580px] leading-relaxed">
        YOUR AI LEGAL ASSISTANT FOR INSURANCE CLAIMS
      </p>
    </div>
  );
}
