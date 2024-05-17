import { useTools } from '../contexts/ToolsContext';

function Tools({ selectedTools, onToolChange }) {
    const { artisanTool, gamingSet, instrument, kit, otherTool } = useTools();


    return (
        <>
            <h3>Tools</h3>
            <div>
                {[1, 2, 3].map((toolNumber) => (
                    <select 
                        key={toolNumber} 
                        id={`tool-${toolNumber}`} 
                        name={`tool-${toolNumber}`} 
                        className="block equipment"
                        value={selectedTools[`tool${toolNumber}`]}
                        onChange={(e) => onToolChange(`tool${toolNumber}`, e.target.value)}
                    >
                        <option value="">--No tool--</option>
                        <optgroup label="Kits">
                            {kit.map((item, index) => (
                                <option key={index} value={item.name}>{item.name}</option>
                            ))}
                        </optgroup>
                        <optgroup label="Artisan Tools">
                            {artisanTool.map((item, index) => (
                                <option key={index} value={item.name}>{item.name}</option>
                            ))}
                        </optgroup>
                        <optgroup label="Instruments">
                            {instrument.map((item, index) => (
                                <option key={index} value={item.name}>{item.name}</option>
                            ))}
                        </optgroup>
                        <optgroup label="Gaming Sets">
                            {gamingSet.map((item, index) => (
                                <option key={index} value={item.name}>{item.name}</option>
                            ))}
                        </optgroup>
                        <optgroup label="Other">
                            {otherTool.map((item, index) => (
                                <option key={index} value={item.name}>{item.name}</option>
                            ))}
                        </optgroup>
                    </select>
                ))}
            </div>
        </>
    );
}

export default Tools;
