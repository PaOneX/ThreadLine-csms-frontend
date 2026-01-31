import {
  ChartBarStacked,
  CirclePile,
  ShoppingBasket,
  Users,
} from "lucide-react";
import React from "react";

const Sidebar = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    { id: "products", label: "Products", icon: "" },
    { id: "categories", label: "Categories", icon: "" },
    { id: "inventory", label: "Inventory", icon: "" },
    { id: "users", label: "Users", icon: "" },
  ];

  return (
    <aside className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-slate-900 border-r border-slate-700">
      <div className="flex items-center gap-x-3 px-2">
        <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">T</span>
        </div>
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
              className={`flex items-center w-full px-3 py-2 transition-colors duration-300 transform rounded-lg group ${
                activeSection === item.id
                  ? "bg-indigo-600 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              {item.icon}
              <span className="mx-3 font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="mt-auto pt-6 border-t border-slate-700">
          <div className="flex items-center gap-x-2 px-2">
            <div className="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center text-xs text-white">
              AD
            </div>
            <div className="text-sm">
              <p className="text-white font-medium">Admin User</p>
              <p className="text-slate-400 text-xs">v1.0.0</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
