import { useApp, GameState } from "../hooks/AppHook";
import styled from "styled-components";
import Light from "./Light";
import Player from "./Player";
import { DIALOG, MAIN } from '../utils/const';

const StyledLayout = styled.div`
  max-width: 100%;
  max-height: 100%;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  background-color: #077687;
`;

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
  color: #fff;
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

const Main: React.FC = () => {
  const { gameState, onClick, isGreen, yCoordinate } = useApp();

  const gameMessageDiv = (
    <StyledNotifications>
      {gameState === GameState.IN_GAME 
        ? DIALOG.START 
        : gameState === GameState.WIN 
          ? DIALOG.WIN 
          : DIALOG.LOSE
      }
    </StyledNotifications>
  )

  return (
    <StyledLayout>
      <MainContaier>
        <StyledTitle>{MAIN.TITLE}</StyledTitle>
        <PlayField onClick={onClick}>
          <svg width="320" height="320">
            <Light isGreen={isGreen} />
            <Player x={160} y={300 - yCoordinate} size={20} />
          </svg>
          {gameMessageDiv}
        </PlayField>
        <StyledSubtitle>{MAIN.SUBTITLE}</StyledSubtitle>
        <StyledInfo>{MAIN.INFO_ONE}</StyledInfo>
        <StyledInfo>{MAIN.INFO_TWO}</StyledInfo>
      </MainContaier>
    </StyledLayout>
  );
};
export default Main;
