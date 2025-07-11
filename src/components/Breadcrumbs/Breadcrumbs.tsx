import React, { useMemo } from 'react';
import { useMatches, type UIMatch } from 'react-router';

import * as Styled from './Breadcrumbs.styles';
import type { BreadcrumbHandle } from './Breadcrumbs.types';

export function Breadcrumbs() {
    const matches = useMatches();
    const items = useMemo(() => {
        return (matches as UIMatch<string, BreadcrumbHandle | undefined>[]).map(match => (
            <Styled.ListItem key={match.pathname}>{match.handle?.breadcrumb}</Styled.ListItem>
        ));
    }, [matches]);

    return (
        <Styled.List>
            {items}
        </Styled.List>
    );
}

export default Breadcrumbs;
