export interface Listing {
  id: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  url: string;
  source: 'brokerage' | 'team';
  status: 'active' | 'pending' | 'sold';
  daysOnMarket?: number;
}

// Sample placeholder listings - replace with real data when available
export const SAMPLE_LISTINGS: Listing[] = [
  {
    id: '1',
    address: '123 Ocean Avenue',
    city: 'Rehoboth Beach',
    state: 'DE',
    zip: '19971',
    price: 1250000,
    beds: 4,
    baths: 3,
    sqft: 2400,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
    url: 'https://www.yourbrokerage.com/property-detail',
    source: 'brokerage',
    status: 'active',
    daysOnMarket: 5,
  },
  {
    id: '2',
    address: '456 Beach Walk',
    city: 'Dewey Beach',
    state: 'DE',
    zip: '19971',
    price: 875000,
    beds: 3,
    baths: 2,
    sqft: 1800,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
    url: 'https://www.yourbrokerage.com/property-detail',
    source: 'team',
    status: 'active',
    daysOnMarket: 12,
  },
  {
    id: '3',
    address: '789 Coastal Highway',
    city: 'Rehoboth Beach',
    state: 'DE',
    zip: '19971',
    price: 599000,
    beds: 2,
    baths: 2,
    sqft: 1200,
    image: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=800&h=600&fit=crop',
    url: 'https://www.yourbrokerage.com/property-detail',
    source: 'brokerage',
    status: 'active',
    daysOnMarket: 3,
  },
  {
    id: '4',
    address: '321 Bay View Drive',
    city: 'Lewes',
    state: 'DE',
    zip: '19958',
    price: 1450000,
    beds: 5,
    baths: 4,
    sqft: 3200,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
    url: 'https://www.yourbrokerage.com/property-detail',
    source: 'team',
    status: 'active',
    daysOnMarket: 8,
  },
  {
    id: '5',
    address: '654 Savannah Road',
    city: 'Rehoboth Beach',
    state: 'DE',
    zip: '19971',
    price: 725000,
    beds: 3,
    baths: 2.5,
    sqft: 1650,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
    url: 'https://www.yourbrokerage.com/property-detail',
    source: 'brokerage',
    status: 'active',
    daysOnMarket: 15,
  },
  {
    id: '6',
    address: '987 Lighthouse Lane',
    city: 'Bethany Beach',
    state: 'DE',
    zip: '19930',
    price: 950000,
    beds: 4,
    baths: 3.5,
    sqft: 2100,
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop',
    url: 'https://www.yourbrokerage.com/property-detail',
    source: 'team',
    status: 'active',
    daysOnMarket: 7,
  },
  {
    id: '7',
    address: '234 Atlantic Avenue',
    city: 'Rehoboth Beach',
    state: 'DE',
    zip: '19971',
    price: 1850000,
    beds: 5,
    baths: 4.5,
    sqft: 3800,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
    url: 'https://www.yourbrokerage.com/property-detail',
    source: 'brokerage',
    status: 'active',
    daysOnMarket: 2,
  },
  {
    id: '8',
    address: '567 Canal Street',
    city: 'Dewey Beach',
    state: 'DE',
    zip: '19971',
    price: 675000,
    beds: 2,
    baths: 2,
    sqft: 1400,
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop',
    url: 'https://www.yourbrokerage.com/property-detail',
    source: 'team',
    status: 'active',
    daysOnMarket: 10,
  },
];

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('en-US').format(num);
};
