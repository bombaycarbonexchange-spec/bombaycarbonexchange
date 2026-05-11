import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import logo from "@/assets/bcx-logo.png";

const SiteHeader = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Dark transparent header on home hero, solid otherwise
  const onDark = isHome && !scrolled;

  const navLinks = [
    { name: "Sectors", href: "/#sectors" },
    { name: "Methodology", href: "/#process" },
    { name: "Contact", href: "/#contact" },
  ];

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
          className="flex items-center"
        >
          <img 
            src={logo} 
            alt="Bombay Carbon Exchange" 
            className="h-8 md:h-10 w-auto transition-all duration-500" 
          />
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xs font-mono uppercase tracking-[0.18em] link-underline ${
                onDark ? "text-ink-foreground/80" : "text-muted-foreground"
              }`}
            >
              {link.name}
            </a>
          ))}
          <a href="/#contact" className="btn-primary !px-5 !py-3">
            Inquire Now
          </a>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-4">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <button
                className={`p-2 transition-colors ${
                  onDark ? "text-ink-foreground" : "text-foreground"
                }`}
                aria-label="Open Menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[300px] bg-ink text-ink-foreground border-hairline p-0 flex flex-col">
              <div className="p-8 pt-20 flex flex-col gap-8">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-2xl font-serif tracking-tight text-ink-foreground/90 hover:text-accent-glow transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="mt-4 pt-8 border-t border-hairline">
                  <a
                    href="/#contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="btn-primary w-full justify-center"
                  >
                    Inquire Now
                  </a>
                </div>
              </div>
              <div className="mt-auto p-8 border-t border-hairline">
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ink-muted">
                  Bombay Carbon Exchange &copy; 2024
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
