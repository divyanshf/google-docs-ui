import React from "react";
import "./Editor.css";

const Editor = () => {
    return (
        <div className="editor-container">
            <div
                className="editor"
                style={{
                    width: 800,
                    height: 1500,
                    background: "white",
                    border: "1px solid gray",
                    margin: 20,
                }}
            />
        </div>
    );
};

export default Editor;
