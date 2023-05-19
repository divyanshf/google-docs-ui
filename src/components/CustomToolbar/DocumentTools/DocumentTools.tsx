import React, { useContext, useState } from "react";
import "./DocumentTools.css";
import Tools from "./Tools/Tools";
import OptionWrapper from "../../Options/OptionWrapper/OptionWrapper";
import Generic from "../../Options/Generic";
import TitleContext from "../../../contexts/TitleContext";

// Types
interface DocumentToolsProps extends React.HTMLAttributes<HTMLDivElement> {}

// Document Related Tools
const DocumentTools = (props: DocumentToolsProps) => {
    const { title, updateTitleValue } = useContext(TitleContext);

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        updateTitleValue(e.target.value);

    return (
        <div {...props}>
            <div
                className="flex"
                style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    alignItems: "center",
                }}
            >
                <div className="document-title">
                    <span className="document-title-hidden document-title-input-and-hidden">
                        {title}
                    </span>
                    {/* <br /> */}
                    <input
                        value={title}
                        onChange={handleTitleChange}
                        className="document-title-input document-title-input-and-hidden"
                    />
                </div>
                <div className="flex">
                    <OptionWrapper
                        title="Start"
                        buttonClass="small-icon-button"
                        className="mr-4 ml-4"
                    >
                        <Generic icon="star" iconSize={18} />
                    </OptionWrapper>
                    <OptionWrapper
                        title="Move"
                        buttonClass="small-icon-button"
                        className="mr-4"
                    >
                        <Generic icon="drive_file_move" iconSize={18} />
                    </OptionWrapper>
                    <OptionWrapper
                        title="See document status"
                        buttonClass="small-icon-button"
                    >
                        <Generic icon="cloud_done" iconSize={18} />
                    </OptionWrapper>
                </div>
            </div>
            <Tools />
        </div>
    );
};

export default DocumentTools;
