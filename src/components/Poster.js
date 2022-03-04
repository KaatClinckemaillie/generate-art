import { useStore } from "../store";
import Grid from "./Grid";
import Text from "./Text";
import Rect from "./Rect";

const Poster = () => {

    const width = useStore(state => state.width);
    const height = useStore(state => state.height);
    const name = useStore(state => state.name);

    return(

        <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${width} ${height}`} className='poster'>
            <Rect />
            <Grid  />
            <Text />
        </svg>
    )

}

export default Poster;