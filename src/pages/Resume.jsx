import Final from "../components/Final";
import { AlignmentProvider } from "../contexts/AlignmentContext";
import { CharacterProvider } from "../contexts/CharacterContext";
import { EquipmentProvider } from "../contexts/EquipmentContext";
import { ClassesProvider } from "../contexts/ClassesContext";
import { RacesProvider } from "../contexts/RacesContext";

function Resume() {

    return (
        <RacesProvider>
            <ClassesProvider>
                <EquipmentProvider>
                    <AlignmentProvider>
                        <CharacterProvider>
                            <Final />
                        </CharacterProvider>
                    </AlignmentProvider>
                </EquipmentProvider>
            </ClassesProvider>
        </RacesProvider>
    )
}

export default Resume