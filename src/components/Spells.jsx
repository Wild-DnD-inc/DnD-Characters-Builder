import { useSpells } from "../contexts/SpellsContext";
import { useEffect } from "react";
import { useSteps } from "../contexts/StepsContext";

function Spells({ level }) {
    const { spells } = useSpells();
    const { steps, setSteps } = useSteps();

    const handleSpellChange = (event) => {
        const selectedSpellIndex = event.target.value;
        const selectedSpell = spells.find(spell => spell.index === selectedSpellIndex);

        setSteps(previousSteps => ({
            ...previousSteps,
            spells: selectedSpell.name
        }));
    };

    useEffect(() => {
        setSteps(previousSteps => ({
            ...previousSteps,
            spells: null
        }));
    }, [level, setSteps]);

    return (
        <div className="spells-component">
            <h3>Spells</h3>
            <select name="spells" id="spells" defaultValue={''} onChange={handleSpellChange}>
                <option value="">--Not Selected--</option>
                {spells.filter(spell => spell.level + 1 === level).map((spell, index) => 
                    <option value={spell.index} key={spell.index}>{index + 1}. {spell.name}</option>
                )}
            </select>
        </div>
    );
}

export default Spells;
