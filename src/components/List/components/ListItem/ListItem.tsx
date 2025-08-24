import type { ListItemProps } from './ListItem.types';
import * as Styled from './ListItem.styles';
import { useMemo } from 'react';

export function ListItem(props: ListItemProps) {
    return (
        <Styled.ListItem {...props}>
            {props.title && (
                <Styled.Heading>
                    {props.order && <Styled.OrderMarker>{props.order}</Styled.OrderMarker>}
                    <Styled.Title>{props.title}</Styled.Title>
                </Styled.Heading>
            )}
            <Styled.Content hasTitle={!!props.title}>
                {!props.order && <Styled.Marker />}
                {props.children}
            </Styled.Content>
        </Styled.ListItem>
    );
}

export default ListItem;
