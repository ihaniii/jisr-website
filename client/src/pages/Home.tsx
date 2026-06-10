/**
 * Jisr Website — Dark Glass-Morphism Design
 * Matches the iOS app: dark navy bg, cyan accents, amber CTAs, glass cards, Cairo font
 * Each feature section shows the actual app screenshot beside its description
 * Multi-language: AR, EN, SV, DE, NL, FR, NO, DA
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";
import {
  Shield,
  ArrowRight,
  Menu,
  X,
  Download,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import {
  AsylumIcon,
  MapIcon,
  GroupsIcon,
  StoriesIcon,
  AIIcon,
  CVIcon,
  EventsIcon,
  MentorshipIcon,
  GlossaryIcon,
  InterviewIcon,
  DocumentIcon,
  BankingIcon,
  CalculatorIcon,
  NewsIcon,
  FlatshareIcon,
  QuizIcon,
  MessagesIcon,
  OrgsIcon,
  MarketplaceIcon,
  PointsIcon,
  SupportIcon,
} from "@/components/AppIcons";

// Import all images so Vite includes them in the build
import logoImg from "../../../client/public/pasted_file_OLzbsV_image.png";
import onboardingImg from "../../../client/public/ScreenshotiPhone17ProMax06-09-2026at9.49.36PM.webp";
import homeImg from "../../../client/public/ScreenshotiPhone17ProMax06-09-2026at9.49.51PM.webp";
import homeHeroImg from "../../../client/public/ScreenshotiPhone17ProMax06-09-2026at9.49.56PM.webp";
import countriesImg from "../../../client/public/ScreenshotiPhone17ProMax06-09-2026at9.50.10PM.webp";
import countryDetailImg from "../../../client/public/ScreenshotiPhone17ProMax06-09-2026at9.50.17PM.webp";
import storiesImg from "../../../client/public/ScreenshotiPhone17ProMax06-09-2026at9.51.27PM.webp";
import groupsImg from "../../../client/public/ScreenshotiPhone17ProMax06-09-2026at9.51.59PM.webp";
import mapImg from "../../../client/public/ScreenshotiPhone17ProMax06-09-2026at9.52.09PM.webp";
import hubImg from "../../../client/public/ScreenshotiPhone17ProMax06-09-2026at9.52.16PM.webp";
import aiImg from "../../../client/public/ScreenshotiPhone17ProMax06-09-2026at9.52.24PM.webp";
import cvImg from "../../../client/public/ScreenshotiPhone17ProMax06-09-2026at9.52.30PM.webp";
import glossaryImg from "../../../client/public/ScreenshotiPhone17ProMax06-09-2026at9.52.40PM.webp";
import eventsImg from "../../../client/public/ScreenshotiPhone17ProMax06-09-2026at9.52.49PM.webp";
import mentorshipImg from "../../../client/public/ScreenshotiPhone17ProMax06-09-2026at9.52.57PM.webp";
import profileImg from "../../../client/public/ScreenshotiPhone17ProMax06-09-2026at9.53.05PM.webp";
import marketplaceImg from "../../../client/public/ScreenshotiPhone17ProMax06-09-2026at9.53.15PM.webp";
import quizImg from "../../../client/public/ScreenshotiPhone17ProMax06-09-2026at9.53.21PM.webp";

// Generated images
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663071042274/bgxCVdTDsteXxZtUsC6eya/hero_dark-F8rGtzNbdz5apQyGDYavut.webp";
const APP_LOGO = logoImg;

// App screenshots (uploaded)
const SCREENSHOTS = {
  onboarding: onboardingImg,
  home: homeImg,
  homeHero: homeHeroImg,
  countries: countriesImg,
  countryDetail: countryDetailImg,
  stories: storiesImg,
  groups: groupsImg,
  map: mapImg,
  hub: hubImg,
  ai: aiImg,
  cv: cvImg,
  glossary: glossaryImg,
  events: eventsImg,
  mentorship: mentorshipImg,
  profile: profileImg,
  marketplace: marketplaceImg,
  quiz: quizImg,
};

export default function Home() {
  const containerRef = useScrollReveal();
  const { t, lang, setLang, dir, languages } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close lang menu on outside click
  useEffect(() => {
    const handleClick = () => setLangMenuOpen(false);
    if (langMenuOpen) {
      setTimeout(() => document.addEventListener("click", handleClick), 0);
      return () => document.removeEventListener("click", handleClick);
    }
  }, [langMenuOpen]);

  const currentLang = languages.find((l) => l.code === lang);

  return (
    <div ref={containerRef} dir={dir} className="min-h-screen bg-background overflow-hidden">
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
          <div className="flex items-center gap-3">
            {/* Logo with badge-style design like Netflix/Facebook */}
            <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-[#00D8FF]/30 bg-gradient-to-r from-[#00D8FF]/10 to-[#F28C38]/10 backdrop-blur-sm hover:border-[#00D8FF]/60 transition-all duration-300">
              <img src={APP_LOGO} alt="Jisr logo" className="w-8 h-8 rounded-full shadow-lg shadow-[#00D8FF]/30" />
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white leading-none">Jisr</span>
                <span className="text-xs font-semibold text-[#00D8FF] leading-none">جسر</span>
              </div>
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-[#00D8FF] transition-colors">{t.nav.features}</a>
            <a href="#countries" className="text-sm font-medium text-muted-foreground hover:text-[#00D8FF] transition-colors">{t.nav.countries}</a>
            <a href="#community" className="text-sm font-medium text-muted-foreground hover:text-[#00D8FF] transition-colors">{t.nav.community}</a>
            <a href="#tools" className="text-sm font-medium text-muted-foreground hover:text-[#00D8FF] transition-colors">{t.nav.tools}</a>

            {/* Language switcher */}
            <div className="relative">
              <button
                onClick={(e) => { e.stopPropagation(); setLangMenuOpen(!langMenuOpen); }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-sm text-muted-foreground hover:text-foreground hover:border-[#00D8FF]/40 transition-all"
              >
                <span>{currentLang?.flag}</span>
                <span className="hidden lg:inline">{currentLang?.label}</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {langMenuOpen && (
                <div className="absolute top-full mt-2 end-0 w-44 glass-card py-2 shadow-xl border border-border z-50">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code); setLangMenuOpen(false); }}
                      className={`w-full text-start px-4 py-2 text-sm flex items-center gap-2.5 hover:bg-white/5 transition-colors ${
                        l.code === lang ? "text-[#00D8FF] font-semibold" : "text-muted-foreground"
                      }`}
                    >
                      <span>{l.flag}</span>
                      <span>{l.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#download"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#F28C38] to-[#E8725A] text-white text-sm font-bold hover:opacity-90 transition-all active:scale-[0.97] shadow-lg shadow-[#F28C38]/20"
            >
              <Download className="w-4 h-4" />
              {t.nav.download}
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
              <a href="#features" className="text-base font-medium text-foreground" onClick={() => setMobileMenuOpen(false)}>{t.nav.features}</a>
              <a href="#countries" className="text-base font-medium text-foreground" onClick={() => setMobileMenuOpen(false)}>{t.nav.countries}</a>
              <a href="#community" className="text-base font-medium text-foreground" onClick={() => setMobileMenuOpen(false)}>{t.nav.community}</a>
              <a href="#tools" className="text-base font-medium text-foreground" onClick={() => setMobileMenuOpen(false)}>{t.nav.tools}</a>
              {/* Mobile language selector */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => { setLang(l.code); setMobileMenuOpen(false); }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                      l.code === lang
                        ? "border-[#00D8FF] text-[#00D8FF] bg-[#00D8FF]/10"
                        : "border-border text-muted-foreground hover:border-white/30"
                    }`}
                  >
                    {l.flag} {l.label}
                  </button>
                ))}
              </div>
              <a
                href="#download"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#F28C38] to-[#E8725A] text-white text-sm font-bold"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Download className="w-4 h-4" />
                {t.nav.download}
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
          {/* Opening Message - Premium Animated Design */}
          <div className="reveal mb-24 max-w-5xl mx-auto">
            <style>{`
              @keyframes slideInUp {
                from { opacity: 0; transform: translateY(30px); }
                to { opacity: 1; transform: translateY(0); }
              }
              @keyframes fadeInScale {
                from { opacity: 0; transform: scale(0.95); }
                to { opacity: 1; transform: scale(1); }
              }
              @keyframes shimmer {
                0%, 100% { opacity: 0.5; }
                50% { opacity: 1; }
              }
              .opening-card {
                animation: fadeInScale 0.8s ease-out;
              }
              .opening-line {
                animation: slideInUp 0.6s ease-out forwards;
              }
              .opening-line:nth-child(1) { animation-delay: 0.1s; }
              .opening-line:nth-child(2) { animation-delay: 0.3s; }
              .opening-line:nth-child(3) { animation-delay: 0.5s; }
              .opening-line:nth-child(4) { animation-delay: 0.7s; }
            `}</style>
            
            <div className="opening-card relative group">
              {/* Animated gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00D8FF]/30 via-[#F28C38]/20 to-[#00D8FF]/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Glass card background */}
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-8 md:px-12 py-10 md:py-14 overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#00D8FF]/5 rounded-full blur-3xl -z-10" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F28C38]/5 rounded-full blur-3xl -z-10" />
                
                {lang === 'ar' ? (
                  <div className="space-y-5 text-right" dir="rtl">
                    <p className="opening-line text-lg md:text-xl text-white/85 leading-relaxed font-light">
                      {t.opening.line1}
                    </p>
                    
                    <p className="opening-line text-2xl md:text-3xl font-bold bg-gradient-to-l from-[#00D8FF] to-[#00A8CC] bg-clip-text text-transparent">
                      {t.opening.line2}
                    </p>
                    
                    <p className="opening-line text-lg md:text-xl text-white/85 leading-relaxed font-light">
                      {t.opening.line3}
                    </p>
                    
                    <p className="opening-line text-lg md:text-xl font-semibold bg-gradient-to-l from-[#F28C38] to-[#FFB347] bg-clip-text text-transparent italic">
                      {t.opening.line4}
                    </p>
                  </div>
                ) : (
                  <div className="space-y-5 text-left">
                    <p className="opening-line text-lg md:text-xl text-white/85 leading-relaxed font-light">
                      {t.opening.line1}
                    </p>
                    
                    <p className="opening-line text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#00D8FF] to-[#00A8CC] bg-clip-text text-transparent">
                      This is where Jisr comes in.
                    </p>
                    
                    <p className="opening-line text-lg md:text-xl text-white/85 leading-relaxed font-light">
                      {t.opening.line3}
                    </p>
                    
                    <p className="opening-line text-lg md:text-xl font-semibold bg-gradient-to-r from-[#F28C38] to-[#FFB347] bg-clip-text text-transparent italic">
                      {t.opening.line4}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="reveal">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00D8FF]/10 border border-[#00D8FF]/20 mb-6">
                  <Sparkles className="w-3.5 h-3.5 text-[#00D8FF]" />
                  <span className="text-xs font-semibold text-[#00D8FF] tracking-wide">{t.hero.badge}</span>
                </div>
              </div>
              <h1 className="reveal text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6">
                {t.hero.title1}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D8FF] to-[#00A8CC]">{t.hero.title2}</span>
              </h1>
              <p className="reveal text-lg text-white/70 leading-relaxed mb-3 max-w-lg">
                {t.hero.desc}
              </p>
              {t.hero.descAr && (
                <p className="reveal text-lg text-white/50 leading-relaxed mb-8 max-w-lg" dir="rtl">
                  {t.hero.descAr}
                </p>
              )}
              <div className="reveal flex flex-wrap gap-4">
                <a
                  href="#download"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#F28C38] to-[#E8725A] text-white font-bold text-base hover:shadow-lg hover:shadow-[#F28C38]/30 transition-all active:scale-[0.97]"
                >
                  <Download className="w-5 h-5" />
                  {t.hero.cta1}
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-white font-semibold text-base hover:bg-white/5 transition-all"
                >
                  {t.hero.cta2}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Stats */}
              <div className="reveal mt-12 flex gap-8">
                <div>
                  <div className="text-2xl font-bold text-[#00D8FF]">8+</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{t.hero.stat1}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#F28C38]">15+</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{t.hero.stat2}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">AR/EN</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{t.hero.stat3}</div>
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
            <span className="text-[#00D8FF] text-sm font-bold tracking-wider uppercase">{t.features.badge}</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mt-3 mb-4">
              {t.features.title}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t.features.desc}
            </p>
          </div>

          {/* Quick feature grid — uses the app's actual icons, matching the app dashboard */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {[
              { icon: <AsylumIcon size={28} />, label: t.features.items.asylum, border: "#00D8FF" },
              { icon: <MapIcon size={28} />, label: t.features.items.map, border: "#00D8FF" },
              { icon: <GroupsIcon size={28} />, label: t.features.items.groups, border: "#FF007B" },
              { icon: <StoriesIcon size={28} />, label: t.features.items.stories, border: "#FF007B" },
              { icon: <AIIcon size={28} />, label: t.features.items.ai, border: "#00D8FF" },
              { icon: <CVIcon size={28} />, label: t.features.items.cv, border: "#FF007B" },
              { icon: <EventsIcon size={28} />, label: t.features.items.events, border: "#FF007B" },
              { icon: <MentorshipIcon size={28} />, label: t.features.items.mentorship, border: "#00D8FF" },
              { icon: <GlossaryIcon size={28} />, label: t.features.items.glossary, border: "#00D8FF" },
              { icon: <InterviewIcon size={28} />, label: t.features.items.interview, border: "#FF007B" },
              { icon: <BankingIcon size={28} />, label: t.features.items.banking, border: "#00D8FF" },
              { icon: <CalculatorIcon size={28} />, label: t.features.items.calculator, border: "#FF007B" },
              { icon: <QuizIcon size={28} />, label: t.features.items.quiz, border: "#00D8FF" },
              { icon: <MessagesIcon size={28} />, label: t.features.items.messages, border: "#00D8FF" },
              { icon: <MarketplaceIcon size={28} />, label: t.features.items.marketplace, border: "#00D8FF" },
              { icon: <OrgsIcon size={28} />, label: t.features.items.orgs, border: "#00D8FF" },
              { icon: <NewsIcon size={28} />, label: t.features.items.news, border: "#FF007B" },
              { icon: <FlatshareIcon size={28} />, label: t.features.items.flatshare, border: "#FF007B" },
              { icon: <PointsIcon size={28} />, label: t.features.items.points, border: "#FFD700" },
              { icon: <SupportIcon size={28} />, label: t.features.items.support, border: "#00D8FF" },
              { icon: <DocumentIcon size={28} />, label: t.features.items.document, border: "#FF007B" },
            ].map((item, i) => (
              <div
                key={i}
                className="reveal glass-card glass-card-hover p-5 flex flex-col items-center gap-3 text-center"
                style={{ transitionDelay: `${i * 0.03}s`, borderColor: `${item.border}30` }}
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="text-xs font-semibold text-white">{item.label}</span>
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
            badge={t.countries.badge}
            badgeColor="#00D8FF"
            title={t.countries.title}
            description={t.countries.desc}
            features={[t.countries.f1, t.countries.f2, t.countries.f3, t.countries.f4]}
            icon={<AsylumIcon size={32} />}
            featureIcons={[
              <AsylumIcon size={18} />,
              <DocumentIcon size={18} />,
              <MapIcon size={18} />,
              <GroupsIcon size={18} />,
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
            badge={t.community.badge}
            badgeColor="#F28C38"
            title={t.community.title}
            description={t.community.desc}
            features={[t.community.f1, t.community.f2, t.community.f3, t.community.f4]}
            icon={<StoriesIcon size={32} />}
            featureIcons={[
              <StoriesIcon size={18} />,
              <GroupsIcon size={18} />,
              <InterviewIcon size={18} />,
              <MessagesIcon size={18} />,
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
            badge={t.resources.badge}
            badgeColor="#4CAF50"
            title={t.resources.title}
            description={t.resources.desc}
            features={[t.resources.f1, t.resources.f2, t.resources.f3, t.resources.f4]}
            icon={<MapIcon size={32} />}
            featureIcons={[
              <SupportIcon size={18} />,
              <SupportIcon size={18} />,
              <FlatshareIcon size={18} />,
              <OrgsIcon size={18} />,
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
            badge={t.tools.badge}
            badgeColor="#9C27B0"
            title={t.tools.title}
            description={t.tools.desc}
            features={[t.tools.f1, t.tools.f2, t.tools.f3, t.tools.f4]}
            icon={<AIIcon size={32} />}
            featureIcons={[
              <AIIcon size={18} />,
              <CVIcon size={18} />,
              <InterviewIcon size={18} />,
              <DocumentIcon size={18} />,
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
            badge={t.more.badge}
            badgeColor="#E8725A"
            title={t.more.title}
            description={t.more.desc}
            features={[t.more.f1, t.more.f2, t.more.f3, t.more.f4]}
            icon={<GlossaryIcon size={32} />}
            featureIcons={[
              <GlossaryIcon size={18} />,
              <EventsIcon size={18} />,
              <BankingIcon size={18} />,
              <PointsIcon size={18} />,
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
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[#00D8FF] text-sm font-bold tracking-wider uppercase">{t.download.badge}</span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#F28C38]/20 border border-[#F28C38]/40 text-[#F28C38] text-xs font-bold animate-pulse">{t.download.comingSoon}</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-white mt-3 mb-4">
                  {t.download.title}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-3">
                  {t.download.desc}
                </p>
                {t.download.descAr && (
                  <p className="text-muted-foreground/70 text-lg leading-relaxed mb-8" dir="rtl">
                    {t.download.descAr}
                  </p>
                )}
                <div className="flex flex-wrap gap-4">
                  <div
                    className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white/50 text-[#0A0F1A]/60 font-semibold shadow-lg cursor-not-allowed opacity-70"
                  >
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <div className="text-start">
                      <div className="text-[10px] opacity-60 leading-none">{t.download.appStoreLabel}</div>
                      <div className="text-base font-bold leading-tight">{t.download.appStore} — {t.download.comingSoon}</div>
                    </div>
                  </div>
                  <div
                    className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white/50 font-semibold cursor-not-allowed opacity-70"
                  >
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    <div className="text-start">
                      <div className="text-[10px] opacity-60 leading-none">{t.download.googlePlayLabel}</div>
                      <div className="text-base font-bold leading-tight">{t.download.googlePlay} — {t.download.comingSoon}</div>
                    </div>
                  </div>
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
            <span className="text-[#00D8FF] text-sm font-bold tracking-wider uppercase">{t.mission.badge}</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mt-3 mb-6">
              {t.mission.title}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              {t.mission.desc1}
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {t.mission.desc2}
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              {[
                { icon: <Sparkles className="w-5 h-5" />, label: t.mission.free, color: "#F28C38" },
                { icon: <Shield className="w-5 h-5" />, label: t.mission.privacy, color: "#00D8FF" },
                { icon: <AsylumIcon size={20} />, label: t.mission.bilingual, color: "#4CAF50" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span style={{ color: item.color }}>{item.icon}</span>
                  <span className="font-semibold text-white text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="relative py-12 z-10">
        <div className="container">
          <div className="max-w-3xl mx-auto glass-card p-6 border border-[#F28C38]/20">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-[#F28C38] mt-0.5 shrink-0" />
              <p className="text-muted-foreground text-xs leading-relaxed">
                {t.legal.disclaimer}
              </p>
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
                <img src={APP_LOGO} alt="Jisr logo" className="w-9 h-9" />
                <span className="text-lg font-bold text-white">Jisr</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                {t.footer.tagline}
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3 text-sm">{t.footer.features}</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>{t.footer.asylumInfo}</li>
                <li>{t.footer.resourceMap}</li>
                <li>{t.footer.communityStories}</li>
                <li>{t.footer.aiAssistant}</li>
                <li>{t.footer.cvBuilder}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3 text-sm">{t.footer.legal}</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li><a href={lang === 'ar' ? "/privacy-ar.html" : "/privacy.html"} className="hover:text-cyan-400 transition-colors">{t.footer.privacyPolicy}</a></li>
                <li><a href={lang === 'ar' ? "/terms-ar.html" : "/terms.html"} className="hover:text-cyan-400 transition-colors">{t.footer.terms}</a></li>
                <li><a href={lang === 'ar' ? "/disclaimer-ar.html" : "/disclaimer.html"} className="hover:text-cyan-400 transition-colors">{t.footer.disclaimer}</a></li>
                <li>{t.footer.contact}</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-6 text-center">
            <p className="text-muted-foreground/60 text-sm">
              &copy; {new Date().getFullYear()} Jisr. {t.footer.copyright}
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
  icon,
  featureIcons,
}: {
  direction: "left" | "right";
  screenshot: string;
  screenshot2?: string;
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  features: string[];
  icon?: React.ReactNode;
  featureIcons?: React.ReactNode[];
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
          <div className="flex items-center gap-3 mb-1">
            {icon && <span className="w-8 h-8">{icon}</span>}
            <span
              className="text-sm font-bold tracking-wider uppercase"
              style={{ color: badgeColor }}
            >
              {badge}
            </span>
          </div>
          <h3 className="text-2xl lg:text-3xl font-extrabold text-white mt-3 mb-4">
            {title}
          </h3>
          <p className="text-muted-foreground text-base leading-relaxed mb-6">
            {description}
          </p>
          <ul className="space-y-3">
            {features.map((feat, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-6 h-6 flex items-center justify-center mt-0.5 shrink-0">
                  {featureIcons && featureIcons[i] ? featureIcons[i] : (
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${badgeColor}20` }}
                    >
                      <ArrowRight className="w-3 h-3" style={{ color: badgeColor }} />
                    </div>
                  )}
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
