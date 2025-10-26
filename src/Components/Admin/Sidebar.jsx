import React from "react";

function Sidebar({ active, setActive }) {
  const menuItems = [
    { name: "Dashboard", id: "dashboard" },
    { name: "Active Issues", id: "active" },
    { name: "Resolved Issues", id: "resolved" },
    { name: "Analytics", id: "analytics" },
  ];

  return (
    <aside className="w-64 bg-emerald-600 text-white min-h-screen p-6 shadow-lg fixed left-0 top-0">
      <h2 className="text-2xl font-bold mb-8 text-center">CivicEase</h2>
      <nav className="space-y-4">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`block w-full text-left px-4 py-2 rounded-lg transition-all ${
              active === item.id
                ? "bg-emerald-700"
                : "hover:bg-emerald-500 hover:translate-x-1"
            }`}
          >
            {item.name}
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
