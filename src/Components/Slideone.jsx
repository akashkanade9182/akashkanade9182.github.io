import React from "react";
import "./Slideone.css"


const colors = [
    "https://iili.io/HMxV66G.md.png",
     "https://iili.io/HMxV7Eb.md.png",
      "https://iili.io/HMxW7tt.md.png",
      "https://iili.io/HMxXj7R.md.png",
      "https://iili.io/HMxXip2.md.png"
    ];
const delay = 3000;

function Slideone() {
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
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
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
        {colors.map((backgroundColor, index) => (
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
        {colors.map((_, idx) => (
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
export default Slideone;