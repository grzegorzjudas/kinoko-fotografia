import type { LinkProps } from './Link.types';
import * as Styled from './Link.styles';
import { useMemo } from 'react';

export function Link(props: LinkProps) {
    const external = useMemo(() => {
        if (typeof props.external === 'boolean') {
            return props.external;
        }

        if (typeof props.to === 'string') {
            return props.to.startsWith('http');
        }

        return false;
    }, [props.external, props.to]);

    return <Styled.Link {...props} external={external || undefined} target={external ? '_blank' : '_self'} />;
}

export default Link;
