import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Award, Heart, Phone, Sparkles, Users } from "lucide-react";
import { motion } from "motion/react";

const FUNCTIONS_LIST = [
  {
    icon: "🕉️",
    name: "Hindu Weddings",
    desc: "Muhurtham, Seemantham, Pellikoduku & more",
  },
  {
    icon: "✝️",
    name: "Christian Weddings",
    desc: "Church ceremonies, receptions, choir coordination",
  },
  {
    icon: "☪️",
    name: "Muslim Nikkah",
    desc: "Nikkah, Walima, Aqeeqa celebrations",
  },
  {
    icon: "💒",
    name: "A to Z Weddings",
    desc: "Complete planning from invites to farewell",
  },
  {
    icon: "🎉",
    name: "Reception",
    desc: "Grand reception halls, lighting & entertainment",
  },
  { icon: "💍", name: "Engagement", desc: "Ring ceremony, decor & photoshoot" },
  {
    icon: "👶",
    name: "Naming Ceremony",
    desc: "Naamkaran, traditional & modern styles",
  },
  {
    icon: "🌸",
    name: "Cradle Ceremony",
    desc: "Thottil function decor & catering",
  },
  { icon: "🎂", name: "Birthdays", desc: "Themed parties for all ages" },
  {
    icon: "💑",
    name: "Anniversaries",
    desc: "Silver, golden & milestone celebrations",
  },
  {
    icon: "💼",
    name: "Corporate Events",
    desc: "Launches, conferences, award nights",
  },
  {
    icon: "🎓",
    name: "School Events",
    desc: "Annual days, graduations, sports events",
  },
];

const WHY_CHOOSE = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "12+ Years of Excellence",
    desc: "Over a decade of crafting unforgettable events across Coimbatore and Tamil Nadu.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Dedicated Event Team",
    desc: "A passionate team of coordinators, decorators, and vendors working in perfect sync.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Every Religion Honoured",
    desc: "We deeply respect all traditions — Hindu, Christian, and Muslim ceremonies handled with care.",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "A to Z Event Management",
    desc: "From venue booking to farewell — we manage every single detail so you don't have to.",
  },
];

