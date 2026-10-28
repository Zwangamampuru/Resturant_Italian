import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import session from 'express-session';
import bcrypt from 'bcrypt';
import { db } from './db/index.js';
import { menuItems, users } from './db/schema.js';
import { eq } from 'drizzle-orm';

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors({ 
  origin: process.env.CLIENT_URL || 'http://localhost:5173', 
  credentials: true // CRITICAL for cookies to work
}));
app.use(express.json());

// Session Setup
app.use(session({
  secret: process.env.SESSION_SECRET || 'fallback_secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // Set to true if deploying with HTTPS (Render/Vercel)
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 // 1 day
  }
}));

// Serve images
app.use('/images', express.static(path.join(__dirname, '../public/images')));

// --- API ROUTES ---

// 1. Get Menu
app.get('/api/menu', async (req, res) => {
  try {
    const items = await db.select().from(menuItems);
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch menu items' });
  }
});

// 2. Sign Up
app.post('/api/auth/signup', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'Email and password required' });

    // Check if user exists
    const existingUser = await db.select().from(users).where(eq(users.email, email));
    if (existingUser.length > 0) return res.status(400).json({ error: 'User already exists' });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    // Insert user
    const newUser = await db.insert(users).values({ email, passwordHash }).returning();
    
    // Set session
    req.session.userId = newUser[0].id;
    res.json({ message: 'Signed up successfully', user: { id: newUser[0].id, email: newUser[0].email } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error during signup' });
  }
});

// 3. Log In
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await db.select().from(users).where(eq(users.email, email));
    if (user.length === 0) return res.status(400).json({ error: 'Invalid credentials' });

    // Check password
    const validPassword = await bcrypt.compare(password, user[0].passwordHash);
    if (!validPassword) return res.status(400).json({ error: 'Invalid credentials' });

    // Set session
    req.session.userId = user[0].id;
    res.json({ message: 'Logged in successfully', user: { id: user[0].id, email: user[0].email } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error during login' });
  }
});

// 4. Log Out
app.post('/api/auth/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) return res.status(500).json({ error: 'Could not log out' });
    res.clearCookie('connect.sid'); // Clear the session cookie
    res.json({ message: 'Logged out successfully' });
  });
});

// 5. Check Current User (Me)
app.get('/api/auth/me', async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ error: 'Not authenticated' });
  }
  try {
    const user = await db.select().from(users).where(eq(users.id, req.session.userId));
    if (user.length === 0) return res.status(404).json({ error: 'User not found' });
    
    res.json({ user: { id: user[0].id, email: user[0].email } });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});
const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});