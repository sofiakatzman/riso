function Ellipse({ cx, cy, rx, ry, fill, topOffset = 0, leftOffset = 0 }) {

  // randomize a multiplier to add displacement
  const randomMultiplier = () => Math.random() * 0.5 + 0.75;

  const randomizedTopOffset = topOffset * randomMultiplier(); 
  const randomizedLeftOffset = leftOffset * randomMultiplier();

    return (
      <div className="riso-layer"
        style={{
          marginTop: `${randomizedTopOffset}px`,
          marginLeft: `${randomizedLeftOffset}px`,
        }}
      >
        <svg
          width="320"
          height="320"
          viewBox="0 0 320 320"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"

        >
          <ellipse
            cx={cx} cy={cy} rx={rx} ry={ry} 
          />
        </svg>
      </div>
    );
  }
  
  export default Ellipse;
  