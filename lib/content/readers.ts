import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function getSiteConfig() {
  try {
    const configPath = path.join(process.cwd(), 'lib', 'site-config.json');
    const configData = fs.readFileSync(configPath, 'utf-8');
    return JSON.parse(configData);
  } catch (error) {
    console.error('Error loading site config:', error);
    return getDefaultConfig();
  }
}

function getDefaultConfig() {
  return {
    agentName: 'Real Estate Agent',
    serviceArea: 'Your Area',
    phone: '(555) 555-5555',
    phoneDisplay: '555-555-5555',
    email: 'agent@example.com',
    brokerageDisclosure: 'Powered by Your Brokerage',
    social: {
      facebook: '',
      instagram: '',
      linkedin: '',
    },
    brokerage: {
      name: 'Your Brokerage',
      teamName: '',
      address: '123 Main St, City, ST 12345',
      licenseNumber: '',
    },
  };
}

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
}

export async function getAreas() {
  try {
    const areasDir = path.join(process.cwd(), 'lib', 'areas-data');
    
    if (!fs.existsSync(areasDir)) {
      return [];
    }

    const files = fs.readdirSync(areasDir).filter(file => file.endsWith('.mdoc'));
    
    const areas = files.map(file => {
      const filePath = path.join(areasDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);
      
      return {
        id: data.slug || file.replace('.mdoc', ''),
        name: data.name,
        slug: data.slug,
        shortDescription: data.shortDescription,
        vibe: data.vibe,
        whoItsFor: data.whoItsFor,
        highlights: data.highlights || [],
        seasonalNotes: data.seasonalNotes || '',
        faqs: data.faqs || [],
        searchPresetId: data.searchPresetId,
        description: content,
      };
    });
    
    return areas;
  } catch (error) {
    console.error('Error loading areas:', error);
    return [];
  }
}

export async function getAreaBySlug(slug: string): Promise<Area | undefined> {
  const areas = await getAreas();
  return areas.find(area => area.slug === slug);
}

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
  status?: string;
}

export async function getListings(): Promise<Listing[]> {
  try {
    const listingsDir = path.join(process.cwd(), 'lib', 'listings-data');
    
    if (!fs.existsSync(listingsDir)) {
      return [];
    }

    const files = fs.readdirSync(listingsDir).filter(file => file.endsWith('.json'));
    
    const listings = files.map(file => {
      const filePath = path.join(listingsDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(fileContent);
    });
    
    return listings;
  } catch (error) {
    console.error('Error loading listings:', error);
    return [];
  }
}

export interface BlogPost {
  slug: string;
  title: string;
  publishedDate: string;
  excerpt: string;
  featuredImage?: string;
  content: string;
  seo?: Record<string, any>;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const blogDir = path.join(process.cwd(), 'content', 'blog');
    
    if (!fs.existsSync(blogDir)) {
      return [];
    }

    const files = fs.readdirSync(blogDir).filter(file => file.endsWith('.mdoc') || file.endsWith('.md'));
    
    const posts = files.map(file => {
      const filePath = path.join(blogDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);
      
      return {
        slug: data.slug || data.title || file.replace(/\.(mdoc|md)$/, ''),
        title: data.title || '',
        publishedDate: data.publishedDate || new Date().toISOString(),
        excerpt: data.excerpt || '',
        featuredImage: data.featuredImage,
        content: content,
        seo: data.seo || {},
      };
    });
    
    return posts.sort((a, b) => 
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
    );
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return [];
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const posts = await getBlogPosts();
  return posts.find(post => post.slug === slug);
}
