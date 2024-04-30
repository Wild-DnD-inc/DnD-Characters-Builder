import { useReducer } from "react";
import { SpellsProvider } from "../contexts/SpellsContext";
import Spells from "./Spells";

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {...state, count: state.count + 1}
        case 'decrement':
            return {...state, count: state.count - 1}
        default:
            return state
    }
}

function Level() {

    const [ state, dispatch ] = useReducer(reducer, {count: 1})

    return (
        <>
            <div className="level-component">
                <label htmlFor="level">Level</label>
                <div className="content">
                    <input type="number" name="level" id="level" min={1} max={20} value={state.count} onChange={(event) => setLevel(event.target.value)}/>
                    <button type="button" onClick={() => dispatch({type: 'decrement'})} disabled={state.count === 1}>-</button>
                    <button type="button" onClick={() => dispatch({type: 'increment'})} disabled={state.count === 10}>+</button>
                </div>
            </div>
            <SpellsProvider>
                <Spells  level={state.count}/>
            </SpellsProvider>
        </>
    )

}

export default Level