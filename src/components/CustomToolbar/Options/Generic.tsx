import React from "react";

interface GenericProps {
    icon: string;
    iconSize?: number;
}

const Generic = ({ icon }: GenericProps) => {
    return (
        <span className="material-symbols-outlined option-icon">{icon}</span>
    );
};

export default Generic;
