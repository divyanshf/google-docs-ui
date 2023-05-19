import React, { useState } from "react";
import "./DocumentTools.css";
import Tools from "./Tools/Tools";
import OptionWrapper from "../../Options/OptionWrapper/OptionWrapper";
import Generic from "../../Options/Generic";

// Types
interface DocumentToolsProps extends React.HTMLAttributes<HTMLDivElement> {}

// Document Related Tools
const DocumentTools = (props: DocumentToolsProps) => {
    const [title, setTitle] = useState("Untitled ");

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setTitle(e.target.value);

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
                    <OptionWrapper title="Start">
                        <Generic icon="star" iconSize={20} />
                    </OptionWrapper>
                    <OptionWrapper title="Start">
                        <Generic icon="star" iconSize={20} />
                    </OptionWrapper>
                    <OptionWrapper title="Start">
                        <Generic icon="star" iconSize={20} />
                    </OptionWrapper>
                </div>
            </div>
            <Tools />
        </div>
    );
};

export default DocumentTools;
