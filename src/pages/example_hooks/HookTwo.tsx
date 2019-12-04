// React import
import React, { useEffect, useState } from 'react';

const HookTwo: React.FC = () => {

  useEffect(() => {
    console.log('on first load page')
  }, []);

  const [name, setName] = useState<string>();

  useEffect(() => {
    console.log(`Change \`name\`: ${name}`);
  }, [name]);

  return (
    <>
      <input type="text" onChange={e => setName(e.target.value)} />
      <h1>Name: {name}</h1>
    </>
  );
};

export default HookTwo;