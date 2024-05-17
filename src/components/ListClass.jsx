import '../styles/Classes.css'
import { useClasses } from '../contexts/ClassesContext'
import { useSteps } from '../contexts/StepsContext'

function ListClasses({setClasse}) {

    const { classes } = useClasses()
    const { steps, setSteps } = useSteps()

    return (
        <div className="classes">
            {classes.map((classe, index) => 
                <button type="button" className={`card ${classe.index}`} key={classe.index} onClick={() => setSteps({...steps, classe: classe.name})}>
                    <span>{index + 1}. {classe.name}</span>
                </button>
            )}
        </div>
    )
}

export default ListClasses