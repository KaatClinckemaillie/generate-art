import { useStore } from "../store";
import Circle from "./Circle";



const Grid = () => {

  const amountLayers = useStore(state => state.amountLayers);
  const amountGridItems = useStore(state => state.amountGridItems);
  const positions = useStore(state => state.positions);
  const widhtGrid = useStore(state=> state.widthGrid);
  const heightGrid = useStore(state => state.heightGrid);

  const arrayCircles = []
  
  
  const createArrayCircles = (arrayCircles) =>{
    for(let i= 0; i < amountGridItems; i++){
      arrayCircles.push([i])
    }
    return arrayCircles
  }
  createArrayCircles(arrayCircles);

  return (
      <g className="grid" width={widhtGrid} height={heightGrid}>
        {arrayCircles.map((item, index)=> <Circle index={index}  positions={positions[index]} key={item} layers={amountLayers} />)}
      </g>
    );
}

export default Grid;