import React from "react";

const options = [
    "File",
    "Edit",
    "View",
    "Insert",
    "Format",
    "Tools",
    "Extensions",
    "Help",
];

const Tools = () => {
    return (
        <div className="document-tools flex mt-4">
            {options.map((option) => (
                <button>{option}</button>
            ))}
        </div>
    );
};

export default Tools;
