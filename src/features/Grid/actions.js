import { ADD_TILE, REMOVE_TILE } from './constants'

export function addTile(color) {
    return {
        type: ADD_TILE,
        created_at: Date.now(),
        color
    }
}
// -------------- remove tile action creator ---------------//
export function removeTile(id) { // <--- jangan lupa export
    return {
        type: REMOVE_TILE,
        id
    }
}

export function addTileWithChecking(color) {


    return function (dispatch, getState) {
        if (getState().grid.length < 5) {
            dispatch(addTile(color))
        }
    }

}

