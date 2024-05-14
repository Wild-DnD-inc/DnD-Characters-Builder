import { useGears } from "../contexts/GearsContext";

function Gears({ selectedGears, onGearChange }) {
    const { gears } = useGears();

    return (
        <>
            <h3>Gear</h3>
            <div>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((gearNumber) => (
                    <select
                        key={gearNumber}
                        id={`gear-${gearNumber}`}
                        name={`gear-${gearNumber}`}
                        className="block equipment"
                        value={selectedGears[`gear${gearNumber}`]}
                        onChange={(e) => onGearChange(`gear${gearNumber}`, e.target.value)}
                    >
                        <option value="">--No Gear--</option>
                        {gears.map((item, index) => (
                            <option key={index} value={item.name}>{item.name}</option>
                        ))}
                    </select>
                ))}
            </div>
        </>
    )
}

export default Gears;