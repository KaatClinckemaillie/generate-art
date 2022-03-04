import create from 'zustand';
import produce from "immer";

const useStore = create(set => ({
    amountLayers : 1,
    amountGridItems : 1,
    amountColumns : 0,
    scale : 1,
    width : 100,
    height : 120,
    positions : [],
    positionsX : [],
    positionsY : [],
    colors: ['#99F2EF','#00FF00','#0000FF', '#EBD600', '#4169E1', '#FFA200', '#FFD5FF', '#B4EDF0', '#7719FF', '#007510', '#FF0000', '#50B7D9', '#00C900'],
    selectedColors: ['#99F2EF','#00FF00','#0000FF'],
    name: "Your name",
    setName: (name) => set(state => ({ name })),
    setPositions : (position) => set(produce(state => {state.position = position})),
    setScale: (scale) => set(produce(state => {state.scale = scale})),
    setAmountColumns : (amountColumns) => set(produce(state => {state.amountColumns = amountColumns})),
    setAmountGridItems: (amountGridItems) => set(produce(state => {state.amountGridItems = amountGridItems})),
    setAmountLayers: (amountLayers) => set(produce(state => {state.amountLayers = amountLayers})),
    addColor: (color) => set(state => ({selectedColors : [...state.selectedColors, color]})),
    removeColor: (color) => set(state => {
        const tmp = [...state.selectedColors];
        const index = tmp.indexOf(color);
        if(index !== -1) {
            tmp.splice(index, 1);
            return ({selectedColors: tmp});
        }
    })
    //removeColor: ()

}))

export { useStore }