import Link from 'next/link';

interface LifestyleTile {
  id: string;
  title: string;
  description: string;
  icon: string;
  presetId: string;
}

const tiles: LifestyleTile[] = [
  {
    id: 'beach',
    title: 'Walk to Beach',
    description: 'Easy beach access',
    icon: '🏖️',
    presetId: 'rehoboth-map',
  },
  {
    id: 'downtown',
    title: 'Downtown Rehoboth',
    description: 'In the heart of it all',
    icon: '🏪',
    presetId: 'rehoboth-map',
  },
  {
    id: 'condos',
    title: 'Condos',
    description: 'Low-maintenance living',
    icon: '🏢',
    presetId: 'condos',
  },
  {
    id: 'waterfront',
    title: 'Waterfront',
    description: 'Ocean & bay views',
    icon: '🌊',
    presetId: 'waterfront',
  },
  {
    id: 'rental',
    title: 'Rental-Friendly',
    description: 'Investment properties',
    icon: '💰',
    presetId: 'new-listings',
  },
  {
    id: 'new',
    title: 'New Construction',
    description: 'Brand new homes',
    icon: '🏗️',
    presetId: 'new-listings',
  },
];

export default function LifestyleTiles() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
      {tiles.map((tile) => (
        <Link
          key={tile.id}
          href={`/search?p=${tile.presetId}`}
          className="group block p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700"
        >
          <div className="text-4xl mb-3">{tile.icon}</div>
          <h3 className="font-semibold text-lg mb-1 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {tile.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {tile.description}
          </p>
        </Link>
      ))}
    </div>
  );
}
