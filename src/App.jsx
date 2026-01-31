import React, { useState } from "react";

import Sidebar from "./components/Sidebar";

const App = () => {
  const [activeSection, setActiveSection] = useState("products");

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main className="flex-1 p-8">
        <header className="mb-8">
          <h1 className="text-2xl font-bold capitalize text-slate-800">
            {activeSection}
          </h1>
        </header>
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        </section>
      </main>
    </div>
  );
};

export default App;
