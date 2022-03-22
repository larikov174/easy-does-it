import { useApp, GameState } from "../hooks/AppHook";
import {
  Layout,
  MainContaier,
  PlayField,
  Title,
  Subtitle,
  Info,
  Notifications,
  Decor
} from './Styles';
import Light from "./Light";
import Player from "./Player";
import { DIALOG, MAIN } from '../utils/const';
import Squid from '../images/squid.svg';
import Guard from '../images/guard.png';

const Main: React.FC = () => {
  const { gameState, onClick, isGreen, yCoordinate } = useApp();

  const gameNotes = (
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
          {gameNotes}
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
