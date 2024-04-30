import { createContext, useContext, useEffect, useState } from "react";

const RacesContext = createContext()
const sample = [
    {
        "index": "",
        "name": "",
        "url": ""
    }
]

export function RacesProvider({children}) {

    const [ races, setRaces ] = useState(sample)

    useEffect(() => {
        fetch('https://www.dnd5eapi.co/api/races')
            .then(response => response.json())
            .then(json => setRaces(json.results))
            .catch(error => console.log(error))
    }, [])

    return (
        <RacesContext.Provider value={{races}}>
            {children}
        </RacesContext.Provider>
    )

}

export const useRaces = () => useContext(RacesContext)