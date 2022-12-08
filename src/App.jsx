"use strict";
import AnimalShow from "./AnimalShow";
import { useState } from "react";

import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import horse from "./svg/horse.svg";
import heart from "./svg/heart.svg";

function getRandomAnimal() {
  const animals = ["cat", "dog", "bird", "horse", "gator", "cow"];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);
  const [count, setCount] = useState(0);

  function handleClick() {
    setAnimals([...animals, getRandomAnimal()]);
    setCount(count + 1);
  }

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });
  return (
    <div>
      <button onClick={handleClick}>Click here to generate an animal</button>
      <p>Number of animals: {count}</p>
      <h1>{renderedAnimals}</h1>
    </div>
  );
}

export default App;
