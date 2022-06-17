import "./Cat.css";
import PropTypes from "prop-types";
import { useState } from "react";

const Cat = (props) => {
  // const [catAge, setCatAge] = useState(props.age);
  const [catSaying, setCatSaying] = useState(props.saying);

  const catName = props.name;
  // const catSaying = props.saying;
  const catAge = props.age;
  const catColor = props.color;
  const makeCatOlder = () => {
    // setCatAge(catAge + 1);
    props.setCatAgeCallback(props.id);
  };

  const changeCatSaying = (event) => {
    let newSaying = event.target.value;
    if (newSaying === "") {
      newSaying = "meow";
    }
    setCatSaying(newSaying);
  };

  const deleteCat = () => {
    props.deleteCatCallback(props.id);
  };

  return (
    <div className="cat">
      <h3>{catName}</h3>
      <p>{catSaying}</p>
      <p>
        {" "}
        Change Saying: <input type="text" onChange={changeCatSaying} />
      </p>
      <p>
        {" "}
        {catAge} {<button onClick={makeCatOlder}>🐾</button>}
        <button onClick={() => props.deleteCatCallback(props.id)}>
          DELETE CAT
        </button>
      </p>
      <p>{catColor}</p>
    </div>
  );
};

Cat.propTypes = {
  name: PropTypes.string.isRequired,
  saying: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  setCatAgeCallback: PropTypes.func.isRequired,
  deleteCatCallback: PropTypes.func.isRequired,
};

export default Cat;
