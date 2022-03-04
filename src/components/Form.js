import Slider from './Slider';
import Name from './Name';
import Color from './Color';
import { useStore } from '../store';

const Form = () => {

    const colors = useStore(state => state.colors);
    const amountColumns = useStore(state => state.amountColumns);
    const amountLayers = useStore(state => state.amountLayers);
    

    return(
        <div className="form">
            <p className="title">Generate your own Karel-Martens artwork</p>
            <Slider label="Size of the grid" min={0} max={5} value={amountColumns}  onValueChange={'changeGrid'} />
            <Slider label="Amount of layers" min={1} max={3} value={amountLayers}  onValueChange={'changeLayers'} />
            <Name />
            <p>Select your colors:</p>
            {colors.map(color => <Color value={color} key={color} /> )}
        </div>
    )
}

export default Form;