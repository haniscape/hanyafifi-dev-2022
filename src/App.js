import React from 'react';
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Portfolio from "./components/Portfolio/Portfolio"
import Work from "./components/Work/Work"
import Testimonials from "./components/Testimonials/Testimonials"
import Contact from "./components/Contact/Contact"



function App() {
  return (
    <div className="App">
   <Navbar />
   <Hero />
   <Portfolio />
   <Work />
   <Testimonials />
   <Contact />

    </div>
  );
}

export default App;
