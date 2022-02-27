import './App.css';
import Grid from "./components/Grid";
import Circle from './components/Circle';
import Slider from './components/Slider';
import { useState } from 'react';

function App() {
  
  //const gridItems = [<Circle layers={2} />, gridItem, gridItem, gridItem, gridItem, gridItem];
  const [amountColumns, setAmountColumns] = useState(0);
  const [amountLayers, setAmountLayers] = useState(1);
  const [amountGridItems, setAmountGridItems] = useState(1);

  const [gridItems, setGridItems] = useState(new Array(amountGridItems).fill(<Circle layers={amountLayers} />));

  

  const changeGrid = (value) => {
    setAmountColumns(value);
    if(value === 0) {     
      setAmountGridItems(1);
      setGridItems(new Array(1).fill(<Circle layers={amountLayers} />));
    }else if (value === 1) {
      setAmountGridItems(1);
      setGridItems(new Array(2).fill(<Circle layers={amountLayers} />));
    }else {
      setAmountGridItems(value * (2 * value - 2));
      setGridItems(new Array(value * (2 * value - 2)).fill(<Circle layers={amountLayers} />));
    }
    
  }

  const changeLayers = (value) => {
    setAmountLayers(value);
    setGridItems(new Array(amountGridItems).fill(<Circle layers={value} />));    
  }

  return (
    <div className='container'>
    <h1 className="title">Generate your own Karel-Martens artwork</h1>
    <form>
      <Slider label="Amount of cells" min={0} max={5} value={amountColumns} onValueChange={(value) => changeGrid(value)}/>
      <Slider label="Amount of layers" min={1} max={3} value={amountLayers} onValueChange={(value) => changeLayers(value)}/>
    </form>

    <div className='poster'>
      <Grid gridItems={gridItems} gridColumns={amountColumns}/>

      <div className='poster__name'>

      </div>
    </div>
    
    </div>
  );
}

export default App;
