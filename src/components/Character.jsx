import { useEffect, useState } from "react"

const BASE_URL = 'https://www.dnd5eapi.co'

function Character() {
    const [align, setAlign] = useState([])

    useEffect(() => {
        const fetchAlign = async () => {
            const alignResponse = await fetch(BASE_URL + "/api/alignments");
                const alignData = await alignResponse.json();
                const alignNames = alignData.results.map(item => item.name);
                setAlign(alignNames);
        }

        fetchAlign();
    }, []);

    return (
        <div>
            <h2>Character</h2>
            <div className="grid-container">
                <div>
                    <p>Define the last details of your character</p>
                    <h3>Name</h3>
                    <input type="text" id="name" maxLength="24" placeholder="Character Name"/>
                        <h3>Gender / Alignment / Real Age</h3>
                        <select id="sex">
                            <option value="0">Male</option>
                            <option value="1">Female</option>
                            </select>
                        <select id="align">
                            <option value="">--Alignment--</option>
                            {align.map((item, index) => (
                                <option key={index} value={item}>{item}</option>
                            ))}
                        </select>
                        <input type="number" id="age" maxLength="16" placeholder="20"/>
                        <h3>Height / Weight / XP</h3>
                        <input type="text" id="height" maxLength="16" placeholder="1.8 m"/>
                        <input type="text" id="weight" maxLength="16" placeholder="85 Kg"/>
                        <input type="text" id="XP" maxLength="16" placeholder="0"/>
                        <h3>Eyes / Skin / Hair</h3>
                        <input type="text" id="eyes" maxLength="16" placeholder="Eyes"/>
                        <input type="text" id="skin" maxLength="16" placeholder="Skin"/>
                        <input type="text" id="hair" maxLength="16" placeholder="Hair"/>
                        <h3>Appearance</h3>
                        <textarea id="appearance" rows="4" placeholder="A quick description of your appearance"></textarea>
                        <h3>Character Backstory</h3>
                        <textarea id="history" rows="8" placeholder="You can tell your story here"></textarea>
                </div>
                <div>
                    <h3>Personality traits</h3>
                    <textarea id="traits" rows="3"></textarea>
                    <h3>Ideals</h3>
                    <textarea id="ideals" rows="2"></textarea>
                    <h3>Bonds</h3>
                    <textarea id="bonds" rows="2"></textarea>
                    <h3>Flaws</h3><textarea id="flaws" rows="2"></textarea>
                    <h3>Allies &amp; Organizations</h3>
                    <textarea id="allies" rows="3"></textarea>
                    <h3>Additional Features</h3>
                    <textarea id="extraFeatures" rows="4"></textarea>
                </div>
            </div>
        </div>
    )
}

export default Character