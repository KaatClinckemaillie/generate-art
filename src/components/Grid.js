import { useStore } from "../store";

const Grid = ({gridItems}) => {

  const amountColumns = useStore(state => state.amountColumns);
  
  let columns
  if (amountColumns === 0){
    columns = 1
  }else {
    columns = amountColumns
  }

  return (
        <svg /* className="grid" */ style={{gridTemplateColumns: `repeat(${columns}, 1fr)`}} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 3">
          {gridItems.map((item, index)=> <g width={2 / 3} height={2/3} key={index}>{item}</g>)}
        </svg>
    );
}

export default Grid;