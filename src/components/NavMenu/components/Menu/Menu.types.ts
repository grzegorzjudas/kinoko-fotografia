import type { NavMenuItem } from '../../NavMenu.types';

export type MenuProps = {
    open: boolean;
    items: NavMenuItem[];
    onItemClick?: (item: NavMenuItem) => void;
    render?: (
        content: () => React.ReactNode,
        activeItem: NavMenuItem | null
    ) => React.ReactNode;
};
