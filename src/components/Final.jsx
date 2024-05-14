import '../Final.css'
import Avatar from './Avatar';
import { useEquipment } from "../contexts/EquipmentContext";
import { useAlignment } from '../contexts/AlignmentContext';
import { useCharacter } from '../contexts/CharacterContext';

function Final() {
    const { primaryWeapon, secondaryWeapon, armor, shield, selectedTools, selectedGears } = useEquipment();
    const { selectedAlignment } = useAlignment();
    const { characterInfo } = useCharacter();
    const race = 'human'
    const classe = 'paladin'
 
    return (
        <>
        <div className="final-container">
            <div className="final-image">
               <Avatar race={race} classe={classe} gender={characterInfo.gender}/>
            </div>
            <div className="final-character">
                <p>Name: {characterInfo.name}</p>
                <p>Race: </p>
                <p>Class: </p>
                <p>Alignment: {selectedAlignment}</p>
            </div>
            <div className="final-abilities">
                <ul>
                    <li>Strength: </li>
                    <li>Dexterity: </li>
                    <li>Constitution: </li>
                    <li>Intelligence: </li>
                    <li>Wisdom: </li>
                    <li>Charisma: </li>
                </ul>
            </div>
            <div className="final-stuff">
                <div className="final-weapons">
                <p>Primary Weapon: {primaryWeapon}</p>
                <p>Secondary Weapon: {secondaryWeapon}</p>
                </div>
                <div className="final-armors">
                    <p>Armor: {armor}</p>
                    <p>{shield}</p>
                    
                </div>
                <div className="final-gears">
                    <p>Gears:</p>
                    <p>{selectedGears.gear1}</p>
                    <p>{selectedGears.gear2}</p>
                    <p>{selectedGears.gear3}</p>
                    <p>{selectedGears.gear4}</p>
                    <p>{selectedGears.gear5}</p>
                    <p>{selectedGears.gear6}</p>
                    <p>{selectedGears.gear7}</p>
                    <p>{selectedGears.gear8}</p>
                    <p>{selectedGears.gear9}</p>
                    <p>{selectedGears.gear10}</p>

                    <p>Tools:</p>
                    <p>{selectedTools.tool1}</p>
                    <p>{selectedTools.tool2}</p>
                    <p>{selectedTools.tool3}</p>
                </div>
                <div className="final-spells">
                    <p>Spells:</p>
                </div>
            </div>
    </div>
    <div> 
        <h2>Resume</h2>
    <p className='resume'>
        {characterInfo.name} is a {race} {classe}. {characterInfo.gender === 'male' ? ' He' : ' She'} is {characterInfo.age} years old and has {characterInfo.hair} hair. 
        {characterInfo.gender === 'male' ? ' His' : ' Her'} skin is {characterInfo.skin} and {characterInfo.gender === 'male' ? ' he' : ' she'} has {characterInfo.eyes} eyes.
        {characterInfo.gender === 'male' ? ' He' : ' She'} is wearing a {armor} {primaryWeapon === '' ? '' : ` and fights with a ${primaryWeapon}`}
        {secondaryWeapon === '' ? '' : ` and a ${secondaryWeapon}`}. 
        {shield === '' ? '' : `${characterInfo.gender === 'male' ? ' He' : ' She'} has a Shield too. `}
        {characterInfo.name} is known for {characterInfo.gender === 'male' ? ' his' : ' her'} {selectedAlignment} behaviour. 
        {characterInfo.traits === '' ? '' : `${characterInfo.gender === 'male' ? ' He' : ' She'} is ${characterInfo.traits}. `}
        {characterInfo.flaws === '' ? '' : `But ${characterInfo.gender === 'male' ? ' he' : ' she'} has flaws as ${characterInfo.gender === 'male' ? ' he' : ' she'} is ${characterInfo.flaws}. `}
        {characterInfo.allies === '' ? '' : `Hopefully, ${characterInfo.name} can count on ${characterInfo.gender === 'male' ? ' his' : ' her'} allies such as ${characterInfo.allies}.`}
        {characterInfo.bonds === '' ? '' : `${characterInfo.name} has strong bonds with ${characterInfo.bonds}`}
        Finally, here's a bit of {characterInfo.name}'s history: {characterInfo.history}
    </p>
    </div>
    </>
    )
}

export default Final