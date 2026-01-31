import { useState } from "react";
import { Search, Bell, Filter, Plus } from "lucide-react";
import Sidebar from "./components/SideBar";

const App = () => {
  const [activeSection, setActiveSection] = useState("products");

  return (
    <div className="flex h-screen overflow-hidden bg-[#020617] text-slate-300 font-sans selection:bg-sky-500/30">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <main className="flex-1 flex h-screen overflow-y-auto flex-col min-w-0">
        <header className="h-20 border-b border-white/5 flex items-center justify-between px-10 bg-[#020617]/50 backdrop-blur-md sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-semibold text-white capitalize tracking-tight">
              {activeSection}
            </h1>
            <span className="text-slate-600">/</span>
            <span className="text-xs font-medium text-slate-500 tracking-widest uppercase">
              Overview
            </span>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative group hidden md:block">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-sky-400 transition-colors"
                size={18}
              />
              <input
                type="text"
                placeholder="Search products..."
                className="bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 w-64 transition-all"
              />
            </div>
            <button className="relative text-slate-400 hover:text-white transition-colors">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-sky-500 rounded-full border-2 border-[#020617]"></span>
            </button>
          </div>
        </header>

        <section className="flex-1 overflow-y-auto p-10 pt-3 space-y-8">
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium hover:bg-white/10 transition-all">
                <Filter size={16} /> Filter
              </button>
            </div>
            <button className="flex items-center gap-2 px-5 py-2.5 bg-sky-600 hover:bg-sky-500 text-white rounded-xl text-sm font-bold shadow-lg shadow-sky-900/20 transition-all active:scale-95">
              <Plus size={18} /> Add New {activeSection.slice(0, -1)}
            </button>
          </div>

          <div className="bg-[#0f172a]/50 border border-white/5 rounded-3xl overflow-hidden backdrop-blur-sm">
            <div className="p-6 border-b border-white/5 flex justify-between items-center">
              <h2 className="font-semibold text-white">
                Recent {activeSection}
              </h2>
              <button className="text-xs font-bold text-sky-400 uppercase tracking-widest hover:text-sky-300 transition-colors">
                View All
              </button>
            </div>

            {/* Table Placeholder */}
            <div className="min-h-100 flex items-center justify-center text-slate-600 italic">
              <p className="text-sm">Select an item to view details</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
