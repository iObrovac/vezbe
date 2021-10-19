import React, { useState } from "react";

function Pravougaonik(props) {
  const { item, index, deleteItem } = props;
  const [forDeletion, setForDeletion] = useState(false);

  return (
    <div
      className={`pravougaonik ${forDeletion ? " pravougaonik--obrisan" : ""}`}
    >
      {item}
      <button
        onClick={() => {
          console.log("izvan", index);
          setTimeout(() => {
            deleteItem(item);
          }, 500);
          setForDeletion(true);
        }}
      >
        X
      </button>
    </div>
  );
}

export default function Lista() {
  const [items, setItems] = useState([
    Math.random(),
    Math.random(),
    Math.random(),
  ]);

  const deleteItem = (clickedItem) => {
    setItems((prevState) => {
      const newItems = [...prevState];
      const filteredItems = newItems.filter(
        (newItem) => newItem !== clickedItem
      );
      console.log("filteredItems", filteredItems);

      return filteredItems;
    });
  };

  const addItem = () => {
    setItems((prevState) => {
      const niz = [...prevState, Math.random()];
      return niz;
    });
  };

  return (
    <div className="wrapper">
      <div className="okvir">
        <button onClick={addItem}>Add Item</button>
        {items.map((item, index) => (
          <Pravougaonik
            key={item}
            item={item}
            index={index}
            deleteItem={deleteItem}
          />
        ))}
      </div>
    </div>
  );
}
