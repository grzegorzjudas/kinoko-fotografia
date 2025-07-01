import styled from '@emotion/styled';

import hamburgerIcon from '../../assets/images/icons/hamburger.svg';
import closeIcon from '../../assets/images/icons/close.svg';

export const Container = styled.div`
    position: relative;

    &.open > button {
        background-image: url("${closeIcon}");
    }

    &.open > ul {
        display: flex;
    }
`;

export const HandleButton = styled.button`
    width: 28px;
    height: 28px;
    background-image: url("${hamburgerIcon}");
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    top: 5px;
`;

export const Menu = styled.ul`
    width: 174px;
    position: absolute;
    display: none;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(1)}px;
    list-style: none;
    padding: ${({ theme }) => theme.spacing(2)}px;
    margin: 0;
    top: 28px;
    right: 0;
    z-index: 1;
    background-color: ${({ theme }) => theme.colors.primary[300]};
    color: ${({ theme }) => theme.colors.primary[800]};
`;

export const MenuItem = styled.li`
    padding: ${({ theme }) => `${theme.spacing(1)}px 0`};
    line-height: 22px;
    flex: 1;
`;
