import { db } from './index.js';
import { menuItems } from './schema.js';
import dotenv from 'dotenv';

dotenv.config();
const menuData = [
  {
    name: 'Tomato Bruschetta',
    category: 'starters',
   
    imageUrl: '/images/starters (2).jpeg', 
    description: 'Crispy toasted bread topped with fresh diced tomatoes, aromatic herbs and delicate microgreens, served on a bed of fresh greens for a light and flavourful beginning to your meal.',
  },
  {
    name: 'Grilled Chicken',
    category: 'mains',
    imageUrl: '/images/mains.jpeg',
    description: 'Tender, perfectly grilled chicken served with seasonal vegetables and creamy mashed potatoes, finished with a rich, savoury sauce for a satisfying dining experience.',
  },
  {
    name: 'Chocolate Lava Cake',
    category: 'desserts',
    imageUrl: '/images/desserts.jpeg',
    description: 'A rich, warm chocolate cake with a soft, molten centre, served with creamy vanilla ice cream, fresh berries, and a drizzle of sweet berry sauce.',
  }
];

async function seed() {
  console.log('🌱 Starting database seed...');
  
  try {
    // 1. Optional: Clear existing data so we don't get duplicates if we run it twice
    console.log('🧹 Clearing existing menu items...');
    await db.delete(menuItems);

    // 2. Insert the new data
    console.log('📥 Inserting new menu items...');
    const insertedItems = await db.insert(menuItems).values(menuData).returning();
    
    console.log(`✅ Successfully seeded ${insertedItems.length} menu items!`);
    console.log('🍽️ Items added:', insertedItems.map(item => item.name).join(', '));
    
  } catch (error) {
    console.error('❌ Error seeding database:', error);
  } finally {
    // 3. Exit the process so the terminal doesn't hang
    process.exit(0); 
  }
}

seed();