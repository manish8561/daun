"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-900 font-bold text-xl">ਖ</span>
            </div>
            <h1 className="text-xl font-bold">Gurudwara Daun Sahib</h1>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-blue-800 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-blue-200 transition-colors">
              Home
            </Link>
            <Link
              href="/#history"
              className="hover:text-blue-200 transition-colors"
            >
              History
            </Link>
            <Link
              href="/#daily-routine"
              className="hover:text-blue-200 transition-colors"
            >
              Daily Routine
            </Link>
            <Link
              href="/duties-of-khalsa"
              className="hover:text-blue-200 transition-colors"
            >
              Duties of Khalsa
            </Link>
            <Link
              href="/donations"
              className="hover:text-blue-200 transition-colors"
            >
              Donations
            </Link>
            <Link
              href="/#contact"
              className="hover:text-blue-200 transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-blue-800">
            <div className="flex flex-col space-y-3">
              <Link
                href="/"
                className="hover:text-blue-200 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/#history"
                className="hover:text-blue-200 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                History
              </Link>
              <Link
                href="/#daily-routine"
                className="hover:text-blue-200 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Daily Routine
              </Link>
              <Link
                href="/duties-of-khalsa"
                className="hover:text-blue-200 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Duties of Khalsa
              </Link>
              <Link
                href="/donations"
                className="hover:text-blue-200 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Donations
              </Link>
              <Link
                href="/#contact"
                className="hover:text-blue-200 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
