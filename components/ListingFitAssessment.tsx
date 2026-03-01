interface FitTag {
  label: string;
  type: 'positive' | 'neutral' | 'caution';
}

interface ListingFitAssessmentProps {
  tags: FitTag[];
  monthlyCost?: number;
  rentalIncome?: number;
}

export default function ListingFitAssessment({ 
  tags, 
  monthlyCost,
  rentalIncome 
}: ListingFitAssessmentProps) {
  const tagStyles = {
    positive: 'bg-coastal-seafoam/20 text-coastal-seafoam border-coastal-seafoam/30',
    neutral: 'bg-coastal-gold/20 text-coastal-slate border-coastal-gold/30',
    caution: 'bg-accent-rust/20 text-accent-rust border-accent-rust/30',
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
      <h3 className="text-xl font-serif font-bold text-coastal-blue dark:text-white mb-4">
        Fit Assessment
      </h3>
      <p className="text-sm text-coastal-slate dark:text-gray-400 mb-4">
        Manual tags based on local knowledge. Not algorithmic.
      </p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className={`px-3 py-1.5 text-sm font-medium rounded-full border ${tagStyles[tag.type]}`}
          >
            {tag.label}
          </span>
        ))}
      </div>

      {(monthlyCost || rentalIncome) && (
        <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
          <h4 className="text-sm font-semibold text-coastal-slate dark:text-white mb-3">
            Cost Preview
          </h4>
          <div className="space-y-2">
            {monthlyCost && (
              <div className="flex justify-between text-sm">
                <span className="text-coastal-slate dark:text-gray-400">
                  Estimated Monthly Cost
                </span>
                <span className="font-semibold text-coastal-blue dark:text-blue-400">
                  ${monthlyCost.toLocaleString()}
                </span>
              </div>
            )}
            {rentalIncome && (
              <div className="flex justify-between text-sm">
                <span className="text-coastal-slate dark:text-gray-400">
                  Potential Rental Income (Annual)
                </span>
                <span className="font-semibold text-coastal-seafoam">
                  ${rentalIncome.toLocaleString()}
                </span>
              </div>
            )}
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-500 mt-3">
            Use the calculator for detailed estimates with your specific financing.
          </p>
        </div>
      )}
    </div>
  );
}
