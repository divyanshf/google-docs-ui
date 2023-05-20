import React from "react";
import "./App.css";
import "./Helper.css";
import CustomToolbar from "./components/CustomToolbar/CustomToolbar";
import EditTools from "./components/EditTools/EditTools";
import Editor from "./components/Editor/Editor";
import Drawer from "./components/Drawer/Drawer";
import { FormatSettingsProvider } from "./contexts/FormatSettingsContext";

function App() {
    return (
        <div className="container">
            <CustomToolbar />
            <div className="inner-container">
                <FormatSettingsProvider>
                    <div className="edit-tools-and-editor">
                        <EditTools />
                        <Editor />
                    </div>
                </FormatSettingsProvider>
                <Drawer />
            </div>
        </div>
    );
}

export default App;
