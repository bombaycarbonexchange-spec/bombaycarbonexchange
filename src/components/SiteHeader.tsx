import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const SiteHeader = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Dark transparent header on home hero, solid otherwise
  const onDark = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur border-b hairline"
          : isHome
          ? "bg-transparent"
          : "bg-background border-b hairline"
      }`}
    >
      <div className="container-wide flex items-center justify-between h-16 md:h-20">
        <Link
          to="/"
          className={`font-serif text-base md:text-lg tracking-tight ${
            onDark ? "text-ink-foreground" : "text-foreground"
          }`}
        >
          Bombay Carbon Exchange
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="/#sectors"
            className={`text-xs font-mono uppercase tracking-[0.18em] link-underline ${
              onDark ? "text-ink-foreground/80" : "text-muted-foreground"
            }`}
          >
            Sectors
          </a>
          <a
            href="/#process"
            className={`text-xs font-mono uppercase tracking-[0.18em] link-underline ${
              onDark ? "text-ink-foreground/80" : "text-muted-foreground"
            }`}
          >
            Process
          </a>
          <a
            href="/#contact"
            className={`text-xs font-mono uppercase tracking-[0.18em] link-underline ${
              onDark ? "text-ink-foreground/80" : "text-muted-foreground"
            }`}
          >
            Contact
          </a>
        </nav>
        <a href="/#contact" className="btn-primary !px-5 !py-3 hidden sm:inline-flex">
          Discover
        </a>
      </div>
    </header>
  );
};

export default SiteHeader;
