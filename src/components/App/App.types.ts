import type { RouteObject as ReactRouterRouteObject } from 'react-router';
import type { BreadcrumbHandle } from '../Breadcrumbs/Breadcrumbs.types';

export type RouteObject = Omit<ReactRouterRouteObject, 'handle'> & {
    handle?: BreadcrumbHandle;
};
