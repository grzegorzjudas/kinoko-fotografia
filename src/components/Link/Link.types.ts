import type { LinkProps as ReactRouterLinkProps } from 'react-router';

export type LinkProps = ReactRouterLinkProps & {
    external?: boolean;
};
