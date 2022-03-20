type Props = {
  isGreen: boolean;
};

const Light = ({ isGreen }: Props) => {
  return (
    <svg width="100%" height="20">
      <rect x="0" y="0" width="100%" height="20" fill={isGreen ? "green" : "red"} />
    </svg>
  );
};

export default Light;
