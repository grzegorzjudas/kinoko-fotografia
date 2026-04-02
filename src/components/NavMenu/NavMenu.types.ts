export type NavMenuItem = {
    label: string;
    to?: string;
    onSelect?: () => void;
    children?: NavMenuItem[];
};

export type NavMenuProps = {
    className?: string;
    defaultOpen?: boolean;
    items?: NavMenuItem[];
};

export type ChevronProps = {
    direction?: 'right' | 'left';
};

export type BackdropProps = {
    open?: boolean;
};
