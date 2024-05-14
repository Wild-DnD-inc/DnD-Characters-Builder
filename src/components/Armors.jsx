import { useArmors } from "../contexts/ArmorsContext";

function Armors({ value, onChange }) {
    const { lightArmor, mediumArmor, heavyArmor } = useArmors();

    return (
        <>
        <h3>Armors</h3>
            <div>
            <select id="armor" name="armor" className="equipment" value={value} onChange={onChange}>
                <option value="">--Without armor--</option>
                <optgroup label="Light Armor">
                {lightArmor.map((item, index) => (
                        <option key={index} value={item.name}>{item.name}</option>
                    ))} 
                </optgroup>
                <optgroup label="Medium Armor">
                {mediumArmor.map((item, index) => (
                        <option key={index} value={item.name}>{item.name}</option>
                    ))} 
                </optgroup>
                <optgroup label="Heavy Armor">
                {heavyArmor.map((item, index) => (
                        <option key={index} value={item.name}>{item.name}</option>
                    ))} 
                </optgroup>
            </select>
        </div>
        </>
    )
}

export default Armors