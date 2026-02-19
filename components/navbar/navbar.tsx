"use client";

import { LogOut, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="w-full">
      <header className="border-b bg-white">
        <div className="mx-auto flex h-15 w-full items-center justify-between px-6 sm:px-8">
          {/* Left side: Logo and Navigation (Desktop) / Logo only (Mobile) */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4">
              <Image 
                src="/brand_logo_and_text.png" 
                alt="Brand Logo and Text" 
                width={100} 
                height={100}
              />
            </div>

            {/* Desktop Navigation - hidden on mobile */}
            <nav className="hidden md:flex items-center gap-4 text-sm text-slate-600">
              <Link href="/home" className="font-medium text-slate-900">
                Home
              </Link>
              <button className="text-slate-500 hover:text-slate-900">
                Saved Activities
              </button>
            </nav>
          </div>

          {/* Right side: User Section (Desktop) / Menu Button (Mobile) */}
          <div className="flex items-center gap-4">
            {/* Desktop User Section - hidden on mobile */}
            <div className="hidden md:flex items-center gap-4 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-cover bg-center bg-[url('https://ui-avatars.com/api/?name=Jay&background=f97316&color=fff')]"></div>
                <span>Jay</span>
              </div>
              <button className="flex items-center gap-2 text-slate-500 hover:text-slate-900">
                Logout
                <LogOut />
              </button>
            </div>

            {/* Mobile Menu Button - visible only on mobile */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden flex items-center justify-center p-2 text-slate-700 hover:text-slate-900"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - visible when menu is open */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-6 py-4 space-y-4">
              {/* Profile and Name */}
              <div className="flex items-center gap-2 pb-4 border-b">
                <div className="h-8 w-8 rounded-full bg-cover bg-center bg-[url('https://ui-avatars.com/api/?name=Jay&background=f97316&color=fff')]"></div>
                <span className="text-sm font-medium text-slate-900">Jay</span>
              </div>

              {/* Home */}
              <Link 
                href="/home" 
                className="flex items-center text-sm text-slate-700 hover:text-slate-900 py-2"
                onClick={closeMobileMenu}
              >
                Home
              </Link>

              {/* Saved Activities */}
              <button 
                className="flex items-center text-sm text-slate-700 hover:text-slate-900 py-2 w-full text-left"
                onClick={closeMobileMenu}
              >
                Saved Activities
              </button>

              {/* Logout */}
              <button 
                className="flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900 py-2"
                onClick={closeMobileMenu}
              >
                Logout
                <LogOut size={16} />
              </button>
            </div>
          </div>
        )}
      </header>
    </nav>
  );
}