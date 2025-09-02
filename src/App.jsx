import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Industries from './components/Industries';
import WhyChooseUs from './components/WhyChooseUs';
import DueDateReminder from './components/DueDateReminder';
import KnowledgeBank from './components/KnowledgeBank';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import DirectContactBanner from './components/DirectContactBanner';
import MidContactBanner from './components/MidContactBanner';
import MobileStickyBar from './components/MobileStickyBar';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <MidContactBanner />
      <Industries />
      <MidContactBanner title="Have an industry-specific question?" subtitle="Speak to an expert CA who understands your sector." />
      <WhyChooseUs />
      <DueDateReminder />
      <KnowledgeBank />
      <Testimonials />
      <DirectContactBanner />
      <Contact />
      <Footer />
      <FloatingCTA />
      <MobileStickyBar />
    </div>
  );
}

export default App;
