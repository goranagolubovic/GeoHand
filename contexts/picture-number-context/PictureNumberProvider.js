import React, { useEffect, useState } from "react";
import PictureNumberContext from "./picture-number-context";

function PictureNumberProvider(props) {
  const [pictureNumber, setPictureNumber] = useState(5);
  return (
    <PictureNumberContext.Provider value={{ pictureNumber, setPictureNumber }}>
      {props.children}
    </PictureNumberContext.Provider>
  );
}

export default PictureNumberProvider;
