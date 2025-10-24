import React from "react";

function StatsCard({ title, value, icon: Icon, bgColor, textColor, subtitle, extra }) {
  return (
    <div className={`rounded-2xl p-3 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 ${bgColor}`}>
        <div className="flex items-center gap-7 mb-5">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ${textColor}`}>
                {Icon && <Icon className="w-6 h-6 text-white" />}
            </div>

            <div className="">
                <p className="text-3xl font-bold text-gray-900 mb-1">{value}</p>
                <p className="text-sm text-gray-600">{title}</p>
                {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
                {extra && <div className="mt-3 flex items-center text-xs text-green-600">{extra}</div>}
            </div>
        </div>
    </div>
  );
}

export default StatsCard;
