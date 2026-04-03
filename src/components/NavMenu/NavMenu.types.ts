export type NavMenuItem = {
    label: string;
    to?: string;
    children?: NavMenuItem[];
};

export type NavMenuProps = {
    className?: string;
    defaultOpen?: boolean;
    items?: NavMenuItem[];
};
