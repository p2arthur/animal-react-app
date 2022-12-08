"use strict";
import AnimalShow from "./AnimalShow";
import { useState } from "react";
import "./css/app.css";

import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import horse from "./svg/horse.svg";
import heart from "./svg/heart.svg";

//Function to generate a random animal from the animals array
function getRandomAnimal() {
  const animals = ["cat", "dog", "bird", "horse", "gator", "cow"];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  //Creating a piece of state for the animals and count
  const [animals, setAnimals] = useState([]);
  const [animalCount, setCount] = useState(0);

  //Handling the click to setAnimals to update the animals array and to add 1 to the count
  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
    setCount(animalCount + 1);
  };

  //Mapping the animals array and creating an animal show element for each one and passing type and key as props
  const renderedAnimals = animals.map((animal, index) => (
    <AnimalShow type={animal} key={index} />
  ));

  return (
    <div className="app">
      <button onClick={handleClick}>Click here to generate an animal</button>
      <p>Number of animals: {animalCount}</p>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
}

export default App;
