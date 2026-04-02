import { useState } from 'react';
import { createPortal } from 'react-dom';
import cx from 'classnames';

import type { NavMenuItem, NavMenuProps } from './NavMenu.types';
import * as Styled from './NavMenu.styles';
import { MENU_ITEMS } from './NavMenu.const';

export function NavMenu(props: NavMenuProps) {
    const items = props.items || MENU_ITEMS;
    const [open, setOpen] = useState(props.defaultOpen || false);
    const [activeSubmenu, setActiveSubmenu] = useState<NavMenuItem | null>(null);

    function closeMenu() {
        setOpen(false);
        setActiveSubmenu(null);
    }

    function toggleMenu() {
        setOpen((prevOpen) => {
            const nextOpen = !prevOpen;

            if (!nextOpen) {
                setActiveSubmenu(null);
            }

            return nextOpen;
        });
    }

    function onItemClick(item: NavMenuItem) {
        if (item.children?.length) {
            setActiveSubmenu(item);
            return;
        }

        item.onSelect?.();
        closeMenu();
    }

    function renderMenuEntry(item: NavMenuItem) {
        if (item.children?.length) {
            return (
                <Styled.MenuAction
                    type="button"
                    onClick={() => onItemClick(item)}
                    aria-haspopup="menu"
                    aria-expanded={activeSubmenu?.label === item.label}
                >
                    <Styled.MenuActionLabel>{item.label}</Styled.MenuActionLabel>
                    <Styled.Chevron aria-hidden="true" />
                </Styled.MenuAction>
            );
        }

        if (item.to) {
            return (
                <Styled.MenuLink to={item.to} onClick={() => onItemClick(item)}>
                    <Styled.MenuActionLabel>{item.label}</Styled.MenuActionLabel>
                </Styled.MenuLink>
            );
        }

        return (
            <Styled.MenuAction type="button" onClick={() => onItemClick(item)}>
                <Styled.MenuActionLabel>{item.label}</Styled.MenuActionLabel>
            </Styled.MenuAction>
        );
    }

    const backdrop = typeof document !== 'undefined'
        ? createPortal(
                <Styled.Backdrop
                    open={open}
                    type="button"
                    onClick={closeMenu}
                    aria-label="Zamknij menu"
                    tabIndex={open ? 0 : -1}
                />,
                document.body,
            )
        : null;

    return (
        <>
            {backdrop}
            <Styled.Container className={cx(props.className, { open })}>
                <Styled.HandleButton
                    type="button"
                    onClick={toggleMenu}
                    aria-expanded={open}
                    aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
                />
                <Styled.Menu aria-hidden={!open} aria-label="Nawigacja mobilna">
                    <Styled.MenuViewport>
                        <Styled.MenuPanels className={cx({ submenuOpen: Boolean(activeSubmenu) })}>
                            <Styled.MenuPanel>
                                <Styled.MenuList>
                                    {items.map((item, index) => (
                                        <Styled.MenuItem key={`${item.label}-${index}`}>
                                            {renderMenuEntry(item)}
                                        </Styled.MenuItem>
                                    ))}
                                </Styled.MenuList>
                                <Styled.SocialMediaBox iconSize={20} />
                            </Styled.MenuPanel>
                            <Styled.MenuPanel>
                                {activeSubmenu && (
                                    <>
                                        <Styled.SubMenuBack type="button" onClick={() => setActiveSubmenu(null)}>
                                            <Styled.Chevron aria-hidden="true" direction="left" />
                                            <Styled.MenuActionLabel>{activeSubmenu.label}</Styled.MenuActionLabel>
                                        </Styled.SubMenuBack>
                                        <Styled.MenuList>
                                            {activeSubmenu.children?.map((item, index) => (
                                                <Styled.MenuItem key={`${item.label}-${index}`}>
                                                    {renderMenuEntry(item)}
                                                </Styled.MenuItem>
                                            ))}
                                        </Styled.MenuList>
                                    </>
                                )}
                            </Styled.MenuPanel>
                        </Styled.MenuPanels>
                    </Styled.MenuViewport>
                    <Styled.BottomWave waves={1} height={16} amplitude={0.75} />
                </Styled.Menu>
            </Styled.Container>
        </>
    );
}

export default NavMenu;
