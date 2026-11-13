import React from 'react';
import { Paperclip, Send } from 'lucide-react';

export default function ChatInput() {
  return (
    <div className="w-full max-w-[760px] px-4 select-none">
      <div 
        className="
          w-full h-14 sm:h-15
          bg-[#FAF5EC]
          border border-[#E3D4C0]
          rounded-full
          shadow-[0_8px_30px_rgba(48,32,22,0.08),0_2px_8px_rgba(48,32,22,0.04)]
          flex items-center justify-between
          px-3 sm:px-4
          transition-all duration-200
        "
      >
        {/* Left: Paperclip Icon */}
        <div className="flex items-center">
          <button
            type="button"
            className="p-2 text-[#4A3B32] hover:text-[#711F24] transition-colors rounded-full"
            title="Attach documents"
            tabIndex={-1}
          >
            <Paperclip size={20} strokeWidth={1.8} className="rotate-45" />
          </button>
          
          {/* Subtle vertical hairline separator */}
          <div className="h-5 w-[1px] bg-[#E3D3BE] mx-1 sm:mx-2" />
        </div>

        {/* Center: Placeholder Text */}
        <div className="flex-1 px-2 sm:px-3 text-[#8C786A] text-[15px] sm:text-[16px] font-normal truncate">
          Ask about your rejected claim...
        </div>

        {/* Right: Circular Burgundy Send Button */}
        <button
          type="button"
          className="
            w-10 h-10 sm:w-11 sm:h-11
            rounded-full
            bg-[#711F24] hover:bg-[#5E181C]
            text-white
            flex items-center justify-center flex-shrink-0
            shadow-[0_2px_8px_rgba(113,31,36,0.35)]
            hover:shadow-[0_4px_12px_rgba(113,31,36,0.45)]
            transition-all duration-200
          "
          title="Send"
          tabIndex={-1}
        >
          <Send size={18} strokeWidth={2} className="translate-x-[1px] -translate-y-[1px]" />
        </button>
      </div>
    </div>
  );
}
