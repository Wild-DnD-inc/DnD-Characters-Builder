import AbilityScore from '../components/AbilityScore'

function Abilities() {

    return (
        <section className='ability'>
            <AbilityScore name="Strength" score={0} modifier={0}/>
            <AbilityScore name="Dexterity" score={0} modifier={0}/>
            <AbilityScore name="Constitution" score={0} modifier={0}/>
            <AbilityScore name="Intelligence" score={0} modifier={0}/>
            <AbilityScore name="Wisdom" score={0} modifier={0}/>
            <AbilityScore name="Charisma" score={0} modifier={0}/>
        </section>
    )

}

export default Abilities