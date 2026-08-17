"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

function useTranslatedNavigation() {
  useEffect(() => {
    if (!window.location.hostname.endsWith(".translate.goog")) return;

    const currentParams = new URLSearchParams(window.location.search);
    const languageParams = {
      _x_tr_sl: currentParams.get("_x_tr_sl") || "en",
      _x_tr_tl: currentParams.get("_x_tr_tl") || "es",
      _x_tr_hl: currentParams.get("_x_tr_hl") || "en",
    };

    const translatedUrl = (href: string) => {
      const url = new URL(href, window.location.href);
      if (url.origin !== window.location.origin) return null;
      Object.entries(languageParams).forEach(([key, value]) => url.searchParams.set(key, value));
      return url.href;
    };

    const updateInternalLinks = () => {
      document.querySelectorAll<HTMLAnchorElement>("a[href]").forEach((link) => {
        if (link.dataset.languageToggle === "true") return;
        const nextHref = translatedUrl(link.href);
        if (nextHref) link.href = nextHref;
      });
    };

    const handleInternalNavigation = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>("a[href]");
      if (!link || link.dataset.languageToggle === "true" || link.target === "_blank" || link.hasAttribute("download")) return;
      const nextHref = translatedUrl(link.href);
      if (!nextHref) return;
      event.preventDefault();
      window.location.assign(nextHref);
    };

    updateInternalLinks();
    const observer = new MutationObserver(updateInternalLinks);
    observer.observe(document.body, { childList: true, subtree: true });
    document.addEventListener("click", handleInternalNavigation, true);

    return () => {
      observer.disconnect();
      document.removeEventListener("click", handleInternalNavigation, true);
    };
  }, []);
}

export function SiteHeader() {
  useTranslatedNavigation();
  const pathname = usePathname();
  const navigation = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },

    { href: "/resources", label: "Resources" },
    { href: "/policies", label: "Policies" },
  ];

  function toggleTranslation(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();

    if (window.location.hostname.endsWith(".translate.goog")) {
      const originalUrl = new URL(window.location.pathname, "https://solriselearning.netlify.app");
      const currentParams = new URLSearchParams(window.location.search);
      currentParams.forEach((value, key) => {
        if (!key.startsWith("_x_tr_")) originalUrl.searchParams.append(key, value);
      });
      if (window.location.hash && window.location.hash !== "#translate-es") originalUrl.hash = window.location.hash;
      window.location.assign(originalUrl.href);
      return;
    }

    const currentPage = window.location.href.split("#")[0];
    const translateUrl = `https://translate.google.com/translate?sl=en&tl=es&u=${encodeURIComponent(currentPage)}`;
    window.open(translateUrl, "_blank", "noopener,noreferrer");
  }

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
        <a className="translate-nav" href="#translate-es" data-language-toggle="true" onClick={toggleTranslation} lang="es" aria-label="Traducir esta página al español">Español</a>
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
          <a className="mobile-translate" href="#translate-es" data-language-toggle="true" onClick={toggleTranslation} lang="es">ES · Español</a>
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
      <div className="footer-links"><Link href="/services">Services</Link><Link href="/about">About</Link><Link href="/resources">Resources</Link><Link href="/policies">Policies</Link></div>
      <div className="footer-social" aria-label="Social media">
        <a href="https://www.instagram.com/solriselearning" target="_blank" rel="noopener noreferrer" aria-label="SolRise Learning Academy on Instagram">Instagram</a>
        <a href="https://www.facebook.com/share/1ExCpqJDMs/" target="_blank" rel="noopener noreferrer" aria-label="SolRise Learning Academy on Facebook">Facebook</a>
      </div>
    </footer>
  );
}
