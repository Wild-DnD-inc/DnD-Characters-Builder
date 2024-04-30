import { useEffect, useState } from "react";

const BASE_URL = 'https://www.dnd5eapi.co'

function Tools() {
    const [artisanTool, setArtisanTool] = useState([])
    const [gamingSet, setGamingSet] = useState([])
    const [instrument, setInstrument] = useState([])
    const [kit, setKit] = useState([])
    const [otherTool, setOtherTool] = useState([])

    useEffect(() => {
        const fetchToolData = async () => {
            const artisanToolResponse = await fetch(BASE_URL + "/api/equipment-categories/artisans-tools");
            const artisanToolData = await artisanToolResponse.json();
            const artisanToolNames = artisanToolData.equipment.map(item => item.name);
            setArtisanTool(artisanToolNames);

            const gamingSetResponse = await fetch(BASE_URL + "/api/equipment-categories/gaming-sets");
            const gamingSetData = await gamingSetResponse.json();
            const gamingSetNames = gamingSetData.equipment.map(item => item.name);
            setGamingSet(gamingSetNames);

            const instrumentResponse = await fetch(BASE_URL + "/api/equipment-categories/musical-instruments");
            const instrumentData = await instrumentResponse.json();
            const instrumentNames = instrumentData.equipment.map(item => item.name);
            setInstrument(instrumentNames);

            const kitResponse = await fetch(BASE_URL + "/api/equipment-categories/kits");
            const kitData = await kitResponse.json();
            const kitNames = kitData.equipment.map(item => item.name);
            setKit(kitNames);

            const otherToolResponse = await fetch(BASE_URL + "/api/equipment-categories/other-tools");
            const otherToolData = await otherToolResponse.json();
            const otherToolNames = otherToolData.equipment.map(item => item.name);
            setOtherTool(otherToolNames);
        }

        fetchToolData();
    }, []);

    return (
        <>
        <h3>Tools</h3>
        <div>
            <select id="tool-1" name="tool-1" className="block equipment">
                <option value="">--No tool--</option>
                <optgroup label="Kits">
                    {kit.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                </optgroup>
                <optgroup label="Artisan Tools">
                    {artisanTool.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                </optgroup>
                <optgroup label="Instruments">
                    {instrument.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                </optgroup>
                <optgroup label="Gaming Sets">
                    {gamingSet.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                </optgroup>
                <optgroup label="Other">
                    {otherTool.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                </optgroup>
            </select>
            <select id="tool-2" name="tool-2" className="block equipment">
                <option value="">--No tool--</option>
                <optgroup label="Kits">
                    {kit.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                </optgroup>
                <optgroup label="Artisan Tools">
                    {artisanTool.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                </optgroup>
                <optgroup label="Instruments">
                    {instrument.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                </optgroup>
                <optgroup label="Gaming Sets">
                    {gamingSet.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                </optgroup>
                <optgroup label="Other">
                    {otherTool.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                </optgroup>
            </select>
            <select id="tool-3" name="tool-3" className="block equipment">
                <option value="">--No tool--</option>
                <optgroup label="Kits">
                    {kit.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                </optgroup>
                <optgroup label="Artisan Tools">
                    {artisanTool.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                </optgroup>
                <optgroup label="Instruments">
                    {instrument.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                </optgroup>
                <optgroup label="Gaming Sets">
                    {gamingSet.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                </optgroup>
                <optgroup label="Other">
                    {otherTool.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                </optgroup>
            </select>
        </div>
        </>
    )
}

export default Tools