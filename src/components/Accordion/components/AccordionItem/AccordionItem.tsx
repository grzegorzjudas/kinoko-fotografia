import { useEffect, useLayoutEffect, useRef, useState } from 'react';

import * as Styled from './AccordionItem.styles';
import type { AccordionItemProps } from './AccordionItem.types';

export function AccordionItem(props: AccordionItemProps) {
    const [open, setOpen] = useState(props.defaultOpen || false);
    const [height, setHeight] = useState(75);
    const [enableAnimation, setEnableAnimation] = useState(!props.defaultOpen);

    const ref = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (!ref.current) return;

        if (props.defaultOpen) {
            setHeight(ref.current?.scrollHeight || 75);
        } else {
            setHeight(75);
        }

        requestAnimationFrame(() => {
            setEnableAnimation(true);
        });
    }, []);

    useEffect(() => {
        if (open) {
            setHeight(ref.current?.scrollHeight || 75);
        } else {
            setHeight(75);
        }
    }, [open]);

    function toggleItem() {
        setOpen(prevOpen => !prevOpen);
    }

    return (
        <Styled.Container
            onClick={toggleItem}
            open={open}
            ref={ref}
            style={{
                maxHeight: height,
                transition: enableAnimation ? undefined : 'none',
            }}
            tabIndex={0}
        >
            <Styled.Title>{props.title}</Styled.Title>
            <Styled.Content>{props.children}</Styled.Content>
        </Styled.Container>
    );
}

export default AccordionItem;
