import { ReactNode } from 'react';

interface SectionProps {
  children?: ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'dark';
  id?: string;
}

export default function Section({
  children,
  className = '',
  background = 'white',
  id,
}: SectionProps) {
  const bgClasses = {
    white: 'bg-white dark:bg-gray-950',
    gray: 'bg-coastal-sand dark:bg-gray-900',
    dark: 'bg-coastal-blue dark:bg-gray-950 text-white',
  };

  return (
    <section
      id={id}
      className={`py-8 sm:py-10 lg:py-12 ${bgClasses[background]} ${className}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
