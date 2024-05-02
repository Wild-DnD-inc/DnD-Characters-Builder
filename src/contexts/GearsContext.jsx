import { createContext, useContext, useEffect, useState } from "react";

const GearsContext = createContext();
const sample = [];

export function GearsProvider({ children  }) {
    const [gears, setGears] = useState(sample);

    useEffect(() => {
        fetch('https://www.dnd5eapi.co/api/equipment-categories/adventuring-gear')
            .then(response => response.json())
            .then(json => setGears(json.equipment))
            .catch(error => console.log(error));
    }, []);

    return (
        <GearsContext.Provider value={{ gears }}>
            {children}
        </GearsContext.Provider>
    );
}

export const useGears = () => useContext(GearsContext);