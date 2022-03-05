import './Poster.css'
import { useStore } from "../store";
import Grid from "./Grid";
import Text from "./Text";
import Rect from "./Rect";

const Poster = () => {
    const widthPoster = useStore(state => state.widthPoster);
    const heightPoster = useStore(state => state.heightPoster);

    return(

        <svg id="poster" xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${widthPoster} ${heightPoster}`} className='poster'>
            <Rect />
            <Grid  />
            <Text />
        </svg>
    )

}

export default Poster;