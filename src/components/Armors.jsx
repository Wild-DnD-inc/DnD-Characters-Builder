import { useArmors } from "../contexts/ArmorsContext";

function Armors({ setArmors }) {
    const { lightArmor, mediumArmor, heavyArmor, shield } = useArmors();

    return (
        <>
        <h3>Armors</h3>
        <div>
            <div>
            <select id="armor" name="armor" className="equipment">
                <option value="">--Without armor--</option>
                <optgroup label="Light Armor">
                {lightArmor.map((item, index) => (
                        <option key={index} value={item.index}>{item.name}</option>
                    ))} 
                </optgroup>
                <optgroup label="Medium Armor">
                {mediumArmor.map((item, index) => (
                        <option key={index} value={item.index}>{item.name}</option>
                    ))} 
                </optgroup>
                <optgroup label="Heavy Armor">
                {heavyArmor.map((item, index) => (
                        <option key={index} value={item.index}>{item.name}</option>
                    ))} 
                </optgroup>
            </select>
            </div>
            <div>
            <select id="shield" name="shield" className="equipment">
                <option value="">--Without shield--</option>
                {<option value={shield}>Shield</option>}
            </select>
            </div>
        </div>
        </>
    )
}

export default Armors