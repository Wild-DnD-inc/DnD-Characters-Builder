import { useWeapons } from "../contexts/WeaponsContext";

function Weapons({ setWeapons }) {
    const { meleeWeapons, rangedWeapons } = useWeapons();

    return (
        <>
            <h3>Weapons</h3>
            <h4>Primary Weapon</h4>
            <div>
                <select id="primary-weapon" name="primary-weapon">
                    <option value="">--Without weapon--</option>
                    <optgroup label="Melee Weapon">
                        {meleeWeapons.map((weapon, index) => (
                            <option key={index} value={weapon.index}>{weapon.name}</option>
                        ))}
                    </optgroup>
                    <optgroup label="Ranged Weapon">
                        {rangedWeapons.map((weapon, index) => (
                            <option key={index} value={weapon.index}>{weapon.name}</option>
                        ))}
                    </optgroup>
                </select>
            </div>
            <h4>Secondary Weapon</h4>
            <div>
                <select id="secondary-weapon" name="secondary-weapon">
                    <option value="">--Without weapon--</option>
                    <optgroup label="Melee Weapon">
                        {meleeWeapons.map((weapon, index) => (
                            <option key={index} value={weapon.index}>{weapon.name}</option>
                        ))}
                    </optgroup>
                    <optgroup label="Ranged Weapon">
                        {rangedWeapons.map((weapon, index) => (
                            <option key={index} value={weapon.index}>{weapon.name}</option>
                        ))}
                    </optgroup>
                </select>
            </div>
        </>
    )
}

export default Weapons;
