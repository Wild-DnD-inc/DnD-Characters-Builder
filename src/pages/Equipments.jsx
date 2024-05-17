import { EquipmentProvider } from '../contexts/EquipmentContext'
import Equipment from '../components/Equipment'

function Equipments() {

    return (
        <EquipmentProvider>
            <Equipment/>
        </EquipmentProvider>
    )
}

export default Equipments