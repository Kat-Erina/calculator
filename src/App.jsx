import { useState } from "react";

function App() {
  let [total, setTotal] = useState("");
  let [val, setVal] = useState("");
  let [arr, setArr] = useState([]);

  function calculations(param) {
    if (total) {
      let result = eval(param.join(""));
      // console.log(result);
      setArr([result]);
      setTotal(result);
    } else {
      let result = eval(param.join(""));
      // console.log(result);
      setTotal(result);
      setArr([result]);
    }
  }
  console.log(arr);

  return (
    <>
      <div>
        <button
          value="1"
          onClick={(e) => {
            let newarr = [...arr, e.target.value];
            setArr(newarr);
          }}
        >
          1
        </button>
        <button
          value="3"
          onClick={(e) => {
            let newarr = [...arr, e.target.value];
            setArr(newarr);
          }}
        >
          3
        </button>
        <button
          value="+"
          onClick={(e) => {
            let newarr = [...arr, e.target.value];
            setArr(newarr);
          }}
        >
          +
        </button>
        <button
          value="2"
          onClick={(e) => {
            let newarr = [...arr, e.target.value];
            setArr(newarr);
          }}
        >
          2
        </button>
        <button
          value="*"
          onClick={(e) => {
            let newarr = [...arr, e.target.value];
            setArr(newarr);
          }}
        >
          *
        </button>
        <button
          value="="
          onClick={() => {
            calculations(arr);
            console.log(val);
          }}
        >
          =
        </button>

        <p>{arr}</p>
      </div>
    </>
  );
}

export default App;
