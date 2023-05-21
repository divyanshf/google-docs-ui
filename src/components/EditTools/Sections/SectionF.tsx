import React from "react";
import OptionWrapper from "../../Options/OptionWrapper/OptionWrapper";
import Expand from "../../Options/Expand";
import Generic from "../../Options/Generic";

const SectionF = () => {
    return (
        <div className="edit-tools-section-wrapper">
            <div className="edit-tools-section">
                <OptionWrapper
                    title="Align & indent"
                    className="edit-tool"
                    buttonClass="edit-tool-button close-expand-button"
                >
                    <Expand icon="format_align_left" />
                </OptionWrapper>
                <OptionWrapper
                    title="Line $ paragraph spacing"
                    className="edit-tool"
                    buttonClass="edit-tool-button"
                >
                    <Generic icon="format_line_spacing" />
                </OptionWrapper>
                <div className="flex">
                    <OptionWrapper
                        title="Checklist"
                        className="edit-tool"
                        buttonClass="edit-tool-button"
                    >
                        <Generic icon="checklist" />
                    </OptionWrapper>
                    <OptionWrapper
                        title="Checklist menu"
                        className="edit-tool"
                        buttonClass="edit-tool-button expand"
                    >
                        <Generic icon="arrow_drop_down" />
                    </OptionWrapper>
                </div>
                <div className="flex">
                    <OptionWrapper
                        title="Bulleted list"
                        className="edit-tool"
                        buttonClass="edit-tool-button"
                    >
                        <Generic icon="format_list_bulleted" />
                    </OptionWrapper>
                    <OptionWrapper
                        title="Bulleted list menu"
                        className="edit-tool"
                        buttonClass="edit-tool-button expand"
                    >
                        <Generic icon="arrow_drop_down" />
                    </OptionWrapper>
                </div>
                <div className="flex">
                    <OptionWrapper
                        title="Numbered list"
                        className="edit-tool"
                        buttonClass="edit-tool-button"
                    >
                        <Generic icon="format_list_numbered" />
                    </OptionWrapper>
                    <OptionWrapper
                        title="Numbered list menu"
                        className="edit-tool"
                        buttonClass="edit-tool-button expand"
                    >
                        <Generic icon="arrow_drop_down" />
                    </OptionWrapper>
                </div>
                <OptionWrapper
                    title="Decrease indent"
                    className="edit-tool"
                    buttonClass="edit-tool-button"
                >
                    <Generic icon="format_indent_decrease" />
                </OptionWrapper>
                <OptionWrapper
                    title="Increase indent"
                    className="edit-tool"
                    buttonClass="edit-tool-button"
                >
                    <Generic icon="format_indent_increase" />
                </OptionWrapper>
                <OptionWrapper
                    title="Clear formatting"
                    className="edit-tool"
                    buttonClass="edit-tool-button"
                >
                    <Generic icon="format_clear" />
                </OptionWrapper>
            </div>
        </div>
    );
};

export default SectionF;
