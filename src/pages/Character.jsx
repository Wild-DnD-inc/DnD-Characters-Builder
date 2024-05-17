import Character from "../components/Character";
import { CharacterProvider } from "../contexts/CharacterContext";
import { AlignmentProvider } from "../contexts/AlignmentContext";
import { BackgroundsProvider } from "../contexts/BackgroundsContext";

function Characters() {

    return (
        <AlignmentProvider>
            <CharacterProvider>
                <BackgroundsProvider>
                    <Character />
                </BackgroundsProvider>
            </CharacterProvider>
        </AlignmentProvider>
    )
}
export default Characters