import React from "react";
import "./Editor.css";
import HorizontalRuler from "./Ruler/HorizontalRuler";

const Editor = () => {
    // Considering A4 size values
    const editorSizeInches = { width: 8.3, height: 11.7 };
    const editorWidthInPixel = 794;

    return (
        <div className="editor-container">
            <HorizontalRuler
                width={editorWidthInPixel}
                spread={editorSizeInches.width}
            />
            <div className="vertical-ruler" />
            <div className="editor-wrapper">
                <div
                    className="editor"
                    style={{
                        width: editorWidthInPixel,
                        height:
                            (editorWidthInPixel * editorSizeInches.height) /
                            editorSizeInches.width,
                    }}
                />
            </div>
        </div>
    );
};

export default Editor;
