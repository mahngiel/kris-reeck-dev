import React from "react";

interface ExperienceProps {
  title: string;
  company: string;
  period_start: string;
  period_end: string;
  responsibilities: string[];
}

const ExperienceItem: React.FC<ExperienceProps> = ({ title, company, period_start, period_end, responsibilities }) => {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-bold text-deep">{title}</h3>
      <p className="text-sm text-gray-500">{company} | {period_start} &mdash; {period_end}</p>
      <ul className="list-disc ml-6 mt-2 text-lg font-body">
        {responsibilities.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItem;
