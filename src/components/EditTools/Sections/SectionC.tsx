import React, { useState } from "react";
import OptionWrapper from "../../Options/OptionWrapper/OptionWrapper";
import Generic from "../../Options/Generic";

const SectionC = () => {
    const [fontSize, setFontSize] = useState(11);

    // Handle the input for font size when given by typing
    const handleFontSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFontSize(Number(e.target.value));
    };

    // Validate the changed font size to be always positive
    const validateFontSize = () => {
        setFontSize((prev) => Math.max(1, prev));
    };

    // Increase the font size by 1
    const increaseFontSize = () => setFontSize((prev) => prev + 1);

    // Decrease the font size by 1
    const decreaseFontSize = () =>
        setFontSize((prev) => (prev > 1 ? prev - 1 : prev));

    return (
        <div className="edit-tools-section-wrapper">
            <div className="edit-tools-section">
                <OptionWrapper
                    title="Decrease font size"
                    className="edit-tool mr-8"
                    buttonClass="edit-tool-button small-icon-button"
                    onClick={decreaseFontSize}
                >
                    <Generic icon="remove" />
                </OptionWrapper>
                <input
                    type="number"
                    className="font-size-input"
                    value={fontSize}
                    onChange={handleFontSizeChange}
                    onBlur={validateFontSize}
                />
                <OptionWrapper
                    title="Increase font size"
                    className="edit-tool ml-8"
                    buttonClass="edit-tool-button small-icon-button"
                    onClick={increaseFontSize}
                >
                    <Generic icon="add" />
                </OptionWrapper>
            </div>
        </div>
    );
};

export default SectionC;
