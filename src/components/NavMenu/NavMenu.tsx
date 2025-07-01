import { useState } from 'react';
import cx from 'classnames';

import * as Styled from './NavMenu.styles';
import type { NavMenuProps } from './NavMenu.types';

export function NavMenu(props: NavMenuProps) {
    const [open, setOpen] = useState(props.defaultOpen || false);

    function toggleMenu() {
        setOpen(prevOpen => !prevOpen);
    }

    return (
        <Styled.Container className={cx(props.className, { open })}>
            <Styled.HandleButton onClick={toggleMenu} />
            <Styled.Menu>
                <Styled.MenuItem>Oferta</Styled.MenuItem>
                <Styled.MenuItem>Kontakt</Styled.MenuItem>
            </Styled.Menu>
        </Styled.Container>
    );
}

export default NavMenu;
