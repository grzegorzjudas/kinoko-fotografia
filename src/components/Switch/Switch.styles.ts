import styled from '@emotion/styled';

import checkmark from '../../assets/images/icons/checkmark.svg?raw';
import { coloredSvg } from '../../lib/theme';

export const Label = styled.label<{ disabled?: boolean }>`
    height: 32px;
    display: inline-flex;
    align-items: center;
    padding-left: ${({ theme }) => 64 + theme.spacing(1)}px;
    position: relative;

    &:has(input:checked) .switch-slider {
        border-color: ${({ theme }) => theme.colors.secondary[500]};
        background-color: ${({ theme }) => theme.colors.secondary[500]};

        &:before, &:after {
            transform: translate(32px);
            opacity: 1;
        }

        &:before {
            background-color: ${({ theme }) => theme.colors.secondary[200]};
        }
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.primary[600]};
    }

    &:has(input:disabled) {
        opacity: 0.6;
    }

    &:has(input:disabled:not(:checked)) .switch-slider:hover {
        border: 1px solid ${({ theme }) => theme.colors.primary[600]};

        &:before {
            background-color: ${({ theme }) => theme.colors.primary[600]};}
        }
    }
`;

export const Input = styled.input`
    display: none;
`;

export const Slider = styled.span`
    width: 64px;
    height: 100%;
    position: absolute;
    left: 0;
    border-radius: 16px;
    border: 1px solid ${({ theme }) => theme.colors.primary[600]};
    transition-property: background-color, border-color;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;

    &:before, &:after {
        content: '';
        position: absolute;
        top: 50%;
        transition-property: background-color, transform, opacity;
        transition-duration: 0.3s;
        transition-timing-function: ease-in-out;
    }

    // Pill
    &:before {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        left: 4px;
        top: 3px;
        background-color: ${({ theme }) => theme.colors.primary[600]};
    }

    // Checkmark icon
    &:after {
        width: 16px;
        height: 15px;
        left: 7px;
        top: 8px;
        background-image: ${({ theme }) => `url('data:image/svg+xml;base64,${btoa(coloredSvg(checkmark, theme.colors.secondary[800]))}')`};
        background-size: 100%;
        background-repeat: no-repeat;
        opacity: 0;
    }

    &:hover {
        border-color: ${({ theme }) => theme.colors.primary[700]};

        &:before {
            background-color: ${({ theme }) => theme.colors.primary[700]};
        }
    }
`;

export const LabelText = styled.span`
`;
