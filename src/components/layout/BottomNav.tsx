import { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Home, Edit3, Folder, Inbox, Settings, Layers, Briefcase,
         CalendarDays, IndianRupee, BarChart2, MoreHorizontal,
         FileText, X } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function BottomNav() {
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();

  // Main 4 items always visible in bottom bar
  const mainItems = [
    { to: "/home",  icon: <Home className="w-5 h-5" />,     label: "Home" },
    { to: "/write", icon: <Edit3 className="w-5 h-5" />,    label: "Write" },
    { to: "/files", icon: <Folder className="w-5 h-5" />,   label: "Files" },
    { to: "/inbox", icon: <Inbox className="w-5 h-5" />,    label: "Inbox" },
  ];

  // Extra items in "More" sheet
  const moreItems = [
    { to: "/diary",    icon: <CalendarDays className="w-5 h-5" />,  label: "Diary" },
    { to: "/cases",    icon: <Briefcase className="w-5 h-5" />,     label: "Cases" },
    { to: "/demand",   icon: <IndianRupee className="w-5 h-5" />,   label: "Recovery" },
    { to: "/reports",  icon: <BarChart2 className="w-5 h-5" />,     label: "Reports" },
    { to: "/gpf",      icon: <FileText className="w-5 h-5" />,      label: "GPF Tool" },
    { to: "/bulk",     icon: <Layers className="w-5 h-5" />,        label: "Bulk/Merge" },
    { to: "/settings", icon: <Settings className="w-5 h-5" />,      label: "Settings" },
  ];

  return (
    <>
      {/* More Sheet Overlay */}
      {showMore && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setShowMore(false)}
        />
      )}

      {/* More Items Sheet — slides up from bottom */}
      {showMore && (
        <div className="fixed bottom-16 left-0 right-0 z-50
                        bg-white dark:bg-neutral-900
                        border-t-2 border-black/10 dark:border-white/10
                        shadow-2xl animate-in slide-in-from-bottom duration-200">
          <div className="flex justify-between items-center px-4 py-3
                          border-b border-black/10 dark:border-white/10">
            <p className="text-[10px] font-bold uppercase tracking-widest
                          text-black/50 dark:text-white/50">More Options</p>
            <button
              onClick={() => setShowMore(false)}
              className="p-1 text-black/40 dark:text-white/40
                         hover:text-black dark:hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-4 gap-0 p-2">
            {moreItems.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setShowMore(false)}
                className={({ isActive }) => cn(
                  "flex flex-col items-center gap-1 p-3 text-center transition-colors",
                  isActive
                    ? "text-[#22C55E]"
                    : "text-black/60 dark:text-white/50 hover:text-black dark:hover:text-white"
                )}
              >
                {item.icon}
                <span className="text-[9px] font-bold uppercase tracking-widest">
                  {item.label}
                </span>
              </NavLink>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Nav Bar */}
      <nav className="border-t-2 border-black/10 dark:border-white/10
                      bg-[#f8fafc] dark:bg-[#0A0A0A]
                      flex justify-around items-center
                      h-16 px-1
                      safe-area-pb">
        {mainItems.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => cn(
              "flex flex-col items-center gap-1 px-2 py-2 flex-1 text-center transition-colors",
              isActive
                ? "text-[#22C55E]"
                : "text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white"
            )}
          >
            {item.icon}
            <span className="text-[9px] font-bold uppercase tracking-widest">
              {item.label}
            </span>
          </NavLink>
        ))}

        {/* More Button */}
        <button
          onClick={() => setShowMore(v => !v)}
          className={cn(
            "flex flex-col items-center gap-1 px-2 py-2 flex-1 text-center transition-colors",
            showMore
              ? "text-[#22C55E]"
              : "text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white"
          )}
        >
          <MoreHorizontal className="w-5 h-5" />
          <span className="text-[9px] font-bold uppercase tracking-widest">More</span>
        </button>
      </nav>
    </>
  );
}
