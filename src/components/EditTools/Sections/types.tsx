import { FormatSettings } from "../../../types/formatSettings";

export interface SectionProps {
    settings: FormatSettings;
    handleSettingChange: (key: keyof FormatSettings) => void;
}
