import create from 'zustand';
import produce from "immer";

const useStore = create(set => ({
    amountLayers : 1,
    amountGridItems : 1,
    amountColumns : 0,
    scale : 1,
    width : 100,
    height : 140,
    positionsX : [],
    positionsY : [],
    colors: ['#99F2EF','#00FF00','#0000FF', '#EBD600', '#4169E1', '#FFA200', '#FFD5FF', '#7719FF', '#007510', '#FF0000', '#50B7D9', '#00C900'],
    selectedColors: ['#99F2EF','#00FF00','#0000FF'],
    name: "Your name",
    positions: [{x: 2, y: 5}],
    setName: (name, e) => set(state => ({ name })),
    setPositions : (positions) => set(produce(state => {state.positions = positions})),
    setScale: (scale) => set(produce(state => {state.scale = scale})),
    setAmountColumns : (amountColumns) => set(produce(state => {state.amountColumns = amountColumns})),
    setAmountGridItems: (amountGridItems) => set(produce(state => {state.amountGridItems = amountGridItems})),
    setAmountLayers: (amountLayers) => set(produce(state => {state.amountLayers = amountLayers})),
    clearArray: (array) => set(array.length = 0) ,
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