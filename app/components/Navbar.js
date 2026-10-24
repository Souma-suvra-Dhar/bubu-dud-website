"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "🏠 Home" },
  { href: "/memories", label: "📸 Memories" },
  { href: "/letter", label: "💌 Letter" },
  { href: "/about", label: "🐼 About Us" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="nav">
      {links.map((l) => (
        <Link key={l.href} href={l.href} className={pathname === l.href ? "active" : ""}>
          {l.label}
        </Link>
      ))}
    </nav>
  );
}
