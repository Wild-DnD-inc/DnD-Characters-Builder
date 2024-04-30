import { createContext, useContext, useEffect, useState } from "react";

const ProficienciesContext = createContext()
const sample = [
    {
        "index": "",
        "name": "",
        "url": ""
    }
]

export function ProficienciesProvider({children}) {

    const [ proficiencies, setProficiencies ] = useState(sample)

    useEffect(() => {
        fetch('https://www.dnd5eapi.co/api/proficiencies')
            .then(response => response.json())
            .then(json => setProficiencies(json.results))
            .catch(error => console.log(error))
    }, [])

    return (
        <ProficienciesContext.Provider value={{proficiencies}}>
            {children}
        </ProficienciesContext.Provider>
    )

}

export const useProficiencies = () => useContext(ProficienciesContext)