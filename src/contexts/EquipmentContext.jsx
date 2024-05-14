import { createContext, useContext, useState } from 'react';

const EquipmentContext = createContext();

export const EquipmentProvider = ({ children }) => {
    const [primaryWeapon, setPrimaryWeapon] = useState('');
    const [secondaryWeapon, setSecondaryWeapon] = useState('');
    const [armor, setArmor] = useState('');
    const [shield, setShield] = useState('');
    const [selectedTools, setSelectedTools] = useState({
        tool1: '',
        tool2: '',
        tool3: ''
    });
    const [selectedGears, setSelectedGears] = useState({
        gear1: '',
        gear2: '',
        gear3: '',
        gear4: '',
        gear5: '',
        gear6: '',
        gear7: '',
        gear8: '',
        gear9: '',
        gear10: '',
    });

    const handlePrimaryWeaponChange = (event) => {
        setPrimaryWeapon(event.target.value);
    };

    const handleSecondaryWeaponChange = (event) => {
        setSecondaryWeapon(event.target.value);
    };

    const handleArmorChange = (event) => {
        setArmor(event.target.value);
    };

    const handleShieldChange = (event) => {
        setShield(event.target.value);
    };

    const handleToolChange = (toolNumber, value) => {
        setSelectedTools(prevState => ({
            ...prevState,
            [toolNumber]: value
        }));
    };

    const handleGearChange = (gearNumber, value) => {
        setSelectedGears(prevState => ({
            ...prevState,
            [gearNumber]: value
        }));
    };

    return (
        <EquipmentContext.Provider value={{
            primaryWeapon,
            secondaryWeapon,
            handlePrimaryWeaponChange,
            handleSecondaryWeaponChange,
            armor,
            handleArmorChange,
            shield,
            handleShieldChange,
            selectedTools,
            handleToolChange,
            selectedGears,
            handleGearChange,
        }}>
            {children}
        </EquipmentContext.Provider>
    );
};

export const useEquipment = () => useContext(EquipmentContext);
