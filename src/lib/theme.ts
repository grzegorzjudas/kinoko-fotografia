import type { Theme } from '@emotion/react';

declare module '@emotion/react' {
    export interface Theme {
        colors: {
            primary: Record<200 | 300 | 400 | 500 | 600 | 700 | 800 | 900, string>;
            secondary: Record<200 | 300 | 400 | 500 | 800 | 900, string>;
        };
        typography: {
            font: {
                old: string;
                default: string;
                heading: string;
                highlight: string;
            };
        };
        spacing: (mult: number) => number;
    }
}

function spacing(base: number) {
    return (mult: number) => base * mult;
}

export function coloredSvg(svgContent: string, color: string) {
    return svgContent.replace(/currentColor/, color);
}

export default {
    colors: {
        primary: {
            200: '#fcfbf9',
            300: '#faf6f0',
            400: '#f1ebe2',
            500: '#d3b89d',
            600: '#9a7854',
            700: '#735a3f',
            800: '#64472c',
            900: '#3e322c',
        },
        secondary: {
            200: '#dfe7e1',
            300: '#c6d4c9',
            400: '#afc4b3',
            500: '#799781',
            800: '#3c5041',
            900: '#243527',
        },
    },
    typography: {
        font: {
            old: 'Romantic',
            default: 'Lato',
            heading: 'Junicode',
            highlight: 'Licorice',
        },
    },
    spacing: spacing(8),
} satisfies Theme;
