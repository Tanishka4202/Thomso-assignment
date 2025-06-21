import '../output.css';
import React from 'react';

function Navbar() {
  return (
    <div className="bg-[#fff8f8] sticky top-0 z-50">
      <nav className="bg-white shadow-md py-3 px-4 md:px-12 rounded-full mx-auto mt-4 max-w-7xl flex items-center justify-between">
        {/* Left side: Hamburger + Logo for Mobile */}
        <div className="flex items-center gap-4">
          {/* Hamburger (Mobile only) */}
          <button className="md:hidden text-black">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Logo */}
          <h2 className="text-lg md:text-xl font-bold text-gray-800">API Monk</h2>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 text-gray-800 font-medium text-sm">
          <li className="cursor-pointer hover:text-indigo-600">Pricing</li>
          <li className="cursor-pointer hover:text-indigo-600">APIs</li>
          <li className="cursor-pointer hover:text-indigo-600">Documentation</li>
        </ul>

        {/* Login Button (Always Visible) */}
        <button className="bg-indigo-600  text-white px-5 py-2 rounded-full text-sm font-semibold shadow hover:bg-blue-800 transition">
          Login
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
