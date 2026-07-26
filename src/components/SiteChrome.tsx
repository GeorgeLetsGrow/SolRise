"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const pathname = usePathname();
  const navigation = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/how-we-learn", label: "How We Learn" },
    { href: "/resources", label: "Resources" },
  ];

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="SolRise Learning Academy home">
        <Image className="brand-logo" src="/SolRise-logo-2.png" alt="" width={300} height={300} quality={100} priority />
        <span>SolRise <small>Learning Academy</small></span>
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={pathname === item.href ? "active" : undefined}
            aria-current={pathname === item.href ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <details className="mobile-menu">
        <summary className="menu-toggle" aria-label="Toggle navigation menu">
          <span /><span /><span />
        </summary>
        <nav aria-label="Mobile navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "active" : undefined}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <Link className={`mobile-contact${pathname === "/contact" ? " active" : ""}`} href="/contact" aria-current={pathname === "/contact" ? "page" : undefined}>Contact</Link>
        </nav>
      </details>
      <Link className="button button-small" href="/contact">Let&apos;s talk</Link>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <Link className="brand" href="/" aria-label="SolRise Learning Academy home">
        <Image className="brand-logo" src="/SolRise-logo-2.png" alt="" width={160} height={160} quality={100} />
        <span>SolRise <small>Learning Academy</small></span>
      </Link>
      <p>© 2026 SolRise Learning Academy. All rights reserved.</p>
      <div><Link href="/services">Services</Link><Link href="/about">About</Link><Link href="/resources">Resources</Link></div>
    </footer>
  );
}
