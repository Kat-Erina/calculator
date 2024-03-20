import { useState } from "react";

function App() {
  let [total, setTotal] = useState("");
  let [arr, setArr] = useState([]);

  function calculations(param) {
    let result = eval(param.join(""));
    setTotal(result);
    setArr([result]);
  }

  function update(param) {
    if (param == "+" || param == "*") {
      if (arr.includes("+") || arr.includes("*")) {
        let result = eval(arr.join(""));
        setTotal(result);
        setArr([result, param]);
      } else {
        let newarr = [...arr, param];
        setArr(newarr);
      }
    } else {
      if (typeof arr[0] == "number" && arr.length == 1) {
        setArr([param]);
        setTotal("");
      } else {
        let newarr = [...arr, param];
        setArr(newarr);
      }
    }
  }
  console.log(arr);

  return (
    <>
      <div>
        <button
          value="1"
          onClick={(e) => {
            update(e.target.value);
            // calculations(arr);
          }}
        >
          1
        </button>
        <button
          value="3"
          onClick={(e) => {
            update(e.target.value);
            // calculations(arr);
          }}
        >
          3
        </button>
        <button
          value="+"
          onClick={(e) => {
            if (arr.length !== 0) {
              update(e.target.value);
              // calculations(arr);
            }
          }}
        >
          +
        </button>
        <button
          value="2"
          onClick={(e) => {
            update(e.target.value);
            // calculations(arr);
          }}
        >
          2
        </button>
        <button
          value="*"
          onClick={(e) => {
            if (arr.length !== 0) {
              update(e.target.value);
              // calculations(arr);
            }
          }}
        >
          *
        </button>
        <button
          value="="
          onClick={() => {
            calculations(arr);
          }}
        >
          =
        </button>

        <p>{arr.length > 0 ? arr : " "}</p>
      </div>
    </>
  );
}

export default App;
