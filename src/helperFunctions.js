export function calculations(param, operatorsArray, setArr, setIsTrue) {
  if (
    operatorsArray.includes(param[param.length - 1]) ||
    param[param.length - 1] == "."
  ) {
    alert("Please put valid number");
    return;
  } else {
    let result = eval(param.join(""));

    if (result === Infinity) {
      setArr([0]);
    } else {
      if (result === Infinity) {
        setArr([0, param]);
      } else {
        setArr([result]);
      }
      setIsTrue(true);
    }
  }
}

export function update(param, operatorsArray, arr, setArr, setIsTrue, isTrue) {
  setIsTrue(false);
  if (arr.length == 0 && operatorsArray.includes(param)) {
    alert("Please write a valid number");
    return;
  } else if (
    arr.length == "1" &&
    arr[0] == "0" &&
    operatorsArray.includes(param)
  ) {
    let newArr = [...arr, param];
    setArr(newArr);
  } else if (arr.length == "1" && arr[0] == "0" && !isTrue) {
    if (param == ".") {
      let newArr = [...arr, param];
      setArr(newArr);
      return;
    } else return;
  } else if (operatorsArray.includes(param) && arr.length > 0) {
    if (
      arr[arr.length - 1] == "*" ||
      arr[arr.length - 1] == "+" ||
      arr[arr.length - 1] == "-" ||
      arr[arr.length - 1] == "/" ||
      arr[arr.length - 1] == "."
    ) {
      if (operatorsArray.includes(param)) {
        arr[arr.length - 1] = param;

        setArr(arr);
      }
    } else {
      let result = eval(arr.join(""));

      if (result === Infinity) {
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
        operatorsArray.includes(arr[arr.length - 2]) &&
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
