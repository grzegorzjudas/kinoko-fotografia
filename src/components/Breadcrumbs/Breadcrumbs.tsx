import React, { useMemo } from 'react';
import { useMatches, type UIMatch } from 'react-router';

import * as Styled from './Breadcrumbs.styles';
import type { BreadcrumbHandle } from './Breadcrumbs.types';

export function Breadcrumbs() {
    const matches = useMatches();
    const items = useMemo(() => {
        return (matches as UIMatch<string, BreadcrumbHandle | undefined>[])
            .reduce((acc, match) => {
                if (!acc?.some(i => i.pathname === match.pathname)) {
                    acc.push(match);

                    return acc;
                }

                return acc;
            }, [] as UIMatch<string, BreadcrumbHandle | undefined>[])
            .map(match => (
                <Styled.ListItem key={match.pathname}>
                    <Styled.LinkItemLink to={match.pathname}>
                        {match.handle?.breadcrumb ?? '...'}
                    </Styled.LinkItemLink>
                </Styled.ListItem>
            ));
    }, [matches]);

    return (
        <Styled.List>
            {items}
        </Styled.List>
    );
}

export default Breadcrumbs;
