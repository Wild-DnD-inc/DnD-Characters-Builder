import { createContext, useContext, useEffect, useState } from "react";

const WeaponsContext = createContext();
const sample = [];

export function WeaponsProvider({ children }) {
    const [meleeWeapons, setMeleeWeapons] = useState(sample);
    const [rangedWeapons, setRangedWeapons] = useState(sample);

    useEffect(() => {
        fetch('https://www.dnd5eapi.co/api/equipment-categories/melee-weapons')
            .then(response => response.json())
            .then(json => setMeleeWeapons(json.equipment))
            .catch(error => console.log(error));

        fetch('https://www.dnd5eapi.co/api/equipment-categories/ranged-weapons')
            .then(response => response.json())
            .then(json => setRangedWeapons(json.equipment))
            .catch(error => console.log(error));
    }, []);

    return (
        <WeaponsContext.Provider value={{ meleeWeapons, rangedWeapons }}>
            {children}
        </WeaponsContext.Provider>
    );
}

export const useWeapons = () => useContext(WeaponsContext);
