import { useState } from 'react';
import Navigation from './components/Navigation';
import WelcomeAnimation from './components/WelcomeAnimation';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Data from './pages/Data';
import Material from './pages/Material';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <AboutUs />;
      case 'data':
        return <Data />;
      case 'material':
        return <Material />;
      default:
        return <Home />;
    }
  };

  if (showWelcome) {
    return <WelcomeAnimation onComplete={handleWelcomeComplete} />;
  }

  return (
    <div className="min-h-screen">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <div className="pt-20">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
