// components/Navbar/NavItem.tsx
import Link from "next/link";
import React from "react";

type NavItemProps = {
  href: string;
  label: string;
  isActive?: boolean;
};

const NavItem: React.FC<NavItemProps> = ({ href, label, isActive }) => {
  return (
    <Link
      href={href}
      className={`px-4 py-2 rounded hover:bg-gray-200 ${
        isActive ? "font-bold border-b-2 border-blue-500" : ""
      }`}
    >
      {label}
    </Link>
  );
};

export default NavItem;
