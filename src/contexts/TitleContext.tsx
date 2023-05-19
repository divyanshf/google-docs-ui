import { PropsWithChildren, createContext, useState } from "react";

interface TitleContextProp {
    title: string;
    updateTitleValue: (newValue: string) => void;
}

const TitleContext = createContext<TitleContextProp>({
    title: "",
    updateTitleValue: () => {},
});

export const TitleProvider = ({ children }: PropsWithChildren) => {
    const [title, setTitle] = useState("Untitled document");

    // Hanlder to update the title
    const updateTitleValue = (newValue: string) => {
        setTitle(newValue);
    };

    return (
        <TitleContext.Provider value={{ title, updateTitleValue }}>
            {children}
        </TitleContext.Provider>
    );
};

export default TitleContext;
