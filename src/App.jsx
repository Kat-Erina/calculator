import { useState } from "react";
import Decimal from "decimal.js";
import Form from "./components/Form";
import { calculations, update } from "./helperFunctions";

function App() {
  let [arr, setArr] = useState([]);
  let [isTrue, setIsTrue] = useState(false);
  let operators = ["+", "-", "*", "/"];

  function handleCalculation() {
    calculations(arr, operators, setArr, setIsTrue);
  }

  function handleUpdate(val) {
    update(val, operators, arr, setArr, setIsTrue, isTrue);
  }

  function removeLastItem() {
    const newArr = arr.slice(0, -1);
    setArr(newArr);
  }

  function clearAll() {
    setArr([]);
  }

  let x = new Decimal("0.8");
  let y = new Decimal("0.7");
  console.log(x.times(y).valueOf());

  return (
    <>
      <Form
        handleUpdate={handleUpdate}
        handleCalculation={handleCalculation}
        arr={arr}
        clearAll={clearAll}
        removeLastItem={removeLastItem}
        operators={operators}
      />
    </>
  );
}

export default App;
