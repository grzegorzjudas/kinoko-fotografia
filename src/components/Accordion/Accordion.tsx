import React, { useMemo } from 'react';

import { AccordionItem, type AccordionItemProps } from './components';

import type { AccordionProps } from './Accordion.types';

export function Accordion(props: AccordionProps) {
    const items = useMemo(() => {
        return React.Children
            .toArray(props.children)
            .filter((child): child is React.ReactElement<AccordionItemProps> => {
                return React.isValidElement(child) && child.type === AccordionItem;
            });
    }, [props.children]);

    return items;
}

Accordion.Item = AccordionItem;

export default Accordion;
