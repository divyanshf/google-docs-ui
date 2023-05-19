import React from "react";
import "./App.css";
import "./Helper.css";
import MainComponent from "./components/MainComponent";
import { TitleProvider } from "./contexts/TitleContext";

function App() {
    return (
        <TitleProvider>
            <MainComponent />
        </TitleProvider>
    );
}

export default App;
