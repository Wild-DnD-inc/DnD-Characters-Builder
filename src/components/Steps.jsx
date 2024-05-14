import { Link, redirect } from "react-router-dom"
import { useSteps } from "../contexts/StepsContext"

function Steps() {

    const { steps } = useSteps()

    return (
        <section className="steps">
            <Link to="/races">Races<span>{steps.race}</span></Link>
            <Link to="/classes">Classes<span>{steps.classe}</span></Link>
            <Link to="/abilities">Abilities<span>{''}</span></Link>
            <Link to="/stats">Stats<span>{''}</span></Link>
            {/* <Link to="/equipments">Equipments<span>{''}</span></Link> */}
            <redirect to='/'/>
        </section>
    )

}

export default Steps