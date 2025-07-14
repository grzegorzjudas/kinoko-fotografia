import React, { useMemo } from 'react';

import { ListItem, type ListItemProps } from './components/ListItem';
import type { ListProps } from './List.types';
import * as Styled from './List.styles';

export function List(props: ListProps) {
    const items = useMemo(() => {
        return React.Children
            .toArray(props.children)
            .filter((child): child is React.ReactElement<ListItemProps> => {
                return React.isValidElement(child) && child.type === ListItem;
            })
            .map((child, index) => props.numbered ? React.cloneElement(child, { order: index + 1 }) : child);
    }, [props.children]);

    return (
        <Styled.List>
            {items}
        </Styled.List>
    );
}

List.Item = ListItem;

export default List;
