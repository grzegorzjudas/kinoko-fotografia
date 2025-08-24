import styled from '@emotion/styled';

import arrowIcon from '../../assets/images/icons/arrow-right.svg';
import Link from '../Link';

export const List = styled.ul`
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
`;

export const ListItem = styled.li`
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.primary[900]};
    cursor: pointer;

    &:hover a {
        color: ${({ theme }) => theme.colors.secondary[800]};
    }

    &:active a {
        color: ${({ theme }) => theme.colors.secondary[500]};
    }

    &:after {
        content: '';
        margin: 0 ${({ theme }) => theme.spacing(1.5)}px;
        display: inline-block;
        width: 4px;
        height: 8px;
        background-image: url("${arrowIcon}");
    }

    &:last-of-type {
        a {
            color: ${({ theme }) => theme.colors.primary[700]};
            cursor: default;

            &:hover {
                color: ${({ theme }) => theme.colors.primary[700]};
            }
        }

        &:after {
            display: none;
        }
    }
`;

export const LinkItemLink = styled(Link)`
    text-decoration: none;
`;
