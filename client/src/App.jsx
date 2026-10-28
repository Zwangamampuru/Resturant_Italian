import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Hero from './components/Hero';
import MainContent from './components/MainContent';
import About from './components/About';
import Footer from './components/Footer';
import AuthForm from './components/A';

function HomePage() {
  return (
    <>
      <Hero />
      <MainContent />
      <About />
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-cream text-gray-800 font-sans">
          <Header />
          
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/auth" element={<AuthForm />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;