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
