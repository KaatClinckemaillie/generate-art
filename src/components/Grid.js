import { useStore } from "../store";
import Circle from "./Circle";
import { useState } from "react";


const Grid = ({gridItems, positions}) => {

  const amountColumns = useStore(state => state.amountColumns);
  const amountLayers = useStore(state => state.amountLayers);
  const amountGridItems = useStore(state => state.amountGridItems);

  let columns
  if (amountColumns === 0){
    columns = 1
  }else {
    columns = amountColumns
  }
  const arrayCircles = []
  
  
  const createArrayCircles = (arrayCircles) =>{
    for(let i= 0; i < amountGridItems; i++){
      arrayCircles.push([i])
    }
    return arrayCircles
  }
  createArrayCircles(arrayCircles);

  return (
        <svg /* className="grid" */ style={{gridTemplateColumns: `repeat(${columns}, 1fr)`}} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 150" width="400" height="600">
          {/* hier moet je de positie van de cirkel al doorgeven */}
          {arrayCircles.map((item, index)=> <Circle positions={positions[index]} key={item} layers={amountLayers} />)}
        </svg>
    );
}

export default Grid;