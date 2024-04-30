import { createContext, useContext, useEffect, useState } from "react";

const ClassesContext = createContext()
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
        <ClassesContext.Provider value={{classes}}>
            {children}
        </ClassesContext.Provider>
    )

}

export const useClasses = () => useContext(ClassesContext)