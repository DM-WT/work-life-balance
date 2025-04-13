"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar({ logo, links }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link href="/">
          <img src={logo} alt="Logo" className="logo-image" />
        </Link>
      </div>

      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle Menu">
        <span className="hamburger-icon">☰</span>
      </button>

      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        {links.map((link) => (
          <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}