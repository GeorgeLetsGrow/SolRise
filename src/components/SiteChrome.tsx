import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="SolRise Learning Academy home">
        <Image className="brand-logo" src="/SolRise-logo-2.png" alt="" width={300} height={300} quality={100} priority />
        <span>SolRise <small>Learning Academy</small></span>
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/how-we-learn">How We Learn</Link>
        <Link href="/resources">Resources</Link>
      </nav>
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
