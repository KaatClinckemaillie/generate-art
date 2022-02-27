import CirclePath from "./CirclePath";
import PropTypes from "prop-types";
import { random } from "../functions/lib.js";

const Circle = ({layers}) => {
    const artworkLayers = [
        [{fill: '#99F2EF', rotate:'rotate(20, 50, 50)'}],
        [{fill: '#99F2EF', rotate:'rotate(20, 50, 50)'} , {fill: '#00FF00', rotate:'rotate(120, 50, 50)'}],
        [{fill: '#99F2EF', rotate:'rotate(20, 50, 50)'}, {fill: '#00FF00', rotate:'rotate(120, 50, 50)'} , {fill: '#0000FF', rotate:'rotate(90, 50, 50)'}]
    ]

    const colors = ['#99F2EF','#00FF00','#0000FF', '#EBD600', '#4169E1', `#FFA200`, 
    `#FFD5FF`, `#B4EDF0`, `#7719FF`, `#007510`, `#FF0000`, 
    `#50B7D9`, `#00C900`];

    return (
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            {artworkLayers[layers-1].map((layer, index) => < CirclePath rotate={layer.rotate} fill={colors[random(0,colors.length)]} key={index}/>)}            
        </svg>
    )
}

Circle.propTypes = {
    layers: PropTypes.number.isRequired
}

export default Circle;