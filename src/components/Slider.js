import PropTypes from "prop-types";
import { useStore } from "../store";

const Slider = ({ onValueChange, value, label, min, max }) => {
  return (
    <label>
      <span>{label}</span>
      <input
        type="range"
        min={min}
        max={max}
        value= {value}
        onChange={(e) => onValueChange(parseInt(e.target.value, 10))}
      />
      <span>{value}</span>
    </label>
  );
};

/* Slider.defaultProps = {
  min: 0
}

Slider.propTypes = {
  onValueChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
}; */

export default Slider;
