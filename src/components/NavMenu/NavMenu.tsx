import { useState } from 'react';
import cx from 'classnames';

import { Backdrop } from './components/Backdrop';
import { Menu } from './components/Menu';

import type { NavMenuItem, NavMenuProps } from './NavMenu.types';
import * as Styled from './NavMenu.styles';
import { MENU_ITEMS } from './NavMenu.const';

export function NavMenu(props: NavMenuProps) {
    const items = props.items || MENU_ITEMS;
    const [open, setOpen] = useState(props.defaultOpen || false);

    function closeMenu() {
        setOpen(false);
    }

    function toggleMenu() {
        setOpen(prevOpen => !prevOpen);
    }

    function onItemClick(item: NavMenuItem) {
        if (!item.children?.length) {
            closeMenu();
        }
    }

    return (
        <>
            <NavMenu.Backdrop visible={open} onClick={closeMenu} />
            <Styled.Container className={cx(props.className, { open })}>
                <Styled.HandleButton
                    type="button"
                    onClick={toggleMenu}
                    aria-expanded={open}
                    aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
                />
                <NavMenu.Menu
                    items={items}
                    open={open}
                    onItemClick={onItemClick}
                    render={(content, activeItem) => (
                        <>
                            {content()}
                            {activeItem === null && <Styled.SocialMediaBox iconSize={20} />}
                        </>
                    )}
                />
            </Styled.Container>
        </>
    );
}

NavMenu.Menu = Menu;
NavMenu.Backdrop = Backdrop;

export default NavMenu;
