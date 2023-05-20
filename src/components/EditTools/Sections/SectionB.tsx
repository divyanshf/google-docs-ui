import React from "react";
import OptionWrapper from "../../Options/OptionWrapper/OptionWrapper";
import Expand from "../../Options/Expand";

const SectionB = () => {
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
                    <Expand text="Arial" />
                </OptionWrapper>
            </div>
        </div>
    );
};

export default SectionB;
