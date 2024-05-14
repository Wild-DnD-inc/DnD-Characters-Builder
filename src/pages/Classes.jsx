import ListClasses from "../components/ListClass"
import { ClassesProvider } from "../contexts/ClassesContext"
import '../styles/Classes.css'

function Classes() {

    return (
        <ClassesProvider>
            <ListClasses/>
        </ClassesProvider>
    )

}

export default Classes