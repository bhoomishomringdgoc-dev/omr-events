import { Button } from "@/components/ui/button";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Packages", href: "/packages" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouterState();
  const currentPath = router.location.pathname;

  return (
    <header
      className="sticky top-0 z-50 bg-card border-b border-border shadow-sm"
      data-ocid="header"
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group"
          data-ocid="header.logo_link"
        >
          <img
            src="/assets/generated/omr-logo-transparent.dim_200x200.png"
            alt="OMR Event Management"
            className="w-10 h-10 object-contain group-hover:scale-105 transition-smooth"
          />
          <div>
            <p className="font-display font-black text-base leading-tight text-foreground tracking-tight">
              OMR
            </p>
            <p className="font-body text-[10px] text-muted-foreground tracking-widest uppercase leading-tight">
              Event Management
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-1"
          data-ocid="header.nav"
        >
          {NAV_LINKS.map((link) => {
            const isActive = currentPath === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-2 rounded-lg font-body text-sm font-medium transition-smooth ${
                  isActive
                    ? "text-primary bg-primary/8"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                }`}
                data-ocid={`header.nav.${link.label.toLowerCase()}_link`}
              >
                {link.label}
              </Link>
            );
          })}
          <Button
            asChild
            size="sm"
            className="ml-4 gradient-accent text-white border-0 font-body font-semibold px-5 hover:opacity-90 transition-smooth"
            data-ocid="header.request_quote_button"
          >
            <Link to="/contact">Request Quote</Link>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="md:hidden p-2 rounded-lg text-muted-foreground hover:bg-muted/60 transition-smooth"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          data-ocid="header.mobile_menu_toggle"
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden bg-card border-t border-border px-4 py-4 flex flex-col gap-1"
          data-ocid="header.mobile_nav"
        >
          {NAV_LINKS.map((link) => {
            const isActive = currentPath === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-xl font-body text-sm font-medium transition-smooth ${
                  isActive
                    ? "text-primary bg-primary/8"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                }`}
                data-ocid={`header.mobile_nav.${link.label.toLowerCase()}_link`}
              >
                {link.label}
              </Link>
            );
          })}
          <Button
            asChild
            size="sm"
            className="mt-2 gradient-accent text-white border-0 font-body font-semibold hover:opacity-90"
            data-ocid="header.mobile.request_quote_button"
          >
            <Link to="/contact" onClick={() => setMobileOpen(false)}>
              Request Quote
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
}
