import React from 'react';

function StatCard({ title, value, description, trendColor }) {
  return (
    <div className="bg-neutral-800 p-4 rounded-lg">
      <h4 className="text-sm text-neutral-400">{title}</h4>
      <p className="text-2xl font-bold">{value}</p>
      {description && (
        <span className={`${trendColor} text-sm`}>{description}</span>
      )}
    </div>
  );
}

export default StatCard;