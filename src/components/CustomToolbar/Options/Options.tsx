import React, { PropsWithChildren } from "react";
import Generic from "./Generic";
import Expand from "./Expand";
import Profile from "./Profile";

// Types
interface OptionProps extends PropsWithChildren {
    title: string;
    background?: string; // color
    buttonStyle?: React.CSSProperties;
    className?: string;
    buttonClass?: string;
}

// Wrapper
const OptionWrapper = ({ buttonClass, className, children }: OptionProps) => {
    return (
        <div className={className}>
            <button className={`icon-button ${buttonClass}`}>{children}</button>
        </div>
    );
};

// Main Options
const Options = () => {
    return (
        <div style={{ display: "flex" }}>
            <OptionWrapper
                title={"Last edit was 1 minute ago"}
                className="mr-8"
            >
                <Generic icon={"history"} />
            </OptionWrapper>
            <OptionWrapper title={"Open Comment History"} className="mr-8">
                <Generic icon={"comment"} />
            </OptionWrapper>
            <OptionWrapper
                title={"Join a call here or present this tab to the call"}
                buttonStyle={{ borderRadius: "33px" }}
                className="mr-8"
                buttonClass="expand-icon-button"
            >
                <Expand icon={"videocam"} />
            </OptionWrapper>
            <OptionWrapper title={"Private to only me"} className="mr-8">
                <Generic icon={"person_add"} iconSize={20} />
            </OptionWrapper>
            <OptionWrapper title={"Profile"}>
                <Profile name={"Divyansh Falodiya"} />
            </OptionWrapper>
        </div>
    );
};

export default Options;
