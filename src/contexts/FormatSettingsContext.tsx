import { PropsWithChildren, createContext, useState } from "react";
import { FormatSettings } from "../types/formatSettings";

// The default settings for format
const baseSettings = {
    spelling_and_grammar_check: false,
    paint_format: false,
    bold: true,
    italics: false,
    underline: false,
} as FormatSettings;

// Format Settings Context
const FormatSettingsContext = createContext({
    settings: baseSettings,
    updateSetting: (key: string, value: any) => {},
});

// Format Settings Provider
export const FormatSettingsProvider = ({ children }: PropsWithChildren) => {
    const [settings, setSettings] = useState(baseSettings);

    // Update a setting key with a value
    const updateSetting = (key: string, value: any) =>
        setSettings((prev) => ({ ...prev, [key]: value }));

    return (
        <FormatSettingsContext.Provider value={{ settings, updateSetting }}>
            {children}
        </FormatSettingsContext.Provider>
    );
};

export default FormatSettingsContext;
