import React from 'react';
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Portfolio from "./components/Portfolio/Portfolio"

import uCon from "./img/under-construction.jpg";


function App() {
  return (
    <div className="App">
   <Navbar />
   <Hero />
   <Portfolio />
   <img src={uCon} className="under-construction" alt="under construction" />



    </div>
  );
}

export default App;
