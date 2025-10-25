import React from 'react';
import Header from './layout/Header.jsx';
import Footer from './layout/Footer.jsx';
import { Contact, Gallery, Hero, Mission, Programs } from './sections';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Mission />
      <Programs />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
