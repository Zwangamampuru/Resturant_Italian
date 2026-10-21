import Header from './components/Header';
import Hero from './components/Hero';
import MainContent from './components/MainContent';
import About from './components/About';
import Footer from './components/Footer';
function App() {
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