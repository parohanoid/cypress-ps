// lib/data.ts
export type Product = {
  id: string;
  category: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
};

const PRODUCTS: Product[] = [
  // Boots
  {
    id: 'boots-1',
    category: 'footwear',
    name: 'Hiking Boots Alpha',
    description: 'Durable hiking boots for all terrains.',
    imageUrl: '/images/boots/shutterstock_1121278055.jpg',
    price: 129.99,
  },
  {
    id: 'boots-2',
    category: 'footwear',
    name: 'Mountaineering Boots Beta',
    description: 'High-altitude mountaineering boots with insulation.',
    imageUrl: '/images/boots/shutterstock_222721876.jpg',
    price: 249.99,
  },
  {
    id: 'boots-3',
    category: 'footwear',
    name: 'Trekking Boots Gamma',
    description: 'Lightweight trekking boots for day hikes.',
    imageUrl: '/images/boots/shutterstock_475046062.jpg',
    price: 99.99,
  },
  {
    id: 'boots-4',
    category: 'footwear',
    name: 'Trail Running Shoes Delta',
    description: 'Agile trail running shoes with enhanced grip.',
    imageUrl: '/images/boots/shutterstock_66842440.jpg',
    price: 79.99,
  },

  // Climbing Gear
  {
    id: 'ice-axe-crampons-1',
    category: 'equipment',
    name: 'Ice Axe & Crampon Set Alpine',
    description: 'Complete set for ice climbing and mountaineering: includes a lightweight ice axe and durable steel crampons.',
    imageUrl: '/images/climbing gear/shutterstock_236845636.jpg', // Representing the set
    price: 279.98,
  },
  {
    id: 'climbing-gear-2',
    category: 'equipment',
    name: 'Rope 60m Dynamic',
    description: 'Durable dynamic climbing rope for all skill levels.',
    imageUrl: '/images/climbing gear/shutterstock_279617825.jpg',
    price: 179.99,
  },
  {
    id: 'carabiner-yellow',
    category: 'equipment',
    name: 'Carabiner Locking Yellow',
    description: 'Durable locking carabiner, anodized yellow for high visibility.',
    imageUrl: '/images/climbing gear/shutterstock_362174360.jpg', 
    price: 19.99,
  },
  {
    id: 'carabiner-set-assorted',
    category: 'equipment',
    name: 'Carabiner Set Assorted',
    description: 'Set of assorted locking and non-locking carabiners for climbing and rigging.',
    imageUrl: '/images/climbing gear/shutterstock_362683778.jpg', // Replace with pic of the set
    price: 99.99,
  },
  {
    id: 'climbing-starter-kit',
    category: 'equipment',
    name: 'Climbing Starter Kit',
    description: 'Comprehensive kit for beginners: Includes a backpack, helmet, ice axe, and climbing rope.',
    imageUrl: '/images/climbing gear/shutterstock_48040747.jpg', // Replace with an image of the whole kit
    price: 399.99,
  },
  {
    id: 'climbing-helmet',
    category: 'equipment',
    name: 'Climbing Helmet Pro',
    description: 'Durable and lightweight climbing helmet, available in white or yellow.',
    imageUrl: '/images/climbing gear/shutterstock_569026084.jpg', // You should use a helmet image
    price: 59.99,
  },
  {
    id: 'backpack-duo',
    category: 'equipment',
    name: 'Backpack Duo Adventure Set',
    description: 'Matching backpacks designed for him and her, perfect for carrying all your gear on multi-day adventures.',
    imageUrl: '/images/climbing gear/shutterstock_6170527.jpg', // Consider a more appropriate image
    price: 249.99,
  },
  {
    id: 'spelunking-helmet-light',
    category: 'equipment',
    name: 'Spelunking Helmet with Light',
    description: 'Durable helmet designed for spelunking, complete with a powerful integrated light for navigating caves.',
    imageUrl: '/images/climbing gear/shutterstock_64998481.jpg', // Ensure you replace with actual helmet+light
    price: 79.99,
  },

  // Kayaks
  {
    id: 'kayak-1',
    category: 'kayaks',
    name: 'Touring Kayak Delta',
    description: 'Stable touring kayak for recreational paddling.',
    imageUrl: '/images/kayaks/shutterstock_441989509.jpg',
    price: 479.99,
  },
  {
    id: 'kayak-2',
    category: 'kayaks',
    name: 'Sit-on-Top Kayak Echo',
    description: 'Easy-to-use sit-on-top kayak for warm waters.',
    imageUrl: '/images/kayaks/shutterstock_495259978.jpg',
    price: 329.99,
  },
  {
    id: 'kayak-3',
    category: 'kayaks',
    name: 'Inflatable Kayak Wave',
    description: 'Portable inflatable kayak for easy transport and storage.',
    imageUrl: '/images/kayaks/shutterstock_505989235.jpg',
    price: 279.99,
  },
  {
    id: 'kayak-4',
    category: 'kayaks',
    name: 'Whitewater Kayak Surge',
    description: 'High-performance whitewater kayak for adventurous paddlers.',
    imageUrl: '/images/kayaks/shutterstock_621566756.jpg',
    price: 599.99,
  },
    {
    id: 'kayak-5',
    category: 'kayaks',
    name: 'Fishing Kayak Angler',
    description: 'Kayak with rod holders and storage for fishing gear.',
    imageUrl: '/images/kayaks/shutterstock_645036007.jpg',
    price: 549.99,
  },
];

export function getAllProducts(): Product[] {
  return PRODUCTS;
}

export function getProductsByCategory(category: string): Product[] {
  return PRODUCTS.filter((product) => product.category === category);
}

export function getProductById(category: string, id: string): Product | undefined {
  return PRODUCTS.find((product) => product.category === category && product.id === id);
}

export function getAllCategories(): string[] {
  return [...new Set(PRODUCTS.map((product) => product.category))]; // Get unique categories
}