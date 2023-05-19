import { PropsWithChildren } from "react";

// Types
interface OptionProps extends PropsWithChildren {
    title: string;
    background?: string; // color
    className?: string;
    buttonClass?: string;
}

// Wrapper
const OptionWrapper = ({ buttonClass, className, children }: OptionProps) => {
    return (
        <div className={className}>
            <button className={`icon-button ${buttonClass}`}>{children}</button>
        </div>
    );
};

export default OptionWrapper;
