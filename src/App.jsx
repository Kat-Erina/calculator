import { useState } from "react";
import Decimal from "decimal.js";
// const Decimal = require("decimal.js");

// import Decimal from "decimal.js";

// import { Decimal } from "decimal.js";

// let y = new Decimal("07+7");
// console.log(y.join());
// let z = new Decimal("0.8");
// let res = y.times(z);
// console.log(res.toString());

function App() {
  let [total, setTotal] = useState("");
  let [arr, setArr] = useState([]);
  let [isTrue, setIsTrue] = useState(false);

  function calculations(param) {
    param.forEach((el) => {
      console.log(el);
    });

    let result = eval(param.join(""));

    setTotal(result);
    setArr([result]);
    setIsTrue(true);
  }
  console.log(isTrue);

  let operators = ["+", "-", "*", "/"];

  function update(param) {
    setIsTrue(false);

    if (
      (arr.length === 0 && operators.includes(param)) ||
      (arr.length === 0 && param == ".")
    ) {
      alert("Please write a valid number");
      return;
    } else if (
      arr.length == "1" &&
      arr[0] == "0" &&
      param != "."
      //  ||
      // operators.includes(param)
    ) {
      console.log("badzaghua");
      return;
    } else if (operators.includes(param) && arr.length > 0) {
      if (
        arr.includes("+") ||
        arr.includes("*") ||
        arr.includes("/") ||
        arr.includes("-") ||
        arr.includes(".")
      ) {
        if (
          arr[arr.length - 1] == "*" ||
          arr[arr.length - 1] == "+" ||
          arr[arr.length - 1] == "-" ||
          arr[arr.length - 1] == "/" ||
          arr[arr.length - 1] == "."
        ) {
          console.log("sheicavs");
          if (param === ".") {
            return;
          } else {
            arr[arr.length - 1] = param;
            console.log("bijo");
            setArr(arr);
          }
        } else if (
          param == "." &&
          typeof Number(arr[arr.length - 1]) != "number"
        ) {
          return;
        } else {
          console.log("bijo");
          let result = eval(arr.join(""));

          setTotal(result);
          setArr([result, param]);
        }
      } else {
        console.log("bijo");
        let newArr = [...arr, param];
        setArr(newArr);
      }
    } else {
      if (typeof arr[0] == "number" && arr.length == 1 && param == ".") {
        console.log("ki");
        setTotal("");

        setArr([param]);
        return;
      } else if (arr.includes(".") && param == ".") {
        console.log("wertili u kve gvaqvs");
        return;
      } else if (isTrue && arr.length == 1) {
        console.log("bijo");
        setTotal("");

        setArr([param]);
      } else {
        console.log("bijo");
        if (
          // param == "0" &&
          operators.includes(arr[arr.length - 2]) &&
          arr[arr.length - 1] == "0" &&
          param != "."
        ) {
          console.log("siaxle");
          alert("Please write valid number");
          return;
        } else {
          let newArr = [...arr, param];
          setArr(newArr);
        }
      }
    }
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
        {console.log(arr)}
        <p>{arr.length > 0 ? arr : " "}</p>
      </div>
    </>
  );
}

export default App;
