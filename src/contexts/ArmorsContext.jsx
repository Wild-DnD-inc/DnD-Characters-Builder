import { createContext, useContext, useEffect, useState } from "react";

const ArmorsContext = createContext();
const sample = [];

export function ArmorsProvider({ children }) {
    const [lightArmor, setLightArmor] = useState(sample)
    const [mediumArmor, setMediumArmor] = useState(sample)
    const [heavyArmor, setHeavyArmor] = useState(sample)
    const [shield, setShield] = useState(sample)

    useEffect(() => {
        fetch('https://www.dnd5eapi.co/api/equipment-categories/light-armor')
            .then(response => response.json())
            .then(json => setLightArmor(json.equipment))
            .catch(error => console.log(error));

        fetch('https://www.dnd5eapi.co/api/equipment-categories/medium-armor')
            .then(response => response.json())
            .then(json => setMediumArmor(json.equipment))
            .catch(error => console.log(error));

        fetch('https://www.dnd5eapi.co/api/equipment-categories/heavy-armor')
            .then(response => response.json())
            .then(json => setHeavyArmor(json.equipment))
            .catch(error => console.log(error));

        fetch('https://www.dnd5eapi.co/api/equipment/shield')
            .then(response => response.json())
            .then(json => setShield(json))
            .catch(error => console.log(error));
    }, []);

    return (
        <ArmorsContext.Provider value= {{lightArmor, mediumArmor, heavyArmor, shield}}>
            {children}
        </ArmorsContext.Provider>
    )
}

export const useArmors = () => useContext(ArmorsContext);