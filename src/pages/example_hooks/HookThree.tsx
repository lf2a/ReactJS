// React import
import React, { useContext } from 'react';

const stylesheet = {
  light: {
    color: 'black',
    background: '#f7f7f7',
    fontWeight: 0,
  },
  dark: {
    color: 'white',
    background: '#333',
    fontWeight: 1,
  }
}

const light = React.createContext(stylesheet.light);
const dark = React.createContext(stylesheet.dark);

const HookThree: React.FC = () => {
  const light_theme = useContext(light);
  const dark_theme = useContext(dark);

  return (
    <>
      <h1
        style={light_theme}>Light Style</h1>
      <h1 style={dark_theme}>Dark Style</h1>
    </>
  );
};

export default HookThree;