import styled from '@emotion/styled';

import arrowIcon from '../../assets/images/icons/arrow-right.svg';

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

    &:hover {
        color: ${({ theme }) => theme.colors.secondary[800]};
    }

    &:active {
        color: ${({ theme }) => theme.colors.secondary[500]};
    }

    &:after {
        content: "";
        margin: 0 ${({ theme }) => theme.spacing(1.5)}px;
        display: inline-block;
        width: 4px;
        height: 8px;
        background-image: url("${arrowIcon}");
    }

    &:last-of-type {
        color: ${({ theme }) => theme.colors.primary[700]};
        cursor: default;

        &:after {
            display: none;
        }

        &:hover {
            color: ${({ theme }) => theme.colors.primary[700]};
        }
    }
`;
