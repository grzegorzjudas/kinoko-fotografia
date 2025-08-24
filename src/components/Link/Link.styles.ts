import { Link as ReactRouterLink } from 'react-router';
import styled from '@emotion/styled';

import link from '../../assets/images/icons/link.svg';

import type { LinkProps } from './Link.types';

export const Link = styled(ReactRouterLink)<LinkProps>`
    display: inline-block;
    color: ${({ theme }) => theme.colors.primary[900]};

    ${({ external, theme }) => external && `
        &:after {
            content: '';
            width: 10px;
            height: 9px;
            display: inline-block;
            margin-left: ${theme.spacing(0.5)}px;
            color: ${theme.colors.secondary[500]};
            background-image: url('${link}');
        }
    `}

    &:hover {
        color: ${({ theme }) => theme.colors.primary[800]};
    }

    &:active {
        color: ${({ theme }) => theme.colors.primary[700]};
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.primary[600]};
    }

    &:visited {
        color: ${({ theme }) => theme.colors.secondary[800]};
    }
`;
