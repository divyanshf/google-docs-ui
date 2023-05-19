import { PropsWithChildren } from "react";

// Types
interface OptionProps extends PropsWithChildren {
    title: string;
    background?: string; // color
    className?: string;
    buttonClass?: string;
    onClick?: () => void;
}

// Wrapper
const OptionWrapper = ({
    title,
    buttonClass,
    className,
    children,
    onClick,
}: OptionProps) => {
    return (
        <div className={`${className} tooltip-parent`}>
            <button
                onClick={onClick}
                className={`tooltip icon-button ${buttonClass}`}
                data-tip={title}
            >
                {children}
            </button>
        </div>
    );
};

export default OptionWrapper;
