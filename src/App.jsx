import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-vh-100 d-flex flex-column bg-light">
      {/* Global Navigation */}
       <Navbar />

       {/* Main Page Content */}
       <main className="flex-grow-1">
          <Hero />
          <About />
          <Services />
          <Contact />
       </main>
       {/* Global Footer */}
       <Footer />
    </div>
  );
}

export default App;