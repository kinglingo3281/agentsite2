export interface ListingPreset {
  id: string;
  label: string;
  description: string;
  url: string;
  embed: boolean;
  cropTopDesktop: number;
  cropTopMobile: number;
  cropLeft?: number;
}

export const DEFAULT_EMBED_URL = 'https://www.yourbrokerage.com/delaware-real-estate/rehoboth-beach';

export const PRESETS: ListingPreset[] = [
  {
    id: 'rehoboth-map',
    label: 'Map View (Rehoboth)',
    description: 'Interactive map of homes in Rehoboth Beach area',
    url: 'https://www.yourbrokerage.com/real-estate/map-search?location=Rehoboth+Beach',
    embed: true,
    cropTopDesktop: 0,
    cropTopMobile: 80,
  },
  {
    id: 'new-listings',
    label: 'Newest Listings',
    description: 'Recently added homes in Sussex County',
    url: 'https://www.yourbrokerage.com/real-estate/new-listings?area=19971',
    embed: true,
    cropTopDesktop: 10,
    cropTopMobile: 100,
  },
  {
    id: 'condos',
    label: 'Condos',
    description: 'Condominiums in Rehoboth and nearby',
    url: 'https://www.yourbrokerage.com/real-estate/condos?city=Rehoboth+Beach',
    embed: true,
    cropTopDesktop: 0,
    cropTopMobile: 70,
  },
  {
    id: 'waterfront',
    label: 'Waterfront Homes',
    description: 'Properties with ocean or bay views',
    url: 'https://www.yourbrokerage.com/real-estate/waterfront?zip=19971',
    embed: true,
    cropTopDesktop: 20,
    cropTopMobile: 120,
  },
  {
    id: 'under-750k',
    label: 'Under $750k',
    description: 'Affordable options in 19971',
    url: 'https://www.yourbrokerage.com/real-estate/search?maxPrice=750000&zip=19971',
    embed: true,
    cropTopDesktop: 0,
    cropTopMobile: 80,
  },
  {
    id: 'carrie-rehoboth',
    label: 'Rehoboth Beach (Team)',
    description: 'Team-specific listings in Rehoboth',
    url: 'https://www.yourbrokerage.com/featured-areas/rehoboth-beach.html',
    embed: true,
    cropTopDesktop: 10,
    cropTopMobile: 100,
  },
  {
    id: 'dewey-beach',
    label: 'Dewey Beach Homes',
    description: 'Nearby Dewey listings',
    url: 'https://www.yourbrokerage.com/delaware-real-estate/dewey-beach',
    embed: true,
    cropTopDesktop: 0,
    cropTopMobile: 80,
  },
  {
    id: 'lewes',
    label: 'Lewes Area',
    description: 'Homes in Lewes, close to Rehoboth',
    url: 'https://www.yourbrokerage.com/featured-areas/lewes.html',
    embed: false,
    cropTopDesktop: 100,
    cropTopMobile: 200,
  },
  {
    id: 'open-houses',
    label: 'Open Houses',
    description: 'Upcoming viewings in the area',
    url: 'https://www.yourbrokerage.com/real-estate/open-houses?area=Sussex+County',
    embed: true,
    cropTopDesktop: 0,
    cropTopMobile: 70,
  },
  {
    id: 'lots-land',
    label: 'Lots & Land',
    description: 'Buildable land in 19971',
    url: 'https://www.yourbrokerage.com/real-estate/lots-land?zip=19971',
    embed: true,
    cropTopDesktop: 20,
    cropTopMobile: 120,
  },
];

export const getPresetById = (id: string): ListingPreset | undefined => {
  return PRESETS.find(preset => preset.id === id);
};
