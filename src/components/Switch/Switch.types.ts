export type SwitchProps = {
    checked?: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
    label?: string;
    style?: React.CSSProperties;
    onChange?: (checked: boolean) => void;
};
