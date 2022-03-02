import './App.css';
import Grid from "./components/Grid";
import Circle from './components/Circle';
import Slider from './components/Slider';
import { useStore } from "./store";
import { useState } from "react";

function App() {


  const amountColumns = useStore(state => state.amountColumns)
  const amountLayers = useStore(state => state.amountLayers)
  const amountGridItems = useStore(state => state.amountGridItems)


  const [positions, setPositions] = useState([{x: 0, y: 25}]);
  //const [positionsX, setPositionsX] = useState([]);
  //const [positionsY, setPositionsY] = useState([]);
  //const [gridItems, setGridItems] = useState(new Array(amountGridItems).fill(<Circle layers={amountLayers} />));
  
  const setAmountColumns = useStore(state => state.setAmountColumns);
  const setAmountGridItems = useStore(state => state.setAmountGridItems);
  const setAmountLayers = useStore(state => state.setAmountLayers);
  const setScale = useStore(state => state.setScale);


  const clearArray = (array) => {
    array.length = 0
  }

  const calculatePositions = (columns, amountItems) => {
    const rows = amountItems / columns;
    const tmpPositionsX = [];
    const tmpPositionsY = [];
    const tmpPositions = [...positions];

    //clearArray(tmpPositionsX);
    //clearArray(tmpPositionsY);
    clearArray(tmpPositions);
    console.log(`columns : ${columns}`)
    console.log(`amount Items = ${amountItems}`)

    if(columns === 0){
      tmpPositions.push({x: 0, y: 25});
      setPositions(tmpPositions);
    }else if (columns === 1) {
      tmpPositions.push({x: 0, y: 0}, {x: 0, y:50});
      setPositions(tmpPositions);
      
    }else{
      // calculate all x components
      for(let i = 0; i< columns; i ++){
        tmpPositionsX.push(i * 100 / columns)
      }
      //setPositionsX(tmpPositionsX);

      // calculate all y components
      for(let i = 0; i< rows; i ++){
        tmpPositionsY.push(i * 100 / rows)
      } 
      //setPositionsY(tmpPositionsY);
    
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
    //calculateXPositions()
    
    if(value === 0) {     
      setAmountGridItems(1);
      calculatePositions(value, 1)
      //setGridItems(new Array(1).fill(<Circle layers={amountLayers} />));
    }else if (value === 1) {
      setAmountGridItems(2);
      calculatePositions(value, 2)
      setScale(0.8)
      //setGridItems(new Array(2).fill(<Circle layers={amountLayers} />));
    }else if (value === 2){
      setAmountGridItems(6)
      calculatePositions(value, 6)
      setScale(0.6)
    } else {
      const calculatedValue = value * (2 * value - 2);
      setAmountGridItems(calculatedValue);
      calculatePositions(value, calculatedValue)
      
      //setGridItems(new Array(calculatedValue).fill(<Circle layers={amountLayers} />));
      scaleCircles(value);   
    }

    
    
  }  

  const scaleCircles = (value) => {
    if(value === 2) {
      setScale(0.6)
    }
    if(value === 3) {
      setScale(0.4)
    }
    if(value === 4) {
      setScale(0.2)
    }
    if(value === 5) {
      setScale(0.1)
    }
  
  }


  const changeLayers = (value) => {
    setAmountLayers(value);
    //setGridItems(new Array(amountGridItems).fill(<Circle layers={value} />));    
  } 

  return (
    <div className='container'>
    <h1 className="hidden">Generate Art</h1>
    <form className="form">
      <p className="title">Generate your own Karel-Martens artwork</p>
      <Slider label="Amount of cells" min={0} max={5} value={amountColumns}  onValueChange={(value) => changeGrid(value)} />
      <Slider label="Amount of layers" min={1} max={3} value={amountLayers}  onValueChange={(value) => changeLayers(value)} />
    </form>

    <div className='poster'>
          {/* neemt verkeerde position (altijd eentje ervoor?) */}
      <Grid  gridColumns={amountColumns} positions={positions}/>

      <div className='poster__name'>

      </div>
    </div>
    
    </div>
  );
}

export default App;
