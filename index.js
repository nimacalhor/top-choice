// controller
import ListView from "./listView.js"

const state = {
    itemClickCounts : new Map([
        [1, 0],
        [2, 0],
        [3, 0],
        [4, 0],
        [5, 0],
    ])
}

const listItemClickHandler = function(index){
    const currentItemClickedCount = state.itemClickCounts.get(index + 1);
    state.itemClickCounts.set(index + 1, currentItemClickedCount + 1)
    
    ListView.updateBadge(index, currentItemClickedCount + 1)
    ListView.updateListOrder(state.itemClickCounts)
}

ListView.onClickHandler(listItemClickHandler)