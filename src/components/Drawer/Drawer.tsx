import React, { useState } from "react";
import "./Drawer.css";
import OptionWrapper from "../Options/OptionWrapper/OptionWrapper";
import Generic from "../Options/Generic";

const Drawer = () => {
    const [isOpen, setIsOpen] = useState(true);

    const otherProducts = [
        { image: "/images/transparent-calendar.png", title: "Calendar" },
        { image: "/images/transparent-keep.png", title: "Keep" },
        { image: "/images/transparent-tasks.png", title: "Tasks" },
        { image: "/images/transparent-contacts.png", title: "Contacts" },
        { image: "/images/transparent-maps.png", title: "Maps" },
    ];

    const toggleDrawer = () => setIsOpen((prev) => !prev);

    return (
        <div className="drawer-container">
            <div className={`drawer p-8 ${!isOpen ? "closed" : "opened"}`}>
                {otherProducts.map((product, idx) => (
                    <OptionWrapper
                        title={product.title}
                        key={idx}
                        className="anchor-right"
                    >
                        <img
                            src={product.image}
                            alt="Calendar"
                            className="google-product-icon"
                        />
                    </OptionWrapper>
                ))}
                <div className="horizontal-divider" />
                <OptionWrapper title={"Get Add-ons"} className="anchor-right">
                    <Generic icon="add" />
                </OptionWrapper>
            </div>
            <div className={`drawer-opener ${!isOpen ? "closed" : "opened"}`}>
                <OptionWrapper
                    title={isOpen ? "Hide side panel" : "Show side panel"}
                    onClick={toggleDrawer}
                    className="anchor-top anchor-right"
                >
                    <Generic icon="chevron_right" />
                </OptionWrapper>
            </div>
        </div>
    );
};

export default Drawer;
