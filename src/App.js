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
  const [positions, setPositions] = useState([]);
  const [positionsX, setPositionsX] = useState([]);
  const [positionsY, setPositionsY] = useState([]);
  //const [gridItems, setGridItems] = useState(new Array(amountGridItems).fill(<Circle layers={amountLayers} />));
  
  const setAmountColumns = useStore(state => state.setAmountColumns);
  const setAmountGridItems = useStore(state => state.setAmountGridItems);
  const setAmountLayers = useStore(state => state.setAmountLayers);
  const setScale = useStore(state => state.setScale);
  
  const handleClearArray = (array) => {
    setPositions(positions.length = 0);
  }

  const handleCalculatePositions = (array, columns, rows) => {
    const tmp = [...array];
    
  }

  const handleCreatePositions = (columns , amountCells) => {
    const rows = amountCells / columns;
    handleClearArray(positions);
    handleClearArray(positionsX);
    handleClearArray(positionsY);
    const tmpPositions = [...positions];


    for(let i = 0; i< 2; i ++){
      tmpPositions.push({position: 'hello'});
    }

    setPositions(tmpPositions);

    // set positions
    console.log(positions)
  }
  
  const changeGrid = (value) => {
    setAmountColumns(value);
    handleCreatePositions(amountColumns, amountGridItems)
    if(value === 0) {     
      setAmountGridItems(1);
      //setGridItems(new Array(1).fill(<Circle layers={amountLayers} />));
    }else if (value === 1) {
      setAmountGridItems(2);
      setScale(0.8)
      //setGridItems(new Array(2).fill(<Circle layers={amountLayers} />));
    }  else {
      const calculatedValue = value * (2 * value - 2);
      setAmountGridItems(calculatedValue);
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
      <Grid gridItems={amountGridItems} gridColumns={amountColumns}/>

      <div className='poster__name'>

      </div>
    </div>
    
    </div>
  );
}

export default App;
