import './App.css';
import Grid from "./components/Grid";
import Circle from './components/Circle';
import Slider from './components/Slider';
import { useState } from 'react';

function App() {
  
  //const gridItems = [<Circle layers={2} />, gridItem, gridItem, gridItem, gridItem, gridItem];
  const [amountCells, setAmountCells] = useState(1);
  const [amountLayers, setAmountLayers] = useState(1);

  const [gridItems, setGridItems] = useState(new Array(amountCells).fill(<Circle layers={amountLayers} />));

  

  const changeCells = (value) => {
    setAmountCells(value);
    setGridItems(new Array(value).fill(<Circle layers={amountLayers} />));
  }

  const changeLayers = (value) => {
    setAmountLayers(value);
    setGridItems(new Array(amountCells).fill(<Circle layers={value} />));
  }

  return (
    <div className='container'>
    <h1 className="title">Generate your own Karel-Martens artwork</h1>
    <form>
      <Slider label="Amount of cells" min={1} max={16} value={amountCells} onValueChange={(value) => changeCells(value)}/>
      <Slider label="Amount of layers" min={1} max={3} value={amountLayers} onValueChange={(value) => changeLayers(value)}/>
    </form>

    <div className='poster'>
      <Grid gridItems={gridItems} />

      <div className='poster__name'>

      </div>
    </div>
    
    </div>
  );
}

export default App;
