import { useState } from "react";

function App() {
  let [total, setTotal] = useState("");
  let [val, setVal] = useState(0);
  let [arr, setArr] = useState([]);

  // const numArray = array.map((el) => {
  //   if (!parseInt(el)) {
  //     return el;
  //   }
  //   return parseInt(el);
  // });
  // console.log(numArray);

  // function getValue(param) {
  //   console.log(param);
  // }

  console.log(total);
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
            // getValue(e.target.value);
            // setTotal((prev) => prev + e.target.value);
            // console.log(total);
            let newarr = [...arr, e.target.value];
            setArr(newarr);
          }}
        >
          3
        </button>
        <button
          value="+"
          onClick={(e) => {
            // getValue(e.target.value);
            // setTotal((prev) => prev + e.target.value);
            // console.log(total);
            let newarr = [...arr, e.target.value];
            setArr(newarr);
          }}
        >
          +
        </button>
        <button
          value="2"
          onClick={(e) => {
            // getValue(e.target.value);
            // setTotal((prev) => prev + e.target.value);
            // console.log(total);
            let newarr = [...arr, e.target.value];
            setArr(newarr);
          }}
        >
          2
        </button>
        <button
          value="*"
          onClick={(e) => {
            // getValue(e.target.value);
            // setTotal((prev) => prev + e.target.value);
            // console.log(total);
            let newarr = [...arr, e.target.value];
            setArr(newarr);
          }}
        >
          *
        </button>
        <button
          value="="
          onClick={(e) => {
            console.log(arr);
          }}
        >
          =
        </button>
      </div>
    </>
  );
}

export default App;
