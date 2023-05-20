import React from "react";
import DocumentTools from "./DocumentTools/DocumentTools";
import "./CustomToolbar.css";
import OptionWrapper from "../Options/OptionWrapper/OptionWrapper";
import Generic from "../Options/Generic";
import Profile from "../Options/Profile";
import Expand from "../Options/Expand";
import useMediaQuery from "../../hooks/useMediaQuery";

// Main Toolbar
const CustomToolbar = () => {
    const isSmall = useMediaQuery("sm");

    return (
        <nav className="pt-8 pl-16 pr-16">
            <div style={{ display: "flex" }}>
                {/* Branding */}
                <img
                    src="/images/brand.png"
                    alt="Google Docs Brand"
                    className="brand"
                    style={{
                        alignSelf: "center",
                    }}
                />

                {/* Document Related Tools */}
                <DocumentTools className="document-tools-container mr-32" />

                <div className="full-width" />

                {/* Share and other options */}
                <div style={{ display: "flex" }}>
                    <OptionWrapper
                        title={"Last edit was 1 minute ago"}
                        className="mr-8 center-row"
                    >
                        <Generic icon={"history"} />
                    </OptionWrapper>
                    <OptionWrapper
                        title={"Open Comment History"}
                        className="mr-8 center-row"
                    >
                        <Generic icon={"comment"} />
                    </OptionWrapper>
                    <OptionWrapper
                        title={
                            "Join a call here or present this tab to the call"
                        }
                        className="mr-8 center-row"
                        buttonClass="expand-icon-button"
                    >
                        <Expand icon={"videocam"} />
                    </OptionWrapper>
                    <OptionWrapper
                        title={"Private to only me"}
                        className="mr-8 center-row"
                        buttonClass={`share-icon ${
                            !isSmall ? "share-button-big" : ""
                        }`}
                    >
                        {isSmall ? (
                            <Generic icon={"person_add"} iconSize={20} />
                        ) : (
                            <>
                                <Generic icon="lock" iconSize={18} />
                                <strong>Share</strong>
                            </>
                        )}
                    </OptionWrapper>
                    <OptionWrapper
                        title={"Profile"}
                        buttonClass="p-4"
                        className="center-row ml-8"
                    >
                        <Profile
                            image="/images/divyansh.svg"
                            name={"Divyansh Falodiya"}
                        />
                    </OptionWrapper>
                </div>
            </div>
        </nav>
    );
};

export default CustomToolbar;
