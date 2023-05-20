import React from "react";
import "./EditTools.css";
import OptionWrapper from "../Options/OptionWrapper/OptionWrapper";
import Generic from "../Options/Generic";

const EditTools = () => {
    return (
        <div className="edit-tools-container">
            <div className="edit-tools">
                <OptionWrapper title="Undo" className="edit-tool">
                    <Generic icon="undo" iconSize={20} />
                </OptionWrapper>
            </div>
        </div>
    );
};

export default EditTools;
