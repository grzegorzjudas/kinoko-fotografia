import { useState } from 'react';
import cx from 'classnames';

import Chevron from '../../../Chevron';
import { useMediaQuery } from '../../../../lib/css';
import type { NavMenuItem } from '../../NavMenu.types';

import type { MenuProps } from './Menu.types';
import * as Styled from './Menu.styles';

export function Menu(props: MenuProps) {
    const [activeSubmenu, setActiveSubmenu] = useState<NavMenuItem | null>(null);
    const isDesktop = useMediaQuery('screen and (min-width: 640px)');

    function onItemClick(item: NavMenuItem) {
        if (item.children?.length) {
            setActiveSubmenu(item);
            return;
        }

        props.onItemClick?.(item);
    }

    function renderMenuEntry(item: NavMenuItem) {
        if (item.children?.length) {
            return (
                <Styled.ItemButton
                    type="button"
                    onClick={() => onItemClick(item)}
                    aria-haspopup="menu"
                    aria-expanded={activeSubmenu?.label === item.label}
                >
                    <Styled.ItemLabel>{item.label}</Styled.ItemLabel>
                    <Chevron
                        aria-hidden="true"
                        expanded={activeSubmenu?.label === item.label}
                        vertical={isDesktop}
                    />
                </Styled.ItemButton>
            );
        }

        if (item.to) {
            return (
                <Styled.ItemLink to={item.to} onClick={() => onItemClick(item)}>
                    <Styled.ItemLabel>{item.label}</Styled.ItemLabel>
                </Styled.ItemLink>
            );
        }

        return (
            <Styled.ItemButton type="button" onClick={() => onItemClick(item)}>
                <Styled.ItemLabel>{item.label}</Styled.ItemLabel>
            </Styled.ItemButton>
        );
    }

    function renderItemList(items: NavMenuItem[]) {
        return (
            <Styled.List>
                {items.map((item, index) => (
                    <Styled.Item key={`${item.label}-${index}`}>
                        {renderMenuEntry(item)}
                    </Styled.Item>
                ))}
            </Styled.List>
        );
    }

    return (
        <Styled.Menu aria-hidden={!props.open}>
            <Styled.Viewport>
                <Styled.PanelGroup className={cx({ submenuOpen: Boolean(activeSubmenu) })}>
                    <Styled.Panel>
                        {props.render ? props.render(() => renderItemList(props.items), activeSubmenu) : renderItemList(props.items)}
                    </Styled.Panel>
                    <Styled.Panel>
                        {activeSubmenu && (
                            <>
                                <Styled.ParentHeader type="button" onClick={() => setActiveSubmenu(null)}>
                                    <Chevron aria-hidden="true" expanded />
                                    <Styled.ItemLabel>{activeSubmenu.label}</Styled.ItemLabel>
                                </Styled.ParentHeader>
                                {props.render ? props.render(() => renderItemList(activeSubmenu.children || []), activeSubmenu) : renderItemList(activeSubmenu.children || [])}
                            </>
                        )}
                    </Styled.Panel>
                </Styled.PanelGroup>
            </Styled.Viewport>
            <Styled.BottomWave waves={1} height={16} amplitude={0.75} />
        </Styled.Menu>
    );
}

export default Menu;
