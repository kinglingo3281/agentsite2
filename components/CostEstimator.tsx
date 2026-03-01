'use client';

import { useState } from 'react';

type UseType = 'primary' | 'second' | 'investment';

export default function CostEstimator() {
  const [price, setPrice] = useState(750000);
  const [downPayment, setDownPayment] = useState(20);
  const [interestRate, setInterestRate] = useState(7.0);
  const [propertyTax, setPropertyTax] = useState(0.5);
  const [hoaFees, setHoaFees] = useState(200);
  const [insurance, setInsurance] = useState(150);
  const [useType, setUseType] = useState<UseType>('second');
  const [rentalNights, setRentalNights] = useState(60);

  const loanAmount = price * (1 - downPayment / 100);
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = 30 * 12;
  const monthlyPI =
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
  const monthlyTax = (price * (propertyTax / 100)) / 12;
  const totalMonthly = monthlyPI + monthlyTax + hoaFees + insurance;

  const avgNightlyRate = price < 500000 ? 250 : price < 800000 ? 350 : price < 1200000 ? 450 : 600;
  const grossRentalAnnual = useType === 'investment' || useType === 'second' ? rentalNights * avgNightlyRate : 0;
  const managementFee = grossRentalAnnual * 0.25;
  const maintenanceReserve = grossRentalAnnual * 0.10;
  const netRentalAnnual = grossRentalAnnual - managementFee - maintenanceReserve;
  const netRentalMonthly = netRentalAnnual / 12;
  const netMonthly = totalMonthly - netRentalMonthly;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200 dark:border-gray-700">
      <h3 className="text-2xl font-serif font-bold text-coastal-blue dark:text-white mb-6">
        True Cost + Rental Calculator
      </h3>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h4 className="text-lg font-semibold text-coastal-slate dark:text-white mb-4">
            Inputs
          </h4>

          <div>
            <label className="block text-sm font-medium text-coastal-slate dark:text-gray-300 mb-2">
              Purchase Price: ${price.toLocaleString()}
            </label>
            <input
              type="range"
              min="200000"
              max="3000000"
              step="25000"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-coastal-slate dark:text-gray-300 mb-2">
              Down Payment: {downPayment}%
            </label>
            <input
              type="range"
              min="5"
              max="50"
              step="5"
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-coastal-slate dark:text-gray-300 mb-3">
              Use Type
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { value: 'primary' as UseType, label: 'Primary' },
                { value: 'second' as UseType, label: 'Second Home' },
                { value: 'investment' as UseType, label: 'Investment' },
              ].map((type) => (
                <button
                  key={type.value}
                  onClick={() => setUseType(type.value)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    useType === type.value
                      ? 'bg-coastal-blue text-white'
                      : 'bg-coastal-sand dark:bg-gray-700 text-coastal-slate dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          {(useType === 'investment' || useType === 'second') && (
            <div>
              <label className="block text-sm font-medium text-coastal-slate dark:text-gray-300 mb-2">
                Rental Nights per Year: {rentalNights}
              </label>
              <input
                type="range"
                min="0"
                max="180"
                step="10"
                value={rentalNights}
                onChange={(e) => setRentalNights(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-coastal-slate dark:text-gray-300 mb-2">
              Interest Rate: {interestRate.toFixed(2)}%
            </label>
            <input
              type="range"
              min="4.0"
              max="10.0"
              step="0.25"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-semibold text-coastal-slate dark:text-white mb-4">
            Outputs
          </h4>

          <div className="space-y-4">
            <div className="p-4 bg-coastal-sand dark:bg-gray-900 rounded-xl">
              <p className="text-sm text-coastal-slate dark:text-gray-400 mb-1">
                Monthly Ownership Cost
              </p>
              <p className="text-3xl font-bold text-coastal-blue dark:text-blue-400">
                ${Math.round(totalMonthly).toLocaleString()}
              </p>
            </div>

            {(useType === 'investment' || useType === 'second') && rentalNights > 0 && (
              <>
                <div className="p-4 bg-coastal-seafoam/10 dark:bg-gray-900 rounded-xl">
                  <p className="text-sm text-coastal-slate dark:text-gray-400 mb-1">
                    Gross Rental Income (Annual)
                  </p>
                  <p className="text-2xl font-bold text-coastal-seafoam">
                    ${Math.round(grossRentalAnnual).toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                    {rentalNights} nights × ${avgNightlyRate}/night
                  </p>
                </div>

                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                  <p className="text-sm text-coastal-slate dark:text-gray-400 mb-2">
                    Deductions
                  </p>
                  <div className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                    <div className="flex justify-between">
                      <span>Management (25%)</span>
                      <span>-${Math.round(managementFee).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Maintenance Reserve (10%)</span>
                      <span>-${Math.round(maintenanceReserve).toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-2 border-coastal-blue/30">
                  <p className="text-sm text-coastal-slate dark:text-gray-400 mb-1">
                    Net Monthly Position
                  </p>
                  <p className="text-3xl font-bold text-coastal-blue dark:text-blue-400">
                    ${Math.round(Math.abs(netMonthly)).toLocaleString()}
                    <span className="text-base ml-2">
                      {netMonthly < 0 ? 'profit' : 'cost'}
                    </span>
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                    After rental income & expenses
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
        <p className="text-sm text-coastal-slate dark:text-gray-300">
          <strong>Context:</strong> Rental estimates based on local rental performance data. 
          Actual income varies by location, season, and property condition. Peak summer weeks can command 2-3× average rates.
        </p>
      </div>
    </div>
  );
}
