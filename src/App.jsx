import { useState } from "react";

function App() {
  let [arr, setArr] = useState([]);
  let [isTrue, setIsTrue] = useState(false);
  let numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  let operators = ["+", "-", "*", "/"];

  function calculations(param) {
    if (operators.includes(arr[arr.length - 1]) || arr[arr.length - 1] == ".") {
      alert("Please put valid number");
      return;
    } else {
      let result = eval(param.join(""));
      if (result === Infinity) {
        setArr([0]);
      } else {
        // setArr([result]);
        // result === Infinity ? setArr(0) : setArr([result, param]);
        if (result === Infinity) {
          console.log("xramuna");
          setArr([0, param]);
        } else {
          setArr([result, param]);
        }
        setIsTrue(true);
      }
    }
  }

  function update(param) {
    setIsTrue(false);
    if (arr.length == 0 && !numArray.includes(param)) {
      alert("Please write a valid number");
      return;
    } else if (
      arr.length == "1" &&
      arr[0] == "0" &&
      operators.includes(param)
    ) {
      let newArr = [...arr, param];
      setArr(newArr);
    } else if (arr.length == "1" && arr[0] == "0" && !isTrue) {
      if (param == ".") {
        let newArr = [...arr, param];
        setArr(newArr);
        return;
      } else return;
    } else if (operators.includes(param) && arr.length > 0) {
      if (
        arr[arr.length - 1] == "*" ||
        arr[arr.length - 1] == "+" ||
        arr[arr.length - 1] == "-" ||
        arr[arr.length - 1] == "/" ||
        arr[arr.length - 1] == "."
      ) {
        if (operators.includes(param)) {
          arr[arr.length - 1] = param;

          setArr(arr);
        }
      } else {
        let result = eval(arr.join(""));

        if (result === Infinity) {
          console.log("xramuna");
          setArr([0, param]);
        } else {
          setArr([result, param]);
        }
      }
    } else {
      if (arr.includes(".") && param == ".") {
        return;
      } else if (isTrue && arr.length == 1) {
        setArr([param]);
      } else {
        if (
          operators.includes(arr[arr.length - 2]) &&
          arr[arr.length - 1] == "0" &&
          param != "."
        ) {
          alert("Please write valid number");
          return;
        } else {
          let newArr = [...arr, param];
          setArr(newArr);
        }
      }
    }
  }

  function removeLastItem() {
    arr.pop();
    console.log(arr);
    setArr(arr);
  }

  function clearAll() {
    setArr([]);
  }
  console.log(arr);
  return (
    <>
      <div>
        <button
          value={1}
          onClick={(e) => {
            update(e.target.value);
            setIsTrue(false);
          }}
        >
          1
        </button>
        <button
          value={2}
          onClick={(e) => {
            update(e.target.value);
          }}
        >
          2
        </button>
        <button
          value={3}
          onClick={(e) => {
            update(e.target.value);
          }}
        >
          3
        </button>
        <button
          value={4}
          onClick={(e) => {
            update(e.target.value);
          }}
        >
          4
        </button>
        <button
          value={5}
          onClick={(e) => {
            update(e.target.value);
          }}
        >
          5
        </button>
        <button
          value={6}
          onClick={(e) => {
            update(e.target.value);
          }}
        >
          6
        </button>
        <button
          value={7}
          onClick={(e) => {
            update(e.target.value);
          }}
        >
          7
        </button>
        <button
          value={8}
          onClick={(e) => {
            update(e.target.value);
          }}
        >
          8
        </button>
        <button
          value={9}
          onClick={(e) => {
            update(e.target.value);
          }}
        >
          9
        </button>
        <button
          value={0}
          onClick={(e) => {
            update(e.target.value);
          }}
        >
          0
        </button>
        <button
          value="+"
          onClick={(e) => {
            if (arr.length !== 0) {
              update(e.target.value);
            }
          }}
        >
          +
        </button>
        <button
          value="-"
          onClick={(e) => {
            update(e.target.value);
          }}
        >
          -
        </button>
        <button
          value="/"
          onClick={(e) => {
            update(e.target.value);
          }}
        >
          /
        </button>
        <button
          value="."
          onClick={(e) => {
            update(e.target.value);
          }}
        >
          .
        </button>
        <button
          value="*"
          onClick={(e) => {
            if (arr.length !== 0) {
              update(e.target.value);
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
        <button
          onClick={() => {
            let newArr = [...arr];
            newArr.pop();

            // console.log(arr, newArr);
            setArr(newArr);
          }}
        >
          C
        </button>
        <button onClick={clearAll}>CE</button>
        {console.log(arr)}
        {/* <p>{arr.length > 0 ? arr : " "}</p> */}
        <p>{arr}</p>
      </div>
    </>
  );
}

export default App;
