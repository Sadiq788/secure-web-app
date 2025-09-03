import React from "react";
import useActiveSection from "../hooks/useActiveSection";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "resume", label: "Resume" },
  { id: "projects", label: "Projects" },
  { id: "ctf", label: "CTF" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const active = useActiveSection(LINKS.map(l => l.id));

  const handleClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur border-b border-gray-800">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <div className="text-lg font-bold">Mohammed Sadiq</div>
        <ul className="flex gap-4">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={handleClick(l.id)}
                className={`px-3 py-1 rounded ${active === l.id ? "bg-green-700/30 text-green-300" : "text-gray-300 hover:text-white"}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
