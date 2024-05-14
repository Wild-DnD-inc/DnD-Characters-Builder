import { useAlignment } from "../contexts/AlignmentContext";
import { useCharacter } from "../contexts/CharacterContext";


function Character() {
    const { alignments, selectedAlignment, handleAlignmentChange } = useAlignment();

    const { characterInfo, updateCharacterInfo } = useCharacter();

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        updateCharacterInfo({ [id]: value });
    };


    return (
        <div>
            <h2>Character</h2>
            <div className="grid-container">
                <div>
                    <p>Define the last details of your character</p>
                    <h3>Name</h3>
                    <input type="text" id="name" maxLength="24" placeholder="Character Name" onChange={handleInputChange} value={characterInfo.name}/>
                        <h3>Gender / Alignment / Real Age</h3>
                        <select id="gender" onChange={handleInputChange} value={characterInfo.gender}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            </select>
                        <select id="alignment" value={selectedAlignment} onChange={handleAlignmentChange}>
                            <option value="">--Alignment--</option>
                            {alignments.map((item, index) => (
                                <option key={index} value={item}>{item}</option>
                            ))}
                        </select>
                        <input type="number" id="age" maxLength="16" placeholder="20" onChange={handleInputChange} value={characterInfo.age}/>
                        <h3>Height / Weight / XP</h3>
                        <input type="text" id="height" maxLength="16" placeholder="1.8 m" onChange={handleInputChange} value={characterInfo.height}/>
                        <input type="text" id="weight" maxLength="16" placeholder="85 kg" onChange={handleInputChange} value={characterInfo.weight}/>
                        <input type="text" id="XP" maxLength="16" placeholder="0" onChange={handleInputChange} value={characterInfo.xp}/>
                        <h3>Eyes / Skin / Hair</h3>
                        <input type="text" id="eyes" maxLength="16" placeholder="Eyes" onChange={handleInputChange} value={characterInfo.eyes}/>
                        <input type="text" id="skin" maxLength="16" placeholder="Skin" onChange={handleInputChange} value={characterInfo.skin}/>
                        <input type="text" id="hair" maxLength="16" placeholder="Hair" onChange={handleInputChange} value={characterInfo.hair}/>
                        <h3>Appearance</h3>
                        <textarea id="appearance" rows="4" placeholder="A quick description of your appearance" onChange={handleInputChange} value={characterInfo.appearance}></textarea>
                        <h3>Character Backstory</h3>
                        <textarea id="history" rows="8" placeholder="You can tell your story here" onChange={handleInputChange} value={characterInfo.history}></textarea>
                </div>
                <div>
                    <h3>Personality traits</h3>
                    <textarea id="traits" rows="3" placeholder="Adjective separated by a comma" onChange={handleInputChange} value={characterInfo.traits}></textarea>
                    <h3>Ideals</h3>
                    <textarea id="ideals"  rows="2" placeholder="Adjective separated by a comma" onChange={handleInputChange} value={characterInfo.ideals}></textarea>
                    <h3>Bonds</h3>
                    <textarea id="bonds" rows="2" placeholder="Adjective separated by a comma" onChange={handleInputChange} value={characterInfo.bonds}></textarea>
                    <h3>Flaws</h3>
                    <textarea id="flaws" rows="2" placeholder="Adjective separated by a comma" onChange={handleInputChange} value={characterInfo.flaws}></textarea>
                    <h3>Allies &amp; Organizations</h3>
                    <textarea id="allies" rows="3" placeholder="Adjective separated by a comma" onChange={handleInputChange} value={characterInfo.allies}></textarea>
                    <h3>Additional Features</h3>
                    <textarea id="extraFeatures" rows="4" onChange={handleInputChange} value={characterInfo.extraFeatures}></textarea>
                </div>
            </div>
        </div>
    )
}

export default Character