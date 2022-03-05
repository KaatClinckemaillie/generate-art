import { useStore } from "../store";

const Rect = () => {
    const widthPoster = useStore(state => state.widthPoster);
    const heightPoster = useStore(state => state.heightPoster);

    return(
        <rect width={widthPoster} height={heightPoster} fill="#fff" stroke="#000" strokeWidth={6}/>
    )
}

export default Rect;