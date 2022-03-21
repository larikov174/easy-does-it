import { useApp, GameState } from "../hooks/AppHook";
import styled from "styled-components";
import Light from "./Light";
import Player from "./Player";

const MainContaier = styled.div`
  max-width: 320px;
  height: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  `;

const PlayField = styled.div`
  width: 320px;
  height: 320px;
  margin: 0;
`;

const StyledText = styled.p`
  margin: 0;
  padding: 0;
  font-family: -apple-system, "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const StyledTitle = styled(StyledText)`
  padding-bottom: 5px;
  border-bottom: 1px solid grey;
  text-align: center;
  font-size: 24px;
`;

const StyledSubtitle = styled(StyledText)`
  margin-top: 60px;
  font-size: 20px;
`;

const StyledInfo = styled(StyledText)`
  margin-top: 10px;
`;

const StyledNotifications = styled(StyledText)`
  padding-top: 5px;
  border-top: 1px solid grey;
  text-align: center;
`;

const Main = () => {
  const { gameState, onClick, isGreen, yCoordinate } = useApp();

  const gameMessageDiv = <StyledNotifications>{gameState === GameState.IN_GAME ? "Click to start game" : gameState === GameState.WIN ? "You win! (◕‿◕)" : "You loose (ಥ﹏ಥ)"}</StyledNotifications>;

  return (
    <MainContaier>
      <StyledTitle>Easy does it.</StyledTitle>
      <PlayField onClick={onClick}>
        <svg width="320" height="320">
          <Light isGreen={isGreen} />
          <Player x={160} y={300 - yCoordinate} size={20} />
        </svg>
        {gameMessageDiv}
      </PlayField>
      <StyledSubtitle>Rules:</StyledSubtitle>
      <StyledInfo>Move when green light and stop before red light is on.</StyledInfo>
      <StyledInfo>Get to the top of the field to win this game.</StyledInfo>
    </MainContaier>
  );
};
export default Main;
