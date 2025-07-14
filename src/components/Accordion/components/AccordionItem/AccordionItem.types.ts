import type { PropsWithChildren } from 'react';

export type AccordionItemProps = PropsWithChildren<{
    title: string;
    defaultOpen?: boolean;
}>;

export type ContainerProps = {
    open?: boolean;
};
