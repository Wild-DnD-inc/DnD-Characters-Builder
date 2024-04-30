import '../Races.css'
import { useRaces } from '../contexts/RacesContext'

function Races({setRace}) {

    const { races } = useRaces()

    return (
        <>
            <h2>Races</h2>
            <div className="choice">Choose the character race</div>
            <div className="races">
                {races.map((race, index) => 
                    <button type="button" className={race.index} key={race.index} onClick={() => setRace({value: race, isSelected: true})}>
                        <span>{index + 1}. {race.name}</span>
                    </button>
                )}
            </div>
        </>
    )

}

export default Races