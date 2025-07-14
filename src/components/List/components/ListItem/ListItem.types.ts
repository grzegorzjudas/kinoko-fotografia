import type { PropsWithChildren } from 'react';

export type ListItemProps = PropsWithChildren<{
    title?: string;
    order?: number;
}>;

export type ContentProps = {
    hasTitle?: boolean;
};
