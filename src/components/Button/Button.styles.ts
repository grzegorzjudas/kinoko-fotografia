import styled from '@emotion/styled';

import theme, { coloredSvg } from '../../lib/theme';

import type { ButtonProps } from './Button.types';
import buttonPrimaryBackground from '../../assets/images/button-primary.svg?raw';
import buttonSecondaryBackground from '../../assets/images/button-secondary.svg?raw';

export const Container = styled.button<ButtonProps>`
    height: 48px;
    padding: 10px 20px 13px;
    border: none;
    cursor: pointer;
    font-family: ${theme.typography.font.default};
    font-size: 16px;
    color: ${theme.colors.secondary[900]};
    transition: 0.5s;

    ${({ variant }: ButtonProps) => variant === 'secondary'
        ? `
        background-repeat: no-repeat;
        background-position: bottom;
        background-color: transparent;
        background-image: url('data:image/svg+xml;base64,${btoa(coloredSvg(buttonSecondaryBackground, theme.colors.secondary[400]))}');
        background-size: 100% 6px;
    `
        : `
        mask-image: url('data:image/svg+xml;base64,${btoa(buttonPrimaryBackground)}');
        background-color: ${theme.colors.secondary[400]};
        background-size: 100% 100%;
    `}

    &:hover {
        ${({ variant }: ButtonProps) => variant === 'secondary'
            ? `
            background-image: url('data:image/svg+xml;base64,${btoa(coloredSvg(buttonSecondaryBackground, theme.colors.secondary[500]))}');
        `
            : `
            background-color: ${theme.colors.secondary[300]};
        `}
    }

    &:focus {
        ${({ variant }: ButtonProps) => variant === 'secondary'
            ? `
            background-image: url('data:image/svg+xml;base64,${btoa(coloredSvg(buttonSecondaryBackground, theme.colors.secondary[800]))}');
        `
            : `
            background-color: ${theme.colors.secondary[200]};
        `}

    }
`;
