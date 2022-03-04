import { useStore } from "../store";
import Circle from "./Circle";



const Grid = () => {

  const amountColumns = useStore(state => state.amountColumns);
  const amountLayers = useStore(state => state.amountLayers);
  const amountGridItems = useStore(state => state.amountGridItems);
  const width = useStore(state => state.width);
  const height = useStore(state => state.height);
  const positions = useStore(state => state.positions);


  const arrayCircles = []
  
  
  const createArrayCircles = (arrayCircles) =>{
    for(let i= 0; i < amountGridItems; i++){
      arrayCircles.push([i])
    }
    return arrayCircles
  }
  createArrayCircles(arrayCircles);

  return (
      <g className="grid">
        {arrayCircles.map((item, index)=> <Circle  positions={positions[index]} key={item} layers={amountLayers} />)}
      </g>
    );
}

export default Grid;