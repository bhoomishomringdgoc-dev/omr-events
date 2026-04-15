import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { SiFacebook, SiInstagram, SiWhatsapp, SiYoutube } from "react-icons/si";

const FOOTER_LINKS = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Packages", href: "/packages" },
    { label: "Contact Us", href: "/contact" },
  ],
  events: [
    { label: "Hindu Functions", href: "/packages" },
    { label: "Christian Weddings", href: "/packages" },
    { label: "Muslim Functions", href: "/packages" },
    { label: "Corporate Events", href: "/packages" },
    { label: "Birthdays & Anniversaries", href: "/packages" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="bg-primary text-primary-foreground" data-ocid="footer">
      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/generated/omr-logo-transparent.dim_200x200.png"
                alt="OMR Event Management Logo"
                className="w-12 h-12 object-contain"
              />
              <div>
                <p className="font-display font-black text-base text-primary-foreground leading-tight">
                  OMR
                </p>
                <p className="font-body text-[10px] text-primary-foreground/60 tracking-widest uppercase">
                  Event Management
                </p>
              </div>
            </div>
            <p className="font-body text-sm text-primary-foreground/70 leading-relaxed mb-2">
              A to Z Wedding & Event Management in Coimbatore, Tamil Nadu.
            </p>
            <p className="font-body text-xs text-primary-foreground/50 leading-relaxed mb-5">
              Hindu · Christian · Muslim · Corporate · Birthdays
            </p>
            <div className="flex gap-3" data-ocid="footer.social_links">
              {[
                { Icon: SiFacebook, label: "Facebook", href: "#" },
                {
                  Icon: SiInstagram,
                  label: "Instagram",
                  href: "https://www.instagram.com/_omr_event_management",
                },
                { Icon: SiYoutube, label: "YouTube", href: "#" },
                {
                  Icon: SiWhatsapp,
                  label: "WhatsApp",
                  href: "https://wa.me/919842249654",
                },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-smooth"
                  data-ocid={`footer.social.${label.toLowerCase()}_link`}
                >
                  <Icon className="w-4 h-4 text-primary-foreground/80" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-bold text-sm text-primary-foreground/90 uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="font-body text-sm text-primary-foreground/60 hover:text-primary-foreground transition-smooth"
                    data-ocid={`footer.company.${link.label.toLowerCase().replace(/\s+/g, "_")}_link`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Events Links */}
          <div>
            <h4 className="font-display font-bold text-sm text-primary-foreground/90 uppercase tracking-wider mb-4">
              Events
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.events.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="font-body text-sm text-primary-foreground/60 hover:text-primary-foreground transition-smooth"
                    data-ocid={`footer.events.${link.label.toLowerCase().replace(/[\s&]+/g, "_")}_link`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-sm text-primary-foreground/90 uppercase tracking-wider mb-4">
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm font-body text-primary-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5 text-secondary shrink-0" />
                <span>
                  1/148, Amman Nagar, B.K Kovil, Mettupalayam, Coimbatore, Tamil
                  Nadu
                </span>
              </li>
              <li>
                <a
                  href="tel:+919842297687"
                  className="flex items-center gap-2.5 text-sm font-body text-primary-foreground/70 hover:text-primary-foreground transition-smooth"
                  data-ocid="footer.phone_ramalingam_link"
                >
                  <Phone className="w-4 h-4 text-secondary shrink-0" />
                  C. Ramalingam: 98422-97687
                </a>
              </li>
              <li>
                <a
                  href="tel:+919843797687"
                  className="flex items-center gap-2.5 text-sm font-body text-primary-foreground/70 hover:text-primary-foreground transition-smooth"
                  data-ocid="footer.phone_bhoomish_link"
                >
                  <Phone className="w-4 h-4 text-secondary shrink-0" />
                  OMR. Bhoomish: 98437-97687
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919842249654"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm font-body text-primary-foreground/70 hover:text-primary-foreground transition-smooth"
                  data-ocid="footer.whatsapp_link"
                >
                  <Mail className="w-4 h-4 text-secondary shrink-0" />
                  WhatsApp: 98422-49654
                </a>
              </li>
              <li className="text-sm font-body text-primary-foreground/50">
                @_omr_event_management
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-body text-primary-foreground/40">
          <span>
            © {year} OMR Event Management. All rights reserved. Crafting
            Celebrations.
          </span>
          <span>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-secondary/80 transition-smooth"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
