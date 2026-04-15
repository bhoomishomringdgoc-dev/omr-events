import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ChevronDown, MessageCircle, Sparkles, Star } from "lucide-react";
import { motion } from "motion/react";
import PackageCard from "../components/PackageCard";
import { SPECIAL_PACKAGES, WEDDING_PACKAGES } from "../types/packages";

export default function HomePage() {
  const whatsappUrl =
    "https://wa.me/919842297687?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20event%20packages.";

  return (
    <div data-ocid="home.page">
      {/* Hero */}
      <section
        className="relative min-h-[92vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-wedding.dim_1200x600.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        data-ocid="home.hero.section"
      >
        <div className="absolute inset-0 bg-primary/72" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Badge className="mb-6 gradient-accent text-white border-0 px-4 py-1.5 text-sm font-body tracking-wide">
              <Sparkles className="w-3.5 h-3.5 mr-1.5" />
              Coimbatore's Premier Event Management
            </Badge>
            <h1 className="font-display text-5xl md:text-7xl font-black text-white leading-tight mb-4">
              OMR Event
              <br />
              <span className="text-gradient">Management</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-body max-w-xl mx-auto mb-3 leading-relaxed">
              A to Z Wedding & Event Management in Coimbatore
            </p>
            <p className="text-base text-white/60 font-body max-w-xl mx-auto mb-10 leading-relaxed">
              Hindu · Christian · Muslim · Corporate · Birthdays — all handled
              with love & precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="gradient-accent text-white border-0 shadow-lg hover:opacity-90 transition-smooth font-body font-semibold px-8"
                data-ocid="home.find_package_button"
              >
                <Link to="/packages">Find Your Package</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/40 text-white bg-white/10 hover:bg-white/20 transition-smooth font-body font-semibold px-8"
                data-ocid="home.whatsapp_button"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-16 flex flex-col items-center gap-2 text-white/50"
          >
            <span className="text-xs font-body tracking-widest uppercase">
              Scroll to explore
            </span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section
        className="bg-card border-b border-border py-6"
        data-ocid="home.stats.section"
      >
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "500+", label: "Events Completed" },
            { value: "12+", label: "Years Experience" },
            { value: "50+", label: "Vendor Partners" },
            { value: "100%", label: "Client Satisfaction" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              data-ocid={`home.stat.item.${i + 1}`}
            >
              <div className="text-3xl font-display font-black text-gradient">
                {stat.value}
              </div>
              <div className="text-sm font-body text-muted-foreground mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Packages Preview */}
      <section
        className="py-20 px-4 bg-background"
        data-ocid="home.packages.section"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-4">
              Elevate Your Celebration:
              <br />
              <span className="text-gradient">Event Packages</span>
            </h2>
            <p className="text-muted-foreground font-body max-w-lg mx-auto">
              Choose from our thoughtfully curated tiers — each designed to make
              your celebration extraordinary.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 items-start">
            {WEDDING_PACKAGES.map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} index={i} compact />
            ))}
          </div>

          <div className="text-center mt-10">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="font-body font-semibold border-primary/30 text-primary hover:bg-primary/5 transition-smooth"
              data-ocid="home.view_all_packages_button"
            >
              <Link to="/packages">View All Packages & Pricing →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Specialisations */}
      <section
        className="py-20 px-4 bg-muted/40"
        data-ocid="home.specializations.section"
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl font-black text-center mb-12"
          >
            Discover Our <span className="text-gradient">Specialisations</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SPECIAL_PACKAGES.slice(0, 3).map((sp, i) => (
              <motion.div
                key={sp.id}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                data-ocid={`home.specialization.item.${i + 1}`}
                className="group rounded-2xl overflow-hidden bg-card border border-border card-subtle hover:card-elevated transition-smooth"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={sp.image}
                    alt={sp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/30 transition-smooth" />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-black text-lg text-foreground mb-1">
                    {sp.title}
                  </h3>
                  <p className="text-xs font-body text-secondary font-semibold mb-2 uppercase tracking-wide">
                    {sp.subtitle}
                  </p>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">
                    {sp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button
              asChild
              variant="outline"
              size="default"
              className="font-body font-semibold border-secondary/30 text-secondary hover:bg-secondary/5 transition-smooth"
              data-ocid="home.view_special_packages_button"
            >
              <Link to="/packages">See All Special Packages →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Functions We Organise */}
      <section
        className="py-20 px-4 bg-background"
        data-ocid="home.functions.section"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-black mb-4">
              Every Celebration,{" "}
              <span className="text-gradient">Every Tradition</span>
            </h2>
            <p className="text-muted-foreground font-body mb-10 max-w-xl mx-auto">
              From intimate family gatherings to grand multi-day weddings — we
              manage it all with precision and heart.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                icon: "🕉️",
                label: "Hindu Functions",
                sub: "Muhurtham, Seemantham & more",
              },
              {
                icon: "✝️",
                label: "Christian Events",
                sub: "Church weddings, receptions",
              },
              {
                icon: "☪️",
                label: "Muslim Functions",
                sub: "Nikah, Walima & more",
              },
              {
                icon: "💼",
                label: "Corporate Events",
                sub: "Launches, gala dinners",
              },
              {
                icon: "💒",
                label: "A to Z Weddings",
                sub: "Full planning & execution",
              },
              { icon: "🎂", label: "Birthdays", sub: "Themed celebrations" },
              {
                icon: "💍",
                label: "Anniversaries",
                sub: "Milestone celebrations",
              },
              {
                icon: "🎓",
                label: "School Events",
                sub: "Annual days, graduations",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                data-ocid={`home.function.item.${i + 1}`}
                className="bg-card border border-border rounded-xl p-4 text-center card-subtle hover:card-elevated transition-smooth"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="font-body font-semibold text-sm text-foreground mb-1">
                  {item.label}
                </p>
                <p className="font-body text-xs text-muted-foreground">
                  {item.sub}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="py-16 px-4 gradient-accent"
        data-ocid="home.cta.section"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center text-white"
        >
          <h2 className="font-display text-4xl font-black mb-4">
            Ready to Plan Your Dream Event?
          </h2>
          <p className="font-body text-white/80 mb-2 text-lg">
            Contact our team in Coimbatore today and let's make it
            extraordinary.
          </p>
          <p className="font-body text-white/60 mb-8 text-sm">
            📍 1/148, Amman Nagar, B.K Kovil, Mettupalayam, Coimbatore
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-body font-bold px-10 transition-smooth"
              data-ocid="home.cta.packages_button"
            >
              <Link to="/packages">View Packages</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/40 text-white bg-white/10 hover:bg-white/20 font-body font-bold px-10 transition-smooth"
              data-ocid="home.cta.whatsapp_button"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Testimonial / Trust */}
      <section
        className="py-16 px-4 bg-card border-t border-border"
        data-ocid="home.trust.section"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center gap-1 mb-4">
              {["s1", "s2", "s3", "s4", "s5"].map((k) => (
                <Star
                  key={k}
                  className="w-5 h-5 text-secondary"
                  fill="currentColor"
                />
              ))}
            </div>
            <blockquote className="font-display text-xl md:text-2xl font-black text-foreground italic mb-4 leading-relaxed">
              "They managed every detail of our daughter's wedding — from decor
              to catering. It was truly a royal experience in Coimbatore!"
            </blockquote>
            <p className="font-body text-sm text-muted-foreground">
              — Priya & Karthik, Gold Package Wedding, 2024
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
