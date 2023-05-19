import React from "react";
import {
    AppBar,
    Avatar,
    Box,
    Tooltip,
    IconButton,
    IconButtonProps,
    useTheme,
} from "@mui/material";
import DocumentTools from "./DocumentTools/DocumentTools";
import BoxCentre from "../BoxCentre/BoxCentre";
import Options from "./Options/Options";
import Generic from "./Options/Generic";
import Expand from "./Options/Expand";
import Profile from "./Options/Profile";

// Options Component for History, Share, etc.
// const Option = ({ title, icon, background, iconSize }: OptionProps) => {
//     return (
//         <BoxCentre>
//             <Tooltip title={title}>
//                 <StyledIconButton background={background}></StyledIconButton>
//             </Tooltip>
//         </BoxCentre>
//     );
// };

// const ExpandOption = ({ title, icon }: OptionProps) => {
//     return (
//         // <StyledIconButton sx={{ borderRadius: "33px" }}>
//             <span className="material-symbols-outlined option-icon">
//                 {icon}
//             </span>
//             <span className="material-symbols-outlined option-icon">
//                 expand_more
//             </span>
//         // </StyledIconButton>
//     );
// };

// Main Toolbar
const CustomToolbar = () => {
    const theme = useTheme();

    return (
        <AppBar
            elevation={0}
            sx={(theme) => ({
                background: "transparent",
                color: theme.palette.text.primary,
                py: 1,
                px: 2,
            })}
        >
            <Box display={"flex"}>
                <img
                    src="/images/brand.png"
                    alt="Google Docs Brand"
                    className="brand"
                />
                <DocumentTools />
                <Options title={"Last edit was 1 minute ago"}>
                    <Generic icon={"history"} />
                </Options>
                <Options title={"Open Comment History"}>
                    <Generic icon={"comment"} />
                </Options>
                <Options
                    title={"Join a call here or present this tab to the call"}
                    buttonStyle={{ borderRadius: "33px" }}
                >
                    <Expand icon={"video_call"} />
                </Options>
                <Options
                    title={"Private to only me"}
                    background={theme.palette.primary.main}
                >
                    <Generic icon={"person_add"} iconSize={20} />
                </Options>
                <Options title={"Profile"}>
                    <Profile name={"Divyansh Falodiya"} />
                </Options>
            </Box>
            {/* Edit Tools Below */}
        </AppBar>
    );
};

export default CustomToolbar;
