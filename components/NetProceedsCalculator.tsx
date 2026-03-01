'use client';

import { useState, useEffect } from 'react';

export default function NetProceedsCalculator() {
  const [salePrice, setSalePrice] = useState(600000);
  const [commission, setCommission] = useState(5.5);
  const [otherFees, setOtherFees] = useState(16100);
  const [isFeesManual, setIsFeesManual] = useState(false);

  // Auto-calculate fees based on sale price (Delaware typical: ~2.5% + $1,100 flat fees)
  useEffect(() => {
    if (!isFeesManual) {
      // Transfer tax (seller pays ~2% of 4% total)
      // Title fees (~0.27%)
      // Attorney (~$1,000)
      // Recording (~$100)
      const transferTax = salePrice * 0.02; // 2% seller's portion
      const titleFees = salePrice * 0.0027; // 0.27%
      const flatFees = 1100; // Attorney + recording + misc
      const calculatedFees = Math.round(transferTax + titleFees + flatFees);
      setOtherFees(calculatedFees);
    }
  }, [salePrice, isFeesManual]);

  const commissionAmount = salePrice * (commission / 100);
  const netProceeds = salePrice - commissionAmount - otherFees;

  return (
    <div className="bg-gradient-to-br from-coastal-sand/20 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-coastal-slate dark:text-gray-300 mb-3">
            Expected Sale Price
          </label>
          <input
            type="range"
            min="200000"
            max="3000000"
            step="25000"
            value={salePrice}
            onChange={(e) => setSalePrice(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          />
          <div className="flex justify-between mt-2">
            <span className="text-xs text-gray-500 dark:text-gray-400">$200K</span>
            <span className="text-lg font-bold text-coastal-blue dark:text-white">
              ${salePrice.toLocaleString()}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">$3M</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="commission" className="block text-sm font-medium text-coastal-slate dark:text-gray-300 mb-2">
              Commission %
            </label>
            <input
              type="number"
              id="commission"
              value={commission}
              onChange={(e) => setCommission(Number(e.target.value))}
              min="0"
              max="10"
              step="0.5"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-coastal-blue"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              DE avg: 5.5-6%
            </p>
          </div>
          <div>
            <label htmlFor="otherFees" className="block text-sm font-medium text-coastal-slate dark:text-gray-300 mb-2">
              Est. Taxes & Fees
            </label>
            <input
              type="number"
              id="otherFees"
              value={otherFees}
              onChange={(e) => {
                setOtherFees(Number(e.target.value));
                setIsFeesManual(true);
              }}
              step="100"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-coastal-blue"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Transfer tax, title, attorney, etc.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-coastal-blue to-coastal-seafoam rounded-xl p-6 mt-6">
          <div className="text-center">
            <p className="text-white/90 text-sm font-medium mb-2">Estimated Take-Home</p>
            <p className="text-4xl font-bold text-white">
              ${Math.round(netProceeds).toLocaleString()}
            </p>
            <p className="text-white/70 text-xs mt-2">After commissions, taxes, and fees</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-xs text-gray-600 dark:text-gray-400">
          <div>
            <span className="font-medium">Commission:</span> ${Math.round(commissionAmount).toLocaleString()}
          </div>
          <div>
            <span className="font-medium">Closing Costs:</span> ${otherFees.toLocaleString()}
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
            This is a rough estimate. I&apos;ll provide exact numbers with a detailed net sheet.
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-2">
            <span className="font-medium">Note:</span> Capital gains tax not included. Many primary residence sales qualify for tax-free gains up to $250k (single) or $500k (married).
          </p>
        </div>
      </div>
    </div>
  );
}
