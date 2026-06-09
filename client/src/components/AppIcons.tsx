/**
 * App Icons — Recreated from the Jisr iOS app's Dashboard3DIcon component.
 * Uses the same SVG paths and gradient styles as the native app.
 * Pink (#FF007B → #B8005C) for pink-themed features
 * Cyan (#00D8FF → #007AFF) for cyan-themed features
 */

import React from "react";

interface IconProps {
  size?: number;
  className?: string;
}

// Asylum Info / Globe icon
export function AsylumIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="asylumGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D8FF" />
          <stop offset="100%" stopColor="#007AFF" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="10" stroke="url(#asylumGrad)" strokeWidth="2" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="#00D8FF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// Resource Map
export function MapIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="mapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D8FF" />
          <stop offset="100%" stopColor="#007AFF" />
        </linearGradient>
      </defs>
      <path d="M3 6l6-3 6 3 6-3v12l-6 3-6-3-6 3V6z" fill="url(#mapGrad)" opacity="0.8" />
      <path d="M9 3v12M15 6v12" stroke="#FFFFFF" strokeWidth="1" opacity="0.3" />
      <path d="M12 7c-1.7 0-3 1.3-3 3 0 2 3 5.5 3 5.5s3-3.5 3-5.5c0-1.7-1.3-3-3-3z" fill="#FF3B30" />
      <circle cx="12" cy="10" r="1" fill="#FFFFFF" />
    </svg>
  );
}

// Support Groups / Chat Groups
export function GroupsIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="groupGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF007B" />
          <stop offset="100%" stopColor="#B8005C" />
        </linearGradient>
      </defs>
      <path d="M14 18v-1.5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3V18" stroke="#B8005C" strokeWidth="2" strokeLinecap="round" />
      <circle cx="8" cy="10" r="2.5" stroke="#B8005C" strokeWidth="2" />
      <path d="M18 18v-1.5a3 3 0 0 0-2-2.8" stroke="url(#groupGrad)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="15.5" cy="10" r="2" stroke="url(#groupGrad)" strokeWidth="2" />
      <path d="M11.5 2a3.5 3.5 0 0 1 3.5 3.5c0 1.2-1 2.2-2.5 2.2H11L9.5 9v-1.3C8.2 7.7 7.5 6.7 7.5 5.5A3.5 3.5 0 0 1 11.5 2z" fill="#FF007B" opacity="0.8" />
    </svg>
  );
}

// Community Stories
export function StoriesIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="bookGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF007B" />
          <stop offset="100%" stopColor="#B8005C" />
        </linearGradient>
      </defs>
      <path d="M4 19a2 2 0 0 1 2-2h14v2.5H6a2 2 0 0 1-2-.5z" fill="#E5E5EA" opacity="0.8" />
      <path d="M3 18V5a2 2 0 0 1 2-2h15v15H5a2 2 0 0 0-2 2z" fill="url(#bookGrad)" />
      <path d="M6 4h13v12H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" fill="#FFFFFF" />
      <path d="M8 7h8M8 10h8M8 13h5" stroke="#8E8E93" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 3v5l-2-1.5-2 1.5V3" fill="#FF3B30" />
    </svg>
  );
}

// AI Assistant
export function AIIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="aiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D8FF" />
          <stop offset="100%" stopColor="#7B2CBF" />
        </linearGradient>
      </defs>
      <path d="M4 11V9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2" stroke="#007AFF" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="4" r="1.5" fill="#00D8FF" />
      <path d="M12 4v3" stroke="#00D8FF" strokeWidth="2" />
      <rect x="5" y="8" width="14" height="11" rx="4" fill="url(#aiGrad)" />
      <rect x="7" y="11" width="10" height="4" rx="2" fill="#080B16" />
      <rect x="8" y="12.5" width="8" height="1" rx="0.5" fill="#00D8FF" />
      <circle cx="9.5" cy="13" r="0.75" fill="#FFFFFF" />
      <circle cx="14.5" cy="13" r="0.75" fill="#FFFFFF" />
    </svg>
  );
}

