type Props = {
  x: number;
  y: number;
  size: number;
};

const Player = ({ x, y, size }: Props) => {
  return <circle cx={x} cy={y} r={size} fill="green" />;
};

export default Player;
