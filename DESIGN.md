# Design Brief

**Purpose**: Premium event management showcase for OMR Event Management, Chennai. Tiered package display with celebration aesthetic, transparent pricing, and clear service inclusions.

**Tone**: Editorial, celebratory, sophisticated luxury. Reference: mark1decor.com/package/ — clean tiered approach with distinctive personality, warm emotional resonance.

**Differentiation**: Tiered card grid with featured center card (Gold package), warm gradient accents on buttons/text, generous shadows and rounded corners for premium feel. Editorial serif display font (Fraunces) paired with contemporary sans-serif body (GeneralSans). Not generic SaaS—feels like a celebration brand.

## Color Palette (OKLCH)

| Token              | Light                  | Dark                   | Usage                            |
| :----------------- | :--------------------- | :--------------------- | :------------------------------- |
| Background         | 0.97 0.01 80 (cream)   | 0.15 0.01 260 (navy)   | Page background, structural base |
| Foreground         | 0.25 0.01 280 (navy)   | 0.92 0 0 (off-white)   | Body text, primary content       |
| Primary            | 0.28 0.04 260 (navy)   | 0.72 0.08 40 (tan)     | Buttons, highlights, navigation  |
| Secondary          | 0.6 0.18 40 (gold)     | 0.24 0.02 260 (slate)  | Accent gradients, feature lists  |
| Accent             | 0.65 0.2 35 (coral)    | 0.7 0.18 35 (coral)    | CTAs, highlights, active states  |
| Muted              | 0.9 0.01 80 (pale)     | 0.24 0.02 260 (slate)  | Secondary UI, disabled states    |
| Card               | 1.0 0 0 (white)        | 0.2 0.02 260 (navy)    | Package cards, elevated surfaces |
| Border             | 0.85 0.02 80 (light)   | 0.3 0.01 260 (dark)    | Card borders, dividers           |
| Destructive        | 0.55 0.22 25 (red)     | 0.65 0.19 22 (red)     | Alerts, error states             |

## Typography

| Tier     | Font              | Scale | Usage                                        |
| :------- | :---------------- | :---- | :------------------------------------------- |
| Display  | Fraunces (serif)  | 36–48 | Hero heading, package names, section titles  |
| Body     | GeneralSans       | 14–16 | Descriptions, feature lists, CTAs            |
| Mono     | GeistMono         | 12–14 | Pricing, code snippets, meta information     |

**Weight hierarchy**: Display 600–700 (bold), Body 400–500 (regular/medium), Labels 600 (bold accent).

## Structural Zones

| Zone     | Background              | Border                      | Shadow                  | Purpose                              |
| :------- | :---------------------- | :------------------------- | :---------------------- | :----------------------------------- |
| Header   | primary (navy)          | None / subtle gradient     | None                    | Navigation, company name, dark base  |
| Hero     | gradient (cream → gold) | None                       | None / subtle           | Main CTA, introduction, visual draw  |
| Cards    | card (white/dark navy)  | border (subtle)            | card-elevated (premium) | Package tiers, special packages      |
| Sections | background (cream/navy) | None / divider (muted)     | None                    | Services, content blocks             |
| Footer   | primary (navy)          | border-t                   | None                    | Contact, legal, social links         |

## Spacing & Rhythm

- **Padding**: 16px (compact), 24px (standard), 32px (generous).
- **Gaps**: 16px (card grids), 24px (section gaps), 32px (major sections).
- **Radius**: 16px (cards), 8px (inputs), full (pill buttons).
- **Line height**: 1.5 (body), 1.3 (headings), 1.6 (descriptions).

## Component Patterns

| Pattern          | Treatment                                                           |
| :--------------- | :------------------------------------------------------------------ |
| Package cards    | Elevated shadow, 16px radius, white/dark card bg, border subtle    |
| Featured card    | Larger scale, gradient accent border, elevated shadow              |
| CTAs             | Accent coral bg, gradient on hover, rounded pill, smooth transition |
| Feature lists    | Gold bullet points, compact spacing, body font, navy text          |
| Price display    | Mono font, primary color, emphasize with scale or weight           |
| Section headers  | Fraunces serif, 32–36px, navy/white text, underline gradient       |

## Motion

- **Transitions**: 0.3s cubic-bezier smooth easing (`transition-smooth`).
- **Hover**: Card lift (+4px shadow), button gradient shift, text color warm tone.
- **Entrance**: Staggered card fade-in on load, section reveal on scroll (if JS-enabled).
- **Choreography**: Decorative only, never disruptive. Focus on clarity and responsiveness.

## Responsive Breakpoints

| Breakpoint | Width  | Cards | Padding | Usage                |
| :--------- | :----- | :---- | :------ | :------------------- |
| Mobile     | <640px | 1     | 16px    | Phone, small screens |
| Tablet     | 768px  | 2–3   | 24px    | iPad, medium screens |
| Desktop    | 1024px | 5     | 32px    | Wide screens, grid   |

## Constraints

- No generic AI aesthetics: avoid purple gradients, safe blue, rainbow palettes, uniform spacing.
- Card design must reflect luxury/celebration: premium shadows, distinct elevation, generous radius.
- Typography hierarchy must be editorial (serif display + sans body), not tech-default (all sans).
- All colors token-driven OKLCH, no raw hex or rgba in component code.
- Dark mode intentionally designed (navy/cream inverted), not just inverted lightness.

## Signature Detail

**Warm gradient accents** — Buttons and text use coral-to-gold gradients (secondary + accent), reinforcing celebration/warmth. Card featured state receives subtle gradient border. Fraunces serif in hero creates editorial luxury feel. Navy header + cream body + coral accents = distinctive, memorable event brand.
