import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Edit3, Folder, Inbox, Settings, Layers, Briefcase, CalendarDays, IndianRupee, BarChart2, MoreHorizontal, FileText } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function BottomNav() {
  const [showMore, setShowMore] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  const mainItems = [
    { to: "/home", icon: <Home className="w-5 h-5" />, label: "Dashboard" },
    { to: "/write", icon: <Edit3 className="w-5 h-5" />, label: "Write" },
    { to: "/cases", icon: <Briefcase className="w-5 h-5" />, label: "Cases" },
    { to: "/inbox", icon: <Inbox className="w-5 h-5" />, label: "Inbox" }
  ];

  const moreItems = [
    { to: "/files", icon: <Folder className="w-5 h-5" />, label: "Files" },
    { to: "/diary", icon: <CalendarDays className="w-5 h-5" />, label: "Diary" },
    { to: "/reports", icon: <BarChart2 className="w-5 h-5" />, label: "Reports" },
    { to: "/gpf", icon: <FileText className="w-5 h-5" />, label: "GPF Tool" },
    { to: "/demand", icon: <IndianRupee className="w-5 h-5" />, label: "Recovery" },
    { to: "/bulk", icon: <Layers className="w-5 h-5" />, label: "Bulk" },
    { to: "/settings", icon: <Settings className="w-5 h-5" />, label: "Settings" }
  ];

  // Close popover when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setShowMore(false);
      }
    }
    if (showMore) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMore]);

  return (
    <div className="relative">
      {/* More Options Popover */}
      {showMore && (
        <div 
          ref={popoverRef} 
          className="absolute bottom-16 right-4 left-4 bg-white/95 dark:bg-[#0A0A0A]/95 backdrop-blur-md border-2 border-black/10 dark:border-white/10 p-4 grid grid-cols-3 gap-4 shadow-2xl z-50 animate-in slide-in-from-bottom duration-200"
        >
          {moreItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setShowMore(false)}
              className={({isActive}) => cn(
                "flex flex-col items-center gap-2 p-3 hover:bg-black/5 dark:hover:bg-white/5 transition-colors",
                isActive ? "text-[#22C55E]" : "text-black dark:text-white"
              )}
            >
              {item.icon}
              <span className="text-[10px] font-bold uppercase tracking-widest text-center">{item.label}</span>
            </NavLink>
          ))}
        </div>
      )}

      {/* Main Bottom Bar */}
      <nav className="border-t-2 border-black/10 dark:border-white/10 bg-[#f8fafc] dark:bg-[#0A0A0A] flex justify-around p-2 pb-safe relative z-10">
        {mainItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({isActive}) => cn(
              "flex flex-col items-center gap-1 p-2 w-full text-center transition-colors",
              isActive ? "text-[#22C55E]" : "text-black dark:text-white/40 hover:text-black dark:text-white/80"
            )}
          >
            {item.icon}
            <span className="text-[10px] font-bold uppercase tracking-widest">{item.label}</span>
          </NavLink>
        ))}

        {/* More Toggle Button */}
        <button
          onClick={() => setShowMore(!showMore)}
          className={cn(
            "flex flex-col items-center gap-1 p-2 w-full text-center transition-colors outline-none",
            showMore ? "text-[#22C55E]" : "text-black dark:text-white/40 hover:text-black dark:text-white/80"
          )}
        >
          <MoreHorizontal className="w-5 h-5" />
          <span className="text-[10px] font-bold uppercase tracking-widest">More</span>
        </button>
      </nav>
    </div>
  );
}
