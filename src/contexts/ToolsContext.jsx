import { createContext, useContext, useEffect, useState } from "react";

const ToolsContext = createContext();
const sample = [];

export function ToolsProvider({ children }) {
    const [artisanTool, setArtisanTool] = useState(sample)
    const [gamingSet, setGamingSet] = useState(sample)
    const [instrument, setInstrument] = useState(sample)
    const [kit, setKit] = useState(sample)
    const [otherTool, setOtherTool] = useState(sample)

    useEffect(() => {
        fetch('https://www.dnd5eapi.co/api/equipment-categories/artisans-tools')
            .then(response => response.json())
            .then(json => setArtisanTool(json.equipment))
            .catch(error => console.log(error));

        fetch('https://www.dnd5eapi.co/api/equipment-categories/gaming-sets')
            .then(response => response.json())
            .then(json => setGamingSet(json.equipment))
            .catch(error => console.log(error));

        fetch('https://www.dnd5eapi.co/api/equipment-categories/musical-instruments')
            .then(response => response.json())
            .then(json => setInstrument(json.equipment))
            .catch(error => console.log(error));

        fetch('https://www.dnd5eapi.co/api/equipment-categories/kits')
            .then(response => response.json())
            .then(json => setKit(json.equipment))
            .catch(error => console.log(error));

        fetch('https://www.dnd5eapi.co/api/equipment-categories/other-tools')
            .then(response => response.json())
            .then(json => setOtherTool(json.equipment))
            .catch(error => console.log(error));
    }, []);

    return (
        <ToolsContext.Provider value={{artisanTool, gamingSet, instrument, kit, otherTool }}>
            {children}
        </ToolsContext.Provider>
    )
}

export const useTools = () => useContext(ToolsContext);