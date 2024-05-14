import Equipment from "../components/Equipment"
import { EquipmentProvider } from "../contexts/EquipmentContext"

function Equipments() {

    return (
        <EquipmentProvider>
            <Equipment />
        </EquipmentProvider>
    )
}

export default Equipments