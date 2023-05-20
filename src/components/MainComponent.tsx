import React, { useContext, useEffect } from "react";
import CustomToolbar from "./CustomToolbar/CustomToolbar";
import TitleContext from "../contexts/TitleContext";
import Drawer from "./Drawer/Drawer";
import EditTools from "./EditTools/EditTools";
import Editor from "./Editor/Editor";

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
                    <Editor />
                </div>
                <Drawer />
            </div>
        </div>
    );
};

export default MainComponent;
