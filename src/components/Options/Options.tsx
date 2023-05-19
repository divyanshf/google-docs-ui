import React from "react";
import Generic from "./Generic";
import Expand from "./Expand";
import Profile from "./Profile";
import "./Options.css";
import OptionWrapper from "./OptionWrapper/OptionWrapper";

// Main Options
const Options = () => {
    return (
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
                title={"Join a call here or present this tab to the call"}
                className="mr-8 center-row"
                buttonClass="expand-icon-button"
            >
                <Expand icon={"videocam"} />
            </OptionWrapper>
            <OptionWrapper
                title={"Private to only me"}
                className="mr-8 center-row"
                buttonClass="share-icon"
            >
                <Generic icon={"person_add"} iconSize={20} />
            </OptionWrapper>
            <OptionWrapper
                title={"Profile"}
                buttonClass="p-4"
                className="center-row ml-8"
            >
                <Profile name={"Divyansh Falodiya"} />
            </OptionWrapper>
        </div>
    );
};

export default Options;
