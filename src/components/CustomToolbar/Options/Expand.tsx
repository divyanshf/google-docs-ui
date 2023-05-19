import React from "react";

interface ExpandProps {
    icon: string;
    iconSize?: number;
}

const Expand = ({ icon }: ExpandProps) => {
    return (
        <>
            <span className="material-symbols-outlined option-icon">
                {icon}
            </span>
            <span className="material-symbols-outlined option-icon">
                expand_more
            </span>
        </>
    );
};

export default Expand;
