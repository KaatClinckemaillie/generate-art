const Grid = ({gridItems, gridColumns}) => {
  if (gridColumns === 0){
    gridColumns = 1
  }

  return (
        <div className="grid" style={{gridTemplateColumns: `repeat(${gridColumns}, 1fr)`}}>
        {gridItems.map((item, index)=> <div key={index}>{item}</div>)}
        </div>
    );
}

export default Grid;