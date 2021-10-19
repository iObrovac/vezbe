import React from "react";

export default function squaresFlow() {
  const squareNum = 500;
  const squares = Array.from({ length: squareNum });

  const navHeight = 32;
  const squareMaxSize = 40;
  const squareMinSize = 20;

  const getRandomLeft = () =>
    -(
      Math.random() * (squareMaxSize * 3 - squareMaxSize * 2) +
      squareMaxSize * 2
    );

  const getRandomSize = () =>
    Math.random() * (squareMaxSize - squareMinSize) + squareMinSize;

  const getRandomTop = () =>
    Math.random() * (window.innerHeight - squareMaxSize - navHeight);

  const getRandomOpacity = () => Math.random();

  const getRandomAnimationDuration = () =>
    `${Math.random() * (5 - 0.5) + 0.5}s`;

  const getRandomScale = () => `scale(${Math.random() * (2.5 - 0.8) + 0.8})`;

  const getRandomDuration = () => `${Math.random() * (2.5 - 1.8) + 1.8}s`;

  return (
    <div className="squares-wrap">
      {squares.map((_, index) => (
        <div
          className="square-base"
          key={`square-${index}`}
          style={{
            left: getRandomLeft(),
            top: getRandomTop(),
            animationDuration: getRandomDuration(),
            animationDelay: getRandomDuration(),
          }}
        >
          <div
            className="square-layer"
            style={{
              transform: getRandomScale(),
            }}
          >
            <div
              className="square"
              style={{
                width: getRandomSize(),
                height: getRandomSize(),
                opacity: getRandomOpacity(),
                animationDuration: getRandomAnimationDuration(),
                backgroundColor: `rgb(${Math.floor(
                  Math.random() * 256
                )},${Math.floor(Math.random() * 256)},${Math.floor(
                  Math.random() * 256
                )})`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
