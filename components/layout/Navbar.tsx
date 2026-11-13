"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Our Partners", href: "/#partners" },
  { label: "Certifications", href: "/#certifications" },
  { label: "Products", href: "/products" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative w-full z-50">
      <nav className="bg-[#FAF8F5] border-b border-stone-200/60 py-3 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between relative">
          <Link href="/" className="relative z-20 shrink-0 -mb-10 sm:-mb-14">
            <div className="relative w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-white p-1">
              <Image
                src="/logo.svg"
                alt="Mathammana D/C Factory Logo"
                fill
                className="object-contain p-1 rounded-full"
                priority
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6 lg:gap-8 ml-auto mr-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[#2d3748] hover:text-[#1b4382] font-semibold text-sm lg:text-base transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/about"
              className="hidden sm:inline-block bg-[#1b4382] hover:bg-[#143263] text-white font-semibold text-xs sm:text-sm py-2.5 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
            >
              More About US
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-slate-700 hover:text-[#1b4382] focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 transition-opacity md:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 w-4/5 max-w-sm h-full bg-[#FAF8F5] shadow-2xl z-50 p-6 flex flex-col transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between pb-6 border-b border-stone-200">
          <span className="font-extrabold text-[#1b4382] text-lg">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 text-slate-600 hover:text-slate-900"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col gap-5 py-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-stone-800 hover:text-[#1b4382] font-semibold text-base py-1"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="mt-auto pt-6 border-t border-stone-200">
          <Link href="/about" className="hidden sm:inline-block ...">
            More About US
          </Link>
        </div>
      </div>
    </header>
  );
}
