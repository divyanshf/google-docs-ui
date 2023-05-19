import React from "react";
import DocumentTools from "./DocumentTools/DocumentTools";
import Options from "./Options/Options";

// Main Toolbar
const CustomToolbar = () => {
    return (
        <nav>
            <div style={{ display: "flex" }}>
                <img
                    src="/images/brand.png"
                    alt="Google Docs Brand"
                    className="brand"
                />
                <DocumentTools />
                <Options />
            </div>
            {/* Edit Tools Below */}
        </nav>
    );
};

export default CustomToolbar;
