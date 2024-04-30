import { useEffect, useState } from "react";

const BASE_URL = 'https://www.dnd5eapi.co'

function Weapons() {
    const [meleeWeapon, setMeleeWeapon] = useState([])
    const [rangedWeapon, setRangedWeapon] = useState([])

    useEffect(() => {
        const fetchWeaponData = async () => {
            const meleeResponse = await fetch(BASE_URL + "/api/equipment-categories/melee-weapons");
            const meleeData = await meleeResponse.json();
            const meleeNames = meleeData.equipment.map(item => item.name);
            setMeleeWeapon(meleeNames);

            const rangedResponse = await fetch(BASE_URL + "/api/equipment-categories/ranged-weapons");
            const rangedData = await rangedResponse.json();
            const rangedNames = rangedData.equipment.map(item => item.name);
            setRangedWeapon(rangedNames);
        }

        fetchWeaponData();
    }, []);

    return (
        <>
            <h3>Weapons</h3>
            <h4>Primary Weapon</h4>
            <div>
                <select id="primary-weapon" name="primary-weapon">
                    <option value="">--Without weapon--</option>
                    <optgroup label="Melee Weapon">
                        {meleeWeapon.map((item, index) => (
                            <option key={index} value={item}>{item}</option>
                        ))}
                    </optgroup>
                    <optgroup label="Ranged Weapon">
                        {rangedWeapon.map((item, index) => (
                            <option key={index} value={item}>{item}</option>
                        ))}
                    </optgroup>
                </select>
            </div>
            <h4>Secondary Weapon</h4>
            <div>
                <select id="secondary-weapon" name="secondary-weapon">
                    <option value="">--Without weapon--</option>
                    <optgroup label="Melee Weapon">
                        {meleeWeapon.map((item, index) => (
                            <option key={index} value={item}>{item}</option>
                        ))}
                    </optgroup>
                    <optgroup label="Ranged Weapon">
                        {rangedWeapon.map((item, index) => (
                            <option key={index} value={item}>{item}</option>
                        ))}
                    </optgroup>
                </select>
            </div>
        </>
    )

}

export default Weapons