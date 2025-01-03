function Layer({ fill, path, topOffset = 0, leftOffset = 0  }) {
    const randomTilt = Math.random() * 2.20 - 1.10;
    return (
      <div className="riso-layer">
        <svg
          width="350"
          height="350"
          viewBox="0 0 350 350"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            transform: `rotate(${randomTilt}deg)`,
            marginTop: `${topOffset}px`, 
            marginLeft: `${leftOffset}px`, 
          }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d={path}
            fill={fill}
            
          />
        </svg>
      </div>
    );
  }
  
  export default Layer;
  