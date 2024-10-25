import React from "react";

interface RoadmapCardSmallProps {
  title: string;
  content: JSX.Element;
}

export default function RoadmapCardSmall({
  title,
  content,
}: RoadmapCardSmallProps) {
  return (
    <div
      className={`absolute rounded-lg bg-gray-500/30 text-white p-8 bottom-[-75px] z-20 w-[300px] sm:w-[500px] left-[50px] sm:left-[50px]}`}
    >
      <div className="text-xl sm:text-2xl text-primary my-2">{title}</div>
      {content}
    </div>
  );
}
