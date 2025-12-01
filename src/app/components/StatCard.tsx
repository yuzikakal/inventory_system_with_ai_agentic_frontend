"use client";
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  trend?: string;
}

export const StatCard: React.FC<StatCardProps> = ({ title, value, icon: Icon, trend }) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start justify-between hover:shadow-md transition-shadow duration-300">
      <div>
        <p className="text-sm font-medium text-slate-500 mb-1">{title}</p>
        <h3 className="text-2xl font-semibold text-slate-800">{value}</h3>
        {trend && <p className="text-xs text-emerald-600 mt-2 font-medium">{trend}</p>}
      </div>
      <div className="p-3 bg-slate-50 rounded-lg text-slate-600">
        <Icon size={20} strokeWidth={1.5} />
      </div>
    </div>
  );
};