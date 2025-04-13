'use client';

import Link from 'next/link';

const Navbar = ({ logo, links }) => (
  <nav className="flex justify-between items-center p-4 shadow">
    <img src={logo} alt="Logo" className="h-10" />
    <ul className="flex space-x-4">
      {links.map((link, idx) => (
        <li key={idx}>
          <Link href={link.href}>{link.label}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
