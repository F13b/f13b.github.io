import React, { useEffect, useState } from "react";

interface TimelineProps {
  children: React.ReactNode;
}

const Timeline: React.FC<TimelineProps> = ({ children }) => {
  const [progress, setProgress] = useState<number>(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    setProgress((scrollTop / docHeight) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Вертикальная линия таймлайна */}
      <div className="absolute left-12 top-0 w-1 bg-gray-300 h-full">
        <div
          className="bg-blue-500 w-full"
          style={{ height: `${progress}%` }}
        />
      </div>

      {/* Контент */}
      <div className="pl-28">{children}</div>
    </div>
  );
};

export default Timeline;
