import { NextResponse } from 'next/server';

export interface GalleryEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  images: string[];
  category: string;
  featured?: boolean;
}

const galleryEvents: GalleryEvent[] = [
  {
    id: "temple-construction",
    title: "Temple Construction Progress",
    description: "Latest updates on the Sri Vaikuntta Sitarama Temple construction",
    date: "2024-10-15",
    category: "Construction",
    featured: true,
    images: [
      "/devalayamu/1.jpg",
      "/devalayamu/2.jpg",
      "/devalayamu/3.jpg",
      "/devalayamu/4.jpg",
    ],
  },
  {
    id: "foundation-work",
    title: "Foundation & Structure",
    description: "Foundation laying and structural work for the main temple building",
    date: "2024-09-20",
    category: "Construction",
    images: [
      "/devalayamu/5.jpg",
      "/devalayamu/6.jpg",
      "/devalayamu/7.jpg",
      "/devalayamu/8.jpg",
    ],
  },
  {
    id: "interior-design",
    title: "Interior Design & Decoration",
    description: "Interior design work and traditional decorations for the temple",
    date: "2024-08-10",
    category: "Interior",
    images: [
      "/devalayamu/9.jpg",
      "/devalayamu/10.jpg",
      "/devalayamu/11.jpg",
      "/devalayamu/12.jpg",
    ],
  },
  {
    id: "finishing-work",
    title: "Finishing Touches",
    description: "Final finishing work and preparations for the temple",
    date: "2024-07-05",
    category: "Construction",
    images: [
      "/devalayamu/13.jpg",
      "/devalayamu/14.jpg",
      "/devalayamu/15.jpg",
      "/devalayamu/16.jpg",
    ],
  },
];

// GET all gallery events
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const featured = searchParams.get('featured');

    let filteredEvents = galleryEvents;

    // Filter by category
    if (category) {
      filteredEvents = filteredEvents.filter(
        (event) => event.category.toLowerCase() === category.toLowerCase()
      );
    }

    // Filter by featured
    if (featured === 'true') {
      filteredEvents = filteredEvents.filter((event) => event.featured === true);
    }

    // Sort by date (newest first)
    filteredEvents.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return NextResponse.json({
      success: true,
      data: filteredEvents,
      total: filteredEvents.length,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch gallery events',
      },
      { status: 500 }
    );
  }
}

// POST - Create new gallery event (for future admin functionality)
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // In a real app, you would save this to a database
    return NextResponse.json({
      success: true,
      message: 'Gallery event created',
      data: body,
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to create gallery event',
      },
      { status: 500 }
    );
  }
}
