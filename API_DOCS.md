# Donation API Documentation

## Endpoints

### Get All Donation Items
```
GET /api/donations
```

**Query Parameters:**
- `category` (optional) - Filter by category (e.g., "Building Materials", "Special")
- `featured` (optional) - Filter featured items (true/false)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "brc-a7",
      "name": "BRC A7",
      "price": 200.0,
      "image": "/donations/brc-a7.jpg",
      "description": "Steel reinforcement mesh for construction",
      "category": "Building Materials",
      "stock": 50,
      "featured": false
    }
  ],
  "total": 8
}
```

**Examples:**
- All items: `/api/donations`
- Featured items: `/api/donations?featured=true`
- By category: `/api/donations?category=Building%20Materials`

### Get Single Donation Item
```
GET /api/donations/[id]
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "brc-a7",
    "name": "BRC A7",
    "price": 200.0,
    "image": "/donations/brc-a7.jpg",
    "description": "Steel reinforcement mesh for construction",
    "category": "Building Materials",
    "stock": 50
  }
}
```

**Examples:**
- `/api/donations/brc-a7`
- `/api/donations/lucky-draw`

### Create Donation Item (Future)
```
POST /api/donations
```

**Request Body:**
```json
{
  "name": "New Item",
  "price": 100.0,
  "image": "/donations/new-item.jpg",
  "description": "Description",
  "category": "Building Materials",
  "stock": 10
}
```

## Available Items

1. **BRC A7** - RM 200.00
2. **Cement Bags** - RM 25.00
3. **Concrete** - RM 300.00
4. **Pallet Bricks** - RM 300.00
5. **Plywood** - RM 60.00
6. **Sand** - RM 750.00
7. **Sitarama Lucky Draw** (Featured) - RM 10.00
8. **Steel Rod** - RM 400.00

## Future Enhancements

- Connect to a real database (MongoDB, PostgreSQL, etc.)
- Add authentication for admin operations
- Implement stock management
- Add image upload functionality
- Order tracking API
- Payment integration API
