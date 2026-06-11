import React, { useMemo } from 'react';

interface FlyingLettersProps {
  text: string;
  className?: string;
}

export function FlyingLetters({ text, className = '' }: FlyingLettersProps) {
  // Split by spaces to preserve word boundaries
  const words = useMemo(() => text.split(' '), [text]);
  
  // Flatten all characters with word indices
  const characters = useMemo(() => {
    const chars: Array<{ char: string; index: number }> = [];
    let globalIndex = 0;
    
    words.forEach((word, wordIdx) => {
      word.split('').forEach((char) => {
        chars.push({ char, index: globalIndex });
        globalIndex++;
      });
      // Add space between words (but not after the last word)
      if (wordIdx < words.length - 1) {
        chars.push({ char: ' ', index: globalIndex });
        globalIndex++;
      }
    });
    
    return chars;
  }, [words]);

  const angles = [45, -45, 60, -60, 30, -30, 75, -75, 90, -90, 120, -120];
  const distances = [100, 120, 80, 110, 90, 130, 70, 140, 95, 125, 85, 115];

  return (
    <>
      <style>{`
        @keyframes flyIn {
          0% {
            opacity: 0;
            transform: translate(var(--tx), var(--ty)) scale(0.3) rotate(360deg);
            filter: blur(4px);
          }
          50% {
            opacity: 0.8;
          }
          100% {
            opacity: 1;
            transform: translate(0, 0) scale(1) rotate(0deg);
            filter: blur(0px);
          }
        }
        
        .flying-letter {
          display: inline-block;
          animation: flyIn 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-shadow: 0 0 10px rgba(0, 216, 255, 0.5);
        }
        
        .flying-space {
          display: inline-block;
          width: 0.3em;
          animation: flyIn 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style>
      <span className={className}>
        {characters.map(({ char, index }) => {
          // Skip animation for spaces
          if (char === ' ') {
            return (
              <span key={index} className="flying-space">
                {' '}
              </span>
            );
          }

          const angle = angles[index % angles.length];
          const distance = distances[index % distances.length];
          const tx = Math.cos((angle * Math.PI) / 180) * distance;
          const ty = Math.sin((angle * Math.PI) / 180) * distance;

          return (
            <span
              key={index}
              className="flying-letter"
              style={{
                '--tx': `${tx}px`,
                '--ty': `${ty}px`,
                animationDelay: `${index * 0.06}s`,
              } as React.CSSProperties & { '--tx': string; '--ty': string }}
            >
              {char}
            </span>
          );
        })}
      </span>
    </>
  );
}
