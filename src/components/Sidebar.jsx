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
    { id: "products", label: "Products", icon: <ShoppingBasket /> },
    { id: "categories", label: "Categories", icon: <ChartBarStacked /> },
    { id: "inventory", label: "Inventory", icon: <CirclePile /> },
    { id: "users", label: "Users", icon: <Users /> },
  ];

  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (!menuRef.current.contains(event.target)) {
        setProfileMenuOpen(false);
      }
    }
    if (profileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [profileMenuOpen]);

  return (
    <aside className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-slate-900 border-r border-slate-700">
      <div
        className="flex items-center gap-x-3 px-2 cursor-pointer"
        onClick={() => (window.location.href = "/")}
      >
        <img
          src="/src/assets/logo.png"
          alt="ThreadLine Logo"
          className="w-8 h-8 rounded-lg bg-sky-900 object-cover"
        />
        <span className="text-xl font-bold text-white tracking-tight">
          ThreadLine
        </span>
      </div>

      <div className="flex flex-col justify-between flex-1 mt-10">
        <nav className="space-y-2">
          <div className="pb-2 text-xs font-semibold text-slate-400 uppercase tracking-wider px-2">
            Management
          </div>

          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`flex items-center w-full px-3 py-2 transition-colors duration-300 transform rounded-lg cursor-pointer group ${
                activeSection === item.id
                  ? "bg-sky-900 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              {item.icon}
              <span className="mx-3 font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <div
          ref={menuRef}
          className="mt-auto pt-6 border-t border-slate-700 relative"
        >
          <button
            className="flex items-center gap-x-2 px-2 w-full hover:bg-slate-800 rounded-lg transition-xl transition-all duration-200 cursor-pointer py-3 group"
            onClick={() => setProfileMenuOpen((open) => !open)}
          >
            <img
              src="https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=Admin+User"
              alt="Profile"
              className="w-9 h-9 rounded-full ring-2 ring-slate-700 group-hover:ring-sky-800 transition-all"
            />
            <div className="text-sm text-left flex-1">
              <p className="text-slate-200 font-semibold leading-none mb-1">
                Admin User
              </p>
              <p className="text-slate-500 text-xs">admin01</p>
            </div>
            <span
              className={`text-slate-500 transition-transform duration-200 ${profileMenuOpen ? "rotate-180" : ""}`}
            >
              <ArrowDown size={18} />
            </span>
          </button>
          {profileMenuOpen && (
            <div className="absolute bottom-20 left-0 w-full bg-slate-800 border border-slate-700 rounded-xl shadow-2xl z-50 py-2 overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-200">
              <div className="px-4 py-2 border-b border-slate-700 mb-1">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Account
                </p>
              </div>

              <button className="flex items-center gap-x-3 w-full text-left px-4 py-2.5 hover:bg-slate-700 text-slate-300 transition-colors text-sm">
                <span>
                  <Settings />
                </span>
                Settings
              </button>

              <button className="flex items-center gap-x-3 w-full text-left px-4 py-2.5 hover:bg-red-500/10 text-red-400 transition-colors text-sm font-medium">
                <span>
                  <LogOut />
                </span>
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
