import { useEffect, useState } from "react";
import { Dimensions } from "react-native";

export const useOrientation = () => {
  const { width, height } = Dimensions.get("window");
  const value = height > width;
  const [isPortrait, setIsPortrait] = useState(value);

  const updateOrientation = () => {
    const { width, height } = Dimensions.get("window");
    const value = height > width;
    setIsPortrait(value);
  };

  useEffect(() => {
    Dimensions.addEventListener("change", updateOrientation);
    updateOrientation();
  }, []);

  return isPortrait;
};
