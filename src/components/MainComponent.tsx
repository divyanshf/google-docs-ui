import React, { useContext, useEffect } from "react";
import CustomToolbar from "./CustomToolbar/CustomToolbar";
import TitleContext from "../contexts/TitleContext";

const MainComponent = () => {
    const { title } = useContext(TitleContext);

    useEffect(() => {
        document.title = title ?? "React App";
    }, [title]);

    return (
        <div className="container">
            <CustomToolbar />
        </div>
    );
};

export default MainComponent;
