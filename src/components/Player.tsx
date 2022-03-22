import Gamer from '../images/player.png';

type Props = {
  x: number;
  y: number;
  size: number;
};

const Player = ({ x, y, size }: Props) => {
  return (
    <>
      <defs>
        <pattern id="imgpattern" x="0" y="0" width="1" height="1"
          viewBox="0 0 20 20" preserveAspectRatio="xMidYMid slice">
          <image width="20" height="20" href={Gamer} />
        </pattern>
      </defs>
      <circle cx={x} cy={y} r={size} fill="url(#imgpattern)" />
    </>
  )
};

export default Player;
