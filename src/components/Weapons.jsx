import { useWeapons } from "../contexts/WeaponsContext";

function Weapons({ label, value, primaryWeapon, secondaryWeapon, onChange }) {
    const { meleeWeapons, rangedWeapons } = useWeapons();

    return (
        <>
            <h4>{label}</h4>
      <div>
        <select id={label.toLowerCase().replace(' ', '-') } name={label.toLowerCase().replace(' ', '-') } value={value} onChange={onChange}>
          <option value="">--Without weapon--</option>
          <optgroup label="Melee Weapon">
            {meleeWeapons.map((weapon, index) => (
              <option key={index} value={weapon.name}>{weapon.name}</option>
            ))}
          </optgroup>
          <optgroup label="Ranged Weapon">
            {rangedWeapons.map((weapon, index) => (
              <option key={index} value={weapon.name}>{weapon.name}</option>
            ))}
          </optgroup>
        </select>
      </div>
        </>
    )
}

export default Weapons;
