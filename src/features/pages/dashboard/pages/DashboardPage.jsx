import React from 'react'
import StatCard from "../components/StatCard";
import { LineChart, BarChart, DonutChart } from "../components/Charts";


function DashboardPage() {

    const stats = [
        { title: "Total Components", value: "120", description: "↑ 10 new this month", trendColor: "text-green-500" },
        { title: "Active Users", value: "5.6k", description: "↓ 300 (18%)", trendColor: "text-red-500" },
        { title: "Pending Issues", value: "45", description: "12 critical", trendColor: "text-yellow-500" },
        { title: "Deployments", value: "34", description: "↑ 5 this week", trendColor: "text-green-500" },
    ];

    const lineData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [{
            label: "Component Usage",
            data: [50, 70, 90, 120, 140],
            borderColor: "#3b82f6",
            backgroundColor: "#3b82f6",
            tension: 0.4
        }]
    };

    const barData = {
        labels: ["UI", "Forms", "Charts", "Tables", "Auth"],
        datasets: [{
            label: "Downloads",
            data: [300, 450, 200, 150, 500],
            backgroundColor: "#10b981"
        }]
    };

    const donutData = {
        labels: ["UI", "Forms", "Charts", "Tables", "Auth"],
        datasets: [{
            data: [25, 20, 15, 10, 30],
            backgroundColor: ["#3b82f6", "#ec4899", "#f59e0b", "#10b981", "#8b5cf6"]
        }]
    };


    return (
        <div className="h-full w-3/4 overflow-y-auto min-h-0 custom-scrollbar p-6 text-neutral-900 dark:text-white">
            <div className="flex justify-start mb-4">
                <input type="date" className="bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-300 dark:border-neutral-600 p-2 rounded-md" defaultValue="2026-01-30" />
            </div>

            <div className="grid grid-cols-4 gap-6 mb-6">
                {stats.map((s, i) => (
                    <StatCard key={i} {...s} />
                ))}
            </div>

            <div className="grid grid-cols-2 gap-6">
                <LineChart title="Component Usage Over Time" data={lineData} />
                <BarChart title="Downloads by Category" data={barData} />
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-4">
                        <StatCard title="Amount to be Collected" value="$25,600" />
                        <StatCard title="Cash in Hand" value="$5,600" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <StatCard title="Total Likes" value="25.6K" description="21% more than last month" trendColor="text-green-500" />
                        <StatCard title="Page Views" value="2.6M" description="14% more than last month" trendColor="text-green-500" />
                    </div>
                </div>

                <div className="bg-neutral-800 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold mb-4">User Signup Sources</h4>
                    <table className="w-full text-sm text-left text-neutral-300">
                        <thead className="text-neutral-400 border-b border-neutral-700">
                            <tr>
                                <th className="py-2">Source</th>
                                <th className="py-2">No of Users</th>
                                <th className="py-2">Conversion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["Facebook Ads", "26,345", "10.2%"],
                                ["Google Ads", "21,341", "11.7%"],
                                ["Instagram Ads", "34,379", "12.4%"],
                                ["Affiliates", "12,359", "20.9%"],
                                ["Organic", "10,345", "10.3%"],
                            ].map(([source, users, conversion], idx) => (
                                <tr key={idx} className="border-b border-neutral-200 dark:border-neutral-700">
                                    <td className="py-2">{source}</td>
                                    <td className="py-2">{users}</td>
                                    <td className="py-2">{conversion}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="mt-8">
                <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg flex flex-col items-center border border-neutral-200 dark:border-transparent shadow-sm dark:shadow-none">
                    <h4 className="text-lg font-semibold mb-4">Component Distribution</h4>
                    <div className="w-56 h-56">
                        <DonutChart title="" data={donutData} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage