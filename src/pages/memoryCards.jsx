import React, { useState } from "react";

function Card(props) {
  const cardItem = props.cardItem;
  const onClickCard = props.onCardClick;

  return (
    <div
      className={`card ${cardItem.flip ? "card-flipped" : ""}`}
      onClick={onClickCard}
    >
      <div className="card-face">{cardItem.value}</div>
      <div className="card-back"></div>
    </div>
  );
}

// probelm duplog okidanja check-a cemo resiti useEffectom
// a novim 'paired' key-em cemo zakljucati kartice da ne ucestvuju u daljem
// uporedjivanju kartica i na kraju cemo pomocu njega zakljuciti da li je
// korisnik stigao do kraja igrice

function getGeneratedArray() {
  const generateArrayItem = (newId, newValue) => {
    return { id: newId, value: newValue, flip: false, paired: false };
  };

  const generatedArray = [...Array(12).keys()];
  const generatedArrayDoubled = [...generatedArray, ...generatedArray];
  const cardsArray = generatedArrayDoubled.map((arrayItem, itemIndex) =>
    generateArrayItem(itemIndex, arrayItem + 1)
  );
  const cardsArrayForRender = [];
  const cardsArrayLength = cardsArray.length;
  for (let i = 0; i < cardsArrayLength; i++) {
    const randomIndex = Math.floor(Math.random() * cardsArray.length);
    const currentItem = cardsArray.splice(randomIndex, 1)[0];
    cardsArrayForRender.push(currentItem);
  }
  return cardsArrayForRender;
}

export default function MemoryCards() {
  const [cards, setCards] = useState(getGeneratedArray());

  const checkCards = (newCards) => {
    const flippedCards = newCards.filter((cardItem) => cardItem.flip);
    console.log("flippedCards.length", flippedCards.length);
    if (flippedCards.length === 2) {
      const flippedCard1 = flippedCards[0];
      const flippedCard2 = flippedCards[1];
      if (flippedCard1.value === flippedCard2.value) {
        console.log("iste kartice!!!");
      } else {
        console.log("razlicite kartice!!!");
        for (let i = 0; i < newCards.length; i++) {
          if (
            newCards[i].id === flippedCard1.id ||
            newCards[i].id === flippedCard2.id
          ) {
            newCards.splice(i, 1, { ...newCards[i], flip: false });
          }
        }

        setTimeout(() => {
          console.log("checked set");
          setCards(newCards);
        }, 1500);
      }
    } else {
      console.log("samo jedna kartica okrenuta");
    }
  };

  const onClickCard = (passedId) => {
    setCards((previousState) => {
      const newCards = [...previousState];

      for (let i = 0; i < newCards.length; i++) {
        if (newCards[i].id === passedId) {
          newCards.splice(i, 1, { ...newCards[i], flip: true });
        }
      }
      checkCards(newCards);
      return newCards;
    });
  };

  return (
    <div className="card-grid">
      {cards.map((arrItem) => (
        <Card
          cardItem={arrItem}
          onCardClick={() => onClickCard(arrItem.id)}
          key={arrItem.id}
        />
      ))}
    </div>
  );
}
