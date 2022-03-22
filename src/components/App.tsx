import { useApp, GameState } from "../hooks/AppHook";
import styled from "styled-components";
import Light from "./Light";
import Player from "./Player";
import { DIALOG, MAIN } from '../utils/const';
import Squid from '../images/squid.svg';
import Guard from '../images/guard.png';

const Layout = styled.div`
  max-width: 100%;
  max-height: 100%;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  background-color: #077687;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 640px) {
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
  }
`;

const MainContaier = styled.div`
  max-width: 320px;
  margin: 0 10px;
`;

const PlayField = styled.div`
  width: 320px;
  height: 320px;
  margin: 0;
  border: 1px dotted white;

  @media screen and (max-width: 640px) {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Text = styled.p`
  margin: 0;
  padding: 0;
  color: #fff;
  font-family: -apple-system, "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const Title = styled(Text)`
  padding-bottom: 5px;
  border-bottom: 1px solid grey;
  text-align: center;
  font-size: 24px;
`;

const Subtitle = styled(Text)`
  margin-top: 60px;
  font-size: 20px;
`;

const Info = styled(Text)`
  margin-top: 10px;
`;

const Notifications = styled(Text)`
  padding-top: 5px;
  border-top: 1px solid grey;
  text-align: center;
`;

const Decor = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt || "",
}))`
  width: 130px;
  height: auto;
  margin: 0 10px;

  @media screen and (max-width: 640px) {
    width: 90px;
    margin: 20px;
  }
`;

const Main: React.FC = () => {
  const { gameState, onClick, isGreen, yCoordinate } = useApp();

  const gameMessageDiv = (
    <Notifications>
      {gameState === GameState.IN_GAME 
        ? DIALOG.START 
        : gameState === GameState.WIN 
          ? DIALOG.WIN 
          : DIALOG.LOSE
      }
    </Notifications>
  )

  return (
    <Layout>
      <Decor src={Squid} />
      <MainContaier>
        <Title>{MAIN.TITLE}</Title>
        <PlayField onClick={onClick}>
          <svg width="320" height="320">
            <Light isGreen={isGreen} />
            <Player x={160} y={300 - yCoordinate} size={20} />
          </svg>
          {gameMessageDiv}
        </PlayField>
        <Subtitle>{MAIN.SUBTITLE}</Subtitle>
        <Info>{MAIN.INFO_ONE}</Info>
        <Info>{MAIN.INFO_TWO}</Info>
      </MainContaier>
      <Decor src={Guard} />
    </Layout>
  );
};
export default Main;
