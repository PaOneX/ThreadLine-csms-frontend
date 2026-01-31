import {
  ArrowDown,
  ChartBarStacked,
  CirclePile,
  LogOut,
  Settings,
  ShoppingBasket,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Sidebar = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    { id: "products", label: "Products", icon: <ShoppingBasket size={20} /> },
    {
      id: "categories",
      label: "Categories",
      icon: <ChartBarStacked size={20} />,
    },
    { id: "inventory", label: "Inventory", icon: <CirclePile size={20} /> },
    { id: "users", label: "Users", icon: <Users size={20} /> },
  ];

  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setProfileMenuOpen(false);
      }
    }
    if (profileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [profileMenuOpen]);

  return (
    <aside className="flex flex-col w-72 h-screen px-6 py-8 overflow-y-auto bg-[#0f172a] border-r border-white/5 shadow-2xl">
      <button
        className="flex items-center gap-x-3 px-2 cursor-pointer group"
        onClick={() => (globalThis.location.href = "/")}
      >
        <div className="relative">
          <div className="absolute -inset-1 bg-linear-to-tr from-sky-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
          <img
            src="/src/assets/logo.png"
            alt="Logo"
            className="relative w-9 h-9 rounded-lg bg-slate-900 object-cover border border-white/10"
          />
        </div>
        <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-white to-slate-400">
          ThreadLine
        </span>
      </button>

      <div className="flex flex-col justify-between flex-1 mt-12">
        <nav className="space-y-1.5">
          <div className="pb-4 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] px-3">
            Management
          </div>

          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`flex items-center w-full px-4 py-3 transition-all duration-200 rounded-xl cursor-pointer group ${
                activeSection === item.id
                  ? "bg-sky-500/10 text-sky-400 border border-sky-500/20"
                  : "text-slate-400 hover:bg-white/3 hover:text-slate-200 border border-transparent"
              }`}
            >
              <span
                className={`${activeSection === item.id ? "text-sky-400" : "text-slate-500 group-hover:text-slate-300"}`}
              >
                {item.icon}
              </span>
              <span className="mx-3 font-medium text-sm tracking-wide">
                {item.label}
              </span>
              {activeSection === item.id && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.6)]" />
              )}
            </button>
          ))}
        </nav>

        <div
          ref={menuRef}
          className="mt-auto pt-6 border-t border-white/5 relative"
        >
          <button
            className="flex items-center gap-x-3 px-3 w-full hover:bg-white/3 rounded-2xl transition-all duration-300 cursor-pointer py-3 group"
            onClick={() => setProfileMenuOpen((open) => !open)}
          >
            <div className="relative">
              <img
                src="https://ui-avatars.com/api/?background=0369a1&color=fff&name=Admin+User"
                alt="Profile"
                className="w-10 h-10 rounded-xl border border-white/10 group-hover:border-sky-500/50 transition-all duration-300"
              />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-[#0f172a] rounded-full"></div>
            </div>

            <div className="text-sm text-left flex-1">
              <p className="text-slate-200 font-semibold leading-none mb-1 group-hover:text-white transition-colors">
                Admin User
              </p>
              <p className="text-slate-500 text-xs font-medium">
                System Manager
              </p>
            </div>
            <ArrowDown
              size={16}
              className={`text-slate-500 transition-transform duration-300 ${profileMenuOpen ? "rotate-180 text-sky-400" : ""}`}
            />
          </button>

          {profileMenuOpen && (
            <div className="absolute bottom-20 left-0 w-full bg-[#1e293b] border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50 py-2 overflow-hidden backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200">
              <div className="px-4 py-2 border-b border-white/5 mb-1">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  Account
                </p>
              </div>

              <button className="flex items-center gap-x-3 w-full text-left px-4 py-3 hover:bg-white/5 text-slate-300 hover:text-white transition-colors text-sm">
                <Settings size={18} className="text-slate-500" />
                Settings
              </button>

              <button className="flex items-center gap-x-3 w-full text-left px-4 py-3 hover:bg-red-500/10 text-red-400 transition-colors text-sm font-medium">
                <LogOut size={18} />
                Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
