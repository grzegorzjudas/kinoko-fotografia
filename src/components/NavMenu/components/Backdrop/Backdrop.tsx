import { createPortal } from 'react-dom';

import type { BackdropProps } from './Backdrop.types';
import * as Styled from './Backdrop.styles';

export function Backdrop(props: BackdropProps) {
    if (typeof document === 'undefined') {
        return null;
    }

    return createPortal(
        <Styled.Backdrop
            visible={props.visible}
            type="button"
            onClick={props.onClick}
            aria-label="Zamknij menu"
            tabIndex={props.visible ? 0 : -1}
        />,
        document.body,
    );
}

export default Backdrop;
