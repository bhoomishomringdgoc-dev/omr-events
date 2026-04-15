import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import type { SpecialPackage } from "../types/packages";

interface SpecialPackageCardProps {
  pkg: SpecialPackage;
  index: number;
}

export default function SpecialPackageCard({
  pkg,
  index,
}: SpecialPackageCardProps) {
  const whatsappUrl = `https://wa.me/919842297687?text=Hi%2C%20I%27m%20interested%20in%20${encodeURIComponent(pkg.title)}.%20Please%20send%20me%20details.`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      data-ocid={`packages.special.item.${index + 1}`}
      className="group bg-card border border-border rounded-2xl overflow-hidden card-subtle hover:card-elevated hover:-translate-y-1 transition-smooth flex flex-col"
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
        />
        <div className="absolute inset-0 bg-primary/50 group-hover:bg-primary/40 transition-smooth" />
        <div className="absolute bottom-3 left-4 right-4">
          <p className="font-display font-black text-white text-base tracking-wide leading-tight">
            {pkg.title}
          </p>
          <p className="font-body text-white/75 text-xs mt-0.5">
            {pkg.subtitle}
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <div className="inline-flex items-center mb-3">
          <span className="font-body font-bold text-secondary text-sm bg-secondary/10 px-3 py-1 rounded-full">
            {pkg.priceRange}
          </span>
        </div>

        <p className="text-sm font-body text-muted-foreground leading-relaxed mb-4">
          {pkg.description}
        </p>

        <ul className="space-y-1.5 mb-5 flex-1">
          {pkg.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-xs font-body text-foreground/70"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        <Button
          asChild
          variant="outline"
          size="sm"
          className="w-full font-body font-semibold border-secondary/40 text-secondary hover:bg-secondary/10 transition-smooth"
          data-ocid={`packages.special.quote_button.${index + 1}`}
        >
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Get Quote
          </a>
        </Button>
      </div>
    </motion.div>
  );
}
