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
    "*",
  ];

  return (
    <form className="flex flex-col  bg-red-200 w-[300px] overflow-hidden rounded-xl">
      <p className="w-full min-h-20 p-6 paragraph text-wrap bg-teal-700 text-slate-50 text-2xl">
        {arr}
      </p>
      <div className=" grid grid-cols-4 gap-5 p-4 rounded-b-lg bg-emerald-950">
        <Button value="CE" clearAll={clearAll}></Button>
        <Button value="C" removeLastItem={removeLastItem}></Button>
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
      </div>
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
