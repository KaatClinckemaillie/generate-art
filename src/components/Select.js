import './Select.css';
import { useStore } from '../store';

const Select = () => {
    const blendMode = useStore(state => state.blendMode);
    const setBlendMode = useStore(state => state.setBlendMode);
    const blendModes = useStore(state => state.blendModes);

    return(
        <label className="label">
          Blend mode:
          <select className="select" value={blendMode} onChange={(e) => setBlendMode(e.target.value)}>
            {blendModes.map(blendMode => <option key={blendMode} value={blendMode}>{blendMode}</option>)}
          </select>
        </label>
    )
}

export default Select;