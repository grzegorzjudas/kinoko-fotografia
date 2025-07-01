import styled from '@emotion/styled';

import bottomBorder from '../../assets/images/menu-border.svg';
import logo from '../../assets/images/logo.svg';
import NavMenu from '../NavMenu';

const BOTTOM_BORDER_SHIFT = 16;

export const Header = styled.header`
    width: 100%;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.primary[300]};
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding-left: ${({ theme }) => `${theme.spacing(2)}px`};

    &:after {
        display: block;
        content: "";
        width: 100%;
        height: ${BOTTOM_BORDER_SHIFT}px;
        background-image: url("${bottomBorder}");
        position: absolute;
        left: 0;
        bottom: -${BOTTOM_BORDER_SHIFT}px;
    }
`;

export const Logo = styled.button`
    top: ${({ theme }) => theme.spacing(2)}px;
    width: 64px;
    height: 64px;
    background-image: url("${logo}");
    background-position: center;
    background-size: cover;
    transform: rotate(-13.8deg);
    position: relative;
    z-index: 1;
`;

export const NavMenuHandle = styled(NavMenu)`
    padding-right: ${({ theme }) => `${theme.spacing(2)}px`};
`;
