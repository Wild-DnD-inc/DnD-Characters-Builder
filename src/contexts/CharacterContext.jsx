// CharacterContext.js
import { createContext, useContext, useState } from 'react';

const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
    const [characterInfo, setCharacterInfo] = useState({
        name: "",
        gender: "male",
        alignment: "",
        age: "",
        height: "",
        weight: "",
        xp: "",
        eyes: "",
        skin: "",
        hair: "",
        appearance: "",
        history: "",
        traits: "",
        ideals: "",
        bonds: "",
        flaws: "",
        allies: "",
        extraFeatures: ""
    });

    const updateCharacterInfo = (newInfo) => {
        setCharacterInfo((prevCharacterInfo) => ({
            ...prevCharacterInfo,
            ...newInfo
        }));
    };

    return (
        <CharacterContext.Provider value={{ characterInfo, updateCharacterInfo }}>
            {children}
        </CharacterContext.Provider>
    );
};

export const useCharacter = () => useContext(CharacterContext);
