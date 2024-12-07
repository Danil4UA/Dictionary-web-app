import React, { useState } from "react";
import "./FontSwitcher.scss";

const FontSwitcher = () => {

    const fonts = ["Arial", "Verdana", "Courier New", "Georgia", "Times New Roman"];
    const [selectedFont, setSelectedFont] = useState(fonts[0]);

    const handleFontChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newFont = event.target.value;
        setSelectedFont(newFont);
        document.documentElement.style.setProperty("--font-family-main", newFont);
    };

    return (
        <div className="FontSwitcher">
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