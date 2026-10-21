// 1. Import all menu images here
import starterImg from '../assets/starters (2).jpeg';
import mainImg from '../assets/mains.jpeg';
import dessertImg from '../assets/desserts.jpeg';

export const menuItems = [
  {
    id: 1,
    category: 'starters',
    name: 'Tomato Bruschetta',
    image: starterImg, // 2. Use the imported variable here
    description: 'Crispy toasted bread topped with fresh diced tomatoes, aromatic herbs and delicate microgreens, served on a bed of fresh greens for a light and flavourful beginning to your meal.',
  },
  {
    id: 2,
    category: 'mains',
    name: 'Grilled Chicken',
    image: mainImg,
    description: 'Tender, perfectly grilled chicken served with seasonal vegetables and creamy mashed potatoes, finished with a rich, savoury sauce for a satisfying dining experience.',
  },
  {
    id: 3,
    category: 'desserts',
    name: 'Chocolate Lava Cake',
    image: dessertImg,
    description: 'A rich, warm chocolate cake with a soft, molten centre, served with creamy vanilla ice cream, fresh berries, and a drizzle of sweet berry sauce.',
  }
];