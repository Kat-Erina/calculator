import { useState } from "react";
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
