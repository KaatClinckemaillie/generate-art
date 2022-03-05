import './Text.css'
import { useStore } from "../store";

const Text = () => {
    const name = useStore(state => state.name);
    const heightPoster = useStore(state => state.heightPoster);
    return(
        <text className="posterText" x={10} y={heightPoster-15} > {name} </text>
    )
}

export default Text;