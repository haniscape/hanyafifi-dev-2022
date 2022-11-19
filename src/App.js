import React from 'react';
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"

import uCon from "./img/under-construction.png";


function App() {
  return (
    <div className="App">
   <Navbar />
   <Hero />
   <img src={uCon} className="under-construction" alt="CSS" />



    </div>
  );
}

export default App;
