import { useBackgrounds } from "../contexts/BackgroundsContext";

function Backgrounds() {

    const { backgrounds } = useBackgrounds()

    return (
        <div className="backgrounds-component">
            <label htmlFor="backgrounds">Backgrounds</label>
            <select name="backgrounds" id="backgrounds" defaultValue={''}>
                <option value="">--Not Selected--</option>
                {backgrounds.map((background, index) => 
                    <option value={background.index} key={background.index}>{index + 1}. {background.name}</option>
                )}
            </select>
        </div>
    )

}

export default Backgrounds