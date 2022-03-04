import { useStore } from "../store";

const Rect = () => {
    const width = useStore(state => state.width);
    const height = useStore(state => state.height);

    return(
        <rect width={width} height={height} fill="#fff" stroke="#000" strokeWidth={2}/>
    )
}

export default Rect;