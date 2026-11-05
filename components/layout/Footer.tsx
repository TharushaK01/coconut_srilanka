"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

type SocialIconProps = React.SVGProps<SVGSVGElement>;

function FacebookIcon(props: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.414c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.971H15.83c-1.49 0-1.956.931-1.956 1.887v2.262h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073Z" />
    </svg>
  );
}

function InstagramIcon(props: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.332.014 7.052.072 2.695.272.273 2.69.073 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.668-.072-4.948-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
    </svg>
  );
}

function LinkedinIcon(props: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.047c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286h-.002ZM5.337 7.433A2.062 2.062 0 1 1 5.337 3.31a2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
    </svg>
  );
}

function YoutubeIcon(props: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.017 3.017 0 0 0 2.121 2.136c1.872.505 9.377.505 9.377.505s7.505 0 9.376-.505a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z" />
    </svg>
  );
}

interface FooterLink {
  label: string;
  href: string;
}

const footerLinks: FooterLink[] = [
  { label: "Our Partners", href: "#partners" },
  { label: "Certifications", href: "#certifications" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#products" },
  { label: "Contact Us", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1b4382] text-white pt-12 pb-8 px-6 md:px-12">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-6">
        {/* Centered Circular Logo */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white p-1 shadow-lg ring-4 ring-white/20">
          <Image
            src="/logo.svg" // Replace with your logo path in the public folder
            alt="Mathammana D/C Factory Logo"
            fill
            className="object-contain p-1 rounded-full"
          />
        </div>

        {/* Company Info */}
        <div className="space-y-2">
          <h2 className="text-lg sm:text-xl font-bold tracking-wider uppercase">
            MATHAMMANA D/C FACTORY
          </h2>
          <p className="text-blue-200 text-xs sm:text-sm font-light">
            Open Monday to Saturday 6am to 9pm
          </p>
          <p className="text-white text-sm sm:text-base font-semibold pt-1">
            Mathammana, Minuwangoda, 11550, Sri Lanka
          </p>
          <div className="text-blue-100 text-xs sm:text-sm font-medium pt-1 space-x-2">
            <a href="tel:+94112296547" className="hover:underline">
              +94 112296547
            </a>
            <span>/</span>
            <a href="tel:+94774181573" className="hover:underline">
              +94 774181573
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-4 pt-2">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 text-white flex items-center justify-center hover:text-[#000000] transition-all duration-300 "
            aria-label="Facebook"
          >
            <FacebookIcon className="w-5 h-5 fill-current" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 text-white flex items-center justify-center  hover:text-[#000000] transition-all duration-300 "
            aria-label="Instagram"
          >
            <InstagramIcon className="w-5 h-5 fill-current" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 text-white flex items-center justify-center hover:text-[#000000] transition-all duration-300"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-5 h-5 fill-current" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 text-white flex items-center justify-center hover:text-[#000000] transition-all duration-300"
            aria-label="YouTube"
          >
            <YoutubeIcon className="w-5 h-5" />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-12 pt-6 border-t border-blue-400/20 w-full max-w-3xl">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-white hover:text-[#C3C3C3] text-sm sm:text-base font-semibold transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-blue-200/80 text-xs pt-4 font-light">
          © Copyright © 2026 Mathammana.
        </p>
      </div>
    </footer>
  );
}
