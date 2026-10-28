import { useState, useEffect } from 'react';
import QuantityStepper from './QuantityStepper';

export default function MainContent() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [activeFilter, setActiveFilter] = useState('all');
  const [quantities, setQuantities] = useState({});

  // Define your backend URL (fallback to localhost:5000 if .env is missing)
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

  // Fetch data from the Express API
  useEffect(() => {
    fetch(`${API_URL}/api/menu`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch data');
        return res.json();
      })
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Could not connect to the database. Is your backend running?");
        setLoading(false);
      });
  }, [API_URL]);

  // Filter logic
  const filteredItems = activeFilter === 'all' 
    ? items 
    : items.filter(item => item.category === activeFilter);

  // Quantity handlers
  const handleIncrease = (id) => {
    setQuantities(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const handleDecrease = (id) => {
    setQuantities(prev => ({ 
      ...prev, 
      [id]: Math.max(0, (prev[id] || 0) - 1) 
    }));
  };

  // --- RENDER STATES ---

  if (loading) {
    return (
      <div className="flex justify-center items-center py-32">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-golden"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 text-red-500 font-semibold">
        <p>{error}</p>
        <p className="text-sm text-gray-500 mt-2">Make sure you ran `npm run dev` in the server folder.</p>
      </div>
    );
  }

  // --- MAIN RENDER ---

  return (
    <main className="max-w-7xl mx-auto px-6 pb-20">
      <h2 className="text-center font-serif text-4xl text-deep-forest mb-8">Our Menu</h2>
      
      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {['all', 'starters', 'mains', 'desserts'].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-2 rounded-full uppercase tracking-wider text-sm font-semibold transition-colors ${
              activeFilter === filter 
                ? 'bg-deep-forest text-white' 
                : 'bg-white text-gray-600 border border-gray-300 hover:border-deep-forest hover:text-deep-forest'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">No items found for this category.</p>
        ) : (
          filteredItems.map(item => (
            <div key={item.id} className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:-translate-y-2 transition-transform duration-300">
              
              {/* 
                CRITICAL FIX: Prepend the API_URL to the image path. 
                The database says "/images/mains.jpeg", so this becomes 
                "http://localhost:5000/images/mains.jpeg" 
              */}
              <img 
                src={`${API_URL}${item.imageUrl}`} 
                alt={item.name} 
                className="w-full h-64 object-cover bg-warm-sand"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
                }}
              />
              
              <div className="p-6 flex flex-col flex-grow text-center">
                <h3 className="text-xl text-clay uppercase tracking-wider mb-3 font-serif">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">
                  {item.description}
                </p>
                
                <div className="mt-auto border-t border-gray-100 pt-4">
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Add to order</p>
                  <QuantityStepper 
                    quantity={quantities[item.id] || 0}
                    onIncrease={() => handleIncrease(item.id)}
                    onDecrease={() => handleDecrease(item.id)}
                  />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  );
}