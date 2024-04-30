import { createContext, useContext, useEffect, useState } from "react";

const BackgroundsContext = createContext()
const sample = [
    {
        "index": "",
        "name": "",
        "url": ""
    }
]

export function BackgroundsProvider({children}) {

    const [ backgrounds, setBackgrounds ] = useState(sample)

    useEffect(() => {
        fetch('https://www.dnd5eapi.co/api/backgrounds')
            .then(response => response.json())
            .then(json => setBackgrounds(json.results))
            .catch(error => console.log(error))
    }, [])

    return (
        <BackgroundsContext.Provider value={{backgrounds}}>
            {children}
        </BackgroundsContext.Provider>
    )

}

export const useBackgrounds = () => useContext(BackgroundsContext)