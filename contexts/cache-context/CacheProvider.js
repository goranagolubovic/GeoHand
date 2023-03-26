import React, { useState, createContext } from "react";

export const CacheContext = createContext();
const CacheProvider = (props) => {
  const [cache, setCache] = useState(false);

  return (
    <CacheContext.Provider value={{ cache, setCache }}>
      {props.children}
    </CacheContext.Provider>
  );
};

export default CacheProvider;
