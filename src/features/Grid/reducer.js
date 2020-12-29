
import { ADD_TILE, REMOVE_TILE } from './constants'

const initialState = []

function reducer(state = initialState, action) {
    switch (action.type) {

        // --------------------------------------------
        case ADD_TILE:
            const nextId = state.length + 1
            const newTile = { id: nextId, color: action.color }
            return [...state, newTile]

        case REMOVE_TILE:
            return state.filter(title => title.id !== action.id)

        // --------------------------------------------

        default:
            return state

    }
}

export default reducer