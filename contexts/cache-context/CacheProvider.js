import React, { useState } from 'react';
import CacheContext from './cache-context';

function CacheProvider(props) {
  const [cache, setCache] = useState(false);

  return (
    <CacheContext.Provider value={{ cache, setCache }}>
      {props.children}
    </CacheContext.Provider>
  );
}

export default CacheProvider;