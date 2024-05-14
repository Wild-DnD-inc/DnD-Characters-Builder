import Character from "../components/Character";
import { CharacterProvider } from "../contexts/CharacterContext";
import { AlignmentProvider } from "../contexts/AlignmentContext";

function Characters() {

    return (
        <AlignmentProvider>
            <CharacterProvider>
                <Character />
            </CharacterProvider>
        </AlignmentProvider>
    )
}
export default Characters