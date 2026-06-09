# Jisr App Design Analysis (from screenshots)

## Color Palette
- **Background:** Very dark navy/charcoal (#0A0F1A to #111827) — near-black with blue undertone
- **Card backgrounds:** Semi-transparent dark with glass effect (#1A2235 with opacity, border glow)
- **Primary accent:** Bright cyan/teal (#00D8FF / #00BCD4) — used for highlights, active states, icons
- **Secondary accent:** Amber/Orange (#F28C38 / #FF9800) — used for CTAs, badges, important actions
- **Text primary:** White (#FFFFFF)
- **Text secondary:** Light gray/blue-gray (#8899AA / #A0AEC0)
- **Borders:** Subtle white/cyan with low opacity (rgba(255,255,255,0.1) or rgba(0,216,255,0.2))
- **Success/positive:** Green (#4CAF50)
- **Coral/pink accent:** (#FF007B / #E8725A) — used sparingly for decorative blobs

## Visual Style
- **Glass-morphism:** Cards have frosted glass effect with backdrop-blur, semi-transparent backgrounds
- **Glow effects:** Subtle cyan and pink/magenta glow blobs in backgrounds
- **Rounded corners:** Large border-radius (16-24px) on cards
- **Shadows:** Soft colored shadows (not black — tinted with brand colors)
- **Gradients:** Subtle dark gradients on cards, linear gradients on hero sections

## Typography
- **Arabic font:** Cairo (Bold for headers, Regular for body)
- **Direction:** RTL primary (Arabic-first)
- **Hero text:** Large, bold, white
- **Section headers:** Medium weight, white
- **Body text:** Regular weight, gray/muted

## UI Patterns
- **Navigation:** Bottom tab bar with icons + labels, active state in cyan
- **Cards:** Glass cards with subtle borders, rounded, with icon badges
- **Buttons:** Rounded-full (pill shape), amber/orange for primary CTAs
- **Hero section:** Full-width with background image + dark overlay + gradient
- **Stats:** Inline with emoji/icon + number + label
- **Country cards:** Flag emoji + country name + stats (acceptance rate, members)
- **Quick actions:** Grid of rounded icon buttons with labels below

## Key Screens Observed
1. Onboarding/Welcome — dark with hero image, Arabic text, amber CTA
2. Home — hero card, quick actions grid, featured stories, community feed
3. Countries list — search bar, country cards with flags and stats
4. Stories/News feed — card-based with author, tags, likes
5. Groups/Connect — group cards with member count, join buttons
6. Hub/More — grid of feature icons (AI, CV, Quiz, Banking, etc.)
7. Profile — avatar, stats, settings list
8. Map — interactive map with resource pins
9. Country detail — detailed info with sections
