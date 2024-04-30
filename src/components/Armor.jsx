import { useEffect, useState } from "react";

const BASE_URL = 'https://www.dnd5eapi.co'

function Armor() {
    const [lightArmor, setLightArmor] = useState([])
    const [mediumArmor, setMediumArmor] = useState([])
    const [heavyArmor, setHeavyArmor] = useState([])
    const [shield, setShield] = useState([])

    useEffect(() => {
        const fetchArmorData = async () => {
                const lightResponse = await fetch(BASE_URL + "/api/equipment-categories/light-armor");
                const lightData = await lightResponse.json();
                const lightNames = lightData.equipment.map(item => item.name);
                setLightArmor(lightNames);

                const mediumResponse = await fetch(BASE_URL + "/api/equipment-categories/medium-armor");
                const mediumData = await mediumResponse.json();
                const mediumNames = mediumData.equipment.map(item => item.name);
                setMediumArmor(mediumNames);

                const heavyResponse = await fetch(BASE_URL + "/api/equipment-categories/heavy-armor");
                const heavyData = await heavyResponse.json();
                const heavyNames = heavyData.equipment.map(item => item.name);
                setHeavyArmor(heavyNames);
        };

        const fetchShield = async () => {
            const shieldResponse = await fetch(BASE_URL + "/api/equipment/shield");
            const shieldData = await shieldResponse.json();
            const shieldName = shieldData.name;
            setShield(shieldName);
        }

        fetchArmorData();
        fetchShield();
    }, []);

    return (
        <>
        <h3>Armors</h3>
        <div>
            <div>
            <select id="armor" name="armor" className="equipment">
                <option value="">--Without armor--</option>
                <optgroup label="Light Armor">
                {lightArmor.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))} 
                </optgroup>
                <optgroup label="Medium Armor">
                {mediumArmor.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))} 
                </optgroup>
                <optgroup label="Heavy Armor">
                {heavyArmor.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))} 
                </optgroup>
            </select>
            </div>
            <div>
            <select id="shield" name="shield" className="equipment">
                <option value="">--Without shield--</option>
                {<option value={shield}>Shield</option>}
            </select>
            </div>
        </div>
        </>
    )
}

export default Armor