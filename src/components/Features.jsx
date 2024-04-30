import { useFeatures } from "../contexts/FeaturesContext";

function Features() {

    const { features } = useFeatures()

    return (
        <div className="features-component">
            <label htmlFor="features">Features</label>
            <select name="features" id="features" defaultValue={''}>
                <option value="">--Not Selected--</option>
                {features.map((feature, index) => 
                    <option value={feature.index} key={feature.index}>{index + 1}. {feature.name}</option>
                )}
            </select>
        </div>
    )

}

export default Features