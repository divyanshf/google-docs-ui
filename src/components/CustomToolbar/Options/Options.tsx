import React, { PropsWithChildren } from "react";
import BoxCentre from "../../BoxCentre/BoxCentre";
import { Tooltip, IconButton, IconButtonProps } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

// Types
interface OptionProps extends PropsWithChildren {
    title: string;
    background?: string; // color
    buttonStyle?: React.CSSProperties;
}

interface StyledIconButtonProps extends IconButtonProps {
    background?: string; // color
}

// Styled Components
const StyledIconButton = styled(IconButton, {
    shouldForwardProp: (prop) =>
        prop !== "background" && prop !== "hoverBackground",
})<StyledIconButtonProps>(({ background }) => ({}));

const Options = ({ title, background, buttonStyle, children }: OptionProps) => {
    return (
        <BoxCentre>
            <Tooltip title={title}>
                <StyledIconButton
                    background={background}
                    style={{
                        ...buttonStyle,
                    }}
                >
                    {children}
                </StyledIconButton>
            </Tooltip>
        </BoxCentre>
    );
};

export default Options;
