import '../styles/Races.css'
import { useRaces } from '../contexts/RacesContext'
import { useSteps } from '../contexts/StepsContext'

function ListRaces({setRace}) {

    const { races } = useRaces()
    const { steps, setSteps } = useSteps()

    return (
        <div className="races">
            {races.map((race, index) => 
                <button type="button" className={`card ${race.index}`} key={race.index} onClick={() => setSteps({...steps, race: race.name})}>
                    <span>{index + 1}. {race.name}</span>
                </button>
            )}
        </div>
    )

}

export default ListRaces