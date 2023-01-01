import React from "react";
import "./Slideone.css"


const colorss = [
  "https://iili.io/HnPoPiF.md.png",
  "https://iili.io/HnPxoW7.md.png",
  "https://iili.io/HnPxWdJ.md.png",
  "https://iili.io/HnPxIfe.md.png",
  "https://iili.io/HnPxr7f.md.png",
  "https://iili.io/HnPxLL7.md.png"
    ];
const delay = 3000;

function Slidefour() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colorss.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colorss.map((backgroundColor, index) => (
          <img
            className="slide"
            key={index}
            src={backgroundColor}
            alt="err"
            onClick={() => {
                setIndex(index);
              }}
          />
        ))}
      </div>

      <div className="slideshowDots">
        {colorss.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
export default Slidefour;