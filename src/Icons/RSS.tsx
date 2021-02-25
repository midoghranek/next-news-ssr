const RSS = ({ color, width, height }) => {
  return (
    <svg
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 448 448"
      width={width}
      height={height}
    >
      <g>
        <g>
          <circle fill={color} cx="64" cy="384" r="64" />
        </g>
      </g>
      <g>
        <g>
          <path
            fill={color}
            d="M0,149.344v85.344c117.632,0,213.344,95.68,213.344,213.312h85.312C298.656,283.328,164.672,149.344,0,149.344z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            fill={color}
            d="M0,0v85.344C200,85.344,362.688,248,362.688,448H448C448,200.96,247.04,0,0,0z"
          />
        </g>
      </g>
    </svg>
  );
};

export default RSS;
