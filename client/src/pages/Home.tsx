/**
 * Jisr Website — "Warm Cartographic" Design
 * Design: Humanitarian storytelling with warm teal/amber palette
 * Typography: Playfair Display (display) + IBM Plex Sans (body) + Cairo (Arabic)
 * Signature: Dotted journey paths, rounded photo masks, empowering imagery
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
  Star,
  Sparkles,
  Brain,
  Calendar,
  Briefcase,
} from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663071042274/bgxCVdTDsteXxZtUsC6eya/hero_jisr-3xgiTpBscYpJbCV4E5dFif.webp";
const COMMUNITY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663071042274/bgxCVdTDsteXxZtUsC6eya/community_stories-i5mEZGZ5eztjgEfLh9e5jY.webp";
const RESOURCE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663071042274/bgxCVdTDsteXxZtUsC6eya/resource_map-D6SZHeuHYHYqHtG4b56Wn9.webp";
const COUNTRIES_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663071042274/bgxCVdTDsteXxZtUsC6eya/countries_info-8Nwmfd5cbPCrY8AkfZgib3.webp";
const APP_MOCKUP_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663071042274/bgxCVdTDsteXxZtUsC6eya/app_mockup-VrQ8k5xAzQjwDVDx74JxTq.webp";

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
    <div ref={containerRef} className="min-h-screen bg-[var(--background)]">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[var(--background)]/95 backdrop-blur-md shadow-sm border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-[var(--primary)] flex items-center justify-center">
              <span className="text-white font-bold text-sm" style={{ fontFamily: "var(--font-arabic)" }}>جسر</span>
            </div>
            <span className="text-xl font-bold text-foreground" style={{ fontFamily: "var(--font-display)" }}>
              Jisr
            </span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#countries" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Countries</a>
            <a href="#community" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Community</a>
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a
              href="#download"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--primary)] text-white text-sm font-semibold hover:opacity-90 transition-all active:scale-[0.97]"
            >
              <Download className="w-4 h-4" />
              Download App
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
          <div className="md:hidden bg-[var(--background)] border-b border-border px-4 pb-6 pt-2 animate-fade-up">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-base font-medium text-foreground" onClick={() => setMobileMenuOpen(false)}>Features</a>
              <a href="#countries" className="text-base font-medium text-foreground" onClick={() => setMobileMenuOpen(false)}>Countries</a>
              <a href="#community" className="text-base font-medium text-foreground" onClick={() => setMobileMenuOpen(false)}>Community</a>
              <a href="#about" className="text-base font-medium text-foreground" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a
                href="#download"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[var(--primary)] text-white text-sm font-semibold"
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
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Diverse people walking together on a bridge at sunset"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B4D5C]/85 via-[#1B4D5C]/60 to-transparent" />
        </div>

        <div className="container relative z-10 pt-24 pb-16">
          <div className="max-w-2xl">
            <div className="reveal" style={{ animationDelay: "0.1s" }}>
              <p className="text-amber-300 text-sm font-semibold tracking-wider uppercase mb-4" style={{ fontFamily: "var(--font-body)" }}>
                Connecting Hearts, Building Futures
              </p>
            </div>
            <h1 className="reveal text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6" style={{ fontFamily: "var(--font-display)", animationDelay: "0.2s" }}>
              Your Bridge to a<br />
              <span className="text-amber-300">New Beginning</span>
            </h1>
            <p className="reveal text-lg text-white/85 leading-relaxed mb-4 max-w-lg" style={{ fontFamily: "var(--font-body)", animationDelay: "0.3s" }}>
              Jisr empowers refugees and asylum seekers with the information, community, and resources they need to build a new life with confidence.
            </p>
            <p className="reveal text-lg text-white/70 leading-relaxed mb-8 max-w-lg" style={{ fontFamily: "var(--font-arabic)", animationDelay: "0.35s" }} dir="rtl">
              جسر يمكّن اللاجئين وطالبي اللجوء بالمعلومات والمجتمع والموارد التي يحتاجونها لبناء حياة جديدة بثقة.
            </p>
            <div className="reveal flex flex-wrap gap-4" style={{ animationDelay: "0.4s" }}>
              <a
                href="#download"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-amber-400 text-[#1B4D5C] font-bold text-base hover:bg-amber-300 transition-all active:scale-[0.97] shadow-lg"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <Download className="w-5 h-5" />
                Download Free
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-white/40 text-white font-semibold text-base hover:bg-white/10 transition-all"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Decorative wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,40 C360,80 720,0 1440,40 L1440,80 L0,80 Z" fill="var(--background)" />
          </svg>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-[var(--background)]">
        <div className="container">
          <div className="reveal grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
            <StatItem number="8+" label="Countries Covered" />
            <StatItem number="15+" label="Key Features" />
            <StatItem number="2" label="Languages Supported" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 lg:py-28">
        <div className="container">
          <div className="reveal text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-[var(--accent)] tracking-wider uppercase mb-3" style={{ fontFamily: "var(--font-body)" }}>
              Everything You Need
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-display)" }}>
              A Complete Support Ecosystem
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
              From asylum information to community connections, Jisr provides comprehensive tools designed for every step of your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Globe className="w-6 h-6" />}
              title="Asylum Information"
              description="Detailed guides for 8+ countries including acceptance rates, procedures, and requirements."
              delay={0}
            />
            <FeatureCard
              icon={<MapPin className="w-6 h-6" />}
              title="Resource Map"
              description="Find legal aid, health services, housing, food banks, and support centers near you."
              delay={1}
            />
            <FeatureCard
              icon={<Users className="w-6 h-6" />}
              title="Support Groups"
              description="Join community groups, connect with others who share your experience, and find solidarity."
              delay={2}
            />
            <FeatureCard
              icon={<BookOpen className="w-6 h-6" />}
              title="Community Stories"
              description="Read and share real experiences — success stories, challenges, and practical advice."
              delay={3}
            />
            <FeatureCard
              icon={<Brain className="w-6 h-6" />}
              title="AI Assistant"
              description="Get instant answers about asylum procedures, document explanations, and guidance."
              delay={4}
            />
            <FeatureCard
              icon={<MessageCircle className="w-6 h-6" />}
              title="Asylum Glossary"
              description="Understand legal terms in both Arabic and English with clear, simple explanations."
              delay={5}
            />
            <FeatureCard
              icon={<Briefcase className="w-6 h-6" />}
              title="CV Builder"
              description="Create professional resumes tailored for the job market in your destination country."
              delay={6}
            />
            <FeatureCard
              icon={<Calendar className="w-6 h-6" />}
              title="Events & Activities"
              description="Discover local events, workshops, and community gatherings to help you integrate."
              delay={7}
            />
            <FeatureCard
              icon={<Shield className="w-6 h-6" />}
              title="Mentorship Program"
              description="Connect with mentors who have navigated the asylum process and can guide you."
              delay={8}
            />
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section id="countries" className="py-20 lg:py-28 bg-[var(--primary)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <p className="text-amber-300 text-sm font-semibold tracking-wider uppercase mb-3" style={{ fontFamily: "var(--font-body)" }}>
                Country Guides
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Information for 8+ Destination Countries
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-8" style={{ fontFamily: "var(--font-body)" }}>
                Comprehensive asylum information including acceptance rates, required documents, processing times, and local resources for each country.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {["🇸🇪 Sweden", "🇩🇪 Germany", "🇳🇱 Netherlands", "🇨🇦 Canada", "🇬🇧 UK", "🇫🇷 France", "🇳🇴 Norway", "🇩🇰 Denmark"].map((country) => (
                  <div
                    key={country}
                    className="px-3 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white text-sm font-medium text-center backdrop-blur-sm"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {country}
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal" style={{ animationDelay: "0.2s" }}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={COUNTRIES_IMG}
                  alt="Country flags arranged on a table with a compass and globe"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B4D5C]/40 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={COMMUNITY_IMG}
                  alt="Diverse group of people sharing stories in a community center"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="reveal order-1 lg:order-2" style={{ animationDelay: "0.2s" }}>
              <p className="text-sm font-semibold text-[var(--accent)] tracking-wider uppercase mb-3" style={{ fontFamily: "var(--font-body)" }}>
                Community Stories
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6" style={{ fontFamily: "var(--font-display)" }}>
                You Are Not Alone on This Journey
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6" style={{ fontFamily: "var(--font-body)" }}>
                Share your story, read others' experiences, and find strength in community. Every journey matters, and every voice helps someone else.
              </p>
              <ul className="space-y-4 mb-8">
                <ListItem text="Share success stories and inspire others" />
                <ListItem text="Get practical advice from those who've been there" />
                <ListItem text="Connect with support groups in your area" />
                <ListItem text="Join audio rooms for real-time conversations" />
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Map Section */}
      <section className="py-20 lg:py-28 bg-secondary/50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <p className="text-sm font-semibold text-[var(--accent)] tracking-wider uppercase mb-3" style={{ fontFamily: "var(--font-body)" }}>
                Resource Map
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Find Help Near You
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6" style={{ fontFamily: "var(--font-body)" }}>
                Our interactive map connects you with essential services — legal aid, healthcare, housing assistance, food resources, and community support — all in one place.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { icon: <Shield className="w-4 h-4" />, label: "Legal Aid" },
                  { icon: <Heart className="w-4 h-4" />, label: "Healthcare" },
                  { icon: <MapPin className="w-4 h-4" />, label: "Housing" },
                  { icon: <Sparkles className="w-4 h-4" />, label: "Food Banks" },
                  { icon: <Users className="w-4 h-4" />, label: "Support" },
                  { icon: <BookOpen className="w-4 h-4" />, label: "Education" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-white border border-border text-sm font-medium text-foreground shadow-sm"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    <span className="text-[var(--primary)]">{item.icon}</span>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal" style={{ animationDelay: "0.2s" }}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={RESOURCE_IMG}
                  alt="Aerial view of a city with connected resource points"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Preview / Download Section */}
      <section id="download" className="py-20 lg:py-28 bg-[var(--primary)] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-teal-300/10 blur-3xl" />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal text-center lg:text-left">
              <p className="text-amber-300 text-sm font-semibold tracking-wider uppercase mb-3" style={{ fontFamily: "var(--font-body)" }}>
                Download Now
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Start Your Journey with Jisr Today
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)" }}>
                Available in Arabic and English. Free to download. Your companion for every step of the way.
              </p>
              <p className="text-white/60 text-lg leading-relaxed mb-8" style={{ fontFamily: "var(--font-arabic)" }} dir="rtl">
                متوفر بالعربية والإنجليزية. مجاني للتحميل. رفيقك في كل خطوة.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a
                  href="#"
                  className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-white text-[#1B4D5C] font-semibold hover:bg-white/90 transition-all active:scale-[0.97] shadow-lg"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-70">Download on the</div>
                    <div className="text-base font-bold -mt-0.5">App Store</div>
                  </div>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-white/10 border border-white/30 text-white font-semibold hover:bg-white/20 transition-all active:scale-[0.97]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-70">Get it on</div>
                    <div className="text-base font-bold -mt-0.5">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="reveal flex justify-center" style={{ animationDelay: "0.2s" }}>
              <div className="relative w-64 sm:w-72">
                <img
                  src={APP_MOCKUP_IMG}
                  alt="Jisr app on iPhone"
                  className="w-full h-auto rounded-3xl shadow-2xl animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About / Mission Section */}
      <section id="about" className="py-20 lg:py-28">
        <div className="container">
          <div className="reveal max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-[var(--accent)] tracking-wider uppercase mb-3" style={{ fontFamily: "var(--font-body)" }}>
              Our Mission
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Building Bridges, Not Walls
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)" }}>
              Jisr (جسر) means "Bridge" in Arabic. We believe that every person deserves access to accurate information, a supportive community, and the tools to build a dignified life — regardless of where they come from or where they're going.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8" style={{ fontFamily: "var(--font-body)" }}>
              Our platform is built by and for the community, with a commitment to privacy, accuracy, and empowerment. We do not facilitate illegal activities — we provide legal information and connect people with legitimate resources.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <div className="flex items-center gap-2 text-foreground">
                <Star className="w-5 h-5 text-amber-500" />
                <span className="font-medium" style={{ fontFamily: "var(--font-body)" }}>Free Forever</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <Shield className="w-5 h-5 text-[var(--primary)]" />
                <span className="font-medium" style={{ fontFamily: "var(--font-body)" }}>Privacy First</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <Globe className="w-5 h-5 text-[var(--primary)]" />
                <span className="font-medium" style={{ fontFamily: "var(--font-body)" }}>Bilingual (AR/EN)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[var(--primary)] text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-white font-bold text-xs" style={{ fontFamily: "var(--font-arabic)" }}>جسر</span>
                </div>
                <span className="text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>Jisr</span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                Connecting Hearts, Building Futures.<br />
                نربط القلوب ونبني المستقبل.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3 text-sm" style={{ fontFamily: "var(--font-body)" }}>Features</h4>
              <ul className="space-y-2 text-white/70 text-sm" style={{ fontFamily: "var(--font-body)" }}>
                <li>Asylum Information</li>
                <li>Resource Map</li>
                <li>Community Stories</li>
                <li>AI Assistant</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3 text-sm" style={{ fontFamily: "var(--font-body)" }}>Legal</h4>
              <ul className="space-y-2 text-white/70 text-sm" style={{ fontFamily: "var(--font-body)" }}>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Disclaimer</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-6 text-center">
            <p className="text-white/50 text-sm" style={{ fontFamily: "var(--font-body)" }}>
              &copy; {new Date().getFullYear()} Jisr. All rights reserved. This app does not facilitate illegal border crossings or irregular migration.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* Sub-components */

function StatItem({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-3xl lg:text-4xl font-bold text-[var(--primary)]" style={{ fontFamily: "var(--font-display)" }}>
        {number}
      </span>
      <span className="text-muted-foreground text-sm mt-1" style={{ fontFamily: "var(--font-body)" }}>
        {label}
      </span>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}) {
  return (
    <div
      className="reveal group p-6 rounded-xl bg-white border border-border hover:border-[var(--primary)]/30 hover:shadow-lg transition-all duration-300"
      style={{ animationDelay: `${delay * 0.08}s` }}
    >
      <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mb-4 group-hover:bg-[var(--primary)] group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2" style={{ fontFamily: "var(--font-body)" }}>
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
        {description}
      </p>
    </div>
  );
}

function ListItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <div className="w-5 h-5 rounded-full bg-[var(--accent)]/20 flex items-center justify-center mt-0.5 shrink-0">
        <ArrowRight className="w-3 h-3 text-[var(--accent)]" />
      </div>
      <span className="text-muted-foreground" style={{ fontFamily: "var(--font-body)" }}>{text}</span>
    </li>
  );
}
