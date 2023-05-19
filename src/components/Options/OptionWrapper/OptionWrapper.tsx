import { PropsWithChildren } from "react";

// Types
interface OptionProps extends PropsWithChildren {
    title: string;
    background?: string; // color
    className?: string;
    buttonClass?: string;
}

// Wrapper
const OptionWrapper = ({
    title,
    buttonClass,
    className,
    children,
}: OptionProps) => {
    return (
        <div className={className}>
            <div className="tooltip" data-tip={title}>
                <button className={`icon-button ${buttonClass}`}>
                    {children}
                </button>
            </div>
        </div>
    );
};

export default OptionWrapper;
