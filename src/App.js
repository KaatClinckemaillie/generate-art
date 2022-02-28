import './App.css';
import Grid from "./components/Grid";
import Circle from './components/Circle';
import Slider from './components/Slider';
import { useState } from 'react';
import { useStore } from "./store";

function App() {

/*   const [amountColumns, setAmountColumns] = useState(0);
  const [amountLayers, setAmountLayers] = useState(1);
  const [amountGridItems, setAmountGridItems] = useState(1); */
  const amountColumns = useStore(state => state.amountColumns)
  const amountLayers = useStore(state => state.amountLayers)
  const amountGridItems = useStore(state => state.amountGridItems)

  const [gridItems, setGridItems] = useState(new Array(amountGridItems).fill(<Circle layers={amountLayers} />));
  
  const setAmountColumns = useStore(state => state.setAmountColumns);
  const setAmountGridItems = useStore(state => state.setAmountGridItems);
  const setAmountLayers = useStore(state => state.setAmountLayers);

   const changeGrid = (value) => {
    setAmountColumns(value);
    if(value === 0) {     
      setAmountGridItems(1);
      setGridItems(new Array(1).fill(<Circle layers={amountLayers} />));
    }else if (value === 1) {
      setAmountGridItems(1);
      setGridItems(new Array(2).fill(<Circle layers={amountLayers} />));
    }  else {
      console.log(value)
      const calculatedValue = value * (2 * value - 2);
      setAmountGridItems(calculatedValue);
      setGridItems(new Array(calculatedValue).fill(<Circle layers={amountLayers} />));
    }
    
  } 

   const changeLayers = (value) => {
    setAmountLayers(value);
    setGridItems(new Array(amountGridItems).fill(<Circle layers={value} />));    
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
      <Grid gridItems={gridItems} gridColumns={amountColumns}/>

      <div className='poster__name'>

      </div>
    </div>
    
    </div>
  );
}

export default App;
