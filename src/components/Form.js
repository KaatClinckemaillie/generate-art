import './Form.css';
import Slider from './Slider';
import Name from './Name';
import Color from './Color';
import Select from './Select';
import { useStore } from '../store';

const Form = () => {

    const colors = useStore(state => state.colors);
    const amountColumns = useStore(state => state.amountColumns);
    const amountLayers = useStore(state => state.amountLayers);
    const showAnimation = useStore(state => state.showAnimation);
    const toggleShowAnimation = useStore(state => state.toggleShowAnimation);

    return(
        <div className="form">
            <Slider label="Size of the grid" min={0} max={5} value={amountColumns}  onValueChange={'changeGrid'} />
            <Slider label="Amount of layers" min={1} max={3} value={amountLayers}  onValueChange={'changeLayers'} />
            <Select />
            <Name />            
            <p>Select your colors:</p>
            <div className='colors'>
                {colors.map(color => <Color value={color} key={color} /> )}
            </div> 
            <button className='toggle' onClick={toggleShowAnimation}>{showAnimation ? 'Stop' : 'Spin around!'}</button>
        </div>
    )
}

export default Form;