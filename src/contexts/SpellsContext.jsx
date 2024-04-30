import { createContext, useContext, useEffect, useState } from "react";

const SpellsContext = createContext()
const sample = [
    {
        "index": "",
        "name": "",
        "level": 0,
        "url": ""
    }
]

export function SpellsProvider({children}) {

    const [ spells, setSpells ] = useState(sample)

    useEffect(() => {
        fetch('https://www.dnd5eapi.co/api/spells')
            .then(response => response.json())
            .then(json => setSpells(json.results))
            .catch(error => console.log(error))
    }, [])

    return (
        <SpellsContext.Provider value={{spells}}>
            {children}
        </SpellsContext.Provider>
    )

}

export const useSpells = () => useContext(SpellsContext)