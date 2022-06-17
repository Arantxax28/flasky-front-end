import "./CatList.css";
import Cat from "./Cat.js";
import PropTypes from "prop-types";

const CatList = (props) => {
  // console.log("catData: ", catData);
  // const CatList = ({}) => {
  //   const catData = props.catData;
  console.log("catData:", props.catData);
  // const catComponents = [];

  const catComponents = props.catData.map((cat) => (
    <Cat
      key={cat.id}
      id={cat.id}
      name={cat.name}
      saying={cat.saying}
      s
      age={cat.age}
      color={cat.color}
      setCatAgeCallback={props.setCatAgeCallback}
      deleteCatCallback={props.deleteCatCallback}
    />
  ));

  return (
    <div>
      <h2>Super Amazing List of Cutie Cats</h2>
      {catComponents}
    </div>
  );
};

CatList.propTypes = {
  catData: PropTypes.array.isRequired,
  setCatAgeCallback: PropTypes.func.isRequired,
  deleteCatCallback: PropTypes.func.isRequired,
};

export default CatList;
