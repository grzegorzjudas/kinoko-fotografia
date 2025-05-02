import type { Theme } from '@emotion/react';

declare module '@emotion/react' {
    export interface Theme {
        colors: {
            primary: string;
        };
    }
}

export default {
    colors: {
        primary: '#98FB98',
    },
} satisfies Theme;
