import Armors from "./Armors"
import Weapons from "./Weapons"
import Tools from "./Tools"
import Gears from "./Gears"
import { WeaponsProvider } from "../contexts/WeaponsContext"
import { ArmorsProvider } from "../contexts/ArmorsContext"
import { GearsProvider } from "../contexts/GearsContext"
import { ToolsProvider } from "../contexts/ToolsContext"

function Equipment() {

    return (
        <>
        <h2>Equipment</h2>
        <p>Choose your equipment</p>
        <div className="grid-container">
            <div>
                <ArmorsProvider>
                    <Armors/>
                </ArmorsProvider>
                <WeaponsProvider>
                    <Weapons/>
                </WeaponsProvider>
                <ToolsProvider>
                    <Tools/>
                </ToolsProvider>
            </div>
            <div>
                <GearsProvider>
                    <Gears/>
                </GearsProvider>
                <h3>Particularities</h3>
                <textarea id="particularities" rows="3"></textarea>
            </div>
        </div>
        </>
    )
}

export default Equipment