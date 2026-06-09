/**
 * Jisr Website — Dark Glass-Morphism Design
 * Matches the iOS app: dark navy bg, cyan accents, amber CTAs, glass cards, Cairo font
 * Each feature section shows the actual app screenshot beside its description
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState, useEffect } from "react";
import {
  Globe,
  Users,
  MapPin,
  BookOpen,
  MessageCircle,
  Shield,
  Heart,
  ArrowRight,
  Menu,
  X,
  Download,
  Sparkles,
  Brain,
  Calendar,
  Briefcase,
  Mic,
  GraduationCap,
  Landmark,
} from "lucide-react";

// Generated images
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663071042274/bgxCVdTDsteXxZtUsC6eya/hero_dark-F8rGtzNbdz5apQyGDYavut.webp";

// App screenshots (uploaded)
const SCREENSHOTS = {
  onboarding: "/manus-storage/ScreenshotiPhone17ProMax06-09-2026at9.49.36PM_39491679.webp",
  home: "/manus-storage/ScreenshotiPhone17ProMax06-09-2026at9.50.10PM_86c928e5.webp",
  homeHero: "/manus-storage/ScreenshotiPhone17ProMax06-09-2026at9.49.51PM_4f05e4dc.webp",
  countries: "/manus-storage/ScreenshotiPhone17ProMax06-09-2026at9.49.56PM_4ec03c3c.webp",
  countryDetail: "/manus-storage/ScreenshotiPhone17ProMax06-09-2026at9.50.17PM_24ec3e67.webp",
  stories: "/manus-storage/ScreenshotiPhone17ProMax06-09-2026at9.51.27PM_f32c3489.webp",
  groups: "/manus-storage/ScreenshotiPhone17ProMax06-09-2026at9.51.59PM_71c673c5.webp",
  map: "/manus-storage/ScreenshotiPhone17ProMax06-09-2026at9.52.09PM_fff252b5.webp",
  hub: "/manus-storage/ScreenshotiPhone17ProMax06-09-2026at9.52.16PM_ccae1644.webp",
  ai: "/manus-storage/ScreenshotiPhone17ProMax06-09-2026at9.52.24PM_2329a1ec.webp",
  cv: "/manus-storage/ScreenshotiPhone17ProMax06-09-2026at9.52.30PM_23eb82c1.webp",
  glossary: "/manus-storage/ScreenshotiPhone17ProMax06-09-2026at9.52.40PM_bfae9ff4.webp",
  events: "/manus-storage/ScreenshotiPhone17ProMax06-09-2026at9.52.49PM_81a03ced.webp",
  mentorship: "/manus-storage/ScreenshotiPhone17ProMax06-09-2026at9.52.57PM_86ffc6d0.webp",
  profile: "/manus-storage/ScreenshotiPhone17ProMax06-09-2026at9.53.05PM_68a9eddd.webp",
  marketplace: "/manus-storage/ScreenshotiPhone17ProMax06-09-2026at9.53.15PM_6161af82.webp",
  quiz: "/manus-storage/ScreenshotiPhone17ProMax06-09-2026at9.53.21PM_6bcb83a0.webp",
};

export default function Home() {
  const containerRef = useScrollReveal();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-background overflow-hidden">
      {/* Ambient glow blobs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-[#00D8FF] opacity-[0.03] blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] rounded-full bg-[#FF007B] opacity-[0.025] blur-[100px] animate-glow-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[50%] left-[40%] w-[300px] h-[300px] rounded-full bg-[#F28C38] opacity-[0.02] blur-[80px] animate-glow-pulse" style={{ animationDelay: "3s" }} />
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00D8FF] to-[#0088AA] flex items-center justify-center shadow-lg shadow-[#00D8FF]/20">
              <span className="text-white font-bold text-sm">جسر</span>
            </div>
            <span className="text-xl font-bold text-foreground">Jisr</span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-[#00D8FF] transition-colors">Features</a>
            <a href="#countries" className="text-sm font-medium text-muted-foreground hover:text-[#00D8FF] transition-colors">Countries</a>
            <a href="#community" className="text-sm font-medium text-muted-foreground hover:text-[#00D8FF] transition-colors">Community</a>
            <a href="#tools" className="text-sm font-medium text-muted-foreground hover:text-[#00D8FF] transition-colors">Tools</a>
            <a
              href="#download"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#F28C38] to-[#E8725A] text-white text-sm font-bold hover:opacity-90 transition-all active:scale-[0.97] shadow-lg shadow-[#F28C38]/20"
            >
              <Download className="w-4 h-4" />
              Download
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-4 pb-6 pt-2 animate-fade-up">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-base font-medium text-foreground" onClick={() => setMobileMenuOpen(false)}>Features</a>
              <a href="#countries" className="text-base font-medium text-foreground" onClick={() => setMobileMenuOpen(false)}>Countries</a>
              <a href="#community" className="text-base font-medium text-foreground" onClick={() => setMobileMenuOpen(false)}>Community</a>
              <a href="#tools" className="text-base font-medium text-foreground" onClick={() => setMobileMenuOpen(false)}>Tools</a>
              <a
                href="#download"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#F28C38] to-[#E8725A] text-white text-sm font-bold"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Download className="w-4 h-4" />
                Download App
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMG}
            alt="Illuminated bridge at night"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-transparent" />
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="reveal">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00D8FF]/10 border border-[#00D8FF]/20 mb-6">
                  <Sparkles className="w-3.5 h-3.5 text-[#00D8FF]" />
                  <span className="text-xs font-semibold text-[#00D8FF] tracking-wide">Connecting Hearts, Building Futures</span>
                </div>
              </div>
              <h1 className="reveal text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6">
                Your Bridge to a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D8FF] to-[#00A8CC]">New Beginning</span>
              </h1>
              <p className="reveal text-lg text-white/70 leading-relaxed mb-3 max-w-lg">
                Jisr empowers refugees and asylum seekers with information, community, and resources to build a new life with confidence.
              </p>
              <p className="reveal text-lg text-white/50 leading-relaxed mb-8 max-w-lg" dir="rtl">
                جسر يمكّن اللاجئين وطالبي اللجوء بالمعلومات والمجتمع والموارد لبناء حياة جديدة بثقة.
              </p>
              <div className="reveal flex flex-wrap gap-4">
                <a
                  href="#download"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#F28C38] to-[#E8725A] text-white font-bold text-base hover:shadow-lg hover:shadow-[#F28C38]/30 transition-all active:scale-[0.97]"
                >
                  <Download className="w-5 h-5" />
                  Download Free
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-white font-semibold text-base hover:bg-white/5 transition-all"
                >
                  Explore Features
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Stats */}
              <div className="reveal mt-12 flex gap-8">
                <div>
                  <div className="text-2xl font-bold text-[#00D8FF]">8+</div>
                  <div className="text-xs text-muted-foreground mt-0.5">Countries</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#F28C38]">15+</div>
                  <div className="text-xs text-muted-foreground mt-0.5">Features</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">AR/EN</div>
                  <div className="text-xs text-muted-foreground mt-0.5">Bilingual</div>
                </div>
              </div>
            </div>

            {/* Hero phone mockup */}
            <div className="reveal hidden lg:flex justify-center">
              <div className="phone-frame animate-float">
                <img src={SCREENSHOTS.home} alt="Jisr app home screen" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section id="features" className="relative py-24 z-10">
        <div className="container">
          <div className="reveal text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#00D8FF] text-sm font-bold tracking-wider uppercase">Everything You Need</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mt-3 mb-4">
              A Complete Support Ecosystem
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From asylum information to community connections, Jisr provides comprehensive tools for every step of your journey.
            </p>
          </div>

          {/* Quick feature grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { icon: <Globe className="w-5 h-5" />, label: "Asylum Info", color: "#00D8FF" },
              { icon: <MapPin className="w-5 h-5" />, label: "Resource Map", color: "#4CAF50" },
              { icon: <Users className="w-5 h-5" />, label: "Support Groups", color: "#F28C38" },
              { icon: <BookOpen className="w-5 h-5" />, label: "Stories", color: "#E8725A" },
              { icon: <Brain className="w-5 h-5" />, label: "AI Assistant", color: "#00D8FF" },
              { icon: <Briefcase className="w-5 h-5" />, label: "CV Builder", color: "#9C27B0" },
              { icon: <Calendar className="w-5 h-5" />, label: "Events", color: "#F28C38" },
              { icon: <Shield className="w-5 h-5" />, label: "Mentorship", color: "#4CAF50" },
            ].map((item, i) => (
              <div
                key={item.label}
                className="reveal glass-card glass-card-hover p-5 flex flex-col items-center gap-3 text-center"
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${item.color}15`, color: item.color }}
                >
                  {item.icon}
                </div>
                <span className="text-sm font-semibold text-white">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Section: Countries */}
      <section id="countries" className="relative py-24 z-10">
        <div className="container">
          <FeatureRow
            direction="left"
            screenshot={SCREENSHOTS.countries}
            screenshot2={SCREENSHOTS.countryDetail}
            badge="Country Guides"
            badgeColor="#00D8FF"
            title="Asylum Information for 8+ Countries"
            description="Comprehensive guides including acceptance rates, required documents, processing times, and local resources. Get detailed information about Sweden, Germany, Netherlands, Canada, UK, France, Norway, and Denmark."
            features={[
              "Acceptance rates and processing times",
              "Required documents checklist",
              "Local resources and contacts",
              "Community members in each country",
            ]}
          />
        </div>
      </section>

      {/* Feature Section: Community Stories */}
      <section id="community" className="relative py-24 z-10">
        <div className="container">
          <FeatureRow
            direction="right"
            screenshot={SCREENSHOTS.stories}
            screenshot2={SCREENSHOTS.groups}
            badge="Community"
            badgeColor="#F28C38"
            title="Stories & Support Groups"
            description="Share your journey, read others' experiences, and connect with support groups. Every story helps someone else, and every connection builds strength."
            features={[
              "Share success stories and challenges",
              "Join topic-based support groups",
              "Audio rooms for live conversations",
              "Private messaging and group chats",
            ]}
          />
        </div>
      </section>

      {/* Feature Section: Resource Map */}
      <section className="relative py-24 z-10">
        <div className="container">
          <FeatureRow
            direction="left"
            screenshot={SCREENSHOTS.map}
            screenshot2={SCREENSHOTS.hub}
            badge="Resources"
            badgeColor="#4CAF50"
            title="Interactive Resource Map & Hub"
            description="Find essential services near you — legal aid, healthcare, housing, food banks, and community support centers. All organized by category and location on an interactive map."
            features={[
              "Legal aid and lawyers nearby",
              "Healthcare and mental health services",
              "Housing assistance programs",
              "Food banks and community support",
            ]}
          />
        </div>
      </section>

      {/* Feature Section: AI & Tools */}
      <section id="tools" className="relative py-24 z-10">
        <div className="container">
          <FeatureRow
            direction="right"
            screenshot={SCREENSHOTS.ai}
            screenshot2={SCREENSHOTS.cv}
            badge="Smart Tools"
            badgeColor="#9C27B0"
            title="AI Assistant & Career Tools"
            description="Get instant answers about asylum procedures, build professional CVs, prepare for interviews, and understand legal documents — all powered by AI and designed for your needs."
            features={[
              "AI-powered asylum guidance",
              "Professional CV builder",
              "Interview simulator",
              "Document explainer",
            ]}
          />
        </div>
      </section>

      {/* Feature Section: More Tools */}
      <section className="relative py-24 z-10">
        <div className="container">
          <FeatureRow
            direction="left"
            screenshot={SCREENSHOTS.glossary}
            screenshot2={SCREENSHOTS.events}
            badge="More Features"
            badgeColor="#E8725A"
            title="Glossary, Events & Beyond"
            description="Understand legal terminology in both Arabic and English, discover local events and workshops, access banking guides, and participate in weekly challenges to earn points."
            features={[
              "Bilingual asylum glossary",
              "Local events and workshops",
              "Banking and finance guides",
              "Weekly challenges and rewards",
            ]}
          />
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="relative py-28 z-10">
        <div className="container">
          <div className="glass-card p-8 md:p-14 relative overflow-hidden">
            {/* Decorative glows inside card */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#00D8FF] opacity-[0.06] blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[#F28C38] opacity-[0.06] blur-[60px]" />

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="reveal">
                <span className="text-[#00D8FF] text-sm font-bold tracking-wider uppercase">Download Now</span>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-white mt-3 mb-4">
                  Start Your Journey with Jisr Today
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-3">
                  Available in Arabic and English. Free forever. Your companion for every step of the way.
                </p>
                <p className="text-muted-foreground/70 text-lg leading-relaxed mb-8" dir="rtl">
                  متوفر بالعربية والإنجليزية. مجاني للأبد. رفيقك في كل خطوة.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white text-[#0A0F1A] font-semibold hover:bg-white/90 transition-all active:scale-[0.97] shadow-lg"
                  >
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-[10px] opacity-60 leading-none">Download on the</div>
                      <div className="text-base font-bold leading-tight">App Store</div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/15 transition-all active:scale-[0.97]"
                  >
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-[10px] opacity-60 leading-none">Get it on</div>
                      <div className="text-base font-bold leading-tight">Google Play</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Phone mockups */}
              <div className="reveal hidden lg:flex justify-center items-center gap-4">
                <div className="phone-frame w-[200px] -rotate-6">
                  <img src={SCREENSHOTS.onboarding} alt="Jisr onboarding" className="w-full h-auto" />
                </div>
                <div className="phone-frame w-[220px] translate-y-[-20px]">
                  <img src={SCREENSHOTS.homeHero} alt="Jisr home" className="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About / Mission */}
      <section className="relative py-24 z-10">
        <div className="container">
          <div className="reveal max-w-3xl mx-auto text-center">
            <span className="text-[#00D8FF] text-sm font-bold tracking-wider uppercase">Our Mission</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mt-3 mb-6">
              Building Bridges, Not Walls
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Jisr (جسر) means "Bridge" in Arabic. We believe every person deserves access to accurate information, a supportive community, and tools to build a dignified life — regardless of where they come from.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our platform is built by and for the community, with a commitment to privacy, accuracy, and empowerment.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              {[
                { icon: <Sparkles className="w-5 h-5" />, label: "Free Forever", color: "#F28C38" },
                { icon: <Shield className="w-5 h-5" />, label: "Privacy First", color: "#00D8FF" },
                { icon: <Globe className="w-5 h-5" />, label: "Bilingual (AR/EN)", color: "#4CAF50" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <span style={{ color: item.color }}>{item.icon}</span>
                  <span className="font-semibold text-white text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00D8FF] to-[#0088AA] flex items-center justify-center">
                  <span className="text-white font-bold text-xs">جسر</span>
                </div>
                <span className="text-lg font-bold text-white">Jisr</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                Connecting Hearts, Building Futures. نربط القلوب ونبني المستقبل.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3 text-sm">Features</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>Asylum Information</li>
                <li>Resource Map</li>
                <li>Community Stories</li>
                <li>AI Assistant</li>
                <li>CV Builder</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3 text-sm">Legal</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Disclaimer</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-6 text-center">
            <p className="text-muted-foreground/60 text-sm">
              &copy; {new Date().getFullYear()} Jisr. All rights reserved. This app does not facilitate illegal border crossings or irregular migration.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* FeatureRow: Screenshot(s) + description side by side */
function FeatureRow({
  direction,
  screenshot,
  screenshot2,
  badge,
  badgeColor,
  title,
  description,
  features,
}: {
  direction: "left" | "right";
  screenshot: string;
  screenshot2?: string;
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  features: string[];
}) {
  const isLeft = direction === "left";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Screenshots */}
      <div className={`${isLeft ? "order-1" : "order-1 lg:order-2"} flex justify-center items-end gap-4`}>
        <div className={`${isLeft ? "reveal-left" : "reveal-right"} phone-frame`}>
          <img src={screenshot} alt={title} className="w-full h-auto" />
        </div>
        {screenshot2 && (
          <div className={`${isLeft ? "reveal-left" : "reveal-right"} phone-frame w-[220px] sm:w-[240px] translate-y-6 hidden sm:block`} style={{ transitionDelay: "0.15s" }}>
            <img src={screenshot2} alt={`${title} detail`} className="w-full h-auto" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className={`${isLeft ? "order-2" : "order-2 lg:order-1"}`}>
        <div className="reveal">
          <span
            className="text-sm font-bold tracking-wider uppercase"
            style={{ color: badgeColor }}
          >
            {badge}
          </span>
          <h3 className="text-2xl lg:text-3xl font-extrabold text-white mt-3 mb-4">
            {title}
          </h3>
          <p className="text-muted-foreground text-base leading-relaxed mb-6">
            {description}
          </p>
          <ul className="space-y-3">
            {features.map((feat, i) => (
              <li key={i} className="flex items-start gap-3">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 shrink-0"
                  style={{ backgroundColor: `${badgeColor}20` }}
                >
                  <ArrowRight className="w-3 h-3" style={{ color: badgeColor }} />
                </div>
                <span className="text-white/80 text-sm">{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
