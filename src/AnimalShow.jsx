import "./css/AnimalShow.css";

import { useState } from "react";
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import horse from "./svg/horse.svg";
import heart from "./svg/heart.svg";

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};

//Function for the AnimalShow component
function AnimalShow({ type }) {
  //Setting a piece of state to count the clicks on the div containing the animal img
  const [clicks, setClicks] = useState(0);

  //Click handler to update the clicks counter using the setClicks setter - The clicks count will make the heart image bigger
  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className="animal-show" onClick={handleClick}>
      <img className="animal-image" alt={`${type} Image`} src={svgMap[type]} />
      <span>Number of clicks:{clicks}</span>
      <img
        className="heart-image"
        style={{ width: 20 + 10 * clicks + "px" }}
        src={heart}
        alt="Heart"
      />
    </div>
  );
}

export default AnimalShow;
