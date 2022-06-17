import "./App.css";
import CatList from "./components/CatList.js";
import PropTypes from "prop-types";
import Cat from "./components/Cat";
import { useState } from "react";
// import Cat from "./components/Cat";

function App() {
  const [placeholder, setPlaceholder] = useState("Hello");
  const catData1 = [
    { id: 1, name: "Jeff", saying: "hi", age: 5, color: "tabby" },
    { id: 2, name: "Lily", saying: "cry", age: 5, color: "tabby" },
    { id: 3, name: "Richard", saying: "food", age: 5, color: "tabby" },
    { id: 4, name: "Prince", saying: "meow", age: 5, color: "tuxedo" },
  ];
  const catData2 = [
    { id: 3, name: "Richard", saying: "food", age: 5, color: "tabby" },
    { id: 4, name: "Prince", saying: "meow", age: 5, color: "tuxedo" },
  ];

  const [cats, setCats] = useState(catData1);

  const handleAppClick = () => {
    setPlaceholder(placeholder + "!");
  };

  const deleteCat = (id) => {
    console.log("delete", id);
    const newCats = cats.filter((cat) => cat.id !== id);
    setCats(newCats);
  };

  const setCatAge = (id) => {
    console.log("inside setCatAge", id);
    const olderCats = [...cats];

    for (let cat of olderCats) {
      if (cat.id === id) {
        cat.age += 1;
      }
    }
    setCats(olderCats);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Otters Flasky</h1>
      </header>
      <button onClick={handleAppClick}>{placeholder}</button>
      <main>
        <CatList
          catData={cats}
          setCatAgeCallback={setCatAge}
          deleteCatCallback={deleteCat}
        />
      </main>
    </div>
  );
}
// CatList.propTypes = {
//   catData: PropTypes.array.isRequired,
// };

export default App;
