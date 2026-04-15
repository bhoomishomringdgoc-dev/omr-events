import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import PackageCard from "../components/PackageCard";
import SpecialPackageCard from "../components/SpecialPackageCard";
import { SPECIAL_PACKAGES, WEDDING_PACKAGES } from "../types/packages";

const WHATSAPP_URL =
  "https://wa.me/919842297687?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20event%20packages.";

export default function PackagesPage() {
  return (
    <div data-ocid="packages.page">
      {/* Hero / Intro */}
      <section
        className="relative py-20 px-4 text-center overflow-hidden bg-primary"
        data-ocid="packages.hero.section"
      >
        {/* Decorative glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] gradient-accent opacity-20 blur-3xl rounded-full pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-5 gradient-accent text-white border-0 px-4 py-1.5 font-body tracking-wide">
              <Sparkles className="w-3.5 h-3.5 mr-1.5" />
              Transparent Pricing. Zero Surprises.
            </Badge>
            <h1 className="font-display text-4xl md:text-6xl font-black text-primary-foreground leading-tight mb-4">
              Elevate Your Celebration:
              <br />
              <span className="text-gradient">Event Packages</span>
            </h1>
            <p className="font-body text-primary-foreground/70 text-lg max-w-xl mx-auto leading-relaxed mb-8">
              From intimate gatherings to grand royal weddings — choose the
              package that fits your dream and your budget. All packages include
              a dedicated event manager.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="gradient-accent text-white border-0 shadow-lg hover:opacity-90 transition-smooth font-body font-semibold px-8"
                data-ocid="packages.hero.whatsapp_button"
              >
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-smooth font-body font-semibold px-8"
                data-ocid="packages.hero.call_button"
              >
                <a href="tel:+919842297687">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us Now
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Wedding Packages */}
      <section
        className="py-20 px-4 bg-background"
        data-ocid="packages.wedding.section"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-3xl md:text-4xl font-black text-foreground mb-3">
              Wedding & Function Packages
            </h2>
            <p className="font-body text-muted-foreground max-w-md mx-auto">
              5 tiers designed for every celebration scale — all inclusive, all
              managed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 items-start">
            {WEDDING_PACKAGES.map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-xs font-body text-muted-foreground mt-8"
          >
            * All prices are indicative. Final quote based on guest count, venue
            & customisations.{" "}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary underline underline-offset-2"
            >
              Contact us for exact pricing.
            </a>
          </motion.p>
        </div>
      </section>

      {/* Special Packages */}
      <section
        className="py-20 px-4 bg-muted/40"
        data-ocid="packages.special.section"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-3xl md:text-4xl font-black text-foreground mb-3">
              Special Event Packages
            </h2>
            <p className="font-body text-muted-foreground max-w-lg mx-auto">
              Dedicated packages crafted for specific event types — each
              honouring the unique traditions and needs of your celebration.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SPECIAL_PACKAGES.map((sp, i) => (
              <SpecialPackageCard key={sp.id} pkg={sp} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Get Quote Section */}
      <section
        className="py-20 px-4 bg-card border-t border-border"
        data-ocid="packages.contact.section"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-black text-foreground mb-3">
              Ready to Book Your{" "}
              <span className="text-gradient">Dream Event?</span>
            </h2>
            <p className="font-body text-muted-foreground max-w-md mx-auto">
              Reach out to our team directly. We'll help you choose the right
              package and customise it to your exact needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "📞",
                label: "C. Ramalingam",
                value: "98422-97687",
                href: "tel:+919842297687",
                ocid: "packages.contact.ramalingam",
              },
              {
                icon: "📞",
                label: "OMR. Bhoomish",
                value: "98437-97687",
                href: "tel:+919843797687",
                ocid: "packages.contact.bhoomish",
              },
              {
                icon: "💬",
                label: "WhatsApp",
                value: "98422-49654",
                href: "https://wa.me/919842249654",
                ocid: "packages.contact.whatsapp",
              },
            ].map((contact) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  contact.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                data-ocid={contact.ocid}
                className="flex items-center gap-4 bg-background border border-border rounded-2xl p-5 card-subtle hover:card-elevated transition-smooth group"
              >
                <span className="text-3xl">{contact.icon}</span>
                <div>
                  <p className="font-body text-xs text-muted-foreground uppercase tracking-wide">
                    {contact.label}
                  </p>
                  <p className="font-display font-bold text-lg text-foreground group-hover:text-secondary transition-smooth">
                    {contact.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 text-center bg-background border border-border rounded-2xl p-6 card-subtle"
            data-ocid="packages.contact.address"
          >
            <p className="font-body text-sm text-muted-foreground mb-1">
              📍 Visit Us
            </p>
            <p className="font-body font-semibold text-foreground">
              1/148, Amman Nagar, B.K Kovil, Mettupalayam, Coimbatore, Tamil
              Nadu
            </p>
            <p className="font-body text-sm text-muted-foreground mt-2">
              Instagram & Social:{" "}
              <a
                href="https://www.instagram.com/_omr_event_management"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:underline"
                data-ocid="packages.contact.instagram_link"
              >
                @_omr_event_management
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
