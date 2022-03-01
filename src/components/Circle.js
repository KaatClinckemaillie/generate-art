import CirclePath from "./CirclePath";
import PropTypes from "prop-types";
import { random } from "../functions/lib.js";
import { useStore } from "../store";


const artworkLayers = [
        [{rotate:'rotate(20, 50, 50)'}],
        [{rotate:'rotate(20, 50, 50)'} , {rotate:'rotate(120, 50, 50)'}],
        [{rotate:'rotate(20, 50, 50)'}, {rotate:'rotate(120, 50, 50)'} , {rotate:'rotate(90, 50, 50)'}]
    ]

const colors = ['#99F2EF','#00FF00','#0000FF', '#EBD600', '#4169E1', `#FFA200`, 
    `#FFD5FF`, `#B4EDF0`, `#7719FF`, `#007510`, `#FF0000`, 
    `#50B7D9`, `#00C900`];


const Circle = ({layers}) => {
    const scale = useStore(state => state.scale);

    return (
        <>
            {artworkLayers[layers-1].map((layer, index) => <g key={index} transform="translate(0 0)"> < CirclePath scale={`scale(${scale})`} rotate={layer.rotate} fill={colors[random(0,colors.length)]} key={index}/></g>)}            
        </>
    )
}

Circle.propTypes = {
    layers: PropTypes.number.isRequired
}

export default Circle;