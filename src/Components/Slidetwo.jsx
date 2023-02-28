import React from "react";
import "./Slideone.css"


const colors = [
    "https://iili.io/HEnd70G.md.png",
    "https://iili.io/HEn28v4.md.png",
    "https://iili.io/HEn3WSj.md.png",
    "https://iili.io/HEnFbLP.md.png",
    "https://iili.io/HEnKguR.md.png",
     "https://iili.io/HEnq719.md.png",
      "https://iili.io/HEnB7Qp.md.png"
    ];
const delay = 3000;

function Slidetwo() {
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
export default Slidetwo;