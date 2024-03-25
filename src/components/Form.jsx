import Button from "./Button";
import PropTypes from "prop-types";
const Form = ({
  handleUpdate,
  handleCalculation,
  arr,
  clearAll,
  removeLastItem,
  operators,
}) => {
  let numArray = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    ".",
    "+",
    "-",
    "/",
  ];

  return (
    <form>
      <p>{arr}</p>
      {numArray.map((el, id) => {
        return (
          <Button
            key={id}
            value={el}
            handleUpdate={handleUpdate}
            operators={operators}
          />
        );
      })}

      <Button value="=" handleCalculation={handleCalculation}></Button>
      <Button value="CE" clearAll={clearAll}></Button>
      <Button value="C" removeLastItem={removeLastItem}></Button>
    </form>
  );
};

Form.propTypes = {
  value: PropTypes.string,
  handleUpdate: PropTypes.func,
  operators: PropTypes.array,
  handleCalculation: PropTypes.func,
  clearAll: PropTypes.func,
  removeLastItem: PropTypes.func,
  arr: PropTypes.array,
};

export default Form;
