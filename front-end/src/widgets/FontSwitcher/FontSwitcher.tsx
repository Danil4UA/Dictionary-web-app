import React, { useState } from "react";
import "./FontSwitcher.scss";

const FontSwitcher = () => {
    // Доступные шрифты
    const fonts = ["Arial", "Verdana", "Courier New", "Georgia", "Times New Roman"];
    const [selectedFont, setSelectedFont] = useState(fonts[0]); // Начальный шрифт

    const handleFontChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newFont = event.target.value;
        setSelectedFont(newFont);
        document.documentElement.style.setProperty("--font-family-main", newFont);
    };

    return (
        <div className="FontSwitcher">
            <label htmlFor="fontSelect">
                {/* {selectedFont} */}
            </label>
            <select id="fontSelect" value={selectedFont} onChange={handleFontChange}>
                {fonts.map((font) => (
                    <option key={font} value={font}>
                        {font}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default FontSwitcher;