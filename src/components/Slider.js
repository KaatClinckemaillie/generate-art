import PropTypes from "prop-types";
import { useStore } from "../store";

const Slider = ({ onValueChange, value, label, min, max }) => {
  const setAmountLayers = useStore(state => state.setAmountLayers);
  const clearArray = useStore(state => state.clearArray);
  const setAmountColumns = useStore(state => state.setAmountColumns);
  const setAmountGridItems = useStore(state => state.setAmountGridItems);
  const setPositions = useStore(state => state.setPositions);
  const setScale = useStore(state => state.setScale);
  const positions = useStore(state => state.positions);
  const height = useStore(state => state.height);
  const width = useStore(state => state.width);

  const calculatePositions = (columns, amountItems) => {
    const rows = amountItems / columns;
    const tmpPositionsX = [];
    const tmpPositionsY = [];
    const tmpPositions = [...positions];

    clearArray(tmpPositions);
    console.log(`columns : ${columns}`)
    console.log(`amount Items = ${amountItems}`)

    if(columns === 0){
      tmpPositions.push({x: 2, y: 5 });
      setPositions(tmpPositions);
    }else if (columns === 1) {
      tmpPositions.push({x: 25, y: 0}, {x: 25, y: height/2});
      setPositions(tmpPositions);
      
    }else{
      // calculate all x components
      for(let i = 0; i< columns; i ++){
        tmpPositionsX.push(i * width / columns + 6)
      }


      // calculate all y components
      for(let i = 0; i< rows; i ++){
        tmpPositionsY.push(i * height / rows)
      } 

    
      tmpPositionsY.forEach(y => {
        for(let i= 0; i< tmpPositionsX.length; i++){
          tmpPositions.push({x: tmpPositionsX[i], y: y})
        }
      });
      
      setPositions(tmpPositions);
    }
    
    
  }
  
  const changeGrid = (value) => {
    setAmountColumns(value);
    scaleCircles(value);

    if(value === 0) {     
      setAmountGridItems(1);
      calculatePositions(value, 1);

    }else if (value === 1) {
      setAmountGridItems(2);
      calculatePositions(value, 2)

    }else if (value === 2){
      setAmountGridItems(6)
      calculatePositions(value, 6)

    } else {
      const calculatedValue = value * (2 * value - 2);
      setAmountGridItems(calculatedValue);
      calculatePositions(value, calculatedValue)      
    }    
  }



  const scaleCircles = (value) => {
    if(value === 0){
      setScale(1)
    }
    if(value === 1) {
      setScale(0.5)
    }
    if(value === 2) {
      setScale(0.3)
    }
    if(value === 3) {
      setScale(0.2)
    }
    if(value === 4) {
      setScale(0.15)
    }
    if(value === 5) {
      setScale(0.1)
    }  
  }

  return (
    <label>
      <span>{label}</span>
      <input
        type="range"
        min={min}
        max={max}
        value= {value}
        /* onChange={(e) => onValueChange(parseInt(e.target.value, 10))} */
        onChange= {(e) => (onValueChange === 'changeGrid') ? changeGrid(parseInt(e.target.value, 10)) : setAmountLayers(parseInt(e.target.value, 10))}
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
