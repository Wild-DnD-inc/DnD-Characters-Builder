import { createContext, useContext, useEffect, useState } from "react";

const ClasseContext = createContext()
const sample = [
    {
        "index": "",
        "name": "",
        "url": ""
    }
]

export function ClassesProvider({children}) {

    const [ classes, setClasses ] = useState(sample)

    useEffect(() => {
        fetch('https://www.dnd5eapi.co/api/classes')
            .then(response => response.json())
            .then(json => setClasses(json.results))
            .catch(error => console.log(error))
    }, [])

    return (
        <ClasseContext.Provider value={{classes}}>
            {children}
        </ClasseContext.Provider>
    )

}

export const useClasses = () => useContext(ClasseContext)