import React from "react";
import "./HorizontalRuler.css";

interface HorizontalRulerProps {
    width: number;
    spread: number;
}

// Spread the inches over ruler
const HorizontalSpread = ({ width, spread }: HorizontalRulerProps) => {
    const inchDivisions = 8;
    const unit = width / (inchDivisions * spread);
    const nLines = Math.floor(width / unit);

    return (
        <div style={{ position: "relative" }}>
            {Array.from(Array(nLines)).map((_, idx) => (
                <>
                    <div
                        key={idx}
                        style={{
                            position: "absolute",
                            left: (idx + 1) * unit,
                            bottom: 0,
                            height:
                                (idx + 1) % 4 === 0 && (idx + 1) % 8 !== 0
                                    ? 7
                                    : 5,
                            width: 1,
                            background: "black",
                        }}
                    ></div>
                    {(idx + 1) % 8 === 0 && (
                        <span
                            style={{
                                position: "absolute",
                                left: (idx + 1) * unit - 3,
                                bottom: 3,
                                fontSize: 12,
                            }}
                        >
                            {(idx + 1) / 8}
                        </span>
                    )}
                </>
            ))}
        </div>
    );
};

// Horizontal Ruler Main Component
const HorizontalRuler = ({ width, spread }: HorizontalRulerProps) => {
    return (
        <div className="horizontal-ruler-container">
            <div className="horizontal-ruler-wrapper">
                <div className="horizontal-ruler-border" />
                <div
                    className="horizontal-ruler"
                    style={{
                        width,
                        height: 1,
                    }}
                >
                    <HorizontalSpread width={width} spread={spread} />
                </div>
            </div>
        </div>
    );
};

export default HorizontalRuler;
