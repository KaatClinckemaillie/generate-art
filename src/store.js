import create from 'zustand';
import produce from "immer";

const useStore = create(set => ({
    amountLayers : 1,
    amountGridItems : 1,
    amountColumns : 0,
    scale : 3.9,
    widthPoster: 400,
    heightPoster: 640,
    widthGrid : 400,
    heightGrid : 600,
    positionsX : [],
    positionsY : [],
    blendModes: ['normal', 'screen', 'multiply', 'overlay', 'darken', 'lighten'],
    blendMode : 'normal',
    colors: ['#99F2EF','#00FF00','#0000FF', '#EBD600', '#4169E1', '#FFA200', '#FFD5FF', '#7719FF', '#007510', '#FF0000', '#50B7D9', '#00C900'],
    selectedColors: ['#99F2EF','#00FF00','#0000FF'],
    name: "Your name",
    positions: [{x: 8, y: 100}],
    showAnimation: false,
    toggleShowAnimation: () => set(state => ({showAnimation: !state.showAnimation})),
    setName: (name, e) => set(state => ({ name })),
    setBlendMode : (blendMode) => set(produce(state => {state.blendMode = blendMode})),
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