import React, { useEffect, useRef } from "react";

const options = [
    "File",
    "Edit",
    "View",
    "Insert",
    "Format",
    "Tools",
    "Extensions",
    "Help",
];

const Tools = () => {
    const toolsContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // const children = toolsContainerRef.current?.children;
        // if (!children) return;
        // const nChildren = children?.length;
        // // Finding element that causes horizontal scroll on tools
        // let width = 0;
        // let scrollStartElement = 0;
        // for (let i = 0; i < nChildren; i++) {
        //     const el = children[i] as HTMLButtonElement;
        //     width += el.offsetWidth;
        //     if (width > toolsContainerRef.current.offsetWidth) {
        //         scrollStartElement = i;
        //         break;
        //     }
        // }
    }, []);

    return (
        <div ref={toolsContainerRef} className="document-tools flex mt-4">
            {options.map((option, idx) => (
                <button key={idx}>{option}</button>
            ))}
        </div>
    );
};

export default Tools;
