import { useArmors } from "../contexts/ArmorsContext";

function Shield({ value, onChange }) {
    const { shield } = useArmors();

    return (

        <div>
            <select id="shield" name="shield" className="equipment" value={value} onChange={onChange}>
                <option value="">--Without shield--</option>
                {<option value={`+ ${shield.name}`}>Shield</option>}
            </select>
        </div>
    )
}

export default Shield