import './Grid.css';
import { useStore } from "../store";
import Circle from "./Circle";



const Grid = () => {

  const amountGridItems = useStore(state => state.amountGridItems);
  
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
        {arrayCircles.map((item, index)=> <Circle index={index} key={item}  />)}
      </g>
    );
}

export default Grid;