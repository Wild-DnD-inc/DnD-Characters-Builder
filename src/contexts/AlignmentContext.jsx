import { createContext, useContext, useState, useEffect } from 'react';

const AlignmentContext = createContext();

export const AlignmentProvider = ({ children }) => {
    const [alignments, setAlignments] = useState([]);
    const [selectedAlignment, setSelectedAlignment] = useState('');
    const handleAlignmentChange = (event) => {
        setSelectedAlignment(event.target.value);
    };

        useEffect(() => {
            fetch('https://www.dnd5eapi.co/api/alignments')
                .then(response => response.json())
                .then(json => {
                    const alignmentsNames = json.results.map(item => item.name);
                    setAlignments(alignmentsNames)
                })
        }, []);

    return (
        <AlignmentContext.Provider value={{ alignments, selectedAlignment, handleAlignmentChange }}>
            {children}
        </AlignmentContext.Provider>
    );

}

export const useAlignment = () => useContext(AlignmentContext);