import './App.css';
import Grid from "./components/Grid";

import Slider from './components/Slider';
import Color from './components/Color';
import Name from './components/Name';
import Poster from './components/Poster';
import Form from './components/Form';
import { useStore } from "./store";
import { useState } from "react";

function App() {

  const amountColumns = useStore(state => state.amountColumns);
  const amountLayers = useStore(state => state.amountLayers);
  const colors = useStore(state => state.colors);
  const width = useStore(state => state.width);
  const height = useStore(state => state.height);
  const name = useStore(state => state.name);
  //const [positions, setPositions] = useState([{x: 2, y: 5}]);
  const positions = useStore(state => state.positions);
  const setAmountColumns = useStore(state => state.setAmountColumns);
  const setAmountGridItems = useStore(state => state.setAmountGridItems);
  const setAmountLayers = useStore(state => state.setAmountLayers);
  const setScale = useStore(state => state.setScale);
  const setPositions = useStore(state => state.setPositions);
  

/*   const clearArray = (array) => {
    array.length = 0
  } */

/*   const calculatePositions = (columns, amountItems) => {
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
    
    
  } */



/*   const changeGrid = (value) => {
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
  } */


  return (
    <div className='container'>
    <h1 className="hidden">Generate Art</h1>
{/*     <div className="form">
      <p className="title">Generate your own Karel-Martens artwork</p>
      <Slider label="Size of the grid" min={0} max={5} value={amountColumns}  onValueChange={(value) => changeGrid(value)} />
      <Slider label="Amount of layers" min={1} max={3} value={amountLayers}  onValueChange={(value) => setAmountLayers(value)} />
      <Name />
      <p>Select your colors:</p>
      {colors.map(color => <Color value={color} key={color} /> )}
    </div> */}
    < Form />
     < Poster />     
    </div>
  );
}

export default App;
