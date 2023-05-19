import React, { PropsWithChildren } from "react";
import { Box } from "@mui/material";

interface BoxCentreProps extends PropsWithChildren {
    flexDirection?: "row" | "column";
}

const BoxCentre = ({ flexDirection, children }: BoxCentreProps) => {
    return (
        <Box
            display={"flex"}
            flexDirection={flexDirection ?? "row"}
            alignItems={"center"}
            justifyContent={"center"}
        >
            {children}
        </Box>
    );
};

export default BoxCentre;
