import styled from '@emotion/styled';

import theme, { coloredSvg } from '../../../../lib/theme';

import box from '../../../../assets/images/box.svg?raw';
import plusIcon from '../../../../assets/images/icons/plus.svg?raw';
import minusIcon from '../../../../assets/images/icons/minus.svg?raw';
import type { ContainerProps } from './AccordionItem.types';

export const Container = styled.section<ContainerProps>`
    background-size: cover;
    padding: ${({ theme }) => `${theme.spacing(2.5)}px`};
    position: relative;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => `${theme.spacing(2)}px`};
    color: ${({ theme, open }) => open ? theme.colors.secondary[900] : theme.colors.secondary[800]};
    transition: max-height 0.3s ease-in-out, background-image 0.3s ease-in-out;
    overflow: hidden;
    cursor: pointer;
    margin-bottom: ${({ theme }) => `${theme.spacing(1.5)}px`};

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.primary[800]};
    }

    &:last-of-type {
        margin-bottom: 0;
    }

    ${({ open }: ContainerProps) => open
        ? `
            background-image: url('data:image/svg+xml;base64,${btoa(coloredSvg(box, theme.colors.secondary[200]))}');
        `
        : `
            background-image: url('data:image/svg+xml;base64,${btoa(coloredSvg(box, theme.colors.primary[300]))}');

            &:hover {
                background-image: url('data:image/svg+xml;base64,${btoa(coloredSvg(box, theme.colors.primary[400]))}');
            }
        `}

    &:after {
        content: "\\00a0";
        display: block;
        position: absolute;
        right: ${({ theme }) => `${theme.spacing(2.5)}px`};
        top: 26px;
        width: 22px;
        height: 23px;
        background-repeat: no-repeat;
        background-position: center;

        ${({ open }: ContainerProps) => open
            ? `
                background-image: url('data:image/svg+xml;base64,${btoa(coloredSvg(minusIcon, theme.colors.secondary[500]))}');
            `
            : `
                background-image: url('data:image/svg+xml;base64,${btoa(coloredSvg(plusIcon, theme.colors.primary[600]))}');
            `}
    }
`;

export const Title = styled.h3`
    font-family: ${({ theme }) => theme.typography.font.heading};
    font-weight: 400;
    font-size: 28px;
    margin: 0;
`;

export const Content = styled.div`

`;
