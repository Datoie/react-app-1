import React, { useState } from 'react';
import { Navbar, Hero } from './components/';

export const Context = React.createContext();

function App() {
  const [clickBar, setClickBar] = useState(true);

  return (
    <Context.Provider value={[ clickBar, setClickBar ]}>
      <div className='p-[20px] fixed w-full '>
        <Navbar />
      </div>

      <div>
        <Hero />
      </div>
    </Context.Provider>
  );
}
export default App
