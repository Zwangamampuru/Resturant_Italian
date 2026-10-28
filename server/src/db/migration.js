import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { db } from './index.js';

async function runMigrations() {
  try {
    await migrate(db, { migrationsFolder: './drizzle' }); // Adjust path if needed
    console.log('✅ Migrations completed successfully!');
  } catch (error) {
    console.error('❌ Migration failed with a real error:');
    console.error(error);
  }
}

runMigrations();