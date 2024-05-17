import { useEffect, useReducer } from "react";
import { useAbilities } from "../contexts/AbilitiesContext";
import { useSteps } from "../contexts/StepsContext";

const initialState = {score: 0, modifier: 0}

function reducer(state, action) {
  switch (action.type) {
    case 'score-increment':
      return {...state, score: state.score + 1}
    case 'score-decrement':
      return {...state, score: state.score - 1}
    case 'modifier-increment':
      return {...state, modifier: state.modifier + 1}
    case 'modifier-decrement':
      return {...state, modifier: state.modifier - 1}
    default:
      return state
  }
}  

function AbilityScore({name}) {

  const [ state, dispatch ] = useReducer(reducer, initialState)
  const { abilities, setAbilities } = useAbilities()
  const { steps, setSteps } = useSteps()

  useEffect(() => {
    setAbilities(previous => ({...previous, [name.toLowerCase()]: state}))
    setSteps({...steps, abilities: abilities})
  }, [name, state, setAbilities])

  return (
    <tr>
      <td>{name}</td>
      <td>
        <div className="score">
            <button className="minus" onClick={() => dispatch({type: 'score-decrement'})} disabled={state.score === 0}>-</button>
            <p>{state.score}</p>
            <button className="plus" onClick={() => dispatch({type: 'score-increment'})} disabled={state.score === 15}>+</button>
        </div>
        <div className="modifier">
            <button className="minus" onClick={() => dispatch({type: 'modifier-decrement'})} disabled={state.modifier === 0}>-</button>
            <p>+ {state.modifier}</p>
            <button className="plus" onClick={() => dispatch({type: 'modifier-increment'})} disabled={state.modifier === 5}>+</button>
        </div>
      </td>
    </tr>
  )

}

export default AbilityScore;
