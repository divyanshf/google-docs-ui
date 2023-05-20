import React, { useContext, useEffect } from "react";
import CustomToolbar from "./CustomToolbar/CustomToolbar";
import TitleContext from "../contexts/TitleContext";
import Drawer from "./Drawer/Drawer";
import EditTools from "./EditTools/EditTools";

const MainComponent = () => {
    const { title } = useContext(TitleContext);

    useEffect(() => {
        document.title = title ?? "React App";
    }, [title]);

    return (
        <div className="container">
            <CustomToolbar />
            <div className="inner-container">
                <div className="edit-tools-and-editor">
                    <EditTools />
                    <div className="editor-container">
                        <div
                            className="editor"
                            style={{
                                width: 800,
                                height: 600,
                                background: "white",
                                border: "1px solid gray",
                                margin: "50px",
                                marginTop: "100px",
                            }}
                        />
                    </div>
                </div>
                <Drawer />
            </div>
        </div>
    );
};

export default MainComponent;