// CV Builder
export function CVIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="cvGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF007B" />
          <stop offset="100%" stopColor="#B8005C" />
        </linearGradient>
      </defs>
      <rect x="3" y="6" width="18" height="13" rx="2" stroke="url(#cvGrad)" strokeWidth="2" />
      <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" stroke="url(#cvGrad)" strokeWidth="2" />
      <path d="M7 10h10M7 14h5" stroke="#FF007B" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// Events / Calendar
export function EventsIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="calGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF007B" />
          <stop offset="100%" stopColor="#B8005C" />
        </linearGradient>
      </defs>
      <rect x="4" y="5" width="16" height="15" rx="3" fill="#FFFFFF" />
      <path d="M4 8V5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v3H4z" fill="url(#calGrad)" />
      <rect x="7" y="2" width="2" height="3" rx="1" fill="#E5E5EA" />
      <rect x="15" y="2" width="2" height="3" rx="1" fill="#E5E5EA" />
      <circle cx="8" cy="11" r="1.5" fill="#B8005C" />
      <circle cx="12" cy="11" r="1.5" fill="#8E8E93" />
      <circle cx="16" cy="11" r="1.5" fill="#8E8E93" />
      <circle cx="8" cy="15" r="1.5" fill="#8E8E93" />
      <circle cx="12" cy="15" r="1.5" fill="#8E8E93" />
      <circle cx="16" cy="15" r="1.5" fill="#8E8E93" />
    </svg>
  );
}

// Mentorship
export function MentorshipIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="mentorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D8FF" />
          <stop offset="100%" stopColor="#007AFF" />
        </linearGradient>
      </defs>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="url(#mentorGrad)" strokeWidth="2" />
      <circle cx="9" cy="7" r="4" stroke="url(#mentorGrad)" strokeWidth="2" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75" stroke="#00D8FF" strokeWidth="2" />
    </svg>
  );
}

// Glossary
export function GlossaryIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="dictGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D8FF" />
          <stop offset="100%" stopColor="#5E5AAA" />
        </linearGradient>
        <linearGradient id="dictShield2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FF8C00" />
        </linearGradient>
      </defs>
      <path d="M4 5.5C4 4.7 4.7 4 5.5 4H11v14H5.5C4.7 18 4 17.3 4 16.5V5.5z" fill="url(#dictGrad2)" />
      <path d="M20 5.5C20 4.7 19.3 4 18.5 4H13v14h5.5c.8 0 1.5-.7 1.5-1.5V5.5z" fill="#007AFF" opacity="0.85" />
      <rect x="11" y="4" width="2" height="14" fill="#FFFFFF" opacity="0.2" />
      <path d="M6 7.5h4M6 10h4M6 12.5h3" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
      <path d="M14 7.5h4M14 10h4M14 12.5h3" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <path d="M12 17l-3 1.5v2c0 1.5 1.3 2.5 3 3 1.7-.5 3-1.5 3-3v-2L12 17z" fill="url(#dictShield2)" />
      <path d="M10.5 20.2l1 1 2-2" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Interview Prep / Microphone
export function InterviewIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="voiceGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF007B" />
          <stop offset="100%" stopColor="#B8005C" />
        </linearGradient>
      </defs>
      <rect x="9" y="2" width="6" height="12" rx="3" stroke="url(#voiceGrad2)" strokeWidth="2" />
      <path d="M5 10a7 7 0 0 0 14 0M12 17v4M8 21h8" stroke="#FF007B" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// Document Explainer
export function DocumentIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="docGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF007B" />
          <stop offset="100%" stopColor="#B8005C" />
        </linearGradient>
      </defs>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="url(#docGrad2)" strokeWidth="2" />
      <path d="M14 2v6h6M16 13H8M16 17H8" stroke="#FF007B" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// Banking Guide / Credit Card
export function BankingIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="bankGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D8FF" />
          <stop offset="100%" stopColor="#007AFF" />
        </linearGradient>
      </defs>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="url(#bankGrad2)" strokeWidth="2" />
      <path d="M3 10h18M7 15h2M11 15h4" stroke="#00D8FF" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// Cost Calculator
export function CalculatorIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="calcGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF007B" />
          <stop offset="100%" stopColor="#B8005C" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="16" height="16" rx="2" stroke="url(#calcGrad2)" strokeWidth="2" />
      <path d="M8 8h2M8 12h2M8 16h8M14 8h2M14 12h2" stroke="#FF007B" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// News Feed / Megaphone
