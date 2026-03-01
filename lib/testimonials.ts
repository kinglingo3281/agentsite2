export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  propertyType?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Verified Buyer',
    location: 'Rehoboth Beach',
    rating: 5,
    text: 'Absolutely incredible to work with. Patient, kind, and truly listens to what you want. The honesty and guidance made our family feel supported every step of the way. Clear communication throughout the entire process and always made time to sit down and answer our questions.',
    propertyType: 'Townhouse'
  },
  {
    id: '2',
    name: 'Verified Seller',
    location: 'Lewes',
    rating: 5,
    text: 'Incredibly knowledgeable and guided us through every step of selling our second home in Lewes, Delaware. The communication was impeccable and if there was an issue that needed to be addressed, the solution pleased both myself and the buyer.',
    propertyType: 'Condo'
  },
  {
    id: '3',
    name: 'Verified Buyer',
    location: 'Lewes',
    rating: 5,
    text: 'We had a great experience. Attentive and involved throughout our process and we always felt our best interests were the priority. Knowledge of the Sussex county area was very helpful as we navigated options and considered long term value.',
    propertyType: 'Single Family'
  },
  {
    id: '4',
    name: 'Verified Seller',
    location: 'Rehoboth Beach',
    rating: 5,
    text: 'We had a fantastic experience. The entire home-selling process was incredibly easy, with guidance every step of the way. Everything was quick and efficient. Our home was marketed wonderfully, and the negotiation process was completely stress-free.',
    propertyType: 'Single Family'
  },
  {
    id: '5',
    name: 'Verified Buyer',
    location: 'Rehoboth Beach',
    rating: 5,
    text: 'Simply amazing! Made the home buying process a breeze. Super knowledgeable, always available, and genuinely caring. Highly recommend for anyone looking for a top-notch realtor. You won\'t be disappointed!',
    propertyType: 'Single Family'
  },
  {
    id: '6',
    name: 'Verified Buyer',
    location: 'Wilmington',
    rating: 5,
    text: 'The perfect example of an excellent realtor. Prompt and timely in getting us the opportunity to see a number of properties. When writing an offer, turnaround time was fantastic. Always available by phone and responsive for any questions. Knowledge, personality, and character helped make this such a wonderful experience.',
    propertyType: 'Single Family'
  },
  {
    id: '7',
    name: 'Verified Buyer',
    location: 'Lewes',
    rating: 5,
    text: 'We were hesitant at first due to a previous experience with another company. A friend suggested this agent given the long successful career in rentals transitioning to selling homes. Best decision we made!',
    propertyType: 'Single Family'
  }
];
