// src/components/RevenueSummary.js
import React from "react";

export default function RevenueSummary({ activityImage, totalRevenueText, revenueChangeText, priceText }) {
  return (
    <div className="flex flex-col items-center text-center text-[#f6f6f7]">
      <img src={activityImage} alt={totalRevenueText} className="mb-2" />
      <p className="text-sm font-bold">{totalRevenueText}</p>
      <p className="text-xs text-gray-400">{revenueChangeText}</p>
      <p className="text-lg font-semibold">{priceText}</p>
    </div>
  );
}
