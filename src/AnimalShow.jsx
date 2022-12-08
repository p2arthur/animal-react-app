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
    <div onClick={handleClick}>
      <img alt={`${type} Image`} src={svgMap[type]} />
      <img style={{ width: 10 + 10 * clicks + "px" }} src={heart} alt="Heart" />
    </div>
  );
}

export default AnimalShow;
