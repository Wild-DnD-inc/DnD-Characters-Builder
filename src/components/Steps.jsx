import { Link } from "react-router-dom"
import { useSteps } from "../contexts/StepsContext"

function Steps() {

    const { steps } = useSteps()

    return (
        <section className="steps">
            <Link to="/races">Races</Link>
            <Link to="/classes">Classes</Link>
            <Link to="/abilities">Abilities</Link>
            <Link to="/spells">Spells</Link>
            <Link to="/equipments">Equipments</Link>
            <Link to="/character">Character</Link>
            <Link to="/resume">Resume</Link>
        </section>
    )

}

export default Steps