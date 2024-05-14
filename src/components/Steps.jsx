import { Link } from "react-router-dom"
import { useSteps } from "../contexts/StepsContext"

function Steps() {

    const { steps } = useSteps()

    return (
        <section className="steps">
            <Link to="/races">Races<span>{steps.race}</span></Link>
            <Link to="/classes">Classes<span>{steps.classe}</span></Link>
            <Link to="/abilities">Abilities<span>{''}</span></Link>
            <Link to="/stats">Stats<span>{''}</span></Link>
            <Link to="/equipments">Equipments<span>{''}</span></Link>
            <Link to="/character">Character<span>{''}</span></Link>
            <Link to="/resume">Resume<span>{''}</span></Link>
        </section>
    )

}

export default Steps