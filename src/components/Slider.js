import './Slider.css';
import PropTypes from "prop-types";
import { useStore } from "../store";

const Slider = ({ onValueChange, label, min, max }) => {
  const setAmountLayers = useStore(state => state.setAmountLayers);
  const clearArray = useStore(state => state.clearArray);
  const setAmountColumns = useStore(state => state.setAmountColumns);
  const setAmountGridItems = useStore(state => state.setAmountGridItems);
  const setPositions = useStore(state => state.setPositions);
  const setScale = useStore(state => state.setScale);
  const positions = useStore(state => state.positions);
  const heightGrid = useStore(state => state.heightGrid);
  const widthGrid = useStore(state => state.widthGrid);
  const amountLayers = useStore(state => state.amountLayers);
  const amountColumns = useStore(state => state.amountColumns);
  let value;
  const calculatePositions = (columns, amountItems) => {
    const rows = amountItems / columns;
    const tmpPositionsX = [];
    const tmpPositionsY = [];
    const tmpPositions = [...positions];

    clearArray(tmpPositions);
    console.log(`columns : ${columns}`)
    console.log(`amount Items = ${amountItems}`)

    if(columns === 0){
      tmpPositions.push({x: 8, y: (heightGrid - widthGrid) / 2 });
      setPositions(tmpPositions);
    }else if (columns === 1) {
      tmpPositions.push({x: widthGrid / 4, y: 0 + 12}, {x: widthGrid / 4, y: heightGrid/2 + 12});
      setPositions(tmpPositions);
      
    }else{
      // calculate all x components
      for(let i = 0; i< columns; i ++){
        tmpPositionsX.push(i * widthGrid / columns + 24)
      }


      // calculate all y components
      for(let i = 0; i< rows; i ++){
        tmpPositionsY.push(i * heightGrid / rows + 12)
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
      setScale(3.98)
    }
    if(value === 1) {
      setScale(2)
    }
    if(value === 2) {
      setScale(1.6)
    }
    if(value === 3) {
      setScale(0.8)
    }
    if(value === 4) {
      setScale(0.6)
    }
    if(value === 5) {
      setScale(0.4)
    }  
  }

  if(onValueChange === 'changeGrid') {
    value = amountColumns;
  }else {
    value = amountLayers;
  }

  return (
    <label className='labelSlider'>
      <span>{label}</span>
      <input
        className='inputSlider'
        type="range"
        min={min}
        max={max}
        value= {value}
        onChange= {(e) => (onValueChange === 'changeGrid') ? changeGrid(parseInt(e.target.value, 10)) : setAmountLayers(parseInt(e.target.value, 10))}
      />
    </label>
  );
};

Slider.defaultProps = {
  min: 1,
  max: 3,
}

Slider.propTypes = {
  onValueChange: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired
};  

export default Slider;
