import React, { useContext, useEffect } from "react";
import CustomToolbar from "./CustomToolbar/CustomToolbar";
import TitleContext from "../contexts/TitleContext";
import Drawer from "./Drawer/Drawer";

const MainComponent = () => {
    const { title } = useContext(TitleContext);

    useEffect(() => {
        document.title = title ?? "React App";
    }, [title]);

    return (
        <div className="container">
            <Drawer />
            <CustomToolbar />
            <div
                style={{
                    width: "800px",
                    height: "600px",
                    background: "white",
                    border: "1px solid gray",
                    margin: "50px",
                    marginTop: "100px",
                }}
            />
        </div>
    );
};

export default MainComponent;
