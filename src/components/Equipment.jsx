import Armors from "./Armors"
import Weapons from "./Weapons"
import Tools from "./Tools"
import Gears from "./Gears"
import Shield from "./Shield"
import { WeaponsProvider } from "../contexts/WeaponsContext"
import { ArmorsProvider } from "../contexts/ArmorsContext"
import { GearsProvider } from "../contexts/GearsContext"
import { ToolsProvider } from "../contexts/ToolsContext"
import { useEquipment } from "../contexts/EquipmentContext"

function Equipment() {
    const { primaryWeapon, handlePrimaryWeaponChange,
        secondaryWeapon, handleSecondaryWeaponChange,
        armor, handleArmorChange,
        shield, handleShieldChange,
        selectedTools, handleToolChange,
        selectedGears, handleGearChange } = useEquipment();

    return (
        <>
            <h2>Equipment</h2>
            <p>Choose your equipment</p>
            <div className="grid-container">
                <div>
                    <ArmorsProvider>
                        <Armors label="Armor" value={armor} onChange={handleArmorChange} />
                    </ArmorsProvider>
                    <ArmorsProvider>
                        <Shield label="Shield" value={shield} onChange={handleShieldChange} />
                    </ArmorsProvider>
                    <h3>Weapons</h3>
                    <WeaponsProvider>
                        <Weapons label="Primary Weapon" value={primaryWeapon} onChange={handlePrimaryWeaponChange} />
                        <Weapons label="Secondary Weapon" value={secondaryWeapon} onChange={handleSecondaryWeaponChange} />
                    </WeaponsProvider>
                    <ToolsProvider>
                        <Tools label="Tool" selectedTools={selectedTools} onToolChange={handleToolChange} />
                    </ToolsProvider>
                </div>
                <div>
                    <GearsProvider>
                        <Gears label="Gear" selectedGears={selectedGears} onGearChange={handleGearChange} />
                    </GearsProvider>
                    <h3>Particularities</h3>
                    <textarea id="particularities" rows="3"></textarea>
                </div>
            </div>
        </>
    )
}

export default Equipment