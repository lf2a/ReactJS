// React import
import React, { useState } from 'react';

// local import
import Home from './Home';
import About from './About';
import Contact from './Contact';


const Index: React.FC = () => {
  const [Component, setComponent] = useState<React.FunctionComponent>(Home);

  return (
    <>
      <div id="navbar">
        <button onClick={() => setComponent(Home)}>Home</button>
        <button onClick={() => setComponent(Contact)}>Contact</button>
        <button onClick={() => setComponent(About)}>About</button>
      </div>

      <div id="content">
        {Component}
      </div>
    </>
  );
};

export default Index;