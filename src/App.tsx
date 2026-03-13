import React from "react";
import Timeline from "./components/Timeline";
import YearCard from "./components/YearCard";
import MonthCard, { type MonthData } from "./components/MonthCard";
import { timelineData } from "./data/timelineData";

interface YearData {
  year: number;
  months: MonthData[];
}

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-black">
        История компании
      </h1>
      <Timeline>
        {timelineData.map((yearData) => (
          <React.Fragment key={yearData.year}>
            <YearCard year={yearData.year} />
            {yearData.months.map((month, idx) => (
              <MonthCard key={idx} {...month} />
            ))}
          </React.Fragment>
        ))}
      </Timeline>
    </div>
  );
};

export default App;
