import { useProficiencies } from "../contexts/ProficienciesContext";

function Proficiencies() {

    const { proficiencies } = useProficiencies()

    return (
        <div className="proficiencies-component">
            <label htmlFor="proficiencies">Proficiencies</label>
            <select name="proficiencies" id="proficiencies" defaultValue={''}>
                <option value="">--Not Selected--</option>
                {proficiencies.map((background, index) => 
                    <option value={background.index} key={background.index}>{index + 1}. {background.name}</option>
                )}
            </select>
        </div>
    )

}

export default Proficiencies