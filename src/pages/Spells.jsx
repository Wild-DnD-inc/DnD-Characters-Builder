import Level from "../components/Level"
import { FeaturesProvider } from "../contexts/FeaturesContext"
import Features from "../components/Features"
import { ProficienciesProvider } from "../contexts/ProficienciesContext"
import Proficiencies from "../components/Proficiencies"

function Spells() {

    return (
        <form>
            <Level/>
            <FeaturesProvider>
                <Features/>
            </FeaturesProvider>
            <ProficienciesProvider>
                <Proficiencies/>
            </ProficienciesProvider>

        </form>
    )

}

export default Spells