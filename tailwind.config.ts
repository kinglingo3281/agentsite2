import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        'safe': 'env(safe-area-inset-bottom)',
        'safe-top': 'env(safe-area-inset-top)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        coastal: {
          blue: '#0E2A47',
          sand: '#F5F1EB',
          seafoam: '#7FA7A0',
          slate: '#3A3F45',
          gold: '#C9A14A',
        },
        area: {
          rehoboth: '#7FA7A0',
          dewey: '#E5D5C0',
          lewes: '#2C4A6B',
          milton: '#6B8E6B',
        },
        accent: {
          rust: '#B85C50',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'sans-serif'],
      },
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '250': '250ms',
      },
    },
  },
  plugins: [],
};

export default config;
