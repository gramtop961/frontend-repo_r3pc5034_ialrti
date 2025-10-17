import React from 'react';
import { Rocket, Briefcase, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-md bg-gradient-to-br from-blue-500 via-indigo-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/40">
            <Rocket className="h-5 w-5 text-white" />
          </div>
          <span className="font-semibold tracking-wider text-white text-lg">bloq</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#roles" className="text-white/80 hover:text-white transition">Roles</a>
          <a href="#assignments" className="text-white/80 hover:text-white transition">Assignments</a>
          <a href="#about" className="text-white/80 hover:text-white transition">About</a>
        </nav>
        <button className="inline-flex items-center gap-2 rounded-md bg-white/90 text-slate-900 px-4 py-2 font-medium hover:bg-white transition shadow-sm">
          <User className="h-4 w-4" />
          Candidate Portal
        </button>
      </div>
    </header>
  );
}
