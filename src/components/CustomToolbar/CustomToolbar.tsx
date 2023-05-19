import React from "react";
import DocumentTools from "./DocumentTools/DocumentTools";
import Options from "../Options/Options";
import "./CustomToolbar.css";

// Main Toolbar
const CustomToolbar = () => {
    return (
        <nav className="pt-8 pl-16 pr-16">
            <div style={{ display: "flex" }}>
                {/* Branding */}
                <img
                    src="/images/brand.png"
                    alt="Google Docs Brand"
                    className="brand mr-2"
                    style={{
                        alignSelf: "center",
                    }}
                />
                {/* Document Related Tools */}
                <DocumentTools className="document-tools-container mr-32" />
                {/* Share and other options */}
                <Options />
            </div>
            {/* Edit Related Tools */}
        </nav>
    );
};

export default CustomToolbar;
