import React, { useContext } from "react";
import "./EditTools.css";
import SectionA from "./Sections/SectionA";
import SectionB from "./Sections/SectionB";
import SectionC from "./Sections/SectionC";
import SectionD from "./Sections/SectionD";
import SectionE from "./Sections/SectionE";
import SectionF from "./Sections/SectionF";
import FormatSettingsContext from "../../contexts/FormatSettingsContext";
import { FormatSettings } from "../../types/formatSettings";
import SectionG from "./Sections/SectionG";
import OptionWrapper from "../Options/OptionWrapper/OptionWrapper";
import Generic from "../Options/Generic";

// Types
interface EditToolsProps {
    isOpen: boolean;
    toggleVisibility: () => void;
}

// All the tools related to editing the document
const EditTools = ({ isOpen, toggleVisibility }: EditToolsProps) => {
    const { settings, updateSetting } = useContext(FormatSettingsContext);

    // Change the settings for a particular key
    const handleSettingChange = (key: keyof FormatSettings) => {
        updateSetting(key, !settings[key]);
    };

    return (
        <div className="edit-tools-container">
            <div className="edit-tools-wrapper">
                <div className="edit-tools" style={{ overflow: "hidden" }}>
                    <SectionA
                        settings={settings}
                        handleSettingChange={handleSettingChange}
                    />
                    <div className="vertical-divider m-8" />
                    <SectionB />
                    <div className="vertical-divider m-8" />
                    <SectionC />
                    <div className="vertical-divider m-8" />
                    <SectionD
                        settings={settings}
                        handleSettingChange={handleSettingChange}
                    />
                    <div className="vertical-divider m-8" />
                    <SectionE />
                    <div className="vertical-divider m-8" />
                    <SectionF />
                </div>

                <div className="edit-tools">
                    <SectionG />
                    <div className="vertical-divider m-8" />
                    <OptionWrapper
                        title={isOpen ? "Hide the menus" : "Show the menus"}
                        className="edit-tool"
                        buttonClass="edit-tool-button"
                        onClick={toggleVisibility}
                    >
                        <Generic
                            icon={isOpen ? "expand_less" : "expand_more"}
                        />
                    </OptionWrapper>
                </div>
            </div>
        </div>
    );
};

export default EditTools;
