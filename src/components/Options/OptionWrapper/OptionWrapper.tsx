import { PropsWithChildren } from "react";

// Types
interface OptionProps extends PropsWithChildren {
    title: string;
    background?: string; // color
    className?: string;
    buttonClass?: string;
    disabled?: boolean;
    active?: boolean;
    onClick?: () => void;
}

// Wrapper
const OptionWrapper = ({
    title,
    buttonClass,
    className,
    children,
    disabled,
    active,
    onClick,
}: OptionProps) => {
    return (
        <div className={`${className} tooltip-parent anchor-center`}>
            <button
                onClick={onClick}
                className={`tooltip icon-button ${buttonClass} ${
                    active ? "active-button" : ""
                }`}
                data-tip={title}
                disabled={disabled}
            >
                {children}
            </button>
        </div>
    );
};

export default OptionWrapper;
