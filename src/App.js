import React from 'react';
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Portfolio from "./components/Portfolio/Portfolio"
import Work from "./components/Work/Work"


function App() {
  return (
    <div className="App">
   <Navbar />
   <Hero />
   <Portfolio />
   <Work />

    </div>
  );
}

export default App;
