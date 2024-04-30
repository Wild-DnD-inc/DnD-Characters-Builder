import { useState } from 'react'

function DisplayCreation() {
    const[creationStep, setCreationStep] = useState(0)

    const handleClickNext = () => {
        setCreationStep(creationStep + 1)
    }

    const handleClickPrev = () => {
        setCreationStep(creationStep - 1)
    }

    return (
        <>
        <p>Step {creationStep}</p>
        {creationStep <= 0 ? <button onClick={handleClickPrev} disabled>Previous</button> : <button onClick={handleClickPrev}>Previous</button>}
        <button onClick={handleClickNext}>Next</button>
        </>
    )
}

export default DisplayCreation