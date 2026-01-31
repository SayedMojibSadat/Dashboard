import React from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

export function LineChart({ title, data }) {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg border border-neutral-200 dark:border-transparent shadow-sm dark:shadow-none">
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <Line data={data} />
    </div>
  );
}

export function BarChart({ title, data }) {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg border border-neutral-200 dark:border-transparent shadow-sm dark:shadow-none">
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <Bar data={data} />
    </div>
  );
}

export function DonutChart({ title, data }) {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg border border-neutral-200 dark:border-transparent shadow-sm dark:shadow-none">
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <Doughnut data={data} />
    </div>
  );
}