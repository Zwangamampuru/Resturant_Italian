import Header from './Header';
import Hero from './Hero';
import MainContent from './MainContent';
import About from './About';
import Footer from './Footer';
function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-cream text-gray-800 font-sans">
      <Header />
      <Hero />
      <MainContent />
      <About />
      <Footer />
    </div>
  );
}

export default App;