import React, { useState } from "react";

export default function Baloon() {
  const [brojKlikova, setBrojKlikova] = useState(0);
  const [balonTrans, setBalonTrans] = useState({ x: 0, y: 0 });
  const [balonTrans1, setBalonTrans1] = useState({ x: 0, y: 0 });
  const [balonTrans2, setBalonTrans2] = useState({ x: 0, y: 0 });

  function setRandomBalonPosition(setter) {
    const potentialNegativeX = Math.random() > 0.5 ? -1 : 1;
    const potentialNegativeY = Math.random() > 0.5 ? -1 : 1;

    const newX = Math.random() * 300 * potentialNegativeX;
    const newY = Math.random() * 300 * potentialNegativeY;
    setter({ x: newX, y: newY });
  }
  const rot = Math.random() * 360;

  return (
    <div
      className="baloon-page"
      onClick={() => {
        setRandomBalonPosition(setBalonTrans1);
        setRandomBalonPosition(setBalonTrans);
        setRandomBalonPosition(setBalonTrans2);
        setBrojKlikova((prevState) => ++prevState);
      }}
    >
      <div className="balon_wrap">
        <div
          className="balon1-okvir"
          style={{
            transform: `translate(${balonTrans.x}px, ${balonTrans.y}px)`,
          }}
        >
          <div
            className="balon balon--prvi"
            style={{
              transform: `rotate(${rot}deg)`,
            }}
          >
            {brojKlikova}
          </div>
        </div>
        <div
          className="balon2-okvir"
          style={{
            transform: `translate(${balonTrans1.x}px, ${balonTrans1.y}px)`,
          }}
        >
          <div
            className="balon balon--drugi"
            style={{
              transform: `rotate(${rot}deg)`,
            }}
          >
            {brojKlikova}
          </div>
        </div>

        <div
          className="balon"
          style={{
            transform: `translate(${balonTrans2.x}px, ${balonTrans2.y}px)`,
          }}
        >
          {brojKlikova}
        </div>
      </div>
    </div>
  );
}
