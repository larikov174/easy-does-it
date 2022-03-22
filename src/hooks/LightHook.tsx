import { useState, useEffect } from "react";

const useLight = () => {
  const [isGreen, setIsGreen] = useState(false);
  const flipLight = () => setIsGreen(!isGreen);

  useEffect(() => {
    const timeout = setTimeout(() => {
      flipLight();
    }, Math.floor(Math.random() * 3500));

    return () => clearTimeout(timeout);
  }, [isGreen]);

  return isGreen;
};

export default useLight;
