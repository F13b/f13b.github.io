import React from "react";

interface YearCardProps {
  year: number;
}

const YearCard: React.FC<YearCardProps> = ({ year }) => {
  return (
    <div className="year-card mb-6 bg-white rounded-xl p-6 shadow-md">
      <h2 className="text-2xl font-bold text-center text-black">{year}</h2>
    </div>
  );
};

export default YearCard;
