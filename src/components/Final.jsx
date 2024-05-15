import '../styles/Final.css'
import Avatar from './Avatar';
import { useCharacter } from '../contexts/CharacterContext';
import { useSteps } from '../contexts/StepsContext';

function Final() {
    const { characterInfo } = useCharacter();
    
    const { steps } = useSteps()
 
    return (
        <>
        <div className="final-container">
            <div className="final-image">
                {console.log(steps)}
               <Avatar race={steps.race} classe={steps.classe} gender={characterInfo.gender}/>
            </div>
            <div className="final-character">
                <p>Name: {steps.characterInfo.name}</p>
                <p>Race: {steps.race}</p>
                <p>Class: {steps.classe}</p>
                <p>Alignment: {steps.alignment}</p>
            </div>
            <div className="final-abilities">
                <ul>
                    <li>Strength: {steps.abilities.strength.score} + {steps.abilities.strength.modifier}</li>
                    <li>Dexterity: {steps.abilities.dexterity.score} + {steps.abilities.dexterity.modifier}</li>
                    <li>Constitution: {steps.abilities.constitution.score} + {steps.abilities.constitution.modifier}</li>
                    <li>Intelligence: {steps.abilities.intelligence.score} + {steps.abilities.intelligence.modifier}</li>
                    <li>Wisdom: {steps.abilities.wisdom.score} + {steps.abilities.wisdom.modifier}</li>
                    <li>Charisma: {steps.abilities.charisma.score} + {steps.abilities.charisma.modifier}</li>
                </ul>
            </div>
            <div className="final-stuff">
                <div className="final-weapons">
                <p>Primary Weapon: {steps.primaryWeapon}</p>
                <p>Secondary Weapon: {steps.secondaryWeapon}</p>
                </div>
                <div className="final-armors">
                    <p>Armor: {steps.armor}</p>
                    <p>{steps.shield}</p>
                    
                </div>
                <div className="final-gears">
                    <p>Gears:</p>
                    <p>{steps.selectedGears.gear1}</p>
                    <p>{steps.selectedGears.gear2}</p>
                    <p>{steps.selectedGears.gear3}</p>
                    <p>{steps.selectedGears.gear4}</p>
                    <p>{steps.selectedGears.gear5}</p>
                    <p>{steps.selectedGears.gear6}</p>
                    <p>{steps.selectedGears.gear7}</p>
                    <p>{steps.selectedGears.gear8}</p>
                    <p>{steps.selectedGears.gear9}</p>
                    <p>{steps.selectedGears.gear10}</p>

                    <p>Tools:</p>
                    <p>{steps.selectedTools.tool1}</p>
                    <p>{steps.selectedTools.tool2}</p>
                    <p>{steps.selectedTools.tool3}</p>
                </div>
                <div className="final-spells">
                    <p>Spells: {steps.spells}</p>
                </div>
            </div>
    </div>
    <div className='resume-container'> 
        <h2>Resume</h2>
    <p className='resume'>
        {steps.characterInfo.name === '' && steps.characterInfo.age === '' && steps.race === '' && steps.classe === '' ? '' : `
        ${steps.characterInfo.name} is a ${steps.race} ${steps.classe}. ${steps.characterInfo.gender === 'male' ? ' He' : ' She'} is ${steps.characterInfo.age} years old ${steps.characterInfo.hair === '' ? '' : `and has ${steps.characterInfo.hair} hair.`} 
        ${steps.characterInfo.skin === '' ? '' : `${steps.characterInfo.gender === 'male' ? ' His' : ' Her'} skin is ${steps.characterInfo.skin}`} ${steps.characterInfo.eyes === '' ? '' : `and ${steps.characterInfo.gender === 'male' ? ' he' : ' she'} has ${steps.characterInfo.eyes} eyes.`}
        ${steps.armor === '' ? '' : `${steps.characterInfo.gender === 'male' ? ' He' : ' She'} is wearing a ${steps.armor}`} ${steps.primaryWeapon === '' ? '' : ` and fights with a ${steps.primaryWeapon}`}
        ${steps.secondaryWeapon === '' ? '' : ` and a ${steps.secondaryWeapon}`}. 
        ${steps.shield === '' ? '' : `${steps.characterInfo.gender === 'male' ? ' He' : ' She'} has a Shield too. `}
        ${steps.alignment === '' ? '' : `${steps.characterInfo.name} is known for ${steps.characterInfo.gender === 'male' ? ' his' : ' her'} ${steps.alignment} behaviour. `} 
        ${steps.characterInfo.traits === '' ? '' : `${steps.characterInfo.gender === 'male' ? ' He' : ' She'} is ${steps.characterInfo.traits}. `}
        ${steps.characterInfo.flaws === '' ? '' : `But ${steps.characterInfo.gender === 'male' ? ' he' : ' she'} has flaws as ${steps.characterInfo.gender === 'male' ? ' he' : ' she'} is ${steps.characterInfo.flaws}. `}
        ${steps.characterInfo.allies === '' ? '' : `Hopefully, ${steps.characterInfo.name} can count on ${steps.characterInfo.gender === 'male' ? ' his' : ' her'} allies such as ${steps.characterInfo.allies}.`}
        ${steps.characterInfo.bonds === '' ? '' : `${steps.characterInfo.name} has strong bonds with ${steps.characterInfo.bonds}`}
        ${steps.characterInfo.history === '' ? '' : `Finally, here's a bit of ${steps.characterInfo.name}'s history: ${steps.characterInfo.history}`}
        `}
    </p>
    </div>
    </>
    )
}

export default Final