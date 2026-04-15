import { Button } from "@/components/ui/button";
import { CheckCircle2, Star } from "lucide-react";
import { motion } from "motion/react";
import type { Package } from "../types/packages";

interface PackageCardProps {
  pkg: Package;
  index: number;
  compact?: boolean;
}

export default function PackageCard({
  pkg,
  index,
  compact = false,
}: PackageCardProps) {
  const whatsappUrl = `https://wa.me/919842297687?text=Hi%2C%20I%27m%20interested%20in%20the%20${encodeURIComponent(pkg.name)}%20package.%20Please%20send%20me%20details.`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      data-ocid={`packages.card.item.${index + 1}`}
      className={`relative flex flex-col rounded-2xl border transition-smooth cursor-default
        ${
          pkg.isPopular
            ? "border-secondary ring-2 ring-secondary/30 bg-card card-elevated scale-[1.03] z-10"
            : "border-border bg-card card-subtle hover:card-elevated hover:-translate-y-1"
        }
        ${compact ? "p-5" : "p-6 md:p-7"}
      `}
    >
      {/* Popular Badge */}
      {pkg.isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
          <span className="gradient-accent text-white text-xs font-body font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 whitespace-nowrap">
            <Star className="w-3 h-3" fill="currentColor" />
            {pkg.highlight}
          </span>
        </div>
      )}

      {/* Header */}
      <div className={`text-center ${pkg.isPopular ? "pt-4" : "pt-2"} mb-5`}>
        <p
          className={`font-display font-black tracking-widest uppercase mb-1 ${pkg.isPopular ? "text-secondary text-base" : "text-muted-foreground text-sm"}`}
        >
          {pkg.name}
        </p>
        <p className="text-xs font-body text-muted-foreground mb-4 leading-snug min-h-[2.5rem] flex items-center justify-center">
          {pkg.tagline}
        </p>
        <p
          className={`font-display font-black text-gradient ${compact ? "text-4xl" : "text-5xl"}`}
        >
          {pkg.price}
        </p>
        <p className="text-xs font-body text-muted-foreground mt-1">
          {pkg.priceLabel}
        </p>
      </div>

      {/* Divider */}
      <div
        className={`h-px mb-5 ${pkg.isPopular ? "bg-secondary/30" : "bg-border"}`}
      />

      {/* Features */}
      <ul className="flex-1 space-y-2.5 mb-6">
        {pkg.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2.5 text-sm font-body text-foreground/80"
          >
            <CheckCircle2
              className={`w-4 h-4 mt-0.5 shrink-0 ${pkg.isPopular ? "text-secondary" : "text-accent"}`}
            />
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button
        asChild
        size="sm"
        className={`w-full font-body font-semibold transition-smooth ${
          pkg.isPopular
            ? "gradient-accent text-white border-0 shadow-md hover:opacity-90"
            : "border-primary/30 text-primary hover:bg-primary/5"
        }`}
        variant={pkg.isPopular ? "default" : "outline"}
        data-ocid={`packages.card.quote_button.${index + 1}`}
      >
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          Get Quote
        </a>
      </Button>
    </motion.div>
  );
}
