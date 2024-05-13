import { useTools } from "../contexts/ToolsContext";

function Tools({ setTools }) {
    const { artisanTool, gamingSet, instrument, kit, otherTool } = useTools();

    return (
        <>
        <h3>Tools</h3>
        <div>
            <select id="tool-1" name="tool-1" className="block equipment">
                <option value="">--No tool--</option>
                <optgroup label="Kits">
                    {kit.map((item, index) => (
                        <option key={index} value={item.index}>{item.name}</option>
                    ))}
                </optgroup>
                <optgroup label="Artisan Tools">
                    {artisanTool.map((item, index) => (
                        <option key={index} value={item.index}>{item.name}</option>
                    ))}
                </optgroup>
                <optgroup label="Instruments">
                    {instrument.map((item, index) => (
                        <option key={index} value={item.index}>{item.name}</option>
                    ))}
                </optgroup>
                <optgroup label="Gaming Sets">
                    {gamingSet.map((item, index) => (
                        <option key={index} value={item.index}>{item.name}</option>
                    ))}
                </optgroup>
                <optgroup label="Other">
                    {otherTool.map((item, index) => (
                        <option key={index} value={item.index}>{item.name}</option>
                    ))}
                </optgroup>
            </select>
            <select id="tool-2" name="tool-2" className="block equipment">
                <option value="">--No tool--</option>
                <optgroup label="Kits">
                    {kit.map((item, index) => (
                        <option key={index} value={item.index}>{item.name}</option>
                    ))}
                </optgroup>
                <optgroup label="Artisan Tools">
                    {artisanTool.map((item, index) => (
                        <option key={index} value={item.index}>{item.name}</option>
                    ))}
                </optgroup>
                <optgroup label="Instruments">
                    {instrument.map((item, index) => (
                        <option key={index} value={item.index}>{item.name}</option>
                    ))}
                </optgroup>
                <optgroup label="Gaming Sets">
                    {gamingSet.map((item, index) => (
                        <option key={index} value={item.index}>{item.name}</option>
                    ))}
                </optgroup>
                <optgroup label="Other">
                    {otherTool.map((item, index) => (
                        <option key={index} value={item.index}>{item.name}</option>
                    ))}
                </optgroup>
            </select>
            <select id="tool-3" name="tool-3" className="block equipment">
                <option value="">--No tool--</option>
                <optgroup label="Kits">
                    {kit.map((item, index) => (
                        <option key={index} value={item.index}>{item.name}</option>
                    ))}
                </optgroup>
                <optgroup label="Artisan Tools">
                    {artisanTool.map((item, index) => (
                        <option key={index} value={item.index}>{item.name}</option>
                    ))}
                </optgroup>
                <optgroup label="Instruments">
                    {instrument.map((item, index) => (
                        <option key={index} value={item.index}>{item.name}</option>
                    ))}
                </optgroup>
                <optgroup label="Gaming Sets">
                    {gamingSet.map((item, index) => (
                        <option key={index} value={item.index}>{item.name}</option>
                    ))}
                </optgroup>
                <optgroup label="Other">
                    {otherTool.map((item, index) => (
                        <option key={index} value={item.index}>{item.name}</option>
                    ))}
                </optgroup>
            </select>
        </div>
        </>
    )
}

export default Tools;