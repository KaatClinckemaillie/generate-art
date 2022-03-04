import { useStore } from "../store";

const Color = ({value}) => {
    const selectedColors = useStore(state => state.selectedColors);
    const addColor = useStore(state => state.addColor);
    const removeColor = useStore(state => state.removeColor);

    let colorIsSelected = false;

    if( selectedColors.includes(value)){
        colorIsSelected = true;
    }
    

    const handleInputColorChange = (value) => {
       if(!colorIsSelected){
            addColor(value)
       }else if (colorIsSelected && selectedColors.length >= 2) {
           console.log(selectedColors.length)
           removeColor(value)
       }
    }

    return (
        <label>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width={35} height={35}>
                <circle cx="6" cy="6" r="4" stroke= {colorIsSelected ? "#000" : "none"} fill={value} strokeWidth={0.5}/>
                </svg>
                <input 
                    type="checkbox" 
                    value={value}
                    checked={colorIsSelected}
                    onChange={(e) => handleInputColorChange(e.target.value)}
                />
        </label>
    )
}

export default Color;