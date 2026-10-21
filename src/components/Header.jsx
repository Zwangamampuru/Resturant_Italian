export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-golden/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex justify-end items-center py-4">
          <ul className="flex gap-8 list-none">
            <li><a href="#" className="text-gray-800 font-medium hover:text-deep-forest transition-colors">Home</a></li>
            <li><a href="#" className="text-gray-800 font-medium hover:text-deep-forest transition-colors">Menu</a></li>
            <li><a href="#" className="text-gray-800 font-medium hover:text-deep-forest transition-colors">About</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}