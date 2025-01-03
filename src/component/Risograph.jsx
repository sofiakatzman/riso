import Ellipse from "./Ellipse";
import Layer from "./Layer";

function Risograph({ data }) {
  console.log(data);

  return (
    <div className="riso-container">
      {/* Render Layer components if layers exist */}
      {data.layers && data.layers.length > 0 && 
        data.layers.map((layer, index) => (
          <Layer
            key={`layer-${index}`} 
            {...layer} 
          />
        ))}

      {/* Render Ellipse components if ellipses exist */}
      {data.ellipses && data.ellipses.length > 0 && 
        data.ellipses.map((ellipse, index) => (
          <Ellipse
            key={`ellipse-${index}`} 
            {...ellipse} 
          />
        ))}
    </div>
  );
}

export default Risograph;
