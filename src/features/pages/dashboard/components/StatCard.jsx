import React from 'react';

function StatCard({ title, value, description, trendColor }) {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg border border-neutral-200 dark:border-transparent shadow-sm dark:shadow-none">
      <h4 className="text-sm text-neutral-500 dark:text-neutral-400">{title}</h4>
      <p className="text-2xl font-bold text-neutral-900 dark:text-white">{value}</p>
      {description && (
        <span className={`${trendColor} text-sm`}>{description}</span>
      )}
    </div>
  );
}

export default StatCard;