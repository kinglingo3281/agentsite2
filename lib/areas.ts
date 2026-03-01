export interface Area {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  vibe: string;
  whoItsFor: string;
  highlights: string[];
  idealFor?: string[];
  mixedFor?: string[];
  notGreatFor?: string[];
  marketReality?: {
    medianPrice: string;
    typicalBuyer: string;
    marketSpeed: string;
  };
  gotchas?: string[];
  seasonalNotes: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  searchPresetId?: string;
  description?: string;
  heroImage?: string;
  galleryImages?: string[];
  localFavorites?: Array<{
    name: string;
    category: string;
    description: string;
    url?: string;
  }>;
  seasonalHighlights?: {
    summer: string;
    fall: string;
    winter: string;
    spring: string;
  };
}

export const AREAS: Area[] = [
  {
    id: 'rehoboth-beach',
    name: 'Rehoboth Beach',
    slug: 'rehoboth-beach',
    shortDescription: 'The premier beach town of Delaware with year-round appeal',
    vibe: 'Classic coastal charm meets vibrant downtown energy. Think mile-long boardwalk lined with Thrasher\'s Fries and Dolle\'s saltwater taffy, tax-free shopping on Rehoboth Avenue, and a restaurant scene that rivals much larger cities. The Pines and North Shores neighborhoods offer tree-lined streets within walking distance of everything, while Henlopen Acres delivers luxury estates. Summer brings crowds but also live music, outdoor movies, and a genuine beach town buzz. Off-season reveals the year-round community: local coffee shops, art galleries, and neighbors who actually live here.',
    whoItsFor: 'Beach lovers, families, retirees seeking a walkable lifestyle, vacation rental investors',
    highlights: [
      'Mile-long boardwalk with restaurants and shops',
      'Tax-free shopping on Rehoboth Avenue',
      'Year-round events and festivals',
      'Strong rental market for investors',
      'Excellent dining and nightlife scene',
      'Cape Henlopen State Park adjacent',
      'Popular neighborhoods: Pines, North Shores, Henlopen Acres',
      'Walkable downtown with 100+ shops and restaurants',
    ],
    idealFor: ['Second home buyers', 'Walkability seekers', 'Strong rental income potential', 'Year-round residents who want activity'],
    mixedFor: ['Budget-conscious buyers (premium pricing)', 'Extreme quiet seekers (summer crowds)'],
    notGreatFor: ['First-time buyers under $500k', 'Those avoiding tourist areas', 'Seeking large lots'],
    marketReality: {
      medianPrice: '$885,000',
      typicalBuyer: 'Second home owners, rental investors',
      marketSpeed: 'Fast (properties move in 30-60 days)',
    },
    gotchas: [
      'Parking is the #1 complaint. Properties with off-street parking sell for way more than those without. Street parking in summer is basically impossible within walking distance of the beach.',
      'Flood insurance is a major issue. Many companies won\'t insure coastal properties at all anymore, and when you can get it, costs vary wildly by block. Get quotes early before you commit to a property.',
      'HOA fees in some condo buildings can run over $1,000/month. Factor these into your rental math, they\'re not just maintenance, they\'re ongoing carrying costs.',
      'Summer traffic - Friday and Saturday afternoons can add serious time to your drive from DC or Baltimore.',
    ],
    seasonalNotes: 'Peak season (June-August) means crowds and premium pricing. Off-season is quieter with actual locals around. Most rental properties make their money during these summer months.',
    faqs: [
      {
        question: 'What is the average home price in Rehoboth Beach?',
        answer: 'Home prices vary widely based on proximity to the beach and property type. Expect $600k-$2.5M+ for single-family homes near the beach, with condos starting around $350k-$400k.',
      },
      {
        question: 'Can I rent out my Rehoboth Beach property?',
        answer: 'Yes, Rehoboth is rental-friendly. Many owners offset costs with weekly summer rentals.',
      },
      {
        question: 'How far is Rehoboth from major cities?',
        answer: 'Rehoboth is approximately 2 hours from Baltimore, 2.5 hours from Philadelphia, and 3 hours from Washington DC.',
      },
      {
        question: 'What are the property taxes like?',
        answer: 'Delaware has no sales tax, but property taxes vary by municipality. Rehoboth rates are moderate compared to neighboring states.',
      },
      {
        question: 'Is Rehoboth Beach a year-round community?',
        answer: 'Yes! While population swells in summer, there\'s a strong year-round community with local restaurants, shops, and events throughout the year.',
      },
    ],
    searchPresetId: 'rehoboth-map',
    heroImage: '/images/areas/rehoboth/hero.webp',
    galleryImages: [
      '/images/areas/rehoboth/reho.jpg',
      '/images/areas/rehoboth/reho4.jpg',
      '/images/areas/rehoboth/reho6.jpg',
    ],
    localFavorites: [
      { name: 'Rehoboth Beach Boardwalk', category: 'Landmark', description: 'Mile-long boardwalk with classic beach arcade, food stands, and ocean views. The heart of summer activity.', url: 'https://www.cityofrehoboth.com/boardwalk' },
      { name: 'Rehoboth Avenue Dining Scene', category: 'Dining', description: 'Downtown restaurant district. Everything from casual to upscale. Reservations needed in summer.', url: 'https://www.yelp.com/search?find_desc=Restaurants&find_loc=Rehoboth+Avenue%2C+Rehoboth+Beach%2C+DE' },
      { name: 'Outlet Shopping', category: 'Shopping', description: 'Tanger Outlets with tax-free shopping. Major brands, always busy on weekends.', url: 'https://www.tangeroutlet.com/rehoboth' },
      { name: 'Gordon\'s Pond Beach', category: 'Outdoors', description: 'Part of Cape Henlopen State Park. Bike trail access, less crowded beach, nature trails. Locals\' choice over downtown beach.', url: 'https://www.destateparks.com/Beaches/CapeHenlopen/GordonsPond' },
    ],
    seasonalHighlights: {
      summer: 'Peak season. Beaches are packed, boardwalk has concerts and movies. Traffic sucks, parking is impossible. This is when rental properties make their money.',
      fall: 'Sea Witch Festival in October brings huge crowds. After that, beaches quiet down and locals-only spots reopen. Weather is perfect for long walks.',
      winter: 'Year-round folks come out. Plenty of restaurants stay open, Christmas parade is nice. Beach to yourself. Cold but peaceful.',
      spring: 'Shoulder season, mild weather. Restaurants reopen, rentals start booking up. Good time to buy before summer competition gets crazy.',
    },
  },
  {
    id: 'dewey-beach',
    name: 'Dewey Beach',
    slug: 'dewey-beach',
    shortDescription: 'Energetic beach town known for watersports and nightlife',
    vibe: 'Squeezed onto a narrow strip between Rehoboth Bay and the Atlantic, this mile-long town packs serious energy. The Bottle & Cork, Starboard, Rusty Rudder - these aren\'t just bars, they\'re Dewey institutions where summer weekends mean live bands and packed patios. The bay side is all about water sports: kiteboarding, paddleboarding, jet skis. The ocean side is pure beach scene. It\'s compact enough to walk everywhere (if you can find parking). Most properties are weekly rentals in summer, but the off-season is practically deserted. This isn\'t a year-round lifestyle, it\'s a high-octane summer investment play.',
    whoItsFor: 'Active lifestyles, water sports enthusiasts, those seeking a social beach scene, weekend warriors',
    highlights: [
      'Bay and ocean access for water sports',
      'Vibrant nightlife and beach bars',
      'Smaller, more compact than Rehoboth',
      'Strong vacation rental demand',
      'Close to Rehoboth amenities',
      'Tight-knit community feel',
    ],
    idealFor: ['Rental income seekers (highest ROI)', 'Active/social lifestyle', 'Water sports enthusiasts', 'Weekend getaway owners'],
    mixedFor: ['Quiet seekers (summer noise)', 'Year-round living'],
    notGreatFor: ['Retirees seeking tranquility', 'Those sensitive to noise', 'Looking for large properties'],
    marketReality: {
      medianPrice: '$1,340,000',
      typicalBuyer: 'Investment/rental buyers, active couples',
      marketSpeed: 'Very fast (high demand, extremely limited inventory)',
    },
    gotchas: [
      'Noise is real. Close to Coastal Highway means hearing the bars until 1am on summer weekends. Noise ordinances exist but enforcement is hit or miss. Rental guests might love it, you might not.',
      'Parking isn\'t just tight, it\'s a deal-breaker. Properties without dedicated spots are much harder to rent. Renters skip them.',
      'Off-season slows down a lot, and many places close for the period. With the exception of a handful of restaurants, most close down November through April.',

      'Weekly turnover costs add up fast. Cleaning, linens, maintenance between renters. Don\'t just look at gross rental income, your actual take-home is way less after expenses.',
      'Beach erosion is ongoing. Some oceanfront properties have lost beach access over the years. Look at historical photos before buying ocean-facing.',
    ],
    seasonalNotes: 'Peak summer season is extremely busy with a younger demographic. Off-season is very quiet. Properties typically have excellent rental income potential.',
    faqs: [
      {
        question: 'How does Dewey Beach differ from Rehoboth?',
        answer: 'Dewey is smaller, more party-oriented, and appeals to a younger crowd. It\'s known for beach bars and water sports versus Rehoboth\'s family-friendly boardwalk.',
      },
      {
        question: 'What are typical home prices in Dewey Beach?',
        answer: 'Dewey properties range from $500k-$700k for condos to $2M+ for bay or oceanfront homes. Premium waterfront can exceed $3M. Limited inventory drives higher prices.',
      },
      {
        question: 'Is Dewey Beach good for rentals?',
        answer: 'Excellent! Dewey has strong demand for weekly rentals, especially from groups. ROI can be significant for well-located properties.',
      },
      {
        question: 'Can I kayak or paddleboard in Dewey?',
        answer: 'Absolutely. Dewey\'s location between the bay and ocean makes it ideal for all water sports including kayaking, paddleboarding, and kiteboarding.',
      },
      {
        question: 'Is parking difficult in Dewey Beach?',
        answer: 'Yes, during peak season. Most properties include parking, which is a major selling point. Street parking is limited.',
      },
    ],
    searchPresetId: 'dewey-beach',
    heroImage: '/images/dewey.jpg',
    galleryImages: [
      '/images/areas/dewey/dewey2.jpeg',
      '/images/areas/dewey/dewey3.jpeg',
      '/images/areas/dewey/dewey3.jpg',
    ],
    localFavorites: [
      { name: 'Coastal Highway Bar Strip', category: 'Nightlife', description: 'The Starboard, Bottle & Cork, Northbeach. This is where Dewey parties. Live music, packed crowds, summer energy.', url: 'https://www.yelp.com/search?find_desc=Bars&find_loc=Dewey+Beach%2C+DE' },
      { name: 'Bay-to-Beach Water Sports', category: 'Water Sports', description: 'Rehoboth Bay side for kayaking, paddleboarding, kiteboarding. Calmer water, equipment rentals everywhere.', url: 'https://www.google.com/maps/search/water+sports+rentals+dewey+beach+de' },
      { name: 'Dewey Beach Bayside', category: 'Outdoors', description: 'Quieter bay side with sunset views. Good for families during the day, less chaotic than ocean side.', url: 'https://www.townofdeweybeach.com/' },
      { name: 'Beach Volleyball Courts', category: 'Recreation', description: 'Free public courts on the beach. Pickup games all summer, tournaments on weekends.', url: 'https://www.townofdeweybeach.com/parks-recreation' },
    ],
    seasonalHighlights: {
      summer: 'Party season. Bars packed Thursday through Sunday. Beach volleyball, water sports, live music every night. This is what Dewey does.',
      fall: 'Dies down hard after Labor Day. Most bars close or go weekend-only. Good for water sports without fighting crowds.',
      winter: 'Ghost town. Almost everything closes. A handful of people stick around but this isn\'t a winter spot.',
      spring: 'Slow ramp up starting in May. Memorial Day weekend kicks off the season officially. Rental bookings surge.',
    },
  },
  {
    id: 'lewes',
    name: 'Lewes',
    slug: 'lewes',
    shortDescription: 'Historic coastal town with character, sophistication, and waterfront living',
    vibe: 'Lewes feels like a different era. Founded in 1631, this is Delaware\'s First Town, and the historic district shows it: 18th-century homes, brick sidewalks, and preservation rules that keep chain stores out. Second Street is lined with galleries, boutique shops, and restaurants where locals outnumber tourists even in July. Cape Henlopen State Park borders the town with miles of trails and beaches. The ferry to Cape May adds a touch of romance (and summer traffic). Golf communities like Baywood Greens and Kings Creek draw retirees who want resort amenities without resort crowds. The canal communities - Canary Creek, Lewes Yacht Club - offer boat slips and waterfront living. This isn\'t party-beach, it\'s settle-down-beach.',
    whoItsFor: 'History buffs, retirees, those seeking a quieter beach lifestyle, golf enthusiasts',
    highlights: [
      'Historic downtown with unique shops and galleries',
      'Cape Henlopen State Park with beaches and trails',
      'Cape May-Lewes Ferry to New Jersey',
      'Golf communities nearby (Baywood, Kings Creek, Bear Trap)',
      'Less crowded than Rehoboth',
      'Good arts scene and local breweries',
      'Canal-front properties and marinas',
      'Annual Coast Day festival',
    ],
    idealFor: ['Year-round residents', 'Retirees', 'Golf community seekers', 'Historic character enthusiasts', 'Quieter beach lifestyle'],
    mixedFor: ['Rental income (lower than Rehoboth/Dewey)', 'Nightlife seekers', 'Those wanting walking-distance beach'],
    notGreatFor: ['Party/nightlife seekers', 'Investors focused purely on ROI', 'Those needing immediate beach access'],
    marketReality: {
      medianPrice: '$983,000',
      typicalBuyer: 'Retirees, year-round residents, second home owners',
      marketSpeed: 'Medium (60-90 days typical)',
    },
    gotchas: [
      'Historic district restrictions are real. Want to replace windows? Need approval. Paint color? Approval. Roof material? Same deal. The Historic Preservation Commission protects the character but limits what you can change.',
      'Most Lewes neighborhoods aren\'t beach walking distance. You\'re driving or biking to Cape Henlopen. Only some pricey canal-front areas have direct water access.',
      'Ferry traffic backs up summer weekends. A normally quick drive to downtown can take a while when the ferry unloads.',
      'Golf community HOAs can run several hundred a month on top of property taxes. Make sure the amenities are worth it for how you\'ll actually use them.',
      'Rental income is lower here than Rehoboth or Dewey. This is more about lifestyle than making money on rentals.',
    ],
    seasonalNotes: 'More balanced year-round population than Dewey or Rehoboth. Summer is busy but manageable. Excellent for those seeking beach access without resort crowds.',
    faqs: [
      {
        question: 'Is Lewes quieter than Rehoboth Beach?',
        answer: 'Yes, much quieter. Lewes has a more laid-back, historic feel. You won\'t find the crowds or nightlife of Rehoboth or Dewey here.',
      },
      {
        question: 'What are home prices like in Lewes?',
        answer: 'Wide range: $500k-$2.5M+ depending on location and waterfront access. Golf communities like Baywood Greens and Kings Creek offer homes from $400k-$800k.',
      },
      {
        question: 'Are there good restaurants in Lewes?',
        answer: 'Excellent dining scene with locally-owned restaurants, farm-to-table options, and waterfront spots. Less touristy than Rehoboth.',
      },
      {
        question: 'Can I take a ferry from Lewes?',
        answer: 'Yes! The Cape May-Lewes Ferry connects Delaware to New Jersey and is popular for day trips and accessing North Jersey/NYC.',
      },
      {
        question: 'Are there golf courses near Lewes?',
        answer: 'Several excellent golf communities including Rehoboth Beach Country Club, Baywood Greens, and others within 15 minutes.',
      },
    ],
    searchPresetId: 'lewes',
    heroImage: '/images/areas/lewes/hero.png',
    galleryImages: [
      '/images/areas/lewes/lewes1.jpg',
      '/images/areas/lewes/lewes2.jpg',
      '/images/areas/lewes/lewes3.jpg',
    ],
    localFavorites: [
      { name: 'Historic District', category: 'Landmark', description: 'Walkable downtown with 18th century architecture, boutiques, galleries, restaurants. Feels like a real town, not just tourist trap.', url: 'https://www.historiclewes.org/' },
      { name: 'Cape May-Lewes Ferry', category: 'Transportation', description: '17-mile crossing to Cape May, NJ. Scenic ride, makes a good day trip. Ferry terminal area has shops and restaurants.', url: 'https://www.cmlf.com/' },
      { name: 'Second Street Dining', category: 'Dining', description: 'Restaurant row with farm-to-table spots, craft cocktails, wine bars. More upscale than beach town casual.', url: 'https://www.yelp.com/search?find_desc=Restaurants&find_loc=Second+Street%2C+Lewes%2C+DE' },
      { name: 'Cape Henlopen State Park', category: 'Outdoors', description: 'Beach access, nature trails, bike paths, fishing pier. Less crowded than Rehoboth beaches.', url: 'https://www.destateparks.com/Beaches/CapeHenlopen' },
    ],
    seasonalHighlights: {
      summer: 'Busy but not crazy. Ferry traffic backs things up on weekends. Cape Henlopen beach is easy to access. Farmers market Saturdays.',
      fall: 'Coast Day Festival brings crowds. Otherwise weather is perfect, traffic lightens up. Golf courses at their best. Good time to explore.',
      winter: 'Year-round places stay open. Historic district looks good with holiday decorations. Ferry still runs but not as often.',
      spring: 'Tulip festival, garden tours. Historic homes open up. Nice weather before the summer people show up.',
    },
  },
  {
    id: 'milton',
    name: 'Milton',
    slug: 'milton',
    shortDescription: 'Charming inland town with historic appeal and value',
    vibe: 'Milton is the anti-beach-town. No boardwalk, no saltwater taffy, no summer traffic nightmares. What you get is a real small town with a historic Main Street, the Milton Theatre for live shows, Dogfish Head\'s original brewpub, and restaurants that don\'t charge beach prices. Wagamons Pond has kayaking and nature trails. New construction is popping up with $400k-$600k homes that would cost double at the beach. Schools are good (Milton Elementary ranks in Delaware\'s top 20%). Most people drive 15 minutes to the beach when they want it, trading the commute for way lower costs and an actual neighborhood. This is where young families and budget-minded retirees end up when they want coastal Delaware without the coastal price tag.',
    whoItsFor: 'Budget-conscious buyers, those seeking small-town community, artists, commuters who want beach access without beach pricing',
    highlights: [
      'Significantly more affordable than beach towns',
      '15-20 minutes to Rehoboth and Lewes beaches',
      'Growing downtown with restaurants and Milton Theatre',
      'Tight-knit year-round community',
      'Highly-rated Milton Elementary (Top 20% in Delaware)',
      'Wagamons Pond for kayaking and nature',
      'New construction communities expanding',
      'Local breweries and farm-to-table dining',
    ],
    idealFor: ['Budget-conscious buyers', 'Year-round residents', 'Those who drive to beach anyway'],
    mixedFor: ['Rental income seekers (limited demand)', 'Walkability preferences', 'Beach-adjacent lifestyle'],
    notGreatFor: ['Weekly vacation rental investors', 'Those wanting beach within 5 minutes', 'Luxury buyers'],
    marketReality: {
      medianPrice: '$480,000',
      typicalBuyer: 'Primary residents, families, retirees on budget',
      marketSpeed: 'Medium (67-90 days typical)',
    },
    gotchas: [
      'Zero vacation rental demand. People don\'t come to Milton for beach weeks. If you\'re buying for rental income, wrong market. Long-term rentals work but returns are modest.',
      'New construction quality varies. Some builders are great, others cut corners. Get inspections and ask locals before buying new.',
      'Dining and shopping are limited, but there are a handful of local spots including the famous Dogfish Head. Drive to Rehoboth or Lewes for variety.',
      'Resale takes longer. Hot markets it moves fine, slower markets you\'re waiting. Not a quick flip spot.',
      'You\'re never walking to the beach. That 15-20 minute drive is every single time. If beach walking matters, buy closer.',
      'Property taxes are lower than beach towns but Delaware transfer taxes still apply to purchases.',
    ],
    seasonalNotes: 'Year-round community with less seasonal fluctuation. Great option for full-time residents who want beach access without resort pricing.',
    faqs: [
      {
        question: 'How far is Milton from the beach?',
        answer: 'About 15-20 minutes to Lewes and Rehoboth beaches. Close enough for easy beach access without the premium pricing.',
      },
      {
        question: 'What are typical home prices in Milton?',
        answer: 'Much more affordable: $350k-$700k for most single-family homes. New construction communities range $400k-$600k. Excellent value compared to beachfront.',
      },
      {
        question: 'Is Milton good for full-time residents?',
        answer: 'Excellent choice! Milton has a strong year-round community, local schools, and all necessary amenities while being close to beaches.',
      },
      {
        question: 'Does Milton have restaurants and shops?',
        answer: 'Yes, a growing downtown with local restaurants, breweries, antique shops, and the popular Milton Theatre for arts and entertainment.',
      },
      {
        question: 'Can you generate rental income in Milton?',
        answer: 'Possible but less common than beach towns. Better suited for primary residences or long-term rentals rather than vacation rentals.',
      },
    ],
    heroImage: '/images/areas/milton/hero.jpg',
    galleryImages: [
      '/images/areas/milton/milton1.jpg',
      '/images/areas/milton/milton.png',
      '/images/areas/milton/hero.jpg',
    ],
    localFavorites: [
      { name: 'Dogfish Head Brewings & Eats', category: 'Dining', description: 'Original Dogfish Head brewpub. Craft beer pioneers. Excellent food, local institution.', url: 'https://www.dogfish.com/brewery/tasting-room-kitchen/milton' },
      { name: 'Milton Theatre', category: 'Arts', description: 'Historic theater hosting concerts, plays, movies. Community cultural hub.', url: 'https://www.miltontheatre.com/' },
      { name: 'The Irish Eyes', category: 'Dining', description: 'Pub food and live music. Casual local hangout with outdoor seating.', url: 'https://www.irisheyesmilton.com/' },
      { name: 'Wagamons Pond', category: 'Outdoors', description: 'Kayaking, fishing, nature trails. Peaceful escape 5 minutes from downtown.', url: 'https://www.destateparks.com/Beaches/WagamonsPond' },
    ],
    seasonalHighlights: {
      summer: 'People drive to beaches 15 minutes away. Downtown stays quiet. Farmers market, outdoor concerts at the theater.',
      fall: 'Nice weather, harvest festivals. New construction starts hitting the market as builders finish up.',
      winter: 'True year-round community. Local schools in session, restaurants stay open. No tourist season to worry about.',
      spring: 'Garden season kicks in, people get outside again. New construction communities push sales. Decent buying window.',
    },
  },
  {
    id: 'bethany-beach',
    name: 'Bethany Beach',
    slug: 'bethany-beach',
    shortDescription: 'The Quiet Resorts - family-focused and relaxed beach town atmosphere',
    vibe: 'Bethany Beach earned "The Quiet Resorts" nickname honestly. It\'s peaceful, clean, and centered on quality living. This town attracts multi-generational groups who return to the same rental houses every summer for decades. The boardwalk is short and sweet with ice cream shops, pizza, and a few beach stores - no bars, no late-night noise, no party scene. Sea Colony is the big draw: a massive resort community with pools, tennis, and beach access that feels like a country club. The town center has restaurants and beach supply shops. Ocean View (just inland) adds Tanger Outlets for shopping. Summer evenings feature free concerts on the bandstand. If you\'re looking for nightlife, this isn\'t your beach.',
    whoItsFor: 'This town attracts retirees seeking peace, those wanting beach access without party scene',
    highlights: [
      'Quiet, family-friendly environment',
      'Clean, well-maintained beach and boardwalk',
      'Sea Colony resort community with pools and tennis',
      'Bethany Beach Nature Center with trails',
      'Strong multi-generational family appeal',
      'Nearby Ocean View with shopping outlets',
      'Weekly summer concerts and family events',
    ],
    idealFor: ['Multi-generational groups', 'Peace and quiet seekers', 'Week-long summer rentals'],
    mixedFor: ['Year-round residents (very quiet off-season)', 'ROI-focused investors', 'Active nightlife enthusiasts'],
    notGreatFor: ['Party/social scene seekers', 'Those wanting walkable dining variety'],
    marketReality: {
      medianPrice: '$950,000',
      typicalBuyer: 'Families, multi-generational buyers',
      marketSpeed: 'Medium (50-80 days typical)',
    },
    gotchas: [
      'The alcohol ban is absolute. No beer on the beach, no wine on the boardwalk.',
      'Off-season is dead quiet. Most businesses close October through April. Grocery store stays open but it\'s sleepy.',
      'Rental income is steady. Same groups book the same weeks every year, which is stable but you can\'t raise rates much.',
      'Sea Colony HOA fees run several hundred a month. You\'re paying for pools, tennis, beach access but it adds up.',
      'Beach erosion happens. Check beach width and sand replenishment plans before buying oceanfront.',
    ],
    seasonalNotes: 'Peak family season in summer. Very quiet off-season. Popular with multi-generational families for summer vacations.',
    faqs: [
      {
        question: 'Why is Bethany Beach called "The Quiet Resorts"?',
        answer: 'Bethany enforces a no-alcohol policy on the beach and boardwalk, creating a peaceful, family-oriented atmosphere.',
      },
      {
        question: 'What are home prices in Bethany Beach?',
        answer: 'Similar to Rehoboth: $600k-$2.5M+ for homes near the beach. Condos and townhomes start around $400k-$500k. Sea Colony condos are popular family options.',
      },
      {
        question: 'Are there restaurants in Bethany Beach?',
        answer: 'Yes, decent selection of family restaurants and some upscale spots. Ocean View (just inland) has more options too.',
      },
      {
        question: 'Can I rent out property in Bethany Beach?',
        answer: 'Yes, rental demand is strong from families. The quiet reputation attracts multi-generational groups for week-long stays.',
      },
    ],
    heroImage: '/images/areas/bethany/hero.webp',
    galleryImages: [
      '/images/areas/bethany/beth1.jpg',
      '/images/areas/bethany/beth2.jpg',
      '/images/areas/bethany/beth3.jpg',
    ],
    localFavorites: [
      { name: 'Bethany Beach Boardwalk', category: 'Landmark', description: 'Shorter, quieter boardwalk compared to Rehoboth. Family-friendly, less commercial, ice cream shops and beach access.', url: 'https://www.bethany-fenwick.org/' },
      { name: 'Town Center & Bandstand', category: 'Entertainment', description: 'Free summer concerts at the bandstand. Downtown shops and restaurants. Family atmosphere, early evening crowds.', url: 'https://www.bethany-fenwick.org/bandstand-concerts/' },
      { name: 'Sea Colony Resort Area', category: 'Community', description: 'Massive resort complex with pools, tennis, restaurants. Where many families stay for beach weeks.', url: 'https://www.seacolonyinc.net/' },
      { name: 'Nature Trails & Salt Marsh', category: 'Outdoors', description: 'Nature center with coastal ecology programs, quiet trails. Good for families with younger kids.', url: 'https://www.inlandbays.org/bethany-beach-nature-center/' },
    ],
    seasonalHighlights: {
      summer: 'Family season. Same multi-gen groups book the same weeks every year. Bandstand concerts, beach, ice cream. Super family-focused.',
      fall: 'Quiet after Labor Day. Most seasonal spots close up. Good for couples who want peace.',
      winter: 'Grocery store and a few restaurants stay open.',
      spring: 'Things start opening back up in May. Memorial Day kicks off the family rental season. Beaches are clean and empty.',
    },
  },
];

