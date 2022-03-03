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

    setPositions : (position) => set(produce(state => {state.position = position})),
    setScale: (scale) => set(produce(state => {state.scale = scale})),
    setAmountColumns : (amountColumns) => set(produce(state => {state.amountColumns = amountColumns})),
    setAmountGridItems: (amountGridItems) => set(produce(state => {state.amountGridItems = amountGridItems})),
    setAmountLayers: (amountLayers) => set(produce(state => {state.amountLayers = amountLayers})),

}))

export { useStore }