import {useEffect, useState} from "react";

const BASE_URL = 'https://www.dnd5eapi.co'

function Gear() {
    const [gear, setGear] = useState([])

    useEffect(() => {
        const fetchGear = async () => {
            const gearResponse = await fetch(BASE_URL + "/api/equipment-categories/adventuring-gear");
            const gearData = await gearResponse.json();
            const gearNames = gearData.equipment.map(item => item.name);
            setGear(gearNames);
        }

        fetchGear();
    }, []);

    return (
        <>
         <h3>Gear</h3>
        <div>
            <select id="gear-1" name="gear-1" className="block equipment">
                <option value="">--No Gear--</option>
                    {gear.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                    </select>
                    <select id="gear-2" name="gear-2" className="block equipment">
                <option value="">--No Gear--</option>
                    {gear.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                    </select>
                    <select id="gear-3" name="gear-3" className="block equipment">
                <option value="">--No Gear--</option>
                    {gear.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                    </select>
                    <select id="gear-4" name="gear-4" className="block equipment">
                <option value="">--No Gear--</option>
                    {gear.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                    </select>
                    <select id="gear-5" name="gear-5" className="block equipment">
                <option value="">--No Gear--</option>
                    {gear.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                    </select>
                    <select id="gear-6" name="gear-6" className="block equipment">
                <option value="">--No Gear--</option>
                    {gear.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                    </select>
                    <select id="gear-7" name="gear-8" className="block equipment">
                <option value="">--No Gear--</option>
                    {gear.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                    </select>
                    <select id="gear-8" name="gear-8" className="block equipment">
                <option value="">--No Gear--</option>
                    {gear.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                    </select>
                    <select id="gear-9" name="gear-9" className="block equipment">
                <option value="">--No Gear--</option>
                    {gear.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                    </select>
                    <select id="gear-10" name="gear-10" className="block equipment">
                <option value="">--No Gear--</option>
                    {gear.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                    </select>
        </div>
        </>
    )
}

export default Gear