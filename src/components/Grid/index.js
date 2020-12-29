import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import AddTileButton from '../AddTileButton'
import Tile from '../Tile'
import { addTileWithChecking, removeTile } from '../../features/Grid/actions'

const colors = ['red', 'blue', 'pink', 'yellow', 'gray']

export default function Grid() {

    let gridTiles = useSelector(state => state.grid)
    let dispatch = useDispatch()

    return (
        <div>
            <div style={{ maxWidth: 400, overflow: "hidden" }}>
                {gridTiles.map((tile, index) => {
                    return <Tile
                        {...tile}
                        key={index}
                        onDoubleClick={_ => dispatch(removeTile(tile.id))}
                    />
                })}
            </div>

            <div>
                {colors.map(color => {
                    return <AddTileButton
                        key={color}
                        color={color}
                        onClick={_ => dispatch(addTileWithChecking(color))}
                    />
                })}
            </div>

        </div>
    )
}