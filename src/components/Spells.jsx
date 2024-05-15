import { useSpells } from "../contexts/SpellsContext";

function Spells({level}) {

    const { spells } = useSpells()

    return (
        <div className="spells-component">
            <h3>Spells</h3>
            <select name="spells" id="spells" defaultValue={''}>
                <option value="">--Not Selected--</option>
                {spells.filter(spell => spell.level + 1 === level).map((spell, index) => 
                    <option value={spell.index} key={spell.index}>{index + 1}. {spell.name}</option>
                )}
            </select>
        </div>
    )

}

export default Spells