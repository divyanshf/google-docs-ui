import React from "react";

interface GenericProps {
    icon: string;
    iconSize?: number;
}

const Generic = ({ icon }: GenericProps) => {
    return (
        <span className="material-symbols-outlined icon">{icon}</span>
    );
};

export default Generic;
