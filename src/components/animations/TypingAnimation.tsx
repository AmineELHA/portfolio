

interface TypingAnimationProps {
  text: string;
  className?: string;
  speed?: string;
  color?: string;
}

const TypingAnimation = ({ 
  text = "Amine El Hammouti", 
  className = "",
  speed = "3s",
  color = "currentColor"
}: TypingAnimationProps) => {
  const characters = text.length;
  const animationSteps = `steps(${characters}, end)`;

  return (
    <span 
      className={`inline-block relative font-mono ${className}`}
      style={{ 
        color: color,
        fontFamily: 'inherit',
        lineHeight: '1.2'
      }}
    >
      {/* Text content with overflow hidden to create typewriter effect */}
      <span 
        className="inline-block overflow-hidden whitespace-nowrap"
        style={{ 
          width: '0',
          animation: `typewriter ${speed} ${animationSteps} 1s forwards`,
        }}
      >
        {text}
      </span>
      
      {/* Cursor element */}
      <span
        className="absolute top-0 bottom-0 w-[2px]"
        style={{ 
          backgroundColor: color,
          animation: `typewriter ${speed} ${animationSteps} 1s forwards, blink 1s infinite`,
          right: 0,
        }}
      />
      
      <style>{`
        @keyframes typewriter {
          from { 
            width: 0; 
          }
          to { 
            width: 100%; 
          }
        }
        @keyframes blink {
          0%, 100% { 
            opacity: 1; 
          }
          50% { 
            opacity: 0; 
          }
        }
      `}</style>
    </span>
  );
};

export default TypingAnimation;