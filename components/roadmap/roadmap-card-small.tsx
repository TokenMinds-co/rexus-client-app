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
      className={`rounded-lg w-full max-w-xs bg-gray-500/30 text-white p-8 z-20`}
    >
      <div className="text-xl sm:text-2xl text-primary my-2">{title}</div>
      {content}
    </div>
  );
}
