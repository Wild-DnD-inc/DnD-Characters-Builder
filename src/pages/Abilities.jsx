import '../styles/Abilities.css'
import { AbilitiesProvider } from "../contexts/AbilitiesContext";
import AbilityScore from '../components/AbilityScore';

const names = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma']

function Abilities() {

    return (
        <table>
            <thead>
                <tr>
                    <td></td>
                    <td><span>Score</span><span>Modifier</span></td>
                </tr>
            </thead>
            <tbody>
                <AbilitiesProvider>
                    {names.map(name => 
                        <AbilityScore key={name.toLowerCase()} name={name}/>
                    )}
                </AbilitiesProvider>
            </tbody>
        </table>
    )

}

export default Abilities