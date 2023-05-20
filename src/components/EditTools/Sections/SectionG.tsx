import React from "react";
import OptionWrapper from "../../Options/OptionWrapper/OptionWrapper";
import Expand from "../../Options/Expand";

const SectionG = () => {
    return (
        <div className="edit-tools-section-wrapper">
            <div className="edit-tools-section">
                <OptionWrapper
                    title="Editing mode"
                    className="edit-tool"
                    buttonClass="edit-tool-button rounded-button"
                >
                    <Expand icon="edit" />
                </OptionWrapper>
            </div>
        </div>
    );
};

export default SectionG;
