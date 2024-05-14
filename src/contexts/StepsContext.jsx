import { createContext, useContext, useState } from "react";

const StepsContext = createContext()
const sample = {
    race: '',
    classe: '',
    abilities: {
        strengh: {
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
    },
    stats: '',
    equipments: ''
}

export function StepsProvider({children}) {

    const [ steps, setSteps ] = useState(sample)

    return (
        <StepsContext.Provider value={{steps, setSteps}}>
            {children}
        </StepsContext.Provider>
    )

}

export const useSteps = () => useContext(StepsContext)