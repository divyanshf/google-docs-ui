import React from "react";

interface ExpandProps {
    icon: string;
    iconSize?: number;
}

const Expand = ({ icon }: ExpandProps) => {
    return (
        <>
            <span className="material-symbols-outlined icon">{icon}</span>
            <span className="material-symbols-outlined icon">
                arrow_drop_down
            </span>
        </>
    );
};

export default Expand;
