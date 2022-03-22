import { useState } from "react";
import useLight from "./LightHook";
import usePlayer from "./PlayerHook";

type Props = {
  IN_GAME: string;
  WIN: string;
  LOSE: string;
};

export const GameState: Props = {
  IN_GAME: "IN_GAME",
  WIN: "WIN",
  LOSE: "LOSE"
};

export const useApp = () => {
  const [gameState, setGameState] = useState(GameState.IN_GAME);
  const isGreen = useLight();
  const { yCoordinate, doStep, resetYCoordinate } = usePlayer();
  const onClick = () => {
    if (gameState === GameState.IN_GAME) {
      if (!isGreen) {
        setGameState(GameState.LOSE);
      } else {
        doStep();
      }
    } else {
      resetYCoordinate();
      setGameState(GameState.IN_GAME);
    }

    if (yCoordinate > 260) {
      setGameState(GameState.WIN);
      resetYCoordinate();
    }
  };
  return { gameState, onClick, yCoordinate, isGreen };
};
