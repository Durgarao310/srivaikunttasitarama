import { NextResponse } from 'next/server';

export interface DonationItem {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  featured?: boolean;
  category?: string;
  stock?: number;
}

const donationItems: DonationItem[] = [
  {
    id: "brc-a7",
    name: "BRC A7",
    price: 200.0,
    image: "/donations/brc-a7.jpg",
    description: "Steel reinforcement mesh for construction",
    category: "Building Materials",
    stock: 50,
  },
  {
    id: "cement-bags",
    name: "Cement Bags",
    price: 25.0,
    image: "/donations/cement.jpg",
    description: "High-quality cement for temple construction",
    category: "Building Materials",
    stock: 200,
  },
  {
    id: "concrete",
    name: "Concrete",
    price: 300.0,
    image: "/donations/concrete.jpg",
    description: "Ready-mix concrete for foundation",
    category: "Building Materials",
    stock: 30,
  },
  {
    id: "pallet-bricks",
    name: "Pallet Bricks",
    price: 300.0,
    image: "/donations/bricks.jpg",
    description: "Traditional bricks for temple structure",
    category: "Building Materials",
    stock: 100,
  },
  {
    id: "plywood",
    name: "Plywood",
    price: 60.0,
    image: "/donations/plywood.jpg",
    description: "Quality plywood for temple construction",
    category: "Building Materials",
    stock: 75,
  },
  {
    id: "sand",
    name: "Sand",
    price: 750.0,
    image: "/donations/sand.jpg",
    description: "Fine sand for construction purposes",
    category: "Building Materials",
    stock: 20,
  },
  {
    id: "lucky-draw",
    name: "Sitarama Lucky Draw",
    price: 10.0,
    image: "/donations/lucky-draw.jpg",
    description: "Support the temple and win prizes",
    category: "Special",
    featured: true,
    stock: 1000,
  },
  {
    id: "steel-rod",
    name: "Steel Rod",
    price: 400.0,
    image: "/donations/steel-rod.jpg",
    description: "Reinforcement steel rods for structure",
    category: "Building Materials",
    stock: 40,
  },
];

// GET all donation items
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const featured = searchParams.get('featured');

    let filteredItems = donationItems;

    // Filter by category
    if (category) {
      filteredItems = filteredItems.filter(
        (item) => item.category?.toLowerCase() === category.toLowerCase()
      );
    }

    // Filter by featured
    if (featured === 'true') {
      filteredItems = filteredItems.filter((item) => item.featured === true);
    }

    return NextResponse.json({
      success: true,
      data: filteredItems,
      total: filteredItems.length,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch donation items',
      },
      { status: 500 }
    );
  }
}

// POST - Create new donation item (for future admin functionality)
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // In a real app, you would save this to a database
    // For now, we'll just return success
    return NextResponse.json({
      success: true,
      message: 'Donation item created',
      data: body,
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to create donation item',
      },
      { status: 500 }
    );
  }
}
