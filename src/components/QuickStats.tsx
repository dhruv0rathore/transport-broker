import React from 'react';
import { TrendingUp, Clock, ThumbsUp, Truck } from 'lucide-react';

export default function QuickStats() {
  const stats = [
    {
      title: "Active Shipments",
      value: "0",
      icon: Truck,
      color: "text-blue-600",
      trend: "0% from last month"
    },
    {
      title: "On-Time Delivery",
      value: "0%",
      icon: Clock,
      color: "text-green-600",
      trend: "0% from last month"
    },
    {
      title: "Cost Savings",
      value: "Rs 0",
      icon: TrendingUp,
      color: "text-purple-600",
      trend: "0% from last month"
    },
    {
      title: "Carrier Rating",
      value: "0",
      icon: ThumbsUp,
      color: "text-yellow-600",
      trend: "0 from last month"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-full ${stat.color} bg-opacity-10`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
            <span className="text-sm text-gray-500">{stat.trend}</span>
          </div>
          <h3 className="text-gray-600 text-sm font-medium">{stat.title}</h3>
          <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}
