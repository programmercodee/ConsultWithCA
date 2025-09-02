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

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Industries />
      <WhyChooseUs />
      <DueDateReminder />
      <KnowledgeBank />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default App;
