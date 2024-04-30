import { createContext, useContext, useEffect, useState } from "react";

const FeaturesContext = createContext()
const sample = [
    {
        "index": "",
        "name": "",
        "url": ""
    }
]

export function FeaturesProvider({children}) {

    const [ features, setFeatures ] = useState(sample)

    useEffect(() => {
        fetch('https://www.dnd5eapi.co/api/features')
            .then(response => response.json())
            .then(json => setFeatures(json.results))
            .catch(error => console.log(error))
    }, [])

    return (
        <FeaturesContext.Provider value={{features}}>
            {children}
        </FeaturesContext.Provider>
    )

}

export const useFeatures = () => useContext(FeaturesContext)