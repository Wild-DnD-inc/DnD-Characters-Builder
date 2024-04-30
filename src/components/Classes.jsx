// import '../Classes.css'
import { useClasses } from '../contexts/ClasseContext'

function Classes({setClasse}) {

    const { classes } = useClasses()

    return (
        <>
            <h2>Classes</h2>
            <div className="choice">Choose the character class</div>
            <div className="classes">
                {classes.map((classe, index) => 
                    <button type="button" className={classe.index} key={classe.index} onClick={() => setClasse({value: classe, isSelected: true})}>
                        <span>{index + 1}. {classe.name}</span>
                    </button>
                )}
            </div>
        </>
    )
}

export default Classes