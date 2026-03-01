'use client';

import { useState } from 'react';

interface QuizQuestion {
  id: string;
  question: string;
  options: {
    value: string;
    label: string;
    weight: Record<string, number>;
  }[];
}

interface QuizResult {
  primaryArea: string;
  secondaryArea: string;
  avoidArea: string;
  explanation: string;
}

const questions: QuizQuestion[] = [
  {
    id: 'budget',
    question: 'What is your comfortable price range?',
    options: [
      { value: 'under-500k', label: 'Under $500k', weight: { milton: 3, bethany: 1, lewes: 1 } },
      { value: '500k-800k', label: '$500k - $800k', weight: { lewes: 2, dewey: 2, rehoboth: 1, milton: 1 } },
      { value: '800k-1.2m', label: '$800k - $1.2M', weight: { rehoboth: 3, lewes: 2, dewey: 2 } },
      { value: 'over-1.2m', label: 'Over $1.2M', weight: { rehoboth: 3, lewes: 2, dewey: 1 } },
    ],
  },
  {
    id: 'usage',
    question: 'How do you plan to use the property?',
    options: [
      { value: 'primary', label: 'Primary residence year-round', weight: { lewes: 3, milton: 3, rehoboth: 1 } },
      { value: 'second', label: 'Second home for weekends/summer', weight: { rehoboth: 3, dewey: 2, bethany: 2 } },
      { value: 'rental', label: 'Investment/rental property', weight: { dewey: 3, rehoboth: 2, bethany: 1 } },
      { value: 'mixed', label: 'Mix of personal use and rental', weight: { rehoboth: 2, dewey: 2, bethany: 2 } },
    ],
  },
  {
    id: 'walkability',
    question: 'How important is walking to restaurants and boardwalk?',
    options: [
      { value: 'essential', label: 'Essential - I want to walk everywhere', weight: { rehoboth: 3, lewes: 1 } },
      { value: 'nice', label: 'Nice to have but not a dealbreaker', weight: { rehoboth: 2, dewey: 1, bethany: 1 } },
      { value: 'not-important', label: 'Not important - happy to drive', weight: { milton: 3, lewes: 2, bethany: 2 } },
      { value: 'prefer-quiet', label: 'Prefer quiet residential over walkability', weight: { bethany: 3, milton: 2, lewes: 2 } },
    ],
  },
  {
    id: 'parking',
    question: 'Parking situation - what can you live with?',
    options: [
      { value: 'street-ok', label: 'Street parking is fine if location is great', weight: { rehoboth: 3, dewey: 2 } },
      { value: 'need-driveway', label: 'Need dedicated parking/driveway', weight: { bethany: 3, lewes: 2, milton: 3 } },
      { value: 'garage-required', label: 'Garage is a must-have', weight: { milton: 2, lewes: 2 } },
    ],
  },
  {
    id: 'crowds',
    question: 'How do you feel about summer crowds?',
    options: [
      { value: 'love-it', label: 'Love the energy - part of the appeal', weight: { dewey: 3, rehoboth: 2 } },
      { value: 'tolerate', label: 'Can tolerate if off-season is quiet', weight: { rehoboth: 2, bethany: 1 } },
      { value: 'avoid', label: 'Want to avoid tourist intensity', weight: { milton: 3, lewes: 2, bethany: 2 } },
    ],
  },
  {
    id: 'rental',
    question: 'How important is rental income potential?',
    options: [
      { value: 'critical', label: 'Critical - need $40k+ annual gross', weight: { dewey: 3, rehoboth: 2 } },
      { value: 'nice', label: 'Nice to offset costs ($20-30k range)', weight: { rehoboth: 2, bethany: 2, lewes: 1 } },
      { value: 'not', label: 'Not important at all', weight: { lewes: 2, milton: 3 } },
    ],
  },
  {
    id: 'proximity',
    question: 'Beach proximity - how close do you need to be?',
    options: [
      { value: 'blocks', label: 'Within 3-4 blocks walking', weight: { rehoboth: 3, dewey: 3, bethany: 2 } },
      { value: 'biking', label: 'Biking distance (under 2 miles)', weight: { rehoboth: 2, lewes: 1, bethany: 1 } },
      { value: 'short-drive', label: 'Short drive (10-15 min) is fine', weight: { milton: 3, lewes: 2 } },
      { value: 'bay-ok', label: 'Bay or canal access works too', weight: { lewes: 3, dewey: 1 } },
    ],
  },
  {
    id: 'community',
    question: 'What kind of community vibe do you want?',
    options: [
      { value: 'historic', label: 'Historic charm with local character', weight: { lewes: 3, rehoboth: 1 } },
      { value: 'active-social', label: 'Active nightlife and social scene', weight: { dewey: 3, rehoboth: 1 } },
      { value: 'quiet-peaceful', label: 'Quiet, peaceful environment', weight: { bethany: 3, milton: 2 } },
      { value: 'upscale-resort', label: 'Upscale resort town feel', weight: { rehoboth: 3, bethany: 1 } },
    ],
  },
  {
    id: 'timeline',
    question: 'When are you looking to buy?',
    options: [
      { value: 'ready-now', label: 'Ready now - actively searching', weight: { rehoboth: 1, dewey: 1, lewes: 1, milton: 1, bethany: 1 } },
      { value: 'few-months', label: 'Within a few months', weight: { rehoboth: 1, dewey: 1, lewes: 1, milton: 1, bethany: 1 } },
      { value: 'researching', label: 'Just researching for now', weight: { rehoboth: 2, lewes: 1 } },
      { value: 'flexible', label: 'Flexible - waiting for the right property', weight: { lewes: 2, milton: 1 } },
    ],
  },
];