export function NewsIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="newsGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF007B" />
          <stop offset="100%" stopColor="#B8005C" />
        </linearGradient>
      </defs>
      <path d="M4 14.5v-3a1.5 1.5 0 0 1 1.5-1.5H7l7-4v12l-7-4H5.5A1.5 1.5 0 0 1 4 14.5z" fill="url(#newsGrad2)" />
      <path d="M9 14.5v3.5a1.5 1.5 0 0 1-1.5 1.5h-1a1 1 0 0 1-1-1v-4" stroke="#B8005C" strokeWidth="2" strokeLinecap="round" />
      <path d="M17.5 8a4.5 4.5 0 0 1 0 8M20 5.5a8 8 0 0 1 0 13" stroke="#FF007B" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// Flatshare / Home
export function FlatshareIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="flatGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF007B" />
          <stop offset="100%" stopColor="#B8005C" />
        </linearGradient>
      </defs>
      <path d="M3 10l9-7 9 7v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9z" stroke="url(#flatGrad2)" strokeWidth="2" />
      <path d="M9 21v-6a3 3 0 0 1 6 0v6" stroke="#FF007B" strokeWidth="2" />
    </svg>
  );
}

// Integration Quiz / Checkmark
export function QuizIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="quizGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D8FF" />
          <stop offset="100%" stopColor="#007AFF" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="10" stroke="url(#quizGrad2)" strokeWidth="2" />
      <path d="M9 12l2 2 4-4" stroke="#00D8FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Direct Messages / Envelope
export function MessagesIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="inboxGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D8FF" />
          <stop offset="100%" stopColor="#007AFF" />
        </linearGradient>
      </defs>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="url(#inboxGrad2)" strokeWidth="2" />
      <path d="M22 6l-10 7L2 6" stroke="#00D8FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Organizations / Building
export function OrgsIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="buildGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D8FF" />
          <stop offset="100%" stopColor="#007AFF" />
        </linearGradient>
      </defs>
      <rect x="4" y="8" width="7" height="13" rx="1.5" fill="#007AFF" opacity="0.6" />
      <rect x="10" y="4" width="9" height="17" rx="2" fill="url(#buildGrad2)" />
      <rect x="12" y="7" width="2" height="2" rx="0.5" fill="#FFFFFF" opacity="0.7" />
      <rect x="16" y="7" width="2" height="2" rx="0.5" fill="#FFFFFF" opacity="0.7" />
      <rect x="12" y="11" width="2" height="2" rx="0.5" fill="#FFFFFF" opacity="0.7" />
      <rect x="16" y="11" width="2" height="2" rx="0.5" fill="#FFFFFF" opacity="0.7" />
      <rect x="12" y="15" width="2" height="2" rx="0.5" fill="#FFFFFF" opacity="0.7" />
      <rect x="16" y="15" width="2" height="2" rx="0.5" fill="#FFFFFF" opacity="0.7" />
    </svg>
  );
}

// Marketplace / Shopping Bag
export function MarketplaceIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="bagGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D8FF" />
          <stop offset="100%" stopColor="#007AFF" />
        </linearGradient>
      </defs>
      <path d="M8 8c0-2.5 1.8-4 4-4s4 1.5 4 4" stroke="#007AFF" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M5 8h14l-1.5 12a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2L5 8z" fill="url(#bagGrad2)" />
      <path d="M7 8h10l-1 8H8l-1-8z" fill="#FFFFFF" opacity="0.15" />
    </svg>
  );
}

// Points / Star Coin
export function PointsIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="coinGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#FFA500" />
          <stop offset="100%" stopColor="#FF8C00" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="10" fill="url(#coinGrad2)" />
      <circle cx="12" cy="12" r="8" stroke="#FFFFFF" strokeWidth="1" opacity="0.5" />
      <path d="M12 6.5l1.6 3.3 3.6.5-2.6 2.5.6 3.6-3.2-1.7-3.2 1.7.6-3.6-2.6-2.5 3.6-.5z" fill="#FFFFFF" />
    </svg>
  );
}

// Support / Question Mark
export function SupportIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="qaGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D8FF" />
          <stop offset="100%" stopColor="#007AFF" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="10" stroke="url(#qaGrad2)" strokeWidth="2.5" />
      <path d="M9.5 9a2.5 2.5 0 0 1 5 0c0 1.5-1.5 2-2.2 2.8-.5.5-.8 1.2-.8 1.7v.5" stroke="#00D8FF" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="11.5" cy="17.5" r="1.5" fill="#00D8FF" />
    </svg>
  );
}