export default function AboutPage() {
  return (
    <div data-ocid="about.page">
      {/* Hero */}
      <section
        className="relative py-20 px-4 bg-primary text-center overflow-hidden"
        data-ocid="about.hero.section"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] gradient-accent opacity-20 blur-3xl rounded-full pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-5 gradient-accent text-white border-0 px-4 py-1.5 font-body tracking-wide">
              <Sparkles className="w-3.5 h-3.5 mr-1.5" />
              Coimbatore's Trusted Event Specialists
            </Badge>
            <h1 className="font-display text-4xl md:text-6xl font-black text-primary-foreground leading-tight mb-4">
              About <span className="text-gradient">OMR Event Management</span>
            </h1>
            <p className="font-body text-primary-foreground/70 text-lg leading-relaxed">
              A team that transforms your vision into celebrations you'll
              cherish forever.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section
        className="py-20 px-4 bg-background"
        data-ocid="about.story.section"
      >
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-black text-foreground mb-5">
              Our <span className="text-gradient">Story</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              OMR Event Management was founded with one mission — to bring joy,
              beauty, and precision to every celebration in Coimbatore and
              beyond. Founded by C. Ramalingam and OMR. Bhoomish, the company
              has grown from a small decor team to a full-service event
              management powerhouse.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Based in Mettupalayam, Coimbatore, we proudly serve families
              across Tamil Nadu, managing everything from intimate home
              ceremonies to grand wedding halls with 1000+ guests.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Our expertise spans all religious and cultural traditions — Hindu,
              Christian, and Muslim ceremonies are all handled with equal
              respect, dedication, and love.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { value: "500+", label: "Events Completed" },
              { value: "12+", label: "Years Experience" },
              { value: "50+", label: "Vendor Partners" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                data-ocid={`about.stat.item.${i + 1}`}
                className="bg-card border border-border rounded-2xl p-5 text-center card-subtle"
              >
                <p className="font-display font-black text-4xl text-gradient mb-1">
                  {stat.value}
                </p>
                <p className="font-body text-xs text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        className="py-20 px-4 bg-muted/40"
        data-ocid="about.why_choose.section"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-black text-foreground mb-3">
              Why Choose <span className="text-gradient">OMR?</span>
            </h2>
            <p className="font-body text-muted-foreground max-w-md mx-auto">
              We don't just plan events — we create experiences that last a
              lifetime.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {WHY_CHOOSE.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                data-ocid={`about.why_choose.item.${i + 1}`}
                className="bg-card border border-border rounded-2xl p-6 card-subtle hover:card-elevated transition-smooth flex gap-5"
              >
                <div className="w-12 h-12 gradient-accent rounded-xl flex items-center justify-center shrink-0 text-white shadow-md">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-display font-black text-lg text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Functions We Organise */}
      <section
        className="py-20 px-4 bg-background"
        data-ocid="about.functions.section"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-black text-foreground mb-3">
              All Functions We <span className="text-gradient">Organise</span>
            </h2>
            <p className="font-body text-muted-foreground max-w-lg mx-auto">
              Every celebration, every tradition — we bring expertise and heart
              to all of them.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {FUNCTIONS_LIST.map((fn, i) => (
              <motion.div
                key={fn.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                data-ocid={`about.function.item.${i + 1}`}
                className="bg-card border border-border rounded-xl p-4 text-center card-subtle hover:card-elevated transition-smooth"
              >
                <div className="text-3xl mb-2">{fn.icon}</div>
                <p className="font-body font-semibold text-sm text-foreground mb-1">
                  {fn.name}
                </p>
                <p className="font-body text-xs text-muted-foreground leading-snug">
                  {fn.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section
        className="py-20 px-4 bg-muted/40"
        data-ocid="about.services.section"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-black text-foreground mb-3">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="font-body text-muted-foreground max-w-md mx-auto">
              Comprehensive end-to-end services — everything you need under one
              roof.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              "Venue Decoration",
              "Stage Setup",
              "Floral Arrangements",
              "Pandal Construction",
              "Catering Services",
              "Photography",
              "Videography",
              "Music & DJ",
              "Professional Lighting",
              "Transport Arrangement",
              "Invitation Cards",
              "Bridal Makeup",
              "MC / Anchor",
              "Guest Management",
              "Pre-Event Planning",
              "On-Site Coordination",
              "Vendor Management",
              "Sound Systems",
            ].map((service, i) => (
              <motion.div
                key={service}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                data-ocid={`about.service.item.${i + 1}`}
                className="bg-card border border-border rounded-xl px-4 py-3 text-sm font-body font-medium text-foreground card-subtle hover:border-secondary/50 hover:text-secondary transition-smooth flex items-center gap-2"
              >
                <span className="text-secondary">✦</span>
                {service}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Team */}
      <section
        className="py-20 px-4 bg-card border-t border-border"
        data-ocid="about.team.section"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-black text-foreground mb-4">
              Meet the <span className="text-gradient">Team</span>
            </h2>
            <p className="font-body text-muted-foreground mb-10">
              Two passionate professionals behind every memorable celebration.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {[
                {
                  name: "C. Ramalingam",
                  role: "Founder & Event Director",
                  phone: "98422-97687",
                  href: "tel:+919842297687",
                },
                {
                  name: "OMR. Bhoomish",
                  role: "Co-Founder & Decor Head",
                  phone: "98437-97687",
                  href: "tel:+919843797687",
                },
              ].map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  data-ocid={`about.team.item.${i + 1}`}
                  className="bg-background border border-border rounded-2xl p-6 card-subtle text-center"
                >
                  <div className="w-16 h-16 gradient-accent rounded-full mx-auto mb-4 flex items-center justify-center shadow-md">
                    <span className="font-display font-black text-xl text-white">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-display font-black text-lg text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mb-3">
                    {member.role}
                  </p>
                  <a
                    href={member.href}
                    data-ocid={`about.team.phone_link.${i + 1}`}
                    className="inline-flex items-center gap-2 font-body font-semibold text-secondary hover:text-secondary/80 transition-smooth text-sm"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    {member.phone}
                  </a>
                </motion.div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="gradient-accent text-white border-0 shadow-lg hover:opacity-90 transition-smooth font-body font-semibold px-10"
              data-ocid="about.cta.packages_button"
            >
              <Link to="/packages">View Our Packages →</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
