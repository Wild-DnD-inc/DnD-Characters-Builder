import { createContext, useContext, useState } from "react";

const AbilitiesContext = createContext()
const sample = {
    strength: {
        score: 0,
        modifier: 0
    },
    dexterity: {
        score: 0,
        modifier: 0
    },
    constitution: {
        score: 0,
        modifier: 0
    },
    intelligence: {
        score: 0,
        modifier: 0
    },
    wisdom: {
        score: 0,
        modifier: 0
    },
    charisma: {
        score: 0,
        modifier: 0
    }
}

export function AbilitiesProvider({children}) {

    const [ abilities, setAbilities ] = useState(sample)

    return (
        <AbilitiesContext.Provider value={{abilities, setAbilities}}>
            {children}
        </AbilitiesContext.Provider>
    )

}

export const useAbilities = () => useContext(AbilitiesContext)