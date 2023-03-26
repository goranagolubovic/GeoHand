import React, { createContext, useState } from "react";
export const PictureNumberContext = createContext();

const PictureNumberProvider = ({ children }) => {
  const [pictureNumber, setPictureNumber] = useState(20);

  return (
    <PictureNumberContext.Provider value={{ pictureNumber, setPictureNumber }}>
      {children}
    </PictureNumberContext.Provider>
  );
};
export default PictureNumberProvider;
