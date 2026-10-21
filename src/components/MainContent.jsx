import { useState } from 'react';
import { menuItems } from '../data/menuData';
import QuantityStepper from './QuantityStepper';

export default function MainContent() {
  // STATE 1: Filter state
  const [activeFilter, setActiveFilter] = useState('all');
  
  // STATE 2: Object to track quantities of each item (controlled component state)
  const [quantities, setQuantities] = useState({});

  // Filter logic
  const filteredItems = activeFilter === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeFilter);

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

  return (
    <main className="max-w-7xl mx-auto px-6 pb-20">
      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {['all', 'starters', 'mains', 'desserts'].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-2 rounded-full uppercase tracking-wider text-sm font-semibold transition-colors ${
              activeFilter === filter 
                ? 'bg-deep-forest text-white' 
                : 'bg-white text-gray-600 border border-gray-300 hover:border-deep-forest'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map(item => (
          <div key={item.id} className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:-translate-y-2 transition-transform duration-300">
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-60 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow text-center">
              <h3 className="text-xl text-clay uppercase tracking-wider mb-3 font-serif">
                {item.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">
                {item.description}
              </p>
              {/* Controlled Component */}
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
        ))}
      </div>
    </main>
  );
}