import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export interface MonthData {
  month: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

const MonthCard: React.FC<MonthData> = ({
  month,
  title,
  description,
  image,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 50 }}
      animate={visible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="month-card mb-6 bg-white rounded-lg p-4 shadow-md ml-12"
    >
      <img src={image} alt={title} className="rounded-lg mb-2 w-full" />
      <h3 className="text-lg font-semibold text-center text-black">{title}</h3>
      <p className="text-left text-black">{description}</p>
    </motion.div>
  );
};

export default MonthCard;
