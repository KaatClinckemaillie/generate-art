import { useStore } from "../store";
import Circle from "./Circle";



const Grid = ({positions}) => {

  const amountColumns = useStore(state => state.amountColumns);
  const amountLayers = useStore(state => state.amountLayers);
  const amountGridItems = useStore(state => state.amountGridItems);
  const width = useStore(state => state.width);
  const height = useStore(state => state.height);


  const arrayCircles = []
  
  
  const createArrayCircles = (arrayCircles) =>{
    for(let i= 0; i < amountGridItems; i++){
      arrayCircles.push([i])
    }
    return arrayCircles
  }
  createArrayCircles(arrayCircles);

  return (
        <svg /* className="grid" */  data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${width} ${height}`} >
          {/* hier moet je de positie van de cirkel al doorgeven */}
          {arrayCircles.map((item, index)=> <Circle positions={positions[index]} key={item} layers={amountLayers} />)}
        </svg>
    );
}

export default Grid;