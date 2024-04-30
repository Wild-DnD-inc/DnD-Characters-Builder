import Armor from "./Armor"
import Weapons from "./Weapons"
import Tools from "./Tools"
import Gear from "./Gear"

function Equipment() {

    return (
        <>
        <h2>Equipment</h2>
        <p>Choose your equipment</p>
        <div className="grid-container">
            <div>
                <Armor/>
                <Weapons/>
                <Tools/>
            </div>
            <div>
                <Gear/>
                <h3>Particularities</h3>
                <textarea id="particularities" rows="3"></textarea>
            </div>
        </div>
        </>
    )
}

export default Equipment