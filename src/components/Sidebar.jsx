import React from 'react';
import { 
  Plus, 
  Clock, 
  Settings, 
  BookOpen, 
  CircleHelp, 
  PanelLeftClose 
} from 'lucide-react';

export default function Sidebar({ isOpen = true, onToggle }) {
  return (
    <aside 
      className={`
        fixed top-0 bottom-0 left-0 z-30
        w-[300px] sm:w-[310px] md:w-[320px]
        bg-[#F7EFE4] border-r border-[#E5D7C2]
        flex flex-col justify-between
        shadow-[3px_0_20px_rgba(48,32,22,0.04)]
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}
      aria-label="Sidebar Navigation"
    >
      {/* Upper Content Section */}
      <div className="flex flex-col p-5 pb-0">
        {/* Header: Logo + Brand + Collapse button */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2.5">
            {/* Laurel Wreath Logo */}
            <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
              <img 
                src="/sidebar-logo.png" 
                alt="Nyaya Laurel Emblem" 
                className="w-full h-full object-contain filter drop-shadow-[0_1px_2px_rgba(167,122,53,0.3)]"
                onError={(e) => {
                  e.currentTarget.src = '/emblem.svg';
                }}
              />
            </div>
            
            {/* Nyaya Typography */}
            <span className="font-serif text-[26px] font-bold tracking-tight text-[#302016] leading-none select-none">
              Nyaya
            </span>
          </div>

          {/* Sidebar Collapse Toggle Button */}
          <button 
            type="button"
            onClick={onToggle}
            className="p-1.5 rounded-lg border border-[#DECDB8] bg-[#EFE3D3]/60 hover:bg-[#E5D5C1] text-[#6B584C] hover:text-[#302016] transition-colors"
            title="Collapse Sidebar"
          >
            <PanelLeftClose size={18} strokeWidth={1.8} />
          </button>
        </div>

        {/* New Case Button in Deep Burgundy */}
        <button
          type="button"
          className="
            w-full h-11 rounded-xl
            bg-[#711F24] hover:bg-[#5E181C] 
            text-white font-medium text-[15px]
            flex items-center justify-center gap-2
            shadow-[0_4px_14px_rgba(113,31,36,0.22)]
            hover:shadow-[0_6px_18px_rgba(113,31,36,0.3)]
            active:scale-[0.99]
            transition-all duration-200
          "
        >
          <Plus size={18} strokeWidth={2.2} />
          <span>New Case</span>
        </button>

        {/* CASES Section */}
        <div className="mt-8">
          <h2 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#8A7565] mb-4">
            CASES
          </h2>

          {/* Empty State */}
          <div className="flex items-center gap-2.5 px-1 py-1.5 text-[#8A7565]">
            <Clock size={16} strokeWidth={1.8} className="text-[#8A7565]" />
            <span className="text-sm italic font-serif tracking-wide">
              No cases yet
            </span>
          </div>
        </div>
      </div>

      {/* Decorative Roman Temple Architectural Watermark */}
      <div className="relative flex-1 flex items-end justify-start pointer-events-none select-none overflow-hidden pb-2 pl-3">
        <img 
          src="/sidebar-watermark.png" 
          alt="Roman Temple Architecture" 
          className="w-[190px] object-contain opacity-35 filter sepia-[0.25] contrast-[1.05]"
        />
      </div>

      {/* Bottom Menu Items */}
      <div className="p-5 pt-3 border-t border-[#E5D7C2] bg-[#F7EFE4]/90 backdrop-blur-[2px]">
        <nav className="flex flex-col gap-1">
          {/* Settings */}
          <button 
            type="button"
            className="flex items-center gap-3.5 px-3 py-2 rounded-lg text-[#4A382D] hover:text-[#711F24] hover:bg-[#EFE3D3]/60 transition-colors text-sm font-medium text-left"
          >
            <Settings size={18} strokeWidth={1.75} className="text-[#7A675A]" />
            <span>Settings</span>
          </button>

          {/* Resources */}
          <button 
            type="button"
            className="flex items-center gap-3.5 px-3 py-2 rounded-lg text-[#4A382D] hover:text-[#711F24] hover:bg-[#EFE3D3]/60 transition-colors text-sm font-medium text-left"
          >
            <BookOpen size={18} strokeWidth={1.75} className="text-[#7A675A]" />
            <span>Resources</span>
          </button>

          {/* Help */}
          <button 
            type="button"
            className="flex items-center gap-3.5 px-3 py-2 rounded-lg text-[#4A382D] hover:text-[#711F24] hover:bg-[#EFE3D3]/60 transition-colors text-sm font-medium text-left"
          >
            <CircleHelp size={18} strokeWidth={1.75} className="text-[#7A675A]" />
            <span>Help</span>
          </button>
        </nav>
      </div>
    </aside>
  );
}
