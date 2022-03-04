import { useStore } from "../store";

const Text = () => {
    const name = useStore(state => state.name);

    return(
        <text  y={135} className='poster__name'> {name} </text>
    )
}

export default Text;