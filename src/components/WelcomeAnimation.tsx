import { useEffect, useState } from 'react';

interface WelcomeAnimationProps {
  onComplete: () => void;
}

export default function WelcomeAnimation({ onComplete }: WelcomeAnimationProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 z-50 flex items-center justify-center transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 animate-fade-in">
          Welcome to
        </h1>
        <h2 className="text-7xl md:text-9xl font-extrabold text-white animate-scale-in">
          AtmoExplorer
        </h2>
      </div>
    </div>
  );
}