const areaInfo: Record<string, { name: string; description: string }> = {
  rehoboth: { name: 'Rehoboth Beach', description: 'Balanced appeal with walkability, dining, and strong rental demand' },
  dewey: { name: 'Dewey Beach', description: 'High rental yields, active lifestyle, younger demographic' },
  lewes: { name: 'Lewes', description: 'Historic charm, year-round community, quieter alternative' },
  milton: { name: 'Milton', description: 'Best value, 15 minutes to beach, strong local community' },
  bethany: { name: 'Bethany Beach', description: 'Quiet, peaceful environment, no alcohol on beach' },
};

export default function BuyerQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<QuizResult | null>(null);

  const handleAnswer = (questionId: string, value: string) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers: Record<string, string>) => {
    const scores: Record<string, number> = {
      rehoboth: 0,
      dewey: 0,
      lewes: 0,
      milton: 0,
      bethany: 0,
    };

    questions.forEach((question) => {
      const answer = finalAnswers[question.id];
      const option = question.options.find(opt => opt.value === answer);
      if (option) {
        Object.entries(option.weight).forEach(([area, weight]) => {
          scores[area] = (scores[area] || 0) + weight;
        });
      }
    });

    const sortedAreas = Object.entries(scores)
      .sort(([, a], [, b]) => b - a)
      .map(([area]) => area);

    const primaryArea = sortedAreas[0];
    const secondaryArea = sortedAreas[1];
    const avoidArea = sortedAreas[sortedAreas.length - 1];

    let explanation = '';
    
    // More nuanced explanations based on answer combinations
    if (finalAnswers.usage === 'rental' && finalAnswers.rental === 'critical' && primaryArea === 'dewey') {
      explanation = 'Dewey Beach offers the strongest rental ROI in Delaware beaches, with weekly rentals often hitting $3-5k+ in summer. The party scene attracts younger renters willing to pay premium rates. Expect noise and wear-and-tear, but numbers work better here than anywhere else.';
    } else if (finalAnswers.budget === 'under-500k' && primaryArea === 'milton') {
      explanation = 'Milton gives you the most house for your money while staying connected to beach culture. You\'re 12-15 minutes to Rehoboth, but you get space, parking, and a real year-round community. Perfect if you\'re value-focused but still want weekend beach access.';
    } else if (finalAnswers.walkability === 'essential' && primaryArea === 'rehoboth') {
      explanation = 'Rehoboth is the only town where you can truly live car-free in summer. Walk to groceries, restaurants, and beach daily. You\'ll pay a premium for this convenience, and parking is tight, but the walkable lifestyle is worth it for many buyers.';
    } else if (finalAnswers.crowds === 'avoid' && (primaryArea === 'milton' || primaryArea === 'lewes')) {
      explanation = `${areaInfo[primaryArea].name} gives you beach access without tourist chaos. You\'ll drive 10-20 minutes to swim, but your daily life stays peaceful. Perfect for year-round living or buyers who want off-season calm.`;
    } else if (finalAnswers.community === 'quiet-peaceful' && primaryArea === 'bethany') {
      explanation = 'Bethany Beach is built for peace and quiet. The no-alcohol beach policy keeps it calm, rentals are mostly weekly (not party weekends), and the town character skews toward relaxation. Less nightlife, more bocce and ice cream.';
    } else if (finalAnswers.parking === 'need-driveway' && (primaryArea === 'milton' || primaryArea === 'bethany' || primaryArea === 'lewes')) {
      explanation = `${areaInfo[primaryArea].name} solves the parking nightmare common in beach towns. Most properties have driveways or garage space. You won\'t circle for 20 minutes or pay $500/month for a parking spot like you might in Rehoboth or Dewey.`;
    } else if (finalAnswers.proximity === 'bay-ok' && primaryArea === 'lewes') {
      explanation = 'Lewes offers canal and bay access that often beats ocean properties on price. You get water views, boat docks, and can still drive to ocean beaches in 5-10 minutes. Plus, the historic downtown rivals Rehoboth for walkability.';
    } else if (primaryArea === 'rehoboth') {
      explanation = 'Rehoboth Beach is the balanced choice: walkable downtown, strong rental potential, year-round appeal, and good resale value. It\'s the premium option with premium pricing, but it delivers on multiple fronts whether you\'re buying for lifestyle, investment, or both.';
    } else if (primaryArea === 'dewey') {
      explanation = 'Dewey Beach is the action town - bars, restaurants, younger demographics, and top-tier rental yields. It\'s loud in summer and quiet in winter. Great for investors or buyers who embrace the party energy as part of the beach experience.';
    } else if (primaryArea === 'lewes') {
      explanation = 'Lewes offers historic character without the Rehoboth crowds or prices. It\'s more year-round resident-focused, with a real town feel beyond tourism. You get charm, walkability in the historic district, and proximity to Cape Henlopen State Park.';
    } else {
      explanation = `Based on your answers, ${areaInfo[primaryArea].name} aligns best with your goals and budget. ${areaInfo[primaryArea].description}.`;
    }

    setResult({
      primaryArea,
      secondaryArea,
      avoidArea,
      explanation,
    });
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setResult(null);
  };

  if (result) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-coastal-seafoam/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-coastal-seafoam" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-3xl font-serif font-bold text-coastal-blue dark:text-white mb-4">
              Your Results
            </h2>
          </div>

          <div className="space-y-6 mb-8">
            <div className="bg-coastal-sand dark:bg-gray-900 p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-semibold text-coastal-seafoam uppercase tracking-wide">
                  Best Match
                </span>
              </div>
              <h3 className="text-2xl font-bold text-coastal-blue dark:text-white mb-2">
                {areaInfo[result.primaryArea].name}
              </h3>
              <p className="text-coastal-slate dark:text-gray-300">
                {areaInfo[result.primaryArea].description}
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                  Secondary Option
                </span>
              </div>
              <h3 className="text-xl font-bold text-coastal-blue dark:text-white mb-2">
                {areaInfo[result.secondaryArea].name}
              </h3>
              <p className="text-coastal-slate dark:text-gray-300 text-sm">
                {areaInfo[result.secondaryArea].description}
              </p>
            </div>

            <div className="bg-accent-rust/10 dark:bg-gray-900 p-6 rounded-xl border border-accent-rust/20">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-semibold text-accent-rust uppercase tracking-wide">
                  Area to Avoid
                </span>
              </div>
              <h3 className="text-xl font-bold text-coastal-blue dark:text-white mb-2">
                {areaInfo[result.avoidArea].name}
              </h3>
              <p className="text-coastal-slate dark:text-gray-300 text-sm">
                Based on your answers, this area likely won&apos;t meet your needs.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl mb-6">
            <h4 className="font-semibold text-coastal-blue dark:text-white mb-2">
              Why This Recommendation:
            </h4>
            <p className="text-coastal-slate dark:text-gray-300 leading-relaxed">
              {result.explanation}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`sms:+15550000100?&body=Hi,%20I%20took%20the%20quiz%20and%20got%20${encodeURIComponent(areaInfo[result.primaryArea].name)}%20as%20my%20result.%20Can%20we%20discuss?`}
              className="flex-1 px-6 py-4 bg-coastal-blue text-white font-semibold rounded-xl hover:bg-coastal-slate transition-all text-center shadow-lg"
            >
              Want Help Sanity-Checking This?
            </a>
            <button
              onClick={resetQuiz}
              className="px-6 py-4 bg-white dark:bg-gray-700 text-coastal-blue dark:text-white font-semibold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-600 transition-all border border-gray-200 dark:border-gray-600"
            >
              Retake Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-coastal-slate dark:text-gray-400">
            Question {currentStep + 1} of {questions.length}
          </span>
          <span className="text-sm font-medium text-coastal-slate dark:text-gray-400">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-coastal-blue transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 min-h-[400px] flex flex-col">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-coastal-blue dark:text-white mb-8">
          {currentQuestion.question}
        </h2>

        <div className="space-y-3 flex-1">
          {currentQuestion.options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleAnswer(currentQuestion.id, option.value)}
              className="w-full text-left p-5 bg-coastal-sand dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-all border-2 border-transparent hover:border-coastal-blue group"
            >
              <span className="text-lg text-coastal-slate dark:text-gray-200 group-hover:text-coastal-blue dark:group-hover:text-blue-400 font-medium">
                {option.label}
              </span>
            </button>
          ))}
        </div>

        {currentStep > 0 && (
          <button
            onClick={() => setCurrentStep(currentStep - 1)}
            className="mt-6 text-coastal-slate dark:text-gray-400 hover:text-coastal-blue dark:hover:text-blue-400 font-medium flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M15 19l-7-7 7-7" />
            </svg>
            Previous Question
          </button>
        )}
      </div>
    </div>
  );
}
