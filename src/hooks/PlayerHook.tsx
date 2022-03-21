import { useState } from "react";

const STEP_SIZE: number = 10;

const usePlayer = () => {
  const [yCoordinate, setYCoordinate] = useState(0);
  const resetYCoordinate = () => setYCoordinate(0);
  const doStep = () => setYCoordinate(yCoordinate + STEP_SIZE);
  return { yCoordinate, resetYCoordinate, doStep };
};

export default usePlayer;
