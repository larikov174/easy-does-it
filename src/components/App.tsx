import { useApp, GameState } from "../hooks/AppHook";
import Light from "./Light";
import Player from "./Player";

const Main = () => {
  const { gameState, onClick, isGreen, yCoordinate } = useApp();

  const gameMessageDiv = <div className="title">{gameState === GameState.IN_GAME ? "Нажми чтобы начать" : gameState === GameState.WIN ? "Ты выиграл!" : "Ты проиграл!"}</div>;

  return (
    <div className="main" onClick={onClick}>
      <svg width="320" height="320">
        <Light isGreen={isGreen} />
        <Player x={160} y={300 - yCoordinate} size={20} />
      </svg>
      {gameMessageDiv}
    </div>
  );
};
export default Main;
