import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import CentralBranding from './components/CentralBranding';
import ChatInput from './components/ChatInput';
import { PanelLeftOpen } from 'lucide-react';

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#F5EBDD] font-sans text-[#302016]">
      {/* Fixed / Collapsible Left Sidebar (300-320px wide) */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)} 
      />

      {/* Mobile Backdrop Overlay when sidebar is open */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-[#302016]/20 backdrop-blur-[1px] z-20 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Main Courthouse Environment */}
      <main 
        className={`
          flex-1 h-full relative overflow-hidden flex flex-col justify-between
          transition-all duration-300 ease-in-out
          ${isSidebarOpen ? 'md:ml-[320px]' : 'ml-0'}
        `}
      >
        {/* Roman Courthouse Background Asset with Columns, Arches, Banners & Lady Justice */}
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat pointer-events-none select-none"
          style={{
            backgroundImage: "url('/courthouse_bg.jpg')",
            backgroundPosition: "center bottom",
          }}
          aria-hidden="true"
        >
          {/* Subtle warm ambient lighting overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-[#F5EBDD]/10" />
        </div>

        {/* Top Header Row / Open Sidebar Toggle (when sidebar is closed) */}
        <header className="relative z-10 w-full p-4 sm:p-6 flex items-center justify-between pointer-events-auto">
          {!isSidebarOpen ? (
            <button
              type="button"
              onClick={() => setIsSidebarOpen(true)}
              className="
                flex items-center gap-2 px-3 py-2 rounded-lg 
                bg-[#F7EFE4]/90 backdrop-blur-sm border border-[#E8D8BF]
                text-[#4A3B32] hover:text-[#711F24] hover:bg-[#F2E8DA]
                shadow-[0_2px_8px_rgba(48,32,22,0.06)]
                transition-all duration-200
              "
              title="Open Sidebar"
            >
              <PanelLeftOpen size={18} strokeWidth={1.8} />
              <span className="text-xs font-serif font-semibold tracking-wider uppercase text-[#711F24]">Menu</span>
            </button>
          ) : (
            <div className="w-1" />
          )}
        </header>

        {/* Central Branding Area inside the Classical Roman Archway */}
        <section className="relative z-10 flex-1 flex items-center justify-center -translate-y-2 sm:-translate-y-4 md:-translate-y-6">
          <CentralBranding />
        </section>

        {/* Bottom Chat Input Bar Floating above the Steps & Red Carpet */}
        <footer className="relative z-10 w-full flex justify-center pb-[16vh] sm:pb-[18vh] md:pb-[20vh] pointer-events-auto">
          <ChatInput />
        </footer>
      </main>
    </div>
  );
}
