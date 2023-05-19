import React from "react";
import "./App.css";
import { Box } from "@mui/material";
import CustomToolbar from "./components/CustomToolbar/CustomToolbar";
import { createTheme, ThemeProvider, alpha } from "@mui/material/styles";

function App() {
    const theme = createTheme({
        palette: {
            primary: {
                main: "#C2E7FF",
            },
        },
        components: {
            MuiButtonBase: {
                defaultProps: {
                    disableRipple: true,
                },
            },
            MuiIconButton: {
                styleOverrides: {
                    root: {
                        color: "#444746",
                        background: "transparent",
                        "&:hover": {
                            background: alpha("#444746", 0.1),
                        },
                    },
                },
            },
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <Box>
                <CustomToolbar />
            </Box>
        </ThemeProvider>
    );
}

export default App;
