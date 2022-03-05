import './Name.css'
import { useStore } from "../store";

const Name = () => {
  const name = useStore(state => state.name);
  const setName = useStore(state => state.setName);

  return (
  <label className='label'>
    Name of the artist: <input className='inputText' type="text" value={name} onChange={(e) => setName(e.target.value, e)} />
  </label>);
}

export default Name;