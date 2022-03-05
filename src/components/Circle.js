import CirclePath from "./CirclePath";
import PropTypes from "prop-types";
import { random } from "../functions/lib.js";
import { useStore } from "../store";


const artworkLayers = [
        [{rotate:'rotate(20, 50, 50)'}],
        [{rotate:'rotate(20, 50, 50)'} , {rotate:'rotate(120, 50, 50)'}],
        [{rotate:'rotate(20, 50, 50)'}, {rotate:'rotate(120, 50, 50)'} , {rotate:'rotate(90, 50, 50)'}]
    ]

const Circle = ({layers, positions, index}) => {
    const scale = useStore(state => state.scale);
    const selectedColors = useStore(state => state.selectedColors);
    const showAnimation = useStore(state => state.showAnimation);

    let style;

    if(showAnimation) {
        style = {
            animation : 'rotation 8s infinite linear',
            transformOrigin: `${positions.x + (100 * scale / 2)}px ${positions.y + (100 * scale /2)}px`
        }
    }else {
        style = {};
    }



    return (

        <g  style={style}>
            <g id={index} className="circle" transform={`translate(${positions.x} ${positions.y}) scale(${scale} )`} >            
                {artworkLayers[layers-1].map((layer, index) =>  < CirclePath scale={`scale(${scale})`}  rotate={layer.rotate} fill={selectedColors[random(0,selectedColors.length)]} key={index}/>)}                      
            </g>
        </g>
    )
}

Circle.propTypes = {
    layers: PropTypes.number.isRequired
}

export default Circle;