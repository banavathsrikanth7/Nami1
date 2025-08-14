import { useEffect, useState } from "react";

export default function IntroScreen({ onFinish }) {
  const text = "ChatGPT-6";
  const [visibleLetters, setVisibleLetters] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLetters(prev => {
        if (prev < text.length) return prev + 1;
        clearInterval(interval);
        setTimeout(onFinish, 50); // delay before homepage
        return prev;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [text, onFinish]);

  return (
    <div className="flex items-center justify-center h-screen bg-yellow-500">
      <h1 className="text-6xl font-bold glow-text tracking-widest">
        {text.split("").map((char, idx) => (
          <span
            key={idx}
            className="letter inline-block"
            style={{ animationDelay: `${idx * 0.2}s` }}
          >
            {idx < visibleLetters ? char : ""}
          </span>
        ))}
      </h1>
    </div>
  );
}
