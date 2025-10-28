import { NextResponse } from 'next/server';

const galleryEvents = [
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

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const event = galleryEvents.find((event) => event.id === id);

    if (!event) {
      return NextResponse.json(
        {
          success: false,
          error: 'Gallery event not found',
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: event,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch gallery event',
      },
      { status: 500 }
    );
  }
}
