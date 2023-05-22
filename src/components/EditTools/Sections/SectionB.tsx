import React, { useContext } from "react";
import OptionWrapper from "../../Options/OptionWrapper/OptionWrapper";
import Expand from "../../Options/Expand";
import FormatSettingsContext from "../../../contexts/FormatSettingsContext";

const SectionB = () => {
    const { settings } = useContext(FormatSettingsContext);

    return (
        <div className="edit-tools-section-wrapper">
            <div className="edit-tools-section">
                <OptionWrapper
                    title="Styles"
                    className="edit-tool"
                    buttonClass="edit-tool-button"
                >
                    <Expand text="Normal text" />
                </OptionWrapper>

                <OptionWrapper
                    title="Font"
                    className="edit-tool"
                    buttonClass="edit-tool-button"
                >
                    <Expand text={settings["font"]} />
                </OptionWrapper>
            </div>
        </div>
    );
};

export default SectionB;
