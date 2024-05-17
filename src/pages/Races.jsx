import ListRaces from "../components/ListRaces"
import { RacesProvider } from "../contexts/RacesContext"
import '../styles/Races.css'

function Races({setRace}) {

    return (
        <RacesProvider>
            <ListRaces/>
        </RacesProvider>
    )

}

export default Races