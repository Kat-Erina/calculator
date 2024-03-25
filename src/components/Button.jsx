import PropTypes from "prop-types";

const Button = ({
  value,
  handleUpdate,
  handleCalculation,
  clearAll,
  removeLastItem,
  operators,
}) => {
  return (
    <button
      className=" w-14 h-14 rounded-full bg-slate-600 hover:scale-125 hover:shadow-lg hover:shadow-cyan-500/50  text-xl text-slate-50"
      onClick={(e) => {
        e.preventDefault();
        if (value === "=") {
          handleCalculation();
        } else if (value === "CE") {
          clearAll();
        } else if (value === "C") {
          removeLastItem();
        } else {
          handleUpdate(value, operators);
        }
      }}
    >
      {value}
    </button>
  );
};

Button.propTypes = {
  value: PropTypes.string,
  handleUpdate: PropTypes.func,
  operators: PropTypes.array,
  handleCalculation: PropTypes.func,
  clearAll: PropTypes.func,
  removeLastItem: PropTypes.func,
};

export default Button;
