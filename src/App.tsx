import React, { useState } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import LeadCapture from './components/LeadCapture';
import Footer from './components/Footer';
import AutoChatbot from './components/AutoChatbot';
import DemoWebDesigns from './components/DemoWebDesigns';

function App() {
  const [currentView, setCurrentView] = useState<'main' | 'demo'>('main');

  const handleViewExamples = () => {
    setCurrentView('demo');
  };

  const handleBackToMain = () => {
    setCurrentView('main');
  };

  if (currentView === 'demo') {
    return <DemoWebDesigns onBack={handleBackToMain} />;
  }

  return (
    <div className="min-h-screen">
      <Hero onViewExamples={handleViewExamples} />
      <Services />
      <LeadCapture />
      <Footer />
      <AutoChatbot />
    </div>
  );
}

export default App;