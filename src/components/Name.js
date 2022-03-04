import { useStore } from "../store";

const Name = () => {
  const name = useStore(state => state.name);
  const setName = useStore(state => state.setName);

  return (
  <label>
    Name: <input type="text" value={name} onChange={(e) => setName(e.target.value, e)} />
  </label>);
}

export default Name;