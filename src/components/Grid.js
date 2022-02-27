const Grid = ({gridItems}) => {
  return (
        <div className="grid">
        {gridItems.map((item, index)=> <div key={index}>{item}</div>)}
        </div>
    );
}

export default Grid;