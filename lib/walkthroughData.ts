export interface Walkthrough {
  id: string;
  videoUrl?: string;
  imageUrl: string;
  address: string;
  price: string;
  whyItMatters: string;
  tags: string[];
  detailUrl: string;
}

export const FEATURED_WALKTHROUGHS: Walkthrough[] = [
  {
    id: 'desu2101298',
    imageUrl: '/images/listings/116-spinnaker/photo_1.jpg',
    address: '116 S Spinnaker Ln, Milton',
    price: 'View Listing',
    whyItMatters: 'Milton offers exceptional value. Minutes from Rehoboth and Lewes beaches with more space for your budget.',
    tags: ['Strategic Location', 'Value', 'Family-Friendly'],
    detailUrl: '/listings/116-s-spinnaker-ln-milton',
  },
];
