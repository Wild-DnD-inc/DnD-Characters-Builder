import '../Form.css'
import Backgrounds from "./Backgrounds"
import { BackgroundsProvider } from "../contexts/BackgroundsContext"
import { ProficienciesProvider } from "../contexts/ProficienciesContext"
import Proficiencies from "./Proficiencies"
import { FeaturesProvider } from "../contexts/FeaturesContext"
import Features from "./Features"
import Level from "./Level"

function Form() {
    
    return (
        <>
            <h2>(Informations complémentaires)</h2>
            <div className="choice">Choisir les caractéristiques complémentaires</div>
            <form action="" method="post">
                <BackgroundsProvider>
                    <Backgrounds/>
                </BackgroundsProvider>
                <ProficienciesProvider>
                    <Proficiencies/>
                </ProficienciesProvider>
                <FeaturesProvider>
                    <Features/>
                </FeaturesProvider>
                <Level/>
                {/* Component Equipment */}
                {/* Ability score */}
            </form>
        </>
    )
}

export default Form