// React import
import React, { useState } from 'react';

/**
 * useState()
 */

const HookOne: React.FC = () => {
  const [name, setName] = useState<string>('nothing here');

  return (
    <>
      <input type="text" onChange={e => { setName(e.target.value) }} placeholder="onChange" />
      <h1>{name}</h1>
    </>
  );
};

export default HookOne;