import React from "react";
import ComponentCard from "../components/ComponentCard";
import { componentList } from "../data/ComponentData";

export default function ComponentBar() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 min-h-full">
      {componentList.map((item, idx) => (
        <ComponentCard
          key={idx}
          title={item.title}
          Component={item.Component}
          code={item.code}
        />
      ))}
    </div>
  );
}